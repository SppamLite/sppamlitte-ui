import type { Story } from "@ladle/react";
import {
  ActionIcon,
  AppShell,
  Center,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

import MainLayout from "../components/MainLayout";

export const Default: Story = () => {
  const Sidebar = ({
    collapsed,
    onToggleCollapsed,
  }: {
    collapsed?: boolean;
    onToggleCollapsed?(): void;
  }) => (
    <AppShell.Navbar style={{ transition: "ease 200ms width" }}>
      <ActionIcon ml="sm" variant="transparent" onClick={onToggleCollapsed}>
        {collapsed ? "👉" : "👈"}
      </ActionIcon>
      <Stack>
        <NavLink label="Home" />
        <NavLink label="Components" />
        <NavLink label="Settings" />
      </Stack>
    </AppShell.Navbar>
  );
  return (
    <MainLayout sidebar={<Sidebar />}>
      <AppShell.Header>Sppamlitte UI</AppShell.Header>
      <AppShell.Main>main</AppShell.Main>
      <AppShell.Footer>
        <Center>
          <Text c="dimmed">Sppamlitte UI</Text>
        </Center>
      </AppShell.Footer>
    </MainLayout>
  );
};
