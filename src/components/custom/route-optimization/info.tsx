import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, getDate } from "@/lib/utils";
import { Car, List, TruckIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RouteOptimizationMapProps } from "@/lib/types/route-optimization";

export default function Info({ active, data }: RouteOptimizationMapProps) {
  const card = data[active];

  if (!card) return <></>;
  return (
    <div className="flex w-full gap-2 h-[30vh]">
      <Tabs defaultValue="vehicle" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="vehicle">
            Vehicle Details
          </TabsTrigger>
          <TabsTrigger className="w-full" value="order">
            Order Details
          </TabsTrigger>
          <TabsTrigger className="w-full" value="history">
            Order History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="vehicle">
          <div className="flex items-center justify-around h-[25vh] px-6 gap-6">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-xl font-bold text-primary">
                {card.vehicle.space}%
              </h1>
              <div
                className="text-background bg-primary/40 p-4 rounded-lg"
                style={{
                  backgroundImage: `linear-gradient(90deg, hsl(var(--primary)) ${card.vehicle.space}%, transparent ${card.vehicle.space}%)`,
                }}
              >
                <TruckIcon size={64} />
              </div>
            </div>
            <div className="bg-slate-200/70 dark:bg-slate-800/70 p-4 rounded-2xl grid grid-cols-2 gap-4 w-full">
              <div className="col-span-2 flex gap-4 items-center">
                <div className="bg-background/70 text-foreground rounded-full p-2">
                  <Car size={24} />
                </div>
                <h1 className="font-bold text-xl">{card.vehicle.company}</h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" opacity-65 text-xs font-semibold">MODEL</h2>
                <h1 className=" text-sm font-bold">{card.vehicle.model}</h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" opacity-65 text-xs font-semibold">SPACE</h2>
                <h1 className=" text-sm font-bold">
                  {card.vehicle.space}/100%
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" opacity-65 text-xs font-semibold">WEIGHT</h2>
                <h1 className=" text-sm font-bold">{card.vehicle.weight}KG</h1>
              </div>
              <div className="flex flex-col">
                <h2 className=" opacity-65 text-xs font-semibold">
                  LOAD VOLUME
                </h2>
                <h1 className=" text-sm font-bold">
                  {card.vehicle.volume} in*
                </h1>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="order">
          <div className="bg-slate-200/70 dark:bg-slate-800/70 p-4 rounded-2xl grid grid-cols-2 gap-4 w-full h-[24vh]">
            <div className="col-span-2 flex gap-4 items-center">
              <div className="bg-background/70 text-foreground rounded-full p-2">
                <List size={24} />
              </div>
              <h1 className="font-bold text-xl">{card.order.title}</h1>
            </div>
            <div className="flex flex-col">
              <h2 className=" opacity-65 text-xs font-semibold">Quantity</h2>
              <h1 className=" text-sm font-bold">
                {card.order.quantity} Units
              </h1>
            </div>
            <div className="flex flex-col">
              <h2 className=" opacity-65 text-xs font-semibold">Payment</h2>
              <h1 className=" text-sm font-bold">{card.order.payment}</h1>
            </div>
            <div className="flex flex-col">
              <h2 className=" opacity-65 text-xs font-semibold">WEIGHT</h2>
              <h1 className=" text-sm font-bold">{card.order.weight} KG</h1>
            </div>
            <div className="flex flex-col">
              <h2 className=" opacity-65 text-xs font-semibold">LOAD VOLUME</h2>
              <h1 className=" text-sm font-bold">{card.order.volume} in*</h1>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <ScrollArea className="h-[25vh] pr-3">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {card.history.map((item, idx) => (
                  <TableRow key={`order-history-${idx}`}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.method}</TableCell>
                    <TableCell className="text-right">{item.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </TabsContent>
      </Tabs>
      <div className="rounded-lg border flex flex-col ">
        <div className=" p-2">
          <h1 className="font-bold">Delivery Status</h1>
          <Progress value={60} className="h-1" />
        </div>
        <ScrollArea>
          <div className="grid grid-cols-[1fr_5fr_2.5fr] px-2">
            {card.checkpoints.map((item, index) => (
              <>
                <div className="flex flex-col justify-center items-center">
                  <circle
                    className={cn(
                      "size-2 rounded-full",
                      index === 0 ||
                        card.checkpoints[index - 1].progress === 100
                        ? "bg-primary"
                        : "bg-accent-foreground",
                    )}
                  />
                  <div
                    className="w-0.5 min-h-[70px] h-full flex bg-accent-foreground"
                    style={{
                      backgroundImage: `linear-gradient(180deg, hsl(var(--primary)) ${item.progress}%, transparent ${item.progress}%)`,
                    }}
                  />
                  {index === card.checkpoints.length - 1 && (
                    <circle
                      className={cn(
                        "size-2 rounded-full",
                        card.checkpoints[index].progress === 100
                          ? "bg-primary"
                          : "bg-accent-foreground",
                      )}
                    />
                  )}
                </div>
                <div className="flex flex-col px-2">
                  <h1 className="text-sm font-bold">{item.title}</h1>
                  <p className="font-medium opacity-60 text-xs">
                    {getDate(item.date)}
                  </p>
                </div>
                <p className="font-medium opacity-60 text-[10px] py-2 pr-2 pl-5">
                  11:28
                </p>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
