import { AppShell, type AppShellProps } from "@mantine/core";
import React, { type ReactNode } from "react";

type Props = AppShellProps & {
  sidebar: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

const MainLayout = ({ children, sidebar, ...rest }: Props) => {
  return (
    <AppShell {...rest}>
      {sidebar}
      {children}
    </AppShell>
  );
};

export default MainLayout;
