import "@mantine/core/styles.css";
import "./ladle-styles.css";

import type { GlobalProvider } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import React from "react";

export const Provider: GlobalProvider = ({ children }) => (
  <MantineProvider>{children}</MantineProvider>
);
