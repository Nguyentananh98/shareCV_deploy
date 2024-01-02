"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { RegistForm } from "../components/regist-form";
import Link from "next/link";

export const RegisterFormHolder = () => {
  return (
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      py={5}
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100%" maxWidth="600px" className="">
        <Typography className="font-bold text-primary text-2xl">
          Đăng ký tài khoản
        </Typography>
        <div className="py-2">
          <RegistForm redirect="/login" />
        </div>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Typography>Bạn đã có tài khoản?</Typography>
          <Typography
            component={Link}
            href="/login"
            className="text-primary"
            sx={{
              paddingLeft: 1,
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Đăng nhập ngay
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
