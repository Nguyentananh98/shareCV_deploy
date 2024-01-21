"use client"

import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Autocomplete, Box, Button, Divider, Tab, TextField, Typography } from '@mui/material';
import { TabButtonStyle, TabTextStyle } from './styles';
import { TableSearchBar } from './components/searchbar';
import { JobListTable } from './components/jobListTable';
import { IJobList } from '@/common/interfaces/job-list';
import { CustomPagination } from './components/pagination';

export const jobListCreatedData: IJobList[] = [
    {
        job_id: 123,
        job_title: 'Job Title',
        job_major: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        job_major: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        job_major: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        job_major: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
    {
        job_id: 123,
        job_title: 'Job Title',
        job_major: 'Job Major',
        recruited_time: '10-10-2021',
        job_service: 'Job Service',
        num_cvs: 10,
        status: 'Created',
    },
]


function JobListPage() {
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
                    <Button sx={TabButtonStyle()}>
                        <Typography sx={TabTextStyle(true)}>Công việc đã tạo</Typography>
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button sx={TabButtonStyle()}>
                        <Typography sx={TabTextStyle(false)}>Bản nháp</Typography>
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
                            options={[{ label: '10' }, { label: '20' }, { label: '30' }, { label: '40' }, { label: '50' }]}
                            renderInput={(params) => <TextField {...params} label="" />}
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
                <JobListTable data={jobListCreatedData}/>
                <Box
                sx={{
                    marginTop: '25px',
                }}
                >
                    <CustomPagination 
                    onChangePage={() => {}}
                    numsPerPage={10}
                    totalPage={10}
                    currentPage={1}
                    />
                </Box>
            </Box>


        </Box>
    )
}

export default JobListPage;
