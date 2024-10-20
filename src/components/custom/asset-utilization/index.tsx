"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", utilization: 40, pending: 24 },
  { name: "Feb", utilization: 30, pending: 13 },
  { name: "Mar", utilization: 20, pending: 98 },
  { name: "Apr", utilization: 27, pending: 39 },
];

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
  const [selectedTab, setSelectedTab] = useState("incoming");

  const tableData = selectedTab === "incoming" ? incomingData : outgoingData;

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-2">Asset Utilization</h1>
      </div>
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="incoming">Incoming</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="col-span-1 border rounded-md h-full flex items-center justify-center">
            <span>Video Stream</span>
          </div>

          <div className="col-span-1 space-y-6 h-full">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <Card className="w-full h-full">
                <CardHeader>
                  <CardTitle>Utilization Graph</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center  h-full">
                  <BarChart width={250} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="utilization" fill="hsl(217 97% 60% / 1)" />
                    <Bar dataKey="pending" fill="hsl(211.95deg 93.9% 67.84%)" />
                  </BarChart>
                </CardContent>
              </Card>
              <Card className="w-full h-full">
                <CardHeader>
                  <CardTitle>Pending Tasks Graph</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center h-full">
                  <BarChart width={250} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pending" fill="hsl(217 97% 60% / 2)" />
                  </BarChart>
                </CardContent>
              </Card>
            </div>

            <Card className="h-2/2">
              <CardHeader>
                <CardTitle>Asset Utilization Table</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="px-4">Asset</TableCell>
                      <TableCell className="px-4">Status</TableCell>
                      <TableCell className="px-4">Usage</TableCell>
                    </TableRow>
                  </TableHead>
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
