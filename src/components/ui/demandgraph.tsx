import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Demand',
      data: [100, 200, 150, 300, 250],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Supply',
      data: [150, 250, 200, 350, 300],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
  ],
};


const RecommendationCard = () => (
  <Card className="p-4 w-full bg-white shadow-lg">
    <CardHeader>
      <CardTitle>Recommendation</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc ml-4">
        <li>Increase supply in March due to expected demand surge.</li>
        <li>Focus on cost management for high-demand months.</li>
        <li>Monitor bottlenecks in April and May for optimized delivery.</li>
      </ul>
    </CardContent>
  </Card>
);

const DemandSupplyAnalyticsCard = () => (
  <Card className="p-4 w-full bg-white shadow-lg">
    <CardHeader>
      <CardTitle>Demand-Supply Analytics</CardTitle>
    </CardHeader>
    <CardContent>
      <Bar data={chartData} />
    </CardContent>
  </Card>
);

const AnalyticsDashboard = () => (
  <div className="flex flex-wrap gap-4">
      <RecommendationCard />
      <DemandSupplyAnalyticsCard />
    </div>
);

export default AnalyticsDashboard;
