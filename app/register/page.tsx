import { getCookie } from "@/common/helpers/getCokkies";
import { RegisterFormHolder } from "@/modules/auth/page";
import { Box, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";

function RegisterPage() {

  if (getCookie("token")) {
    redirect("/home", RedirectType.replace);
  }
  
  return (
    <Box className="flex w-full">
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        minWidth='66.667%'
        height='100vh'
      >
        <RegisterFormHolder />
      </Box>
      {/* <Box display="flex" flex={1} border={1} height='100vh'>
        Banner
      </Box> */}
    </Box>
  );
}

export default RegisterPage;
