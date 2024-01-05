import { getCookie } from "@/common/helpers/getCokkies";
import { LoginFormHolderer } from "@/modules/auth/page";
import { Box, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import VideoPlayer from "@/modules/auth/components/video-player/VideoPlayer"
// import ReturnButton from "@/common/components/button/ReturnButton"
function LoginPage() {
  console.log(getCookie("token"))

  if (getCookie("token")) {
    redirect("/home", RedirectType.replace);
  }
  
  return (
    <Box className="flex w-full">
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        minWidth='60%'
        height='100vh'
        sx={{backgroundColor:"#F8F8FA"}}
      >
        <LoginFormHolderer />
      </Box>
      <Box display="flex" sx={{backgroundImage:`url(${"/login-background.png"})`,backgroundSize: 'cover'}} justifyContent="center"
      alignItems="center" flex={1} border={0} height='100vh'>
        {/* <img src="/login-background.png"/> */}
        {/* Banner */}
        <VideoPlayer/>
        {/* <ReturnButton/> */}
      </Box>
    </Box>
  );
}

export default LoginPage;
