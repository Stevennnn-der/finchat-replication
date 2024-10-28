// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-white py-6 text-gray-500 text-sm flex justify-around items-center px-4 shadow-inner rounded-b-3xl max-w-7xl w-2/3">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Service</a>
          <span>|</span>
          <span>© 2024 Stratosphere Technology Inc. All rights reserved.</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="LinkedIn">
            <span className="text-xl">in</span>
          </a>
          <a href="#" aria-label="Twitter">
            <span className="text-xl">X</span>
          </a>
        </div>
      </footer>
    );
  }
  