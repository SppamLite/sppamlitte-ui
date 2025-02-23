import { ActionIcon, Stack } from "@mantine/core";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  collapsed: boolean;
  onToggleCollapsed(): void;
};

const IconLayoutSidebarRightCollapse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="24"
    height="24"
    stroke-width="2"
  >
    {" "}
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>{" "}
    <path d="M9 4v16"></path> <path d="M15 10l-2 2l2 2"></path>{" "}
  </svg>
);

const IconLayoutSidebarLeftCollapse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="24"
    height="24"
    stroke-width="2"
  >
    {" "}
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>{" "}
    <path d="M9 4v16"></path> <path d="M15 10l-2 2l2 2"></path>{" "}
  </svg>
);

export const Sidenav = ({ collapsed, onToggleCollapsed, children }: Props) => {
  return (
    <Stack p="lg" h="100%">
      <ActionIcon ml="sm" variant="transparent" onClick={onToggleCollapsed}>
        {collapsed ? (
          <IconLayoutSidebarRightCollapse />
        ) : (
          <IconLayoutSidebarLeftCollapse />
        )}
      </ActionIcon>
      {children}
    </Stack>
  );
};
