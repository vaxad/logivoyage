import { LatLngTuple } from "leaflet"
import { Dispatch, SetStateAction } from "react"

export enum Status {
    READY = "ready",
    PENDIING = "pending",
    COMPLETED = "completed",
}
export interface RouteOptimizationCard {
    title: string,
    id: string,
    status: Status,
    journey: {
        from: string,
        to: string,
        progress: number,
        route: LatLngTuple[]
    },
    price: number,
}

export interface RouteOptimizationSidebarProps {
    data: RouteOptimizationCard[]
    active: number
    setActive: Dispatch<SetStateAction<number>>
}

export interface RouteOptimizationMapProps {
    data: RouteOptimizationCard[],
    active: number
}

export interface RouteOptimizationCardProps extends RouteOptimizationCard {
    handleClick: () => void
    isActive: boolean
}

export interface MapProps {
    card: RouteOptimizationCard
}