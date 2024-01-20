"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header";
import CVPricing from "@/modules/posting-job/page/cv-pricing/CVPricing";
import Sample from "@/modules/posting-job/page/cv-pricing/component/PdfViewer/PdfViewer";
function CVPricingPage() {
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
      <Box
        className="bg-tertiary"
        display="flex"
        width="100%"
        height="200px"
        py={3}
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Typography className="font-semibold text-primary" variant="h4">
          Định giá điểm CV
        </Typography>
      </Box>
      <Box
        // position = "relative"
        mt={5}
        display="flex"
        width="100%"
        px={"120px"}
        // justifyContent="center"
        // alignItems="center"
        flex={1}
        // py={10}
      >
        <CVPricing />
      </Box>
    </Box>
  );
}

export default CVPricingPage;
