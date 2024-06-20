import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Flex,
  Heading,
  Select,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const CountryChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America"
  );
  const [chartData, setChartData] = useState(null);

  const countries = [
    "United States of America",
    "Mexico",
    "Nigeria",
    "Lebanon",
    "Russia",
    "Saudi Arabia",
    "United Kingdom",
    "Australia",
    "Canada",
    "Cyprus",
    "Singapore",
    "China",
    "Mongolia",
    "Iran",
    "Greece",
    "Sweden",
    "Poland",
    "India",
    "Venezuela",
    "Germany",
    "Panama",
    "Libya",
    "Botswana",
    "Ireland",
    "Equatorial Guinea",
    "New Zealand",
    "Latvia",
    "Turkey",
    "Pakistan",
    "Guyana",
    "South Sudan",
    "Austria",
    "Belgium",
    "South Africa",
    "Taiwan",
    "Chile",
    "North Korea",
    "Italy",
    "United Arab Emirates",
    "France",
    "Bahrain",
    "Indonesia",
    "Brazil",
    "South Korea",
    "Qatar",
    "Yemen",
    "Estonia",
    "Afghanistan",
  ];

  useEffect(() => {
    const countryData = data.filter(
      (entry) => entry.country === selectedCountry
    );

    const sectors = {};
    countryData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = [];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities = sectorLabels.map((sector) => sectors[sector]);

    const chartBackgroundColor =
      colorMode === "light"
        ? "rgba(79, 59, 169, 0.7)"
        : "rgba(144, 104, 190, 0.7)";

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          label: "Intensity",
          data: sectorIntensities,
          backgroundColor: chartBackgroundColor,
        },
      ],
    });
  }, [selectedCountry, data, colorMode]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        grid: {
          color: colorMode === "light" ? "gray.200" : "gray.900",
        },
      },
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box p={6} shadow="md" bg={useColorModeValue("white", "gray.800")} m={50}>
      <Flex direction="column" margin={"auto"}>
        <Heading
          as={"h2"}
          textAlign="left"
          mb={4}
          style={{ textAlign: "left" }}
        >
          Country 
        </Heading>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          mb={4}
          w="200px"
          colorScheme="purple"
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
        <Box height="500px" width={"100%"}>
          {chartData && <Bar data={chartData} options={chartOptions} />}
        </Box>
      </Flex>
    </Box>
  );
};

export default CountryChart;
