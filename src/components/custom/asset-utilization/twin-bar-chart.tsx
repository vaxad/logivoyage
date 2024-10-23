"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "Jan", utilization: 40, pending: 24 },
  { month: "Feb", utilization: 30, pending: 13 },
  { month: "Mar", utilization: 20, pending: 98 },
  { month: "Apr", utilization: 27, pending: 39 },
];

const chartConfig = {
  utilization: {
    label: "Utilization",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TwinBarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Utilization Graph</CardTitle>
        <CardDescription>A breif about utilization of assets.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="utilization"
              fill="var(--color-utilization)"
              radius={4}
            />
            <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 text-xs font-medium leading-none">
          Trending up by 2.7% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
