import type { Story } from "@ladle/react";
import { AppShell, Center, NavLink, Text } from "@mantine/core";
import React from "react";

import MainLayout from "../components/MainLayout";
import Sidebar from "../components/MainLayout/sidebar";

const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={24}
    height={24}
    strokeWidth={2}
  >
    {" "}
    <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path>{" "}
    <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"></path>{" "}
    <path d="M8 12h8"></path> <path d="M7 19v2"></path>{" "}
    <path d="M17 19v2"></path>{" "}
  </svg>
);
const IconComponents = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={24}
    height={24}
    strokeWidth={2}
  >
    {" "}
    <path d="M3 12l3 3l3 -3l-3 -3z"></path>{" "}
    <path d="M15 12l3 3l3 -3l-3 -3z"></path>{" "}
    <path d="M9 6l3 3l3 -3l-3 -3z"></path>{" "}
    <path d="M9 18l3 3l3 -3l-3 -3z"></path>{" "}
  </svg>
);
const IconSettings = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={24}
    height={24}
    strokeWidth={2}
  >
    {" "}
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>{" "}
    <path d="M10 9v6l5 -3z"></path>{" "}
  </svg>
);

export const Default: Story = () => {
  return (
    <MainLayout
      display="flex"
      sidebar={
        <Sidebar pos="relative">
          <NavLink label="Home" />
          <NavLink label="Components" />
          <NavLink label="Settings" />
        </Sidebar>
      }
    >
      <AppShell.Main>main</AppShell.Main>
      <AppShell.Footer>
        <Center>
          <Text c="dimmed">Sppamlitte UI</Text>
        </Center>
      </AppShell.Footer>
    </MainLayout>
  );
};

export const Collapsible: Story = () => {
  return (
    <MainLayout
      display="flex"
      sidebar={
        <Sidebar collapsible pos="relative">
          {(collapsed) => (
            <>
              <NavLink
                label={collapsed ? "" : "Home"}
                leftSection={<IconHome />}
              />
              <NavLink
                label={collapsed ? "" : "Components"}
                leftSection={<IconComponents />}
              />
              <NavLink
                label={collapsed ? "" : "Settings"}
                leftSection={<IconSettings />}
              />
            </>
          )}
        </Sidebar>
      }
    >
      <AppShell.Main>main</AppShell.Main>
      <AppShell.Footer>
        <Center>
          <Text c="dimmed">Sppamlitte UI</Text>
        </Center>
      </AppShell.Footer>
    </MainLayout>
  );
};
