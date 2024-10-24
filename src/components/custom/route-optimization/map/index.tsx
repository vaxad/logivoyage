import { RouteOptimizationMapProps } from "@/lib/types/route-optimization";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Map({ data, active }: RouteOptimizationMapProps) {
  const MapComponent = useMemo(
    () => dynamic(() => import("./client"), { ssr: false }),
    [],
  );

  const activeCard = data[active];

  return (
    <section className="h-full w-full rounded-xl overflow-clip">
      <MapComponent card={activeCard} />
    </section>
  );
}
