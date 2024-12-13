import { About } from "@/components/about";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="relative text-center space-y-2 text-white -top-[5%] lg:-top-[10%]">
          <h1 className="text-lg font-bold">James D. Chase II</h1>
          <p className="text-sm">Developer Portfolio / Personal Site</p>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <About />
      </section>
    </div>
  );
}
