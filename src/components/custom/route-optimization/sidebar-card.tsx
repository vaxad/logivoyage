import { statusToColor, statusToIcon, statusToMessage } from "@/lib/types/constants"
import { RouteOptimizationCardProps } from "@/lib/types/route-optimization"
import { cn } from "@/lib/utils"

export default function SidebarCard({ status, id, journey, price, title, handleClick, isActive }: RouteOptimizationCardProps) {
    return (
        <div onClick={handleClick} className={cn(`bg-background p-6 rounded-lg flex gap-4 shadow-lg hover:scale-[1.01] transition-all`, isActive && "border-2 border-foreground")}>
            {statusToIcon[status]}
            <div className="grid grid-cols-[1fr_5fr_5fr] gap-2">
                <div className="col-span-3 flex flex-col">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="text-foreground/60 font-medium">{id.toUpperCase()}</p>
                </div>
                <div className="row-span-2 flex flex-col justify-between items-center relative">
                    <circle className={"size-2 rounded-full"} style={{ backgroundColor: statusToColor[status] }} />
                    <div className="w-1 h-full top-0 mx-auto from-blue-400 bg-black" style={{ backgroundImage: `linear-gradient(180deg, ${statusToColor[status]} ${journey.progress * 100}%, black ${journey.progress * 100}%)` }} />
                </div>
                <div className="flex flex-col">
                    <p className="text-black/80">From</p>
                    <h1 className="text-sm font-semibold">{journey.from}</h1>
                </div>

                <div className="flex flex-col">
                    <p className="text-black/80">Status:</p>
                    <h1 className="text-sm font-semibold">{statusToMessage[status]}</h1>
                </div>

                <div className="flex flex-col">
                    <p className="text-black/80">To:</p>
                    <h1 className="text-sm font-semibold">{journey.to}</h1>
                </div>

                <div className="flex flex-col">
                    <p className="text-black/80">Price:</p>
                    <h1 className="text-sm font-semibold">{price}</h1>
                </div>
            </div>
        </div>
    )
}