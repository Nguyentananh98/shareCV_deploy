"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import CompanyInfo from "@/modules/posting-job/page/company-info";
function CompanyInfopage() {
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
    //   height="70vh"
      sx={{overflow:"auto"}}
    >
      <Header/>
      {/* <Box display="flex"
      sx={{overflow:"auto"}}
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"> */}
      <Box display="flex" width="100%" minHeight="400px" maxHeight="500px" sx={{backgroundImage:`url(${"/background-posting-job.png"})`}} justifyContent="center"
      alignItems="center" flex={1}>
       <Typography variant="h3">Thêm vị trí</Typography>
       </Box>
      <CompanyInfo/>
      {/* </Box> */}
      {/* <Typography variant="h2">THIS IS THE HOMEPAGE</Typography>
      <Button
        variant="contained"
        onClick={() => {
          removeAccessCookies();
          window.location.reload();
        }}
      >
        Đăng xuất
      </Button> */}
    </Box>
  );
}

export default CompanyInfopage;
