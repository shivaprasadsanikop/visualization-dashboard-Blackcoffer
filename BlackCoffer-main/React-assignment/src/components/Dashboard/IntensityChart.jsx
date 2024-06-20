import React from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Heading } from "@chakra-ui/react";

const IntensityChart = ({ data }) => {
  const filteredData = data.filter(
    (item) => item.start_year >= new Date().getFullYear() - 70
  );

  const intensityData = filteredData.map((item) => item.intensity);
  const years = filteredData.map((item) => item.start_year);
  const getColor = (value) => {
    const colors = [
      "#7F00FF", // Green
      "#F2B93B", // Yellow
      "#FF8000", // Orange
      "#FF453A", // Red
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Intensity",
        backgroundColor: "rgba(0,0,0,0)", // Transparent background
        borderColor: "#7F00FF", // Color for the line
        borderWidth: 2,
        data: intensityData,
        pointBackgroundColor: intensityData.map((value) => getColor(value)), // Color for points
        pointBorderColor: "#FFFFFF", // Border color for points
        pointBorderWidth: 2, // Border width for points
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false, // Hide data labels for line chart
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
          callback: (value) => value + "%",
        },
      },
    },
    animation: {
      duration: 4000,
      easing: "easeInOutQuart", // Use a smooth easing function
      mode: "progressive",
    },
  };

  return (
    <div
      style={{
        margin: "50px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Heading as="h2" mb={4}>
        Intensity 
      </Heading>
      <Line
        data={chartData}
        options={chartOptions}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default IntensityChart;
