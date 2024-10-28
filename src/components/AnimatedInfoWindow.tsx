"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearInterval(interval); // Clean up the interval on component unmount
    } else if (onComplete) {
      onComplete(); // Call the onComplete function when the animation finishes
    }
  }, [index, text, speed, onComplete]);

  return <p>{displayedText}</p>;
};

const BarGraph: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visibleBars, setVisibleBars] = useState<number>(0);

  // Define the heights for the bars in an ascending order
  const barHeights = [80, 100, 130, 170, 220]; // Heights for the bars (in pixels)

  useEffect(() => {
    let barIndex = 0;
    const barTimer = setInterval(() => {
      barIndex++;
      setVisibleBars(barIndex);
      if (barIndex >= barHeights.length) {
        clearInterval(barTimer);
        setTimeout(onComplete, 800); // Trigger the onComplete callback after all bars are shown, adding a slight delay
      }
    }, 200); // Delay for each bar
    return () => clearInterval(barTimer);
  }, [onComplete]);

  return (
    <div className="flex space-x-2 mt-4 items-end">
      {barHeights.map((height, index) => (
        <div
          key={index}
          className={`bg-blue-500 w-20 transition-all duration-500 ease-out ${
            index < visibleBars ? "opacity-100" : "opacity-0"
          }`}
          style={{
            height: index < visibleBars ? `${height}px` : "0px", // Animate from 0 to target height
          }}
        />
      ))}
    </div>
  );
};

const AnimatedInfoWindow: React.FC = () => {
  const [showSecondText, setShowSecondText] = useState<boolean>(false);
  const [showBarGraph, setShowBarGraph] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const firstText = "Summarize Microsoft's last quarter...";
  const secondText =
    "...the company also experienced growth in various segments, including a 22% increase in Cloud revenue...";

  useEffect(() => {
    if (fadeOut) {
      // Start a 2-second timer during which nothing is displayed
      const resetTimer = setTimeout(() => {
        // Reset the state to restart the animation sequence
        setShowSecondText(false);
        setShowBarGraph(false);
        setFadeOut(false);
        setIsWaiting(false);
      }, 2000); // Wait for 2 seconds before restarting
      return () => clearTimeout(resetTimer);
    }
  }, [fadeOut]);

  useEffect(() => {
    if (showBarGraph && !fadeOut) {
      // Trigger the fade-out effect after all bars are displayed and wait 2 seconds
      const fadeOutTimer = setTimeout(() => {
        setFadeOut(true); // Start the fade-out process
        setIsWaiting(true); // Indicate that we're in the waiting period
      }, 2000); // Delay before fading out to let the last bar be visible for a moment
      return () => clearTimeout(fadeOutTimer);
    }
  }, [showBarGraph, fadeOut]);

  const handleBarGraphComplete = () => {
    // Called when all bars in the bar graph have been displayed
    setShowBarGraph(true); // Indicate that the bar graph animation is complete
  };

  return (
    <div className="bg-gray-900 flex justify-center w-2/3 h-40rem relative my-32 rounded-xl p-8">
      <div
        className={`absolute transition-opacity ease-custom-ease w-full ${
          fadeOut || isWaiting ? "opacity-0" : "opacity-100"
        }`}
      >
        {!isWaiting && (
          <>
            <div className="absolute top-0 right-20 p-4 bg-gray-800 text-white rounded-md w-80">
              <Typewriter
                text={firstText}
                speed={50}
                onComplete={() => setShowSecondText(true)} // Trigger showing the second text when the first finishes
              />
              <div className="absolute -right-11 top-2 ml-4 w-9 h-9 bg-gray-800 rounded-full"></div>
            </div>

            {showSecondText && (
              <div className="absolute top-16 left-20 p-4 bg-gray-800 text-white rounded-md w-96">
                <div className="absolute -left-16 top-2 ml-4 w-9 h-9 bg-gray-800 rounded-full"></div>
                <Typewriter
                  text={secondText}
                  speed={50}
                  onComplete={() => setShowBarGraph(true)} // Trigger showing the bar graph when the second text finishes
                />
                {showBarGraph && (
                  <img
                    src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcompany-logos%2Fmsft.svg&w=64&q=75"
                    alt="Microsoft Logo"
                    className={`mt-4 w-8 h-8 transition-opacity duration-1000 ${
                      fadeOut ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
                {showBarGraph && (
                  <BarGraph onComplete={handleBarGraphComplete} />
                )}{" "}
              </div>
            )}
          </>
        )}
        
      </div>
      <div className="absolute bottom-8 w-[90%]">
          <div className="flex items-center bg-gray-700 rounded-full p-4 w-full">
            <input
              type="text"
              placeholder="Ask your next question..."
              className="bg-gray-700 text-white placeholder-gray-400 flex-grow focus:outline-none"
            />
            <button className="bg-gray-600 rounded-full p-2 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7M12 3v18"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>
  );
};

export default AnimatedInfoWindow;
