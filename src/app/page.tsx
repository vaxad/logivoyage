import Lenis from "@/components/wrappers/lenis";
import Hero from "@/components/custom/home/hero";
import dynamic from "next/dynamic";
import Imagine from "@/components/custom/home/imagine";
import People from "@/components/custom/home/people";
import Diversity from "@/components/custom/home/diversity";
import Expanding from "@/components/custom/home/expanding";
import Learn from "@/components/custom/home/learn";
import Navbar from "@/components/custom/navbar";
const Bars = dynamic(() => import("@/components/custom/home/bars"), {
  ssr: false,
});

export default function Home() {
  return (
    <Lenis>
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <Bars />
        <Imagine />
        <People />
        <Diversity />
        <Expanding />
        <Learn />
      </main>
    </Lenis>
  );
}
