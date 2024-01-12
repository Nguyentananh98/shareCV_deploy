"use client";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header";
import CompanyInfoRegistry from "@/modules/posting-job/page/CompanyInfoRegistry";
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
      sx={{ overflow: "auto" }}
    >
      <Header />
      <Box
        display="flex"
        width="100%"
        height="200px"
        py={3}
        sx={{ backgroundColor: "#FFF5C7" }}
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Typography variant="h4">Thêm vị trí</Typography>
      </Box>

      <Box
        // position = "relative"
        mt={5}
        display="flex"
        width="80%"
        // justifyContent="center"
        // alignItems="center"
        flex={1}
        // py={10}
      >
        <CompanyInfoRegistry/>
      </Box>
    </Box>
  );
}

export default CompanyInfopage;
