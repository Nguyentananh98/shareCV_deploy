"use client"

import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Autocomplete, Box, Button, Divider, Tab, TextField, Typography } from '@mui/material';
import { TabButtonStyle, TabTextStyle } from './styles';
import { TableSearchBar } from './components/searchbar';
import { CreateJobTable } from './sections/UVListTable';
import { IJobListCreate, IJobListDraft } from '@/common/interfaces/job-list';
import { CustomPagination } from './components/pagination';
import { getCreatedJobList } from '@/common/apis/job_list';

export const jobListCreatedData: IJobListCreate[] = [
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
]

export const IJobListDraftData: IJobListDraft[] = [
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        created_time: '10-10-2021',
        job_service: 'Job Service',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        created_time: '10-10-2021',
        job_service: 'Job Service',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        created_time: '10-10-2021',
        job_service: 'Job Service',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        industry: 'Job Major',
        created_time: '10-10-2021',
        job_service: 'Job Service',
    }
]

function UVListPage() {
    const [isDraftPage, setIsDraftPage] = useState<boolean>(false);
    const [pagination, setPagination] = useState({
        page_index: 1,
        limit: 10,
        total_pages: 10,
        total_items: 0
    });

    useEffect(() => {
        try{
            let payload: any = {
                page_index: pagination.page_index,
                limit: pagination.limit,
            }
            getCreatedJobList(payload).then((res) => {
                console.log(res);
            })
        } catch (err) {
            console.log(err);
        }
    }, [pagination]);

    const handleChangeNumPerPage = (value: any) => {
        setPagination({
            ...pagination,
            limit: value,
        })
    }

    const handleChangePageNumber = (page: number) => {
        setPagination({
            ...pagination,
            page_index: page,
        })
    }

    return (
        <Box sx={{
            width: '1440px',
            marginTop: '100px',
        }}>
            <Box>
                <Typography variant="h5" sx={{
                    color: '#063776',
                    fontFamily: 'Montserrat',
                    fontSize: '36px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '80px',
                    padding: '5px'
                }}>Danh sách công việc</Typography>
            </Box>
            <Box mt="25px">
                <Box display="flex" flexDirection="row" gap="30px">
                    {/* tab */}
                    <Button sx={TabButtonStyle()} onClick={() => setIsDraftPage(false)}>
                        <Typography sx={TabTextStyle(isDraftPage === false)}>Công việc đã tạo</Typography>
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button sx={TabButtonStyle()} onClick={() => setIsDraftPage(true)}>
                        <Typography sx={TabTextStyle(isDraftPage === true)}>Bản nháp</Typography>
                    </Button>
                </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt="50px" >
                <Box display="flex" flexDirection="row" gap="15px" alignItems="center" p={"5px"}>
                    <Box>
                        <Typography sx={{
                            color: '#063776',
                            fontFamily: 'Montserrat',
                            fontSize: '22px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '76.296px',
                        }}>Show</Typography>
                    </Box>
                    <Box>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={pagination.limit}
                            options={[10, 20, 30, 40, 50]}
                            renderInput={(params) => <TextField {...params} label="" />}
                            onChange={(event, value) => handleChangeNumPerPage(value)}
                            sx={{
                                height: "40px",
                                width: "100px",
                                "& .MuiInputBase-root": {
                                    borderRadius: "10px",
                                    color: "#063776",
                                    height: "40px",
                                    width: "100px",
                                },
                                "& .input": {
                                    height: "20px",
                                },

                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    <TableSearchBar />
                </Box>
            </Box>

            <Box sx={{
                marginTop: '50px',
            }}>
                <UVListPage />
                <Box
                    sx={{
                        marginTop: '25px',
                    }}
                >
                    <CustomPagination
                        onChangePage={(page: number) => handleChangePageNumber(page)}
                        numsPerPage={pagination.limit}
                        totalPage={pagination.total_pages}
                        currentPage={pagination.page_index}
                    />
                </Box>
            </Box>


        </Box>
    )
}

export default JobListPage;
