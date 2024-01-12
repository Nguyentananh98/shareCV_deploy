"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
function Service() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="top"
      justifyContent="left"
      py={5}
      px={"120px"}
    >
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
        py={5}
      >
        <Typography
          py={5}
          sx={{ fontSize: 30 }}
          className="font-medium text-secondary"
        >
          Tại sao nên chọn ShareCV?
        </Typography>
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          alignItems="top"
          justifyContent="left"
          p={3}
        >
          {/* <Box
            display="flex"
            width="100%"
            flexDirection="column"
            alignItems="top"
            justifyContent="left"
          > */}
            <Box
              display="flex"
              flexDirection={"column"}
              width="100%"
              alignItems="top"
              justifyContent="left"
              p={3}
            >
              <div style={{ display: "flex", flexDirection: "row",padding:5 }}>
                <Image src={"/ai.png"} width={100} height={100} alt={""} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>AI Lọc CV theo JD</Typography>
                  <Typography>desciption of AI lọc theo JD</Typography>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row",padding:5  }}>
                <Image src={"/ai.png"} width={100} height={100} alt={""} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>AI Lọc CV theo JD</Typography>
                  <Typography>desciption of AI lọc theo JD</Typography>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row",padding:5  }}>
                <Image src={"/ai.png"} width={100} height={100} alt={""} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>AI Lọc CV theo JD</Typography>
                  <Typography>desciption of AI lọc theo JD</Typography>
                </div>
              </div>
            </Box>
            <Box
              display="flex"
              flexDirection={"column"}
              width="100%"
              alignItems="top"
              justifyContent="center"
              p={3}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>AI Lọc CV theo JD</Typography>
                  <Typography>desciption of AI lọc theo JD</Typography>
                </div>
            </Box>
          {/* </Box> */}
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
        py={5}
      >
        <Typography
          py={5}
          sx={{ fontSize: 30 }}
          className="font-medium text-secondary"
        >
          Tìm Kiếm Hồ Sơ
        </Typography>
      </Box>
    </Box>
  );
}

export default Service;
