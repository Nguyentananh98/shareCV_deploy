"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import CompanyInfo from "@/modules/posting-job/page/CompanyInfo";
import HomePage from "@/modules/home/page/HomePage";
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
      <HomePage/>
    </Box>
  );
}

export default Home;
