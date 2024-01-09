"use client";
import {
  Box,
  Button,
  Grid,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";
import { ExtFile } from "@files-ui/react";
import { Controller, useForm } from "react-hook-form";
import { ICompanyInfo } from "../../types";
import { addCompany } from "@/common/apis/posting-job";
import { ImageUpload } from "../ImageUpload";
import { ImageListType } from "react-images-uploading";
import {
  convertToReduceImageList,
  convertToImageListType,
} from "../ImageUpload/imageUpload";
import { ITitleImageItem } from "../../types";
function RegistryForm() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [formImageList, setFormImageList] = useState<ITitleImageItem[]>([]);
  const [formData, setFormData] = useState(new FormData());
  const [logo, setLogo] = useState<File>();
  const handleFileChange = (imageList: ImageListType) => {
    // setFile(imageList)
    console.log(imageList);
    // setFormData({file: {uploadedFile});
    setValue("file", convertToReduceImageList(imageList));
    setFormImageList((prev) => convertToReduceImageList(imageList));
  };
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isDirty = false, isValid = true },
  } = useForm<ICompanyInfo>({
    // resolver,
  });
  const onSubmit = handleSubmit(async (data) => {
    const res = await addCompany(data);

    if (res.status !== 200) {
      console.log(res);
      setError("root", { message: "Đăng nhập thất bại" });
      return;
    }

    console.log(res);
    window.location.reload();
  });
  return (
    <form onSubmit={onSubmit}>
      <Box
        width="100%"
        className="grid grid-cols-10 gap-10"
        alignItems={"center"}
        justifyContent={"center"}
        sx={
          {
            // backgroundSize: "contain"
            //   border: 1,
          }
        }
      >
        <Box
          className="col-span-10"
          height="100px"
          display="flex"
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"left"}
        >
          <Typography variant="h4" className="text-secondary font-bold">
            Thông tin công ty*
          </Typography>
        </Box>
        <Box
          className="col-span-3"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="logo"
            render={({ field }) => (
              <ImageUpload
                title="Logo công ty"
                decription="tối đa"
                onChange={handleFileChange}
                noEdit={false}
                isMultiple={true}
                imageList={convertToImageListType(formImageList)}
              />
            )}
          />
        </Box>
        <Box
          className="col-span-7"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <ImageUpload
                title="Ảnh bìa"
                decription="tối đa"
                onChange={handleFileChange}
                noEdit={false}
                isMultiple={true}
                imageList={convertToImageListType(formImageList)}
              />
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          // height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Tên công ty
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <EmailOutlined />
                  //   </InputAdornment>
                  // }
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                  //   startAdornment={
                  //     <InputAdornment position="start">
                  //       <EmailOutlined />
                  //     </InputAdornment>
                  //   }
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          // height="300px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  multiline
                  rows={6}
                  label="Outlined"
                  sx={{
                    backgroundColor: "white",
                    // height: "90%",
                    width: "100%",
                    mt:2
                  }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <EmailOutlined />
                  //   </InputAdornment>
                  // }
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="coverImage"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-secondary">
                  Email
                </Typography>
                <TextField
                  
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="logo"
            render={({ field }) => (
              <ImageUpload
                title="Logo công ty"
                decription="tối đa"
                onChange={handleFileChange}
                noEdit={false}
                isMultiple={true}
                imageList={convertToImageListType(formImageList)}
              />
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="logo"
            render={({ field }) => (
              <ImageUpload
                title="Logo công ty"
                decription="tối đa"
                onChange={handleFileChange}
                noEdit={false}
                isMultiple={true}
                imageList={convertToImageListType(formImageList)}
              />
            )}
          />
        </Box>
      </Box>
    </form>
  );
}

export default RegistryForm;
