import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import styles from "./LineGraph.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphProps {
  wordsPerSecond: number[];
}

const LineGraph: React.FC<LineGraphProps> = ({ wordsPerSecond }) => {
  const [themeColors, setThemeColors] = useState({
    primary: "#8884d8",
    secondary: "#bca441",
    text: "#ffffff",
    grid: "rgba(255,255,255,0.1)",
    tooltipBg: "#222",
  });

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setThemeColors({
      primary:
        rootStyles.getPropertyValue("--primary-color").trim() || "#8884d8",
      secondary:
        rootStyles.getPropertyValue("--secondary-color").trim() || "#bca441",
      text: rootStyles.getPropertyValue("--text-color").trim() || "#ffffff",
      grid:
        rootStyles.getPropertyValue("--grid-color").trim() ||
        "rgba(255,255,255,0.1)",
      tooltipBg: rootStyles.getPropertyValue("--tooltip-bg").trim() || "#222",
    });
  }, []);

  const data: ChartData<"line", number[], string> = {
    labels: wordsPerSecond.map((_, index) => `${index + 1}`),
    datasets: [
      {
        label: "words typed over time",
        data: wordsPerSecond,
        borderColor: themeColors.secondary,
        backgroundColor: `${themeColors.secondary}`,
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: themeColors.grid,
        },
        ticks: {
          color: themeColors.secondary,
          font: {
            size: 14,
            family: "Roboto Mono",
          },
        },
        title: {
          display: true,
          text: "time",
          color: themeColors.secondary,
          font: {
            size: 16,
            family: "Roboto Mono",
          },
        },
      },
      y: {
        grid: {
          color: themeColors.grid,
        },
        ticks: {
          color: themeColors.secondary,
          font: {
            size: 14,
            family: "Roboto Mono",
          },
          stepSize: 1,
        },
        title: {
          display: true,
          text: "words",
          color: themeColors.secondary,
          font: {
            size: 16,
            family: "Roboto Mono",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: themeColors.secondary, // Change to secondary 2 color
          font: {
            size: 14,
            family: "Roboto Mono",
          },
        },
      },
      tooltip: {
        backgroundColor: themeColors.tooltipBg,
        titleColor: themeColors.text,
        bodyColor: themeColors.text,
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
