import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Box, Heading, Flex } from "@chakra-ui/react";

const CombinedChart = ({ data }) => {
  // Extract topics and relevance from data
  const topics = data.map((item) => item.topic);
  const relevance = data.map((item) => item.relevance);

  // Calculate total relevance
  const totalRelevance = relevance.reduce((acc, val) => acc + val, 0);

  // Prepare data for the bar chart
  const barChartData = {
    labels: topics,
    datasets: [
      {
        label: "Relevance",
        data: relevance,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the doughnut chart
  const doughnutChartData = {
    labels: topics,
    datasets: [
      {
        label: "Relevance",
        data: relevance.map((value) => (value / totalRelevance) * 100),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          max: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <Flex direction="column">
      <Box
        margin={50}
        p={4}
        mt={8}
        borderRadius={18}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        <Heading as="h2" mb={4}>
          Topic & Revelance
        </Heading>
        <Bar data={barChartData} options={chartOptions} />
      </Box>
    </Flex>
  );
};

export default CombinedChart;
