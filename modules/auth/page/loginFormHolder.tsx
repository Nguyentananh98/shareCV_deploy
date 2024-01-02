"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { LoginForm } from "../components/login-form";
import Link from "next/link";
import ReturnButton from "@/common/components/button/ReturnButton";
export const LoginFormHolderer = () => {
  return (
    <Box>
      <Box
      display="flex"
      flex={1}
      flexDirection="row"
      py={5}
      justifyContent="center"
      alignItems="center"
      >
        <Box width={"50%"}>
          <ReturnButton/>
        </Box>
        <Box width={"50%"}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="right">
        <Typography>
            Bạn chưa có tài khoản?</Typography>
          <Button sx={{ boxShadow: 5 }} style={{color:"white",backgroundColor:"orange",marginLeft:"5%" ,marginRight:"5%" }} variant="contained">Đăng kí</Button>
        </Box>
      </Box>
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      py={5}
      justifyContent="center"
      alignItems="center"
    >
      <img style={{ borderRadius: "0" }} className="w-100 h-100" src={"/Logo.png"} />
      <Box width="100%" justifyContent="center" maxWidth="600px" className="">
        <Typography display="flex" justifyContent="center" className="font-bold text-orange text-2xl">
          Dành cho nhà tuyển dụng
        </Typography>
        <div className="py-2">
          <LoginForm redirect="/home" />
        </div>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Typography>Chưa có tài khoản?</Typography>
{/*           
            Đăng ký ngay
          </Typography> */}
        </Box>
      </Box>
    </Box>
    </Box>
  );
};
