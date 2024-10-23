import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/custom/chatbot"), {
  ssr: false,
});

export default function Page() {
  return <Chatbot />;
}
