import { useMemo, useState } from 'react';
import {
    MRT_Table,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';

import { IJobListCreate } from "@/common/interfaces/job-list"
import { Box, Button, Menu, Typography } from "@mui/material";
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CustomMenuItem } from '../../components/MenuItem';
import { CustomMenu } from '../../components/CustomMenu';

export interface JobListTableProps {
    data: IJobListCreate[];
}

export const CreateJobTable = ({
    data,
}: JobListTableProps) => {

    const columns = useMemo<MRT_ColumnDef<IJobListCreate>[]>(
        () => [
            {
                accessorKey: 'job_id',
                header: 'ID',
                Header: ({ column }) => (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                            textTransform: "none",
                            color: "inherit",
                        }}>
                        <p>{column.columnDef.header}</p>
                    </Box>
                )
            },
            {
                accessorKey: 'job_title',
                header: 'Tên công việc',
                Header: ({ column }) => (
                    <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                        <p>{column.columnDef.header}</p>
                        <KeyboardArrowDownIcon />
                    </Box>
                )
            },
            {
                accessorKey: 'industry',
                header: 'Ngành nghề',
                Header: ({ column }) => (
                    <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                        <p>{column.columnDef.header}</p>
                        <KeyboardArrowDownIcon />
                    </Box>
                )
            },
            {
                accessorKey: 'recruited_time',
                header: 'Ngày đăng tuyển',
                Header: ({ column }) => (
                    <Box
                        // onClick={(event: any) => handleOpenMenu(event, "CreateDay")}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                            textTransform: "none",
                            color: "inherit",
                        }}>
                        <p>{column.columnDef.header}</p>
                        <KeyboardArrowDownIcon />
                    </Box>
                )
            },
            {
                accessorKey: 'job_service',
                header: 'Tên dịch vụ',
                Header: ({ column }) => (
                    <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                        <p>{column.columnDef.header}</p>
                        <KeyboardArrowDownIcon />
                    </Box>
                )
            },
            {
                accessorKey: 'status',
                header: 'Trạng thái',
                Header: ({ column }) => (
                    <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                        <p>{column.columnDef.header}</p>
                        <KeyboardArrowDownIcon />
                    </Box>
                )
            },
            {
                accessorKey: 'num_cvs',
                header: 'Số CV ',
                Header: ({ column }) => (
                    <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                        <p>{column.columnDef.header}</p>
                        <KeyboardArrowDownIcon />
                    </Box>
                )
            },
        ], [],)

    const table = useMaterialReactTable({
        columns,
        data,
        enablePagination: false,
        enableColumnFilterModes: true,
        enableColumnActions: true,
        enableColumnFilters: true,
        enableSorting: true,

        mrtTheme: (theme) => ({
            baseBackgroundColor: theme.palette.background.default, //change default background color
            fontFamily: 'Montserrat',
        }),
        muiTableProps: {
            sx: {
                border: "2px solid #D6D0D0",
                borderRadius: "10px",
                background: "#FFF",
                boxShadow: "2px 8px 24px -4px rgba(255, 255, 255, 0.08), 0px 6px 12px -6px rgba(255, 255, 255, 0.12)",
            },
        },
        muiTableHeadCellProps: {
            sx: {
                color: "#063776",
                fontFamily: "Poppins",
                fontSize: "17.237px",
                fontStyle: "normal",
                fontWeight: "600",
                borderBottom: "1px solid black",
            }
        },
        muiTableBodyCellProps: {
            sx: {
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "14.671px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "69.039px",
            }
        }
    })

    return (
        <Box
            sx={{
                // border: "1px solid #063776",
            }}
        >
            <MRT_Table table={table} />
        </Box>
    )
}