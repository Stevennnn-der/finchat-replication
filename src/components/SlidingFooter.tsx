// src/components/SlidingFooter.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SlidingFooter() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scrolling to the bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl p-8 z-50"
        initial={{ y: "100%" }}
        animate={{ y: isVisible ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">
            Stay informed with our newsletter.
          </h2>
          <p className="text-gray-600">
            Weekly earnings, insights, research & news.
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 max-w-md p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
        </div>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-600">
              <li>Careers</li>
              <li>LinkedIn</li>
              <li>Twitter/X</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="text-gray-600">
              <li>Pricing</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-600">
              <li>Affiliate</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
