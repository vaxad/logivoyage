"use client"
import RouteOptimizationSidebar from './sidebar'
import Map from './map'
import { RouteOptimizationCard } from '@/lib/types/route-optimization'
import { useState } from 'react'
import Info from './info'

export default function RouteOptimization({ data }: { data: RouteOptimizationCard[] }) {
    const [active, setActive] = useState(0)
    return (
        <main className="flex bg-accent h-[calc(100vh-68px)] p-2 gap-2">
            <RouteOptimizationSidebar data={data} active={active} setActive={setActive} />
            <div className='flex flex-col w-full rounded-2xl bg-background p-2 gap-2'>
                <Map data={data} active={active} />
                <Info data={data} active={active} />
            </div>
        </main>
    )
}
