"use client";

import { BarChartComponent } from "./bar-chart";
import { LineChartComponent } from "./line-chart";
import { PieChartComponent } from "./pie-chart";
import SustainabilityRecommendations from "./recommendation";

export default function SustainabilityPage() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        Sustainability Dashboard: Carbon Footprint Analysis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BarChartComponent />
        <SustainabilityRecommendations />
        <LineChartComponent />
        <PieChartComponent />
      </div>
    </div>
  );
}
