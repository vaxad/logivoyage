import dynamic from "next/dynamic"
import { useMemo } from "react"

export default function Map() {
    const MapComponent = useMemo(() => dynamic(() => import("./client"), { ssr: false }), [])
    return (
        <section className="h-screen w-full">
            <MapComponent posix={[4.79029, -75.69003]} />
        </section>
    )
}
