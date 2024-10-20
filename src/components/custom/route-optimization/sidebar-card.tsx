import { statusToColor, statusToMessage } from "@/lib/types/constants";
import {
  RouteOptimizationCardProps,
  Status,
} from "@/lib/types/route-optimization";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { HomeIcon, Receipt, Truck } from "lucide-react";

export const statusToIcon: Record<Status, ReactNode> = {
  completed: (
    <div className=" p-2 rounded-lg bg-blue-400/40 w-fit h-fit border border-background">
      <Receipt style={{ color: statusToColor["completed"] }} size={24} />
    </div>
  ),
  pending: (
    <div className=" p-2 rounded-lg bg-yellow-400/40 w-fit h-fit border border-background">
      <Truck style={{ color: statusToColor["pending"] }} size={24} />
    </div>
  ),
  ready: (
    <div className=" p-2 rounded-lg bg-green-400/40 w-fit h-fit border border-background">
      <HomeIcon style={{ color: statusToColor["ready"] }} size={24} />
    </div>
  ),
};
export default function SidebarCard({
  status,
  id,
  journey,
  price,
  title,
  handleClick,
  isActive,
}: RouteOptimizationCardProps) {
  return (
    <div
      onClick={handleClick}
      className={cn(
        `bg-background p-4 rounded-lg flex gap-4 shadow-lg hover:scale-[1.01] transition-all hover:cursor-pointer`,
        isActive
          ? "bg-primary/80 text-background"
          : " bg-slate-200/70 dark:bg-slate-800/70 text-foreground",
      )}
    >
      {statusToIcon[status]}
      <div className="grid grid-cols-[1fr_5fr_5fr] gap-2">
        <div className="col-span-3 flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-foreground/60 font-medium">{id.toUpperCase()}</p>
        </div>
        <div className="row-span-2 flex flex-col justify-between items-center relative">
          <circle
            className={"size-2 rounded-full"}
            style={{ backgroundColor: statusToColor[status] }}
          />
          <div
            className="w-1 h-full top-0 mx-auto bg-foreground"
            style={{
              backgroundImage: `linear-gradient(180deg, ${statusToColor[status]} ${journey.progress * 100}%, transparent ${journey.progress * 100}%)`,
            }}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-bold opacity-75">From</p>
          <h1 className="text-sm font-semibold">{journey.from}</h1>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-bold opacity-75">Status:</p>
          <h1 className="text-sm font-semibold">{statusToMessage[status]}</h1>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-bold opacity-75">To:</p>
          <h1 className="text-sm font-semibold">{journey.to}</h1>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-bold opacity-75">Price:</p>
          <h1 className="text-sm font-semibold">{price}</h1>
        </div>
      </div>
    </div>
  );
}
