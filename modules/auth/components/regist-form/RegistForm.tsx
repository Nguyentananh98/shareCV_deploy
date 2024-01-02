"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { IUserRegister } from "../../types";
import { resolver } from "./resolver";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {
  Email,
  EmailOutlined,
  LocalPhoneOutlined,
  Lock,
  LockOutlined,
  Person,
  SubtitlesOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { register } from "@/common/apis/auth";

export const RegistForm = ({
  redirect,
  onSuccess,
}: {
  redirect?: string;
  onSuccess?: () => void;
}) => {
  const navigate = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<IUserRegister>({
    resolver,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleCheckbox = (event: any) => {
    setChecked(event.target.checked);
  };

  const onSubmit = handleSubmit(async (data) => {
    const res = await register(
      data.name,
      data.email,
      data.phone,
      data.password,
      data.confirmPassword,
      data.taxCode,
    );

    if (res.status !== 200) {
      console.log(res);
      setError("root", { message: "Đăng ký thất bại" });
      return;
    }

    if (redirect) {
      return navigate.replace(redirect);
    }

    if (onSuccess) {
      return onSuccess();
    }
    window.location.reload();
  });

  return (
    <form onSubmit={onSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        className="grid grid-cols-1 gap-9"
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Họ và tên</Typography>
              <OutlinedInput
                id="name"
                {...field}
                fullWidth
                error={errors.email ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.name?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Email</Typography>
              <OutlinedInput
                id="email"
                {...field}
                fullWidth
                error={errors.email ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.email?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Điện thoại</Typography>
              <OutlinedInput
                id="phone"
                {...field}
                fullWidth
                error={errors.email ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <LocalPhoneOutlined />
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.phone?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="taxCode"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Mã số thuế</Typography>
              <OutlinedInput
                id="taxCode"
                {...field}
                fullWidth
                error={errors.email ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <SubtitlesOutlined />
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.taxCode?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Mật khẩu</Typography>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                {...field}
                fullWidth
                error={errors.password ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.password?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Xác nhận mật khẩu</Typography>
              <OutlinedInput
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                {...field}
                fullWidth
                error={errors.confirmPassword ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.password?.message}
              </Typography>
            </Box>
          )}
        />
        <Box display="flex" alignItems="center">
          <Checkbox checked={checked} onChange={handleCheckbox} />
          <Typography>Tôi đã đọc và đồng ý với</Typography>
          <Typography
            className="text-primary"
            sx={{
              paddingLeft: 1,
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Điều khoản dịch vụ
          </Typography>
          <Typography
            sx={{
              paddingLeft: 1,
            }}
          >
            và
          </Typography>
          <Typography
            className="text-primary"
            sx={{
              paddingLeft: 1,
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Chính sách bảo mật
          </Typography>
        </Box>

        <Button
          type="submit"
          disabled={(isDirty && !isValid) || !checked}
          variant="contained"
          sx={{ textTransform: "none", py: 1 }}
        >
          <Typography className="font-bold">Đăng ký</Typography>
        </Button>
      </Box>
    </form>
  );
};
