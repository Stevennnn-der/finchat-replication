// src/components/TrustedSection.tsx
import Image from "next/image";
import mattOber from "../../public/assets/trsuted.png";

export default function TrustedSection() {
  return (
    <div className="flex flex-col items-center text-center w-full p-8 my-16">
      {/* Header */}
      <h2 className="text-3xl md:text-6xl font-bold mb-8 w-4/5">
        Trusted by 150,000+ investors & organizations.
      </h2>

      {/* Testimonials Section */}

      <div className="flex items-center">
        <Image src={mattOber} alt="Matt Ober" width={1500} height={1500} />
      </div>
    </div>
  );
}
