"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
function Homepage() {
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
    >
      <Header/>
      <Typography variant="h2">THIS IS THE HOMEPAGE</Typography>
      <Button
        variant="contained"
        onClick={() => {
          removeAccessCookies();
          window.location.reload();
        }}
      >
        Đăng xuất
      </Button>
    </Box>
  );
}

export default Homepage;
