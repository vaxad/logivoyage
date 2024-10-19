import { ReactNode } from "react"
import { Status } from "./route-optimization"
import { HomeIcon, Receipt, Truck } from "lucide-react"

export const statusToMessage: Record<Status, string> = {
    "completed": "Order Delivered",
    "pending": "Order Pending",
    "ready": "Ready to be shipped"
}
export const statusToColor: Record<Status, string> = {
    "completed": "#60a5fa",
    "pending": "#facc15",
    "ready": "#4ade80"
}
export const statusToIcon: Record<Status, ReactNode> = {
    "completed": <div className=" p-2 rounded-lg bg-blue-400/40 w-fit h-fit"><Receipt style={{ color: statusToColor["completed"] }} size={24} /></div>,
    "pending": <div className=" p-2 rounded-lg bg-yellow-400/40 w-fit h-fit"><Truck style={{ color: statusToColor["pending"] }} size={24} /></div>,
    "ready": <div className=" p-2 rounded-lg bg-green-400/40 w-fit h-fit"><HomeIcon style={{ color: statusToColor["ready"] }} size={24} /></div>
}

export const mapDefaults = {
    zoom: 10,
}
