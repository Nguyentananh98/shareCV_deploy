"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import JobDescription from "@/modules/posting-job/page/job-description/JobDescription/JobDescription";
function JobDescriptionPage() {
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
      <JobDescription/>
    </Box>
  );
}

export default JobDescriptionPage;
