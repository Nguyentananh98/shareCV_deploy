"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import CompanyInfo from "@/modules/posting-job/page/CompanyInfo";
import HomePage from "@/modules/home/page/HomePage";
import Introduce from "@/modules/home/section/introduce/Introduce";
import Service from "@/modules/home/section/service/Service";
import WhyUs from "@/modules/home/section/why-us/WhyUs";
function Home() {
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      sx={{overflow:"auto"}}
    >
      <Introduce/>
      <Service/>
      <WhyUs/>
    </Box>
  );
}

export default Home;
