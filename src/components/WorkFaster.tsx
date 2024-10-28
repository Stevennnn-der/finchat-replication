// src/components/WorkFasterSection.tsx

import Image from 'next/image';

export default function WorkFasterSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 p-8 my-24 w-[75%]">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work faster than ever.</h2>
        <p className="text-lg mb-6">
          <span className="bg-yellow-100 px-1">Save time researching</span> your next great investment idea with
          the comprehensive investment research platform for global equities. This is where institutional-level
          data meets the speed of AI.
        </p>
      </div>

      {/* Right Image Grid */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {/* Left-top Corner Image */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Image
            src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdoughnut.png&w=3840&q=75"
            alt="Doughnut Chart"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Right Image (spanning two rows) */}
        <div className="bg-white rounded-lg shadow-lg p-4 row-span-2">
          <Image
            src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fabstract-bar-chart-table.png&w=3840&q=75"
            alt="Bar Chart"
            width={200}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Left-bottom Corner Image */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Image
            src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fabstract-charts.png&w=3840&q=75"
            alt="Abstract Chart"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
