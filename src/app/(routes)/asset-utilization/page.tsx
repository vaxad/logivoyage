import dynamic from "next/dynamic";

const AssetUtilization = dynamic(
  () => import("@/components/custom/asset-utilization"),
  { ssr: false },
);

export default function Page() {
  return <AssetUtilization />;
}
