import { Status } from "./route-optimization"

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

export const mapDefaults = {
    zoom: 10,
}
