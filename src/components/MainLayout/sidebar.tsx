import {
  ActionIcon,
  AppShell,
  type AppShellNavbarProps,
  Stack,
} from "@mantine/core";
import React, { type ReactNode, useState } from "react";

const IconLayoutSidebarLeftCollapse = () => (
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
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>{" "}
    <path d="M9 4v16"></path> <path d="M15 10l-2 2l2 2"></path>{" "}
  </svg>
);
const IconLayoutSidebarRightCollapse = () => (
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
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>{" "}
    <path d="M15 4v16"></path> <path d="M9 10l2 2l-2 2"></path>{" "}
  </svg>
);

type CollapsibleSidebarProps = Omit<AppShellNavbarProps, "children"> & {
  collapsible: true;
  children: (collapsed: boolean) => ReactNode;
};

type NonCollapsibleSidebarProps = AppShellNavbarProps & {
  collapsible?: false;
  children: ReactNode;
};

type Props = CollapsibleSidebarProps | NonCollapsibleSidebarProps;

export function CollapsibleSidebar({
  children,
  bg = "#f7f7f7",
  withBorder = false,
  ...rest
}: CollapsibleSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const onToggleCollapsed = () => setCollapsed((prev) => !prev);
  const sidebarWidth = collapsed ? 96 : 300;

  return (
    <AppShell.Navbar
      bg={bg}
      withBorder={withBorder}
      style={{ transition: "ease 200ms width" }}
      w={sidebarWidth}
      {...rest}
    >
      <Stack p="lg" h="100%">
        <ActionIcon ml="sm" variant="transparent" onClick={onToggleCollapsed}>
          {collapsed ? (
            <IconLayoutSidebarRightCollapse />
          ) : (
            <IconLayoutSidebarLeftCollapse />
          )}
        </ActionIcon>
        {children(collapsed)}
      </Stack>
    </AppShell.Navbar>
  );
}

export function StaticSidebar({
  children,
  bg = "#f7f7f7",
  withBorder = false,
  ...rest
}: NonCollapsibleSidebarProps) {
  return (
    <AppShell.Navbar
      bg={bg}
      withBorder={withBorder}
      style={{ transition: "ease 200ms width" }}
      w={300}
      {...rest}
    >
      <Stack p="lg" h="100%">
        {children}
      </Stack>
    </AppShell.Navbar>
  );
}

function Sidebar(props: Props) {
  if (props.collapsible) {
    return <CollapsibleSidebar {...props} />;
  }
  return <StaticSidebar {...props} />;
}

export default Sidebar;
