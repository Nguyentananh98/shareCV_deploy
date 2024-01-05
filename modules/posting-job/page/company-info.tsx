"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import Title from "../component/title/Title";
function CompanyInfo() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }

  return (
    <Box
      sx={{mt:10}}
      // display="flex"
      width="80%"
      // flexDirection="column"
      // alignItems="center"
      // py={5}
      // justifyContent="center"
    >
      <Title companyName="name" map="link" image="image"/>
      
    </Box>
  );
}

export default CompanyInfo;
