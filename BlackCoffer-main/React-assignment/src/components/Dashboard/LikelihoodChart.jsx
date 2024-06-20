import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

const LikelihoodChart = ({ data }) => {
  // Count the occurrences of each Likelihood level
  const likelihoodCount = data.reduce((acc, entry) => {
    const likelihoodLevel = entry.likelihood;
    acc[likelihoodLevel] = (acc[likelihoodLevel] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the Pie chart
  const chartData = {
    labels: Object.keys(likelihoodCount),
    datasets: [
      {
        label: "Likelihood",
        data: Object.values(likelihoodCount),
        backgroundColor: [
          useColorModeValue(
            "rgba(79, 59, 169, 0.7)",
            "rgba(144, 104, 190, 0.7)"
          ),
          useColorModeValue(
            "rgba(129, 162, 242, 0.7)",
            "rgba(72, 123, 242, 0.7)"
          ),
          useColorModeValue(
            "rgba(255, 184, 0, 0.7)",
            "rgba(253, 184, 19, 0.7)"
          ),
          useColorModeValue("rgba(255, 115, 0, 0.7)", "rgba(255, 132, 0, 0.7)"),
        ],
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4} ml={6}>
        Likelihood 
      </Heading>

      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodChart;
