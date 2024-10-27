"use client";

import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FinChatComparisonChart: React.FC = () => {
  const chartRef = useRef(null);
  const [icons, setIcons] = useState<any[]>([]);

  useEffect(() => {
    if (chartRef.current && icons.length > 0) {
      // Register the custom plugin with Chart.js
      ChartJS.register({
        id: "customIconPlugin",
        ...options.plugins.customIconPlugin,
      });
    }
  }, [icons]);

  useEffect(() => {
    // Load icons on the client side
    const finChatIcon = new Image();
    finChatIcon.src = "/assets/finchat.jpeg"; // Use the correct path

    const claude2Icon = new Image();
    claude2Icon.src = "/assets/Claude.png"; // Use the correct path

    const gpt4Icon = new Image();
    gpt4Icon.src = "/assets/gpt-4.png"; // Use the correct path

    const llama2Icon = new Image();
    llama2Icon.src = "/assets/llama-2.png"; // Use the correct path

    // Set icons in state
    setIcons([finChatIcon, claude2Icon, gpt4Icon, llama2Icon]);
  }, []);

  const data = {
    labels: ["FinChat v3", "Claude2", "GPT-4 w/search", "Llama2"],
    datasets: [
      {
        label: "Score",
        data: [91, 37, 31, 19],
        backgroundColor: ["#ECE3D1", "#C27861", "#B0C9C8", "#E3E3E3"],
        borderRadius: 8,
        barThickness: 100,
      },
    ],
  };

  const options = {
    indexAxis: "x" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      // Custom plugin for adding icons and numbers above bars
      customIconPlugin: {
        afterDraw: (chart: any) => {
          const ctx = chart.ctx;
          const barMeta = chart.getDatasetMeta(0).data;

          // Draw each icon and number on top of the corresponding bar
          barMeta.forEach((bar: any, index: number) => {
            if (icons[index]) {
              const { x, y } = bar;
              const imageSize = 40; // Size of the icons
              const iconX = x - imageSize / 2;
              const iconY = y - imageSize + 50; // Position above the bar
              
              ctx.drawImage(icons[index], iconX, iconY, imageSize, imageSize);
            }

            // Draw the number above the bar
            const value = data.datasets[0].data[index];
            ctx.shadowColor = "rgba(0, 0, 0, 0.3)"; // Shadow color
            ctx.globalAlpha = 0.9;
            ctx.fillStyle = "#000"; // Set the color for the text
            ctx.font = "bold 14px Arial";
            ctx.textAlign = "center";
            ctx.fillText(String(value), bar.x, bar.y - 10);
          });
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        title: {
          display: true,
          text: "Score",
        },
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      // Register the custom plugin
      ChartJS.register({
        id: "customIconPlugin",
        ...options.plugins.customIconPlugin,
      });
    }
  }, [chartRef, options, icons]);

  return (
    <div className="flex flex-col items-center my-24">
      <h2 className="text-6xl font-bold mb-2">FinChat v. LLMs</h2>
      <p className="w-2/3 text-center mb-4">
        FinanceBench is the industry standard for evaluating LLM{'\''}s on financial
        questions.
      </p>
      {icons.length > 0 && <Bar ref={chartRef} data={data} options={options} />}
      <p className="mt-2 text-sm text-gray-600">
        Based on FinanceBench Top 100 Questions
      </p>
    </div>
  );
};

export default FinChatComparisonChart;
