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
  const barHeights = [40, 60, 80, 100]; // Heights for the bars (in pixels)

  useEffect(() => {
    let barIndex = 0;
    const barTimer = setInterval(() => {
      barIndex++;
      setVisibleBars(barIndex);
      if (barIndex >= barHeights.length) {
        clearInterval(barTimer);
        setTimeout(onComplete, 500); // Trigger the onComplete callback after all bars are shown, adding a slight delay
      }
    }, 300); // Delay for each bar
    return () => clearInterval(barTimer);
  }, [onComplete]);

  return (
    <div className="flex space-x-2 mt-4 items-end">
      {barHeights.map((height, index) => (
        <div
          key={index}
          className={`bg-red-500 w-24 transition-all duration-500 ease-out ${
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

const MembershipComponent: React.FC = () => {
  const [showSecondText, setShowSecondText] = useState<boolean>(false);
  const [showBarGraph, setShowBarGraph] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const firstText = "...see the progress from our membership growth in Q2...";
  const secondText = "Membership Count";

  useEffect(() => {
    if (fadeOut) {
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
    setShowBarGraph(true); // Indicate that the bar graph animation is complete
  };

  return (
    <div
      className={`absolute right-[40%] top-36 transition-opacity duration-1000 ${
        fadeOut || isWaiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {!isWaiting && (
        <>
          <div className="absolute top-0 left-0 p-4 bg-gray-800 text-white rounded-md w-96">
            <Typewriter
              text={firstText}
              speed={50}
              onComplete={() => setShowSecondText(true)} // Trigger showing the second text when the first finishes
            />
          </div>

          {showSecondText && (
            <div className="absolute top-16 left-0 p-4 bg-gray-800 text-white rounded-md w-96 mt-8">
              <div className="flex gap-4 items-center">
                <img
                  src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcompany-logos%2Fnflx.png&w=64&q=75"
                  alt="Netflix Logo"
                  className="w-8 h-8 mb-2"
                />
                <Typewriter
                  text={secondText}
                  speed={50}
                  onComplete={() => setShowBarGraph(true)} // Trigger showing the bar graph when the second text finishes
                />
              </div>
              {showBarGraph && <BarGraph onComplete={handleBarGraphComplete} />}{" "}
              {/* Show bar graph below the second text */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MembershipComponent;
