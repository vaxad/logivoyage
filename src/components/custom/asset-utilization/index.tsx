"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TwinBarChartComponent } from "./twin-bar-chart";
import { BarChartComponent } from "./bar-chart";

const incomingData = [
  { asset: "Incoming Asset 1", status: "In Use", usage: "85%" },
  { asset: "Incoming Asset 2", status: "Available", usage: "40%" },
  { asset: "Incoming Asset 3", status: "In Use", usage: "70%" },
];

const outgoingData = [
  { asset: "Outgoing Asset 1", status: "In Use", usage: "75%" },
  { asset: "Outgoing Asset 2", status: "Available", usage: "50%" },
  { asset: "Outgoing Asset 3", status: "In Use", usage: "65%" },
];

export default function AssetUtilization() {
  const [selectedTab, setSelectedTab] = useState<"incoming" | "outgoing">(
    "incoming",
  );

  const tableData = selectedTab === "incoming" ? incomingData : outgoingData;

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-2">Asset Utilization</h1>
      </div>
      <Tabs
        value={selectedTab}
        onValueChange={(value) =>
          (value === "incoming" || value === "outgoing") &&
          setSelectedTab(value)
        }
      >
        <TabsList>
          <TabsTrigger value="incoming">Incoming</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="col-span-1 border rounded-md h-full flex items-center justify-center">
            <span>
              {selectedTab[0].toUpperCase() + selectedTab.slice(1)} Video Stream
            </span>
          </div>

          <div className="col-span-1 space-y-6 h-full">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <TwinBarChartComponent />
              <BarChartComponent />
            </div>

            <Card className="h-2/2">
              <CardHeader>
                <CardTitle>Asset Utilization Table</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-4">Asset</TableHead>
                      <TableHead className="px-4">Status</TableHead>
                      <TableHead className="px-4">Usage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="px-4">{item.asset}</TableCell>
                        <TableCell className="px-4">{item.status}</TableCell>
                        <TableCell className="px-4">{item.usage}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
