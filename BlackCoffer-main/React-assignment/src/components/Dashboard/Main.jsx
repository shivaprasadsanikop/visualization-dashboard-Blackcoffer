import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import {
  ChakraProvider,
  Flex,
  Box,
  Grid,
  useColorMode,
  IconButton,
  theme,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import CombinedChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodChart from "./LikelihoodChart";
import "./styles.css";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:8000";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <div className="mt-10 p-2 intensity-chart-container">
        <IntensityChart data={data} />
        <Flex direction={{ base: "column", md: "row" }} m={50}>
          <Box
            flex={{ base: "1", md: "0.5" }}
            maxW="50%"
            p={5}
            m={2}
            className="chart-container"
          >
            <RegionChart data={data} />
          </Box>
          <Box
            flex={{ base: "1", md: "0.5" }}
            maxW="50%"
            p={5}
            m={2}
            className="chart-container"
          >
            <PieChart data={data} />
          </Box>
        </Flex>
        <CombinedChart data={data} className="combined-chart-container" />

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={4}
          className="grid-container"
        >
          <Box>
            <CountryChart data={data} />
          </Box>
          <Box>
            <LikelihoodChart data={data} />
          </Box>
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default Main;
