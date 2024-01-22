"use client"
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { detailPointTextStyles, header1Styles, headerStyles, percentageDetailTextStyles, percentageTextStyles, returnButtonStyles } from "./styles";
import { PieChart } from '@mui/x-charts/PieChart';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { relative } from 'path';
import { useRouter } from 'next/router'
import { use, useEffect, useLayoutEffect } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme: any }) => ({
    height: 33,
    width: 482,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#D9D9D9",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#063776',
    },
}));

const LinearProgressWithLabel = ({ value }: { value: number }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <BorderLinearProgress variant="determinate" value={value} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function AIResultPage() {

    const router = useRouter();
    const cv_id = router.query.slug;

    useLayoutEffect(() => {
        if (cv_id) {
            // query for cv_matching detail
        }
    }, [cv_id]);


    return (
        <Box padding={2}
            sx={{

                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <Box sx={{

                display: "flex",
                justifyContent: "center",
            }}>
                <Typography sx={headerStyles()}>Kết quả phân tích AI</Typography>
            </Box>

            <Box sx={{
                marginTop: "50px",
                width: "1200px",
                background: "rgba(183, 218, 237, 0.10)",
            }}>
                <Box sx={{}}>
                    <Button sx={returnButtonStyles()}>Quay lại</Button>
                </Box>
                <Box sx={{}}>
                    <Grid container spacing={3}>
                        {/* First Column */}
                        <Grid item xs={6}>
                            <Paper style={{ padding: 16 }}>
                                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                                    <Box sx={{}} paddingLeft="50%">
                                        <Typography sx={percentageTextStyles()}>75%</Typography>
                                    </Box>
                                    <PieChart
                                        series={[
                                            {
                                                data: [
                                                    { value: 75 * 360 / 100, color: '#063776' },
                                                    { value: 25 * 360 / 100, color: '#fff' },
                                                ],
                                                innerRadius: 30,
                                                outerRadius: 100,
                                                paddingAngle: 0,
                                                cornerRadius: 5,
                                                startAngle: 0,
                                                endAngle: 360,
                                                cx: 160,
                                                cy: 160,
                                            },
                                        ]}
                                        width={320}
                                        height={320}
                                        sx={{

                                        }}
                                    />
                                </Box>

                                <Box sx={{
                                    marginTop: "80px",
                                }}>
                                    <Box>
                                        <Typography sx={header1Styles()}>Điểm chi tiết</Typography>
                                    </Box>

                                    <Box display="flex" flexDirection="column" gap="10px" justifyContent="center" alignItems="center" mt="10px">
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Vị trí công việc</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={50} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Kinh nghiệm</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={50} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Kỹ năng</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={50} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Học vấn</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={50} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Định hướng</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={50} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>

                        </Grid>

                        {/* Second Column */}
                        <Grid item xs={6}>
                            <Paper style={{ padding: 16 }}>
                                <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center" gap="30px">
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "20px",
                                        }}
                                    >Xem CV</Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "20px",
                                        }}
                                    >Xem JD</Button>
                                </Box>

                                <Box mt="40px" sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "30px",
                                }}>
                                    <Box className="text-blue-900 font-montserrat text-2xl font-semibold">Tổng quan</Box>
                                    <Box>
                                        <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed vitae libero vehicula, sagittis neque nec, porta magna. Cras aliquam justo risus, id pulvinar purus commodo eu.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ipsum, lacinia id odio nec, placerat elementum elit. Fusce ornare dolor euismod, sagittis justo egestas, viverra enim.
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    marginTop: "130px",
                                }}>
                                    <Box>
                                        <Typography sx={header1Styles()}>Giải thích</Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="20px" mt="20px">
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Vị trí công việc</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ipsum, lacinia id odio nec.
                                                    Risus, id pulvinar purus commodo eu.
                                                    Praesent eros nibh, eleifend vitae auctor nec, luctus.
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Kinh nghiệm</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ipsum, lacinia id odio nec.
                                                    Risus, id pulvinar purus commodo eu.
                                                    Praesent eros nibh, eleifend vitae auctor nec, luctus.
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Kỹ năng</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ipsum, lacinia id odio nec.
                                                    Risus, id pulvinar purus commodo eu.
                                                    Praesent eros nibh, eleifend vitae auctor nec, luctus.
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Học vấn</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ipsum, lacinia id odio nec.
                                                    Risus, id pulvinar purus commodo eu.
                                                    Praesent eros nibh, eleifend vitae auctor nec, luctus.
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Định hướng</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin justo ipsum, lacinia id odio nec.
                                                    Risus, id pulvinar purus commodo eu.
                                                    Praesent eros nibh, eleifend vitae auctor nec, luctus.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Box>
    )
}

export default AIResultPage;
