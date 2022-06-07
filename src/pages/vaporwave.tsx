import dynamic from "next/dynamic";

const Vaporwave = dynamic(import("worlds/Vaporwave"), { ssr: false });

export default function VaporwavePage() {
  return <Vaporwave />;
};
