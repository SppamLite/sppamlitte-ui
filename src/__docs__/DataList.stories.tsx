import { Button } from "@mantine/core";
import type { StoryObj } from "@storybook/react";
import React from "react";

import DataList from "../components/DataList";

const meta = {
  title: "DataList",
  component: DataList,
  args: { data: [], columns: [] },
};

export default meta;
type Story = StoryObj<typeof meta>;

type Cat = {
  id: number;
  name: string;
  age: number;
};

export const Default: Story = {
  args: {
    data: [
      { id: 1, name: "Biru", age: 4 },
      { id: 2, name: "Pepe", age: 3 },
    ] as Cat[],
    columns: [
      { accessorKey: "name" },
      { accessorKey: "age" },
      {
        id: "actions",
        cell: () => (
          <>
            <Button variant="subtle">Edit</Button>
            <Button variant="subtle" color="red">
              Delete
            </Button>
          </>
        ),
      },
    ],
  },
};
