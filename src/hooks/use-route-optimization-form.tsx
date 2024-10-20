import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "@/lib/types/form-schema";
import { z } from "zod";
import { Optimization, Status } from "@/lib/types/route-optimization";

type FormValues = z.infer<typeof formSchema>;

export default function useRouteOptimizationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Default Shipment",
      id: "default_id_001",
      optimization: Optimization.FASTEST,
      status: Status.PENDING,
      journey: {
        from: "New York",
        to: "Los Angeles",
        progress: 0.0,
        route: [[40.7128, -74.006]],
      },
      vehicle: {
        company: "Default Co.",
        model: "Model X",
        space: 100,
        volume: 200,
        weight: 5000,
      },
      order: {
        title: "Default Order",
        quantity: 1,
        weight: 100,
        volume: 50,
        payment: "Credit Card",
      },
      history: [
        {
          id: "history_001",
          status: "Pending",
          method: "Credit Card",
          amount: 500,
        },
      ],
      checkpoints: [
        {
          title: "Shipment Created",
          progress: 0,
          date: "2023-01-01",
        },
      ],
      price: 1000,
    },
  });

  return form;
}
