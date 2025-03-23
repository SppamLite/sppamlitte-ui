import "@mantine/core/styles.css";
import "./ladle-styles.css";

import type { GlobalProvider } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import React from "react";

export const Provider: GlobalProvider = ({ children }) => (
  <MantineProvider>
    <header className="banner">
      <a href="https://github.com/SppamLite/sppamlitte-ui" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          {" "}
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>{" "}
        </svg>
      </a>
      <a href="https://www.npmjs.com/package/sppamlitte-ui" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          {" "}
          <path d="M1 8h22v7h-12v2h-4v-2h-6z"></path> <path d="M7 8v7"></path>{" "}
          <path d="M14 8v7"></path> <path d="M17 11v4"></path>{" "}
          <path d="M4 11v4"></path> <path d="M11 11v1"></path>{" "}
          <path d="M20 11v4"></path>{" "}
        </svg>
      </a>
    </header>
    {children}
  </MantineProvider>
);
