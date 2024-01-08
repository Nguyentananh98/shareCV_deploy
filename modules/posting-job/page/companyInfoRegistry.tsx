"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import Title from "../component/title/Title";
function CompanyInfoRegistry() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }

  return (
    <Box
      sx={{mt:10}}
      width="80%"
    >
      <Title companyName="name" map="link" image="image"/>
      
    </Box>
  );
}

export default CompanyInfoRegistry;
