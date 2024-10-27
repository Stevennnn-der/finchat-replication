import Image from "next/image";
import tableImg from "../../public/assets/table.png"

export default function DataComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 my-16">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            src={tableImg} 
            alt="Data Table"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute bottom-2 right-2 w-32 h-32" 
            color="#6FB872"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </div>
      </div>

      <div className="w-[100%] md:w-1/3">
        <h2 className="text-4xl font-bold mb-4">
          Better data for better decisions.
        </h2>
        <p className="text-base mb-4">
          <span className="bg-yellow-100 px-1">Institutional-quality data</span>{" "}
          that's been verified by human equity analysts. Our trusted, in-depth
          information helps you capitalize on opportunities.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-600 text-gray-100 text-sm py-1 px-3 rounded-full">
            Financials and estimates by S&P Market Intelligence
          </span>
          <span className="bg-gray-600 text-gray-100 text-sm py-1 px-3 rounded-full">
            Segments and KPIs by FinChat Verified Data
          </span>
        </div>
      </div>
    </div>
  );
}
