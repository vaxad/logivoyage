import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf, Lightbulb, Recycle, Building2 } from "lucide-react";

export default function SustainabilityRecommendations() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Recommendations to Reduce Carbon Footprint</CardTitle>
        <CardDescription>Actionable steps for sustainability</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Leaf className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold">Transition to Renewable Energy</h3>
              <p className="text-sm text-muted-foreground">
                Implement solar panels or purchase renewable energy credits to
                offset electricity usage.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <h3 className="font-semibold">Optimize Transportation</h3>
              <p className="text-sm text-muted-foreground">
                Encourage remote work, use electric vehicles for company
                transport, and optimize logistics routes.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Recycle className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold">
                Implement Circular Economy Practices
              </h3>
              <p className="text-sm text-muted-foreground">
                Reduce waste by recycling, upcycling, and adopting closed-loop
                production processes.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Building2 className="w-6 h-6 text-purple-500 mt-1" />
            <div>
              <h3 className="font-semibold">Improve Building Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Upgrade to energy-efficient lighting, HVAC systems, and
                implement smart building technologies.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
