import { AppShell, type AppShellProps } from "@mantine/core";
import React, {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useState,
} from "react";

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapsed(): void;
};

type Props = AppShellProps & {
  sidebar: ReactElement<SidebarProps>;
  header?: ReactNode;
  footer?: ReactNode;
};

const MainLayout = ({ children, sidebar, ...rest }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggleCollapsed = () => setCollapsed((prev) => !prev);

  const enhancedSidebar = isValidElement(sidebar)
    ? cloneElement(sidebar, { collapsed, onToggleCollapsed })
    : sidebar;

  return (
    <AppShell
      navbar={{
        width: collapsed ? 96 : 300,
        breakpoint: 0,
      }}
      header={{
        height: 54,
      }}
      {...rest}
    >
      {enhancedSidebar}
      {children}
    </AppShell>
  );
};

export default MainLayout;
