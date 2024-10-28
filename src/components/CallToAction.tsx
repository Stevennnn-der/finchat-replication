// src/components/CallToAction.tsx
export default function CallToAction() {
    return (
      <div className="flex flex-col items-center justify-center text-center bg-white shadow-md rounded-3xl p-16 my-16 max-w-7xl h-32rem mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 w-3/4 my-4">
          Discover how FinChat can supercharge your research.
        </h2>
  
        {/* Button */}
        <button className="bg-black text-white text-lg font-semibold py-3 px-6 rounded-full mt-4">
          Get Started For Free
        </button>
  
        {/* Subtext */}
        <p className="text-gray-500 mt-4">(No credit card required)</p>
      </div>
    );
  }
  