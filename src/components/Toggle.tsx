// src/components/ToggleSwitch.tsx
import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function Toggle({ isOn, onToggle }: ToggleSwitchProps) {
  return (
    <div
      className={`flex items-center cursor-pointer w-72 h-28 rounded-full p-1 transition-colors duration-300 ${
        isOn ? 'bg-purple-500' : 'bg-gray-300'
      }`}
      onClick={onToggle}
    >
      <div
        className={`w-24 h-24 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-44' : 'translate-x-1'
        }`}
        style={{
            boxShadow: isOn ? '0 0 20px 5px rgba(128, 0, 128, 0.6)' : '0 0 10px 2px rgba(0, 0, 0, 0.3)',
          }}
      />
    </div>
  );
}
