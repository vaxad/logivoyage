import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RouteOptimizationCard } from "@/lib/types/route-optimization";
import { cn, getDate } from "@/lib/utils";
import React from "react";

export default function DeliveryStatusCard({
  card,
}: {
  card: RouteOptimizationCard;
}) {
  return (
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
                    index === 0 || card.checkpoints[index - 1].progress === 100
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
  );
}
