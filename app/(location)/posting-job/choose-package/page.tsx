"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import ChoosePackage from "@/modules/posting-job/page/choose-package/ChoosePackage";
import CvInfoPage from "@/modules/cv-info/pages/CvInfoPage";
function ChoosePackagePage() {
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{overflow:"auto"}}
    >
      <CvInfoPage/>
    </Box>
  );
}

export default ChoosePackagePage;
