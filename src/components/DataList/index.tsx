import { Group, Pagination, Stack, Table } from "@mantine/core";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { useCallback, useState } from "react";

export type Props<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

const DataList = <T,>({ data, columns }: Props<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const onPageChange = useCallback(
    (pageIndex: number) => table.setPageIndex(pageIndex - 1),
    [table],
  );

  return (
    <Stack>
      <Table highlightOnHover withRowBorders={false} verticalSpacing="xs">
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: "\u2B06\uFE0F", // ⬆️
                            desc: "\u2B07\uFE0F", // ⬇️
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </>
                    )}
                  </Table.Th>
                );
              })}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Table.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Table.Td
                      key={cell.id}
                      align={cell.column.id === "actions" ? "right" : "left"}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Td>
                  );
                })}
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
      {table.getPageCount() > 1 && (
        <Group justify="end" mt="lg">
          <Pagination
            total={table.getPageCount()}
            value={table.getState().pagination.pageIndex + 1}
            onChange={onPageChange}
          />
        </Group>
      )}
    </Stack>
  );
};

export default DataList;
