"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { ICompanyInfoResponse } from "@/common/interfaces";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";
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
function ChoosePackage() {
  const [allowView, setAllowView] = useState<boolean>(false);
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  return (
    <Box
      width={allowView ? "60%" : "100%"}
      px={5}
      py={5}
      className="bg-white"
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      <Box
        width="100%"
        px={5}
        py={5}
        className="bg-white"
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Box
          p={5}
          className="bg-background"
          display="flex"
          flexDirection="column"
          alignItems={"left"}
          justifyContent={"left"}
          sx={{ borderRadius: "20px" }}
        >
          <Box
            width="100%"
            display={"flex"}
            className={"border-primary"}
            justifyContent={"space-between"}
            sx={{
              border: 1,
              // borderBottom: 1,
            }}
          >
            <Box display="flex">
              <Image
                src={data.logo ? data.logo : "/Logo.png"}
                height={100}
                width={100}
                alt=""
              />
              <Box
                display="flex"
                py={1}
                flexDirection={"column"}
                justifyContent={"space-between"}
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
                  Tên ứng viên
                </Typography>
                <Typography
                  className="text-primary"
                  variant="h6"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Tên ứng viên
                </Typography>
              </Box>
            </Box>
            <Box
              className="bg-secondary"
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
          <Box
            width="100%"
            display={"flex"}
            flexDirection={"column"}
            className={"border-primary"}
            justifyContent={"space-between"}
            sx={{
              border: 1,
              // borderBottom: 1,
            }}
          >
            <Typography
              className="text-primary"
              sx={{
                fontSize: "16px",
                display: { xs: "none", md: "flex" },
                fontWeight: 200,
                textDecoration: "none",
              }}
            >
              Ngày sinh:
            </Typography>
            <Typography
              className="text-primary"
              sx={{
                fontSize: "16px",
                display: { xs: "none", md: "flex" },
                fontWeight: 200,
                textDecoration: "none",
              }}
            >
              Tuổi
            </Typography>
            <Typography
              className="text-primary"
              sx={{
                fontSize: "16px",
                display: { xs: "none", md: "flex" },
                fontWeight: 200,
                textDecoration: "none",
              }}
            >
              Giới tính
            </Typography>
          </Box>
          <Box
            width="100%"
            display={"flex"}
            flexDirection={"column"}
            className={"border-primary"}
            justifyContent={"space-between"}
            sx={{
              border: 1,
              // borderBottom: 1,
            }}
          >
            <Typography
                  className="text-primary"
                  sx={{
                    mt: 3,
                    mb:1,
                    display: { xs: "none", md: "flex" },
                    fontSize: "25px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Tên ứng viên
            </Typography>
            <Typography
              className="text-primary"
              sx={{
                fontSize: "16px",
                display: { xs: "none", md: "flex" },
                fontWeight: 200,
                textDecoration: "none",
              }}
            >
              Ngày sinh:
            </Typography>
            <Typography
              className="text-primary"
              sx={{
                fontSize: "16px",
                display: { xs: "none", md: "flex" },
                fontWeight: 200,
                textDecoration: "none",
              }}
            >
              Tuổi
            </Typography>
            <Typography
              className="text-primary"
              sx={{
                fontSize: "16px",
                display: { xs: "none", md: "flex" },
                fontWeight: 200,
                textDecoration: "none",
              }}
            >
              Giới tính
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default ChoosePackage;
