import React, { useEffect, useState, useRef } from "react";
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
  const colorRef = useRef<HTMLDivElement | null>(null);
  const [themeColors, setThemeColors] = useState({
    primary: "#bca441",
    secondary: "#bca441",
    text: "#bca441",
    grid: "#4242422f",
    tooltipBg: "#bca441",
  });

  useEffect(() => {
    const updateThemeColors = () => {
      if (colorRef.current) {
        const styles = getComputedStyle(colorRef.current);
        setThemeColors({
          primary: styles.getPropertyValue("color").trim(),
          secondary: styles.getPropertyValue("color").trim(),
          text: styles.getPropertyValue("color").trim(),
          grid: styles.getPropertyValue("background-color").trim(),
          tooltipBg: styles.getPropertyValue("color").trim(),
        });
      }
    };

    updateThemeColors();

    const observer = new MutationObserver(updateThemeColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("Updated theme colors:", themeColors);
  }, [themeColors]);

  const data: ChartData<"line", number[], string> = {
    labels: wordsPerSecond.map((_, index) => `${index + 1}`),
    datasets: [
      {
        label: "words typed over time",
        data: wordsPerSecond,
        borderColor: themeColors.secondary,
        backgroundColor: themeColors.secondary,
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
        grid: { color: themeColors.grid },
        ticks: {
          color: themeColors.secondary,
          font: { size: 14, family: "Roboto Mono" },
        },
        title: {
          display: true,
          text: "time",
          color: themeColors.secondary,
          font: { size: 16, family: "Roboto Mono" },
        },
      },
      y: {
        grid: { color: themeColors.grid },
        ticks: {
          color: themeColors.secondary,
          font: { size: 14, family: "Roboto Mono" },
          stepSize: 1,
        },
        title: {
          display: true,
          text: "words",
          color: themeColors.secondary,
          font: { size: 16, family: "Roboto Mono" },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: themeColors.secondary,
          font: { size: 14, family: "Roboto Mono" },
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
      <div
        ref={colorRef}
        style={{
          color: "var(--accent-color-1)",
          backgroundColor: "var(--accent-color-2)",
          position: "absolute",
          width: "0px",
          height: "0px",
          overflow: "hidden",
        }}
      />
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
