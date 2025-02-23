import { faker } from "@faker-js/faker";
import type { Story } from "@ladle/react";
import { Button } from "@mantine/core";
import React from "react";

import DataList from "../components/DataList";

export const Default: Story = () => (
  <DataList
    data={[
      { id: 1, name: "Biru", age: 4 },
      { id: 2, name: "Pepe", age: 3 },
    ]}
    columns={[
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
    ]}
  />
);

const data = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  name: faker.food.fruit(),
  price: faker.commerce.price(),
  quantity: faker.number.int({ min: 10, max: 100 }),
}));

export const Pagination: Story = () => (
  <DataList
    data={data}
    columns={[
      { accessorKey: "name" },
      { accessorKey: "price" },
      { accessorKey: "quantity" },
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
    ]}
  />
);
