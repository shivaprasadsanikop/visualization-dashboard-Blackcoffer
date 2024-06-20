import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: "#e5f4f4",
      // Add other shades of primary color if needed
    },
    // Add other custom colors here
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
});

export default theme;
