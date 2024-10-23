import dynamic from "next/dynamic";

const CreateRouteForm = dynamic(
  () => import("@/components/custom/route-optimization/create"),
  { ssr: false },
);

export default function Page() {
  return <CreateRouteForm />;
}
