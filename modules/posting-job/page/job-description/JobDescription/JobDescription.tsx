"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState } from "react";
import { ICompanyInfo, ICompanyInfoResponse } from "@/common/interfaces";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { getAccessCookies } from "@/common/helpers/setCookies";
const initialForm: ICompanyInfoResponse = {
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
  logo: "/Logo.png",
  cover_image: null,
  company_images: null,
  company_video: null,
  linkedin: null,
  website: null,
  facebook: null,
  instagram: null,
};
function JobDescription() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  useEffect(() => {
    try {
      getCompanyInfo().then((res) => {
        setData(res.data.data);
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Box width="100%">
      <Box
        display="flex"
        width="100%"
        minHeight="400px"
        maxHeight="500px"
        sx={{ backgroundImage: `url(${"/background-posting-job.png"})` }}
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Typography variant="h3">Thêm vị trí</Typography>
      </Box>

      <Box
        sx={{ mt: 10 }}
        px={"120px"}
        width="100%"
        alignItems="center"
        // py={5}
        justifyContent="center"
      >
        <Grid
          container
          spacing={2}
          py={5}
          className="flex w-full"
          sx={{
            backgroundSize: "cover",
          }}
        >
          <Grid
            item
            xs={12}
            height="50px"
            display="flex"
            flexDirection="row"
            justifyContent={"space-between"}
          >
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display="flex" className="gap-3">
                <Typography
                  className="font-medium text-green-400"
                  sx={{ fontSize: "16px" }}
                >
                  {data.company_name?data.company_name:"Đang tuyển"}
                </Typography>
                <Typography className="font-medium text-primary">
                  {data.company_name?data.company_name:"Đăng tin tuyển dụng"}
                </Typography>
              </Box>
              <Typography className="font-bold text-primary">
                  Tạm dừng
                </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            height="200px"
            display="flex"
            flexDirection="column"
            alignItems={"left"}
            justifyContent={"left"}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              justifyContent={"left"}
            >
              <Image
                src={data.logo ? data.logo : "/Logo.png"}
                height={100}
                width={100}
                alt=""
              />
              <Box
                display="flex"
                py={1}
                height="100%"
                flexDirection="column"
                alignContent={"top"}
                justifyContent={"space-between"}
              >
                <Typography className="font-bold text-primary">
                  {data.company_name}
                </Typography>
                <Typography className="font-bold text-tertiary">
                  {data.company_name}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                flexDirection="row"
                py={3}
                alignContent={"top"}
              >
                <FmdGoodOutlinedIcon />
                <Typography className="font-bold text-green-400">
                  {data.address}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            className="gap-5"
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
                className="hover:text-primary"
                href=""
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
                className="hover:text-primary"
                href=""
                sx={{ boxShadow: 5 }}
                style={{
                  color: "white",
                  // backgroundColor: "primary",
                  borderRadius: 10,
                  // marginRight: "5%",
                }}
                variant="contained"
              >
                Tạo bản sao
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
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Mô tả công việc
              </Typography>
              <Typography sx={{ mt: 2 }}>{data.description}</Typography>
            </Box>
            <Box
              py={5}
              className={"border-primary"}
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Yêu cầu
              </Typography>
              <Typography sx={{ mt: 2 }}>{data.description}</Typography>
            </Box>
            <Box
              py={5}
              className={"border-primary"}
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Quyền lợi
              </Typography>
              <Typography sx={{ mt: 2 }}>{data.description}</Typography>
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
                className="border-primary bg-secondary"
                sx={{
                  color: "black",
                  // border: 1,
                  // borderColor: "primary",
                  borderRadius: "20px",
                  p: 5,
                }}
              >
                <Typography
                  variant="h6"
                  className="text-primary"
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
                    className={"text-primary"}
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
                    className={"text-primary"}
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
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            className="bg-secondary"
            display="flex"
            flexDirection="column"
            alignItems={"left"}
            justifyContent={"left"}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              className={"border-primary"}
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Mô tả công việc
              </Typography>
              <Box
                className="bg-tertiary"
                width="200px"
                display="flex"
                my={2}
                p={2}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ borderRadius: "20px" }}
              >
                <Typography>{data.description}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default JobDescription;
