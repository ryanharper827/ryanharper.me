import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "cn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen bg-[#120f0e] text-[#f5f1ed]">
      <DotPattern 
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "fill-[#2c221e]/40 opacity-60"
        )}
      />
    </main>
  );
}
