import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 self-center flex flex-col items-center">
      <div className="-z-10">
        <Image
          src="/background.jpg"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="absolute inset-x-0 top-[40%] md:top-[38%] lg:top-[38%] text-center space-y-2">
        <h1 className="text-2xl text-slate-50">James D. Chase II</h1>
        <h2 className="text-sm text-slate-50">
          Developer Portfolio / Personal Site
        </h2>
      </div>
    </div>
  );
}
