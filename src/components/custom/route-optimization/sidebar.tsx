"use client"

import { RouteOptimizationSidebarProps } from "@/lib/types/route-optimization";
import SidebarCard from "./sidebar-card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RouteOptimizationSidebar({ data, setActive, active }: RouteOptimizationSidebarProps) {
    return (
        <aside className="h-screen flex flex-col flex-grow w-[500px]">
            <ScrollArea className="h-full">
                <section className="flex-grow flex flex-col gap-4 p-4">
                    {data.map((card, index) => (<SidebarCard key={index} handleClick={() => setActive(index)} isActive={active === index} {...card} />))}
                </section>
            </ScrollArea>
        </aside>
    )
}
