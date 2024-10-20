<<<<<<< HEAD
import { AreaChartComponent} from "@/components/custom/charts/area-chart";
import { BarChartComponent } from "@/components/custom/charts/bar-chart";
import { BarChartComponent2 } from "@/components/custom/charts/bar-chart-2";
import { PieChartComponent } from "@/components/custom/charts/pie-chart";
import { RadarChartComponent } from "@/components/custom/charts/radar-chart";


export default function Home() {
    return (
        <div className="flex flex-col">
        <div className="flex flex-row w-full h-auto space-x-6">
          <div className="w-1/3 ">
            <BarChartComponent />
          </div>
          <div className="w-1/3">
            <AreaChartComponent />
          </div>
          <div className="w-1/3">
            <PieChartComponent />
          </div>
        </div>
        <div className="flex space-x-6">
        <div className="w-1/2 mt-3 space-x-6">
          <BarChartComponent2 />
        </div>
        <div className="w-1/2 mt-3">
          <RadarChartComponent />
        </div>
      </div>      
      </div>
          );
        }
=======
import Dashboard from "@/components/custom/dashboard";
import React from "react";

export default function dashboardPage() {
  return <Dashboard />;
}
>>>>>>> ce6664ce4ecb37b419879240cf0e7800c2501f03
