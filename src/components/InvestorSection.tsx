// src/components/InvestorSection.tsx
'use client'
import { useState } from 'react';

export default function InvestorSection() {
  const [activeTab, setActiveTab] = useState('Company Research');

  const companyResearchItems = [
    'Accurate financial data on 100,000+ global public companies',
    'Company revenue and profit segments & KPIs',
    'Analyst estimates, price targets & ratings',
    'Utilize cutting edge AI to build summaries, models and visualizations',
    'Transcripts',
    'Filings',
    'Dividend history',
    'Insider and institutional ownership',
  ];

  const toolsItems = [
    'AI assistant',
    'Stock screener',
    'Data visualizations',
    'DCF modelling',
    'Portfolio and watchlist dashboarding',
    'Notifications',
    'Competitor comparisons',
    'Upload documents',
    'Earnings calendar',
  ];

  // Choose the list to display based on the active tab
  const itemsToDisplay = activeTab === 'Company Research' ? companyResearchItems : toolsItems;

  return (
    <div className="flex flex-col items-center text-center p-8 my-24">
      {/* Header */}
      <h2 className="text-3xl md:text-6xl font-bold mb-8 w-[65%]">
        Built for investors, by investors.
      </h2>

      {/* Toggle Buttons */}
      <div className="relative flex border border-gray-300 rounded-full overflow-hidden mb-8 w-[32rem] h-14">
        <div
          className={`absolute m-0.5 mx-1.5 h-[90%] w-[15.5rem] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            activeTab === 'Company Research' ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)', // More prominent shadow
          }}
        />
        <button
          className={`relative z-10 flex-1 px-6 py-2 transition-colors duration-300 ${
            activeTab === 'Company Research' ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Company Research')}
        >
          Company Research
        </button>
        <button
          className={`relative z-10 flex-1 px-6 py-2 transition-colors duration-300 ${
            activeTab === 'Tools' ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Tools')}
        >
          Tools
        </button>
      </div>

      {/* List of Items */}
      <div className="w-[50%] max-w-2xl">
        {itemsToDisplay.map((item, index) => (
          <div key={index} className="border-t py-4 text-gray-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}