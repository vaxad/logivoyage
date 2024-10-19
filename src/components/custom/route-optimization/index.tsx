"use client"
import RouteOptimizationSidebar from './sidebar'
import Map from '../map'
import { RouteOptimizationCard } from '@/lib/types/route-optimization'
import { useState } from 'react'

export default function RouteOptimization({ data }: { data: RouteOptimizationCard[] }) {
    const [active, setActive] = useState(0)
    return (
        <main className="flex bg-gradient-to-bl from-secondary/90 to-secondary/60">
            <RouteOptimizationSidebar data={data} active={active} setActive={setActive} />
            <Map data={data} active={active} />
        </main>
    )
}
