import Image from "next/image";
import AnimatedChat from "./AnimatedChat";
import MembershipGrowth from "./MembershipHost";

export default function FundamentalResearchComponent() {
  return (
    <div className="flex flex-col items-center justify-center relative my-32 mt-80 w-full">
      {/* Main Heading */}
      <AnimatedChat />
    
      
      <h2 className="text-6xl font-bold text-center leading-tight  mt-1 mx-4 w-[60%]">
        The new standard for fundamental research.
      </h2>

      <div className="flex w-full ">
        <div className="rounded-lg  text-white abosulte left-0 -top-64 ">
          <Image
            src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdark-mockups%2Flvmh-chart.png&w=3840&q=75"
            alt="Data Table"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        <div className=" rounded-lg text-white ">
          <div className="rounded-lg text-white absolute right-12 -top-56">
            <Image
              src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdark-mockups%2Fnotifications.png&w=3840&q=75"
              alt="Data Table"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg absolute -right-0 -top-10">
            <Image
              src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdark-mockups%2Ftable.png&w=3840&q=75"
              alt="Data Table"
              width={350}
              height={700}
              className="rounded-lg"
            />
          </div>
        </div>
        <MembershipGrowth />
      </div>
    </div>
  );
}
