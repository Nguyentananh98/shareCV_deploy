"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SearchCV from "@/common/components/search-cv/SearchCV";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import React from "react";
function HomePage() {
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
      sx={{
        backgroundImage: `url(${"/home-background.png"})`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        py={5}
        sx={{ fontSize: 30 }}
        className="font-medium text-secondary"
      >
        Tìm Kiếm Hồ Sơ
      </Typography>
      <SearchCV />
      <Box mt={10} display={"flex"} flexDirection={"row"}>
        <Box mt={5} width={"60%"} display={"flex"} flexDirection={"column"}>
          <Typography>
            Trusted by leading brands and big corporations
          </Typography>
          <Box width="100%" display={"flex"} flexDirection={"column"}>
            <img
              width="70%"
              src={"/trust1.png"}
              style={{ objectFit: "contain", maxWidth: "100%" }}
              alt={""}
            />
            <img
              src={"/trust2.png"}
              width="60%"
              style={{ objectFit: "contain", maxWidth: "100%" }}
              alt={""}
            />
          </Box>
          <Box
            my={10}
            p={5}
            width="100%"
            height="400px"
            className={"bg-primary"}
            position={"relative"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Box width="40%" display="flex" flexDirection={"column"}>
              <Typography fontSize={30} className="text-white font-medium">
                Đồng hành cùng ShareCV
              </Typography>
              <Typography fontSize={30} className="text-white font-medium">
                Tìm kiếm ứng viên xuất sắc
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  width: "200px",
                  color: "white",
                  border: 1,
                  borderColor: "white",
                  "&:hover": {
                    color: "orange",
                    backgroundColor: "white",
                  },
                }}
              >
                Xem Thêm
              </Button>
            </Box>
            <Box
              display="flex"
              sx={{
                p: 5,
                width: "60%",
                "&:hover": {
                  backgroundColor: "gba(217, 217, 217, 0.9)",
                },
              }}
            >
              <div
                className={`video-player ${isPlaying ? "playing" : ""} w-full`}
              >
                {!isPlaying && (
                  <Box
                    width="100%"
                    height="300px"
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      p: 5,
                      backdropFilter: "blur(2px)",
                      backgroundColor: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "white",
                        p: 0,
                        height: 100,
                        width: 100,
                        borderRadius: "50%",
                        "&:hover": {
                          backgroundColor: "gba(217, 217, 217, 0.9)",
                        },
                      }}
                      onClick={handlePlayClick}
                    >
                      <FaRegPlayCircle
                        style={{
                          padding: 0,
                          // stroke: "white",
                          color: "#FFD530",
                          height: 100,
                          width: "100%",
                        }}
                      />
                    </IconButton>
                  </Box>
                )}
                {isPlaying && (
                  <Box
                    sx={{
                      "& .player-wrapper": {
                        width: "auto",
                        height: "auto",
                      },
                      "& .react-player": {
                        width: "100%",
                      },
                    }}
                  >
                    <ReactPlayer
                      width="100%"
                      height={"500px"}
                      controls
                      file="mp4"
                      url="./video.mp4"
                    />
                  </Box>
                )}
              </div>
            </Box>
          </Box>
          <Box width="100%" p={5} mt={10} display={"flex"} flexDirection={"column"}>
            <Typography variant="h4" className="text-secondary font-medium">
              NỀN TẢNG SỬ DỤNG AI
            </Typography>
            <Typography variant="h4" mt={5} className="text-primary font-medium">
              TINH GỌN QUY TRÌNH TUYỂN DỤNG
            </Typography>
          </Box>
        </Box>
        <Box mt={5} width={"40%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
            <img
              width="70%"
              src={"/pic1.png"}
              style={{ objectFit: "contain", maxWidth: "100%" }}
              alt={""}
            />
            <img
              width="70%"
              src={"/home-robot.png"}
              style={{ objectFit: "contain", maxWidth: "100%" }}
              alt={""}
            />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
