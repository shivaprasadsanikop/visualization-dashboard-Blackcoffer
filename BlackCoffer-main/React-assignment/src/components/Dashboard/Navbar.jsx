import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <nav className="bg-white dark:bg-white-900 text-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src="https://blackcoffer.com/wp-content/uploads/2023/10/Black-720x172-4.png"
            className="h-8"
            alt="BlackCoffer Logo"
          />

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <IconButton
              aria-label="Toggle Dark/Light Mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              color="gray.600" // Adjust the color if needed
            >
              Change
            </IconButton>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          ></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
