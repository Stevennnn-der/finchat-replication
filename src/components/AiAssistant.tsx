// src/components/AIComponent.tsx
export default function AIComponent() {
    return (
      <div className="flex flex-col md:flex-row items-center gap-12 p-8 justify-center my-32">
        <div className="w-full md:w-[28%] text-center md:text-left">
          <h2 className="text-6xl font-bold mb-4">Your own AI assistant.</h2>
          <p className="text-lg mb-6">
            <span className="bg-yellow-100 px-1">Turn data into a discussion</span> with the power of AI. Investigate
            companies in depth with consistently rigorous, detailed data. Verified for accuracy.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-200">
            Start Chatting Now
          </button>
        </div>
  
        <div className="w-full md:w-1/2 flex justify-center ">
          <div className="relative">
            <div
              className="w-64 h-64 rounded-full bg-white shadow-lg"
              style={{
                boxShadow: '0 0 60px 20px rgba(255, 204, 128, 0.3), 0 0 100px 60px rgba(255, 204, 128, 0.1)',
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
  