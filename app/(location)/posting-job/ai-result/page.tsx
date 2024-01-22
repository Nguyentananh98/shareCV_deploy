"use client"

import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { headerStyles, percentageTextStyles, returnButtonStyles } from "./styles";
import { PieChart } from '@mui/x-charts/PieChart';

function AIResultPage() {
    return (
        <Box padding={2}
            sx={{
                border: "1px solid black",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <Box sx={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
            }}>
                <Typography sx={headerStyles()}>Kết quả phân tích AI</Typography>
            </Box>

            <Box sx={{
                marginTop: "50px",
                width: "1200px",
                background: "rgba(183, 218, 237, 0.10)",
                border: "1px solid green",
            }}>
                <Box sx={{ border: "1px solid black", }}>
                    <Button sx={returnButtonStyles()}>Quay lại</Button>
                </Box>
                <Box sx={{ border: "1px solid black", }}>
                    <Grid container spacing={3}>
                        {/* First Column */}
                        <Grid item xs={6}>
                            <Paper style={{ padding: 16 }}>
                                <Box sx={{ border: "1px solid black", display: "flex", alignItems: "center", flexDirection: "column" }} >
                                    <Box sx={{ border: "1px solid black" }} paddingLeft="50%">
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
                                            border: "1px solid black",
                                        }}
                                    />
                                </Box>

                                <Box sx={{
                                    marginTop: "80px",
                                }}>

                                </Box>
                            </Paper>

                        </Grid>

                        {/* Second Column */}
                        <Grid item xs={6}>
                            <Paper style={{ padding: 16 }}>
                                <Typography variant="h6">Column 2</Typography>

                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Box>
    )
}

export default AIResultPage;
