// src/pages/index.tsx
import Navbar from "../components/Navbar";
import Slogan from "../components/Slogan";
import SearchBar from "../components/SearchBar";
import LogoScrollSection from "../components/LogoScroll";
import DataComponent from "../components/DataComponent";
import AIComponent from "../components/AiAssistant";
import FundenmentalResearchComponent from "../components/FundamentalResearch"
import FinChatComparisonChart from "../components/FinChartComparison";

export default function Home() {
  return (
    <div className="bg-mainBackground min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Slogan />
      <div className="w-[55%]">
        <SearchBar />
      </div>
      <div className="w-[80%]">
        <LogoScrollSection />
      </div>
      <DataComponent />
      <FundenmentalResearchComponent />
      <AIComponent />
      
      <FinChatComparisonChart />
    </div>
  );
}
