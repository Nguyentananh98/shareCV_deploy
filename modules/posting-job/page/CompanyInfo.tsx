"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CardCarousel } from "../component/Carousel/CardCarousel";
import ReactPlayer from "react-player";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState } from "react";
import { ICompanyInfo } from "@/common/interfaces";
import { getAccessCookies } from "@/common/helpers/setCookies";
const initialForm: ICompanyInfo = {
  company_name: "",
  industry: "",
  description: "",
  tax_code: "",
  phone: "",
  email: "",
  founded_year: 0,
  company_size: 0,
  address: "",
  city: "",
  country: "",
  logo: null,
  cover_image: null,
  company_images: null,
  company_video: null,
  linkedin: null,
  website: null,
  facebook: null,
  instagram: null,
};
function CompanyInfo() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [data,setData] = useState<ICompanyInfo>(initialForm);
  useEffect(() => {
    try {
      getCompanyInfo().then(res => {
        setData(res.data);
        console.log(res);
      })
    } catch(e){
      console.log(e)
    }
  }, [])
  return (
    <Box
      sx={{ mt: 10 }}
      // display="flex"
      width="80%"
      // flexDirection="column"
      alignItems="center"
      // py={5}
      justifyContent="center"
    >
      <Grid
        container
        spacing={5}
        py={5}
        px={5}
        className="flex w-full"
        // height="700px"
        sx={{
          backgroundSize: "cover",
          backgroundColor: "rgba(217, 217, 217, 0.1)",
        }}
      >
        <Grid
          item
          xs={8}
          height="100px"
          display="flex"
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"left"}
        >
          <Image src="/Logo.png" height={100} width={100} alt="" />
          <Box display="flex" flexDirection="column">
            <Typography>{data.company_name}</Typography>
            <Typography>{data.website}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          height="100px"
          justifyContent={"right"}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"right"}
            sx={
              {
                // p: 3,
              }
            }
          >
            <Button
              component={Link}
              href="/posting-job/company-info-registry"
              sx={{ boxShadow: 5 }}
              style={{
                color: "white",
                // backgroundColor: "primary",
                borderRadius: 10,
                // marginRight: "5%",
              }}
              variant="contained"
            >
              Chỉnh sửa
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          display="flex"
          flexDirection="column"
          alignItems={"left"}
          justifyContent={"left"}
        >
          <Box
            py={5}
            className={"border-primary"}
            sx={{
              borderTop: 1,
              borderBottom: 1,
            }}
          >
            <Typography
              className="text-secondary"
              variant="h6"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Mô tả công ty
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {data.description}
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"left"}
            sx={{ pt: 3 }}
          >
            <Typography
              className="text-secondary"
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Hình ảnh
            </Typography>
            <CardCarousel />
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"left"}
            sx={{ pt: 3 }}
          >
            <Typography
              className="text-secondary"
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Video
            </Typography>
            <Box
              sx={{
                "& .player-wrapper": {
                  width: "auto",
                  // Reset width
                  height: "auto",
                },
                "& .react-player": {
                  width: "500px",
                  paddingTop: "0", // Percentage ratio for 16:9
                  position: "relative", // Set to relative}
                },
                "& .react-player > div": {
                  position: "absolute", // Scaling will occur since parent is relative now
                },
              }}
            >
              <ReactPlayer
                width="100%"
                height={"200px"}
                controls
                file="mp4"
                url="/video.mp4"
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          width="100%"
          xs={4}
          display="flex"
          flexDirection="column"
          justifyContent={"right"}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"right"}
            sx={
              {
                // p: 3,
              }
            }
          >
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"right"}
              className="border-primary"
              sx={{
                color: "black",
                border: 1,
                // borderColor: "primary",
                borderRadius: "20px",
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                className="text-secondary"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  extDecoration: "none",
                }}
              >
                Thông tin công ty
              </Typography>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Ngành Nghề
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.industry}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Số điện thoại
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.phone}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Email công ty
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.email}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Quy mô
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.company_size}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Năm thành lập
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.founded_year}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Mã số thuế
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.tax_code}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Quốc gia
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.country}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                className={"text-secondary"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Tình/ Thành phố
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.city}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                className={"text-secondary"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Địa chỉ
                </Typography>
                <Typography
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {data.address}
                </Typography>
              </Box>
            </Box>
            <Box
              mt={5}
              // py={20}
              sx={{
                backgroundImage: `url(${"/map.png"})`,
                borderRadius: "20px",
              }}
              display="flex"
              position="relative"
              alignItems="center"
              justifyContent="center"
              // zIndex={2}
              height="200px"
              width="100%"
            >
              <Button
                href="/register"
                sx={{
                  textTransform: "none",
                  boxShadow: 5,
                  color: "white",
                  borderRadius: 3,
                }}
                variant="contained"
                color="primary"
              >
                View map
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompanyInfo;
