// src/components/CallToActionWithScroll.tsx
"use client";
import { useState, useEffect } from "react";

export default function CallToActionWithScroll() {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    // Detect when the user scrolls near the bottom of the page
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center">
      {/* Call to Action Section */}
      <div className="flex flex-col items-center text-center py-24 px-4 bg-white shadow-lg rounded-lg w-full mx-auto h-44rem mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 w-4/5">
          Discover how FinChat can supercharge your research.
        </h2>
        <button className="bg-black text-white px-6 py-3 rounded-full shadow-md mb-4">
          Get Started For Free
        </button>
        <p className="text-gray-500">(No credit card required)</p>
      </div>

      {/* Footer Section with Scroll-Up Transition */}
      <div
        className={`fixed bottom-0  transition-transform duration-500 w-[90%] ${
          showFooter ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          backgroundColor: "#f9f9f9",
          boxShadow: "0px -4px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow for more emphasis
          borderTopLeftRadius: "16px", // Adding some rounding to the top corners
          borderTopRightRadius: "16px",
        }}
      >
        <div className="flex flex-col items-center p-8">
          <h3 className="text-xl font-semibold mb-4">
            Stay informed with our newsletter.
          </h3>
          <p className="text-gray-500 mb-6">
            Weekly earnings, insights, research & news.
          </p>
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-6">
            <span className="mr-2">📧</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none bg-transparent"
            />
          </div>
          <div className="flex justify-between w-full max-w-4xl">
            <div className="text-center">
              <h4 className="font-semibold">COMPANY</h4>
              <ul className="text-gray-500">
                <li>Careers</li>
                <li>LinkedIn</li>
                <li>Twitter/X</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">PRODUCT</h4>
              <ul className="text-gray-500">
                <li>Pricing</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold">RESOURCES</h4>
              <ul className="text-gray-500">
                <li>Affiliate</li>
                <li>Blog</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-8 py-4 border-t border-gray-300 text-gray-500">
          <div>Privacy Policy | Terms of Service</div>
          <div>© 2024 Stratosphere Technology Inc. All rights reserved.</div>
          <div>LinkedIn | Twitter/X</div>
        </div>
      </div>
    </div>
  );
}
