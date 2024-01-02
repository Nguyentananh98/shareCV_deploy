import { AuthForm } from "@/modules/auth/page";
import { Box, Typography } from "@mui/material";

function LoginPage() {
  return (
    <Box className="flex w-full">
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        minWidth='66.667%'
        height='100vh'
      >
        <AuthForm />
      </Box>
      <Box display="flex" flex={1} border={1} height='100vh'>
        Banner
      </Box>
    </Box>
  );
}

export default LoginPage;
