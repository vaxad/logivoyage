"use client";

import { TrendingDown } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A linear area chart";

const chartData = [
  { year: 2017, emissions: 110 },
  { year: 2018, emissions: 111 },
  { year: 2019, emissions: 105 },
  { year: 2020, emissions: 100 },
  { year: 2021, emissions: 95 },
  { year: 2022, emissions: 85 },
  { year: 2023, emissions: 80 },
  { year: 2024, emissions: 75 },
];

const chartConfig = {
  emissions: {
    label: "Emissions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function LineChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Carbon Footprint Over Time</CardTitle>
        <CardDescription>Annual emissions trend (in tons CO2e)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="emissions"
              type="linear"
              fill="var(--color-emissions)"
              fillOpacity={0.4}
              stroke="var(--color-emissions)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending down by 1.3% this year{" "}
              <TrendingDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
