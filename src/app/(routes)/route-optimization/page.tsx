import RouteOptimization from "@/components/custom/route-optimization";
import { RouteOptimizationCard, Status } from "@/lib/types/route-optimization";

const sampleData: RouteOptimizationCard[] = [
    {
        id: "1jfdjdshbfwej",
        title: "Random Shipment",
        status: Status.COMPLETED,
        price: 10000,
        journey: {
            from: "China",
            to: "Miami",
            progress: 0.9,
            route: [
                [25.7617, -80.1918],
                [30.2672, -97.7431],
                [32.7767, -96.7970],
                [29.7604, -95.3698],
                [25.7617, -80.1918]
            ]
        }
    },
    {
        id: "2jhbsdihvdau",
        title: "BKC Shipment",
        status: Status.PENDIING,
        price: 20000,
        journey: {
            from: "Texas",
            to: "Toronto",
            progress: 0.6,
            route: [
                [43.65107, -79.347015],
                [40.7128, -74.0060],
                [34.0522, -118.2437],
                [32.7157, -117.1611],
                [29.7604, -95.3698],
                [43.65107, -79.347015]
            ]
        }
    },
    {
        id: "3jfdjshfwej",
        title: "Textiles",
        status: Status.READY,
        price: 30000,
        journey: {
            from: "Malad",
            to: "Andheri",
            progress: 0.5,
            route: [
                [19.0760, 72.8777],
                [19.1197, 72.8464],
                [19.0760, 72.8777]
            ]
        }
    },
    {
        id: "4jfdjshfwej",
        title: "Random Shipment",
        status: Status.COMPLETED,
        price: 40000,
        journey: {
            from: "From",
            to: "To",
            progress: 0.2,
            route: [
                [19.0760, 72.8777],
                [19.1197, 72.8464],
                [19.0760, 72.8777]
            ]
        }
    }
]

export default function Page() {
    return (
        <RouteOptimization data={sampleData} />
    )
}
