"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState, useCallback } from "react";
import { ICompanyInfo, ICompanyInfoResponse } from "@/common/interfaces";
import { Controller, useForm } from "react-hook-form";
import { ILanguageCertificates, IRevaluate } from "@/modules/posting-job/types";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const initialCertificates: ILanguageCertificates = {
  certificate_language: "",
  certificate_name: "",
  certificate_point_level: "",
};
const initialForm: ICompanyInfoResponse = {
  company_name: "",
  industry: "",
  description: "",
  tax_code: "",
  phone: "",
  email: "",
  founded_year: 0,
  company_size: 0,
  address: "",
  city: "",
  country: "",
  logo: "/Logo.png",
  cover_image: null,
  company_images: null,
  company_video: null,
  linkedin: null,
  website: null,
  facebook: null,
  instagram: null,
};
function RevaluateForm() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  const [certificatesList, setCertificatesList] = useState<ILanguageCertificates[]>([initialCertificates]);
  const [degreeList, setDegreeList] = useState<string[]>([""]);

  const handleAddCerti = () => {
    setCertificatesList([...certificatesList, initialCertificates]);
  };
  const handleAddDegree = () => {
    setDegreeList([...degreeList, ""]);
  };

  // Hàm xử lý khi thay đổi giá trị của ô nhập thông tin
  const handleDegreeChange = (index: number, event: any) => {
    const newList = [...degreeList];
    newList[index] = event.target.value;
    setDegreeList(newList);
    setValue("degree", degreeList);
  };
  const handleCerLanChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    console.log("old",newList)
    newList[index].certificate_language = event.target.value;
    console.log("new",newList)
    setCertificatesList(newList);
    console.log("value",certificatesList)
    console.log("index",index)
    setValue("language_certificates", certificatesList);
  };
  const handleCerNameChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_name = event.target.value;
    setCertificatesList(newList);
  };
  const handleCerPointChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_point_level = event.target.value;
    setCertificatesList(newList);
  };
  const handleRemoveCerti = (index: number) => {
    const newList = [...certificatesList];
    newList.splice(index, 1);
    setCertificatesList(newList);
  };
  const handleRemoveDegree = (index: number) => {
    const newList = [...degreeList];
    newList.splice(index, 1);
    setDegreeList(newList);
  };
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isDirty = false, isValid = true },
  } = useForm<IRevaluate>({
    // resolver,
  });
  // useEffect(() => {
  //   try {
  //     getCompanyInfo().then((res) => {
  //       setData(res.data.data);
  //       console.log(res);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);
  return (
    // <Box width="100%" alignItems={"center"} justifyContent={"center"}>
    <Box
      display="flex"
      className="grid grid-cols-10 gap-2"
      width="100%"
      flexDirection={"column"}
      alignItems={"top"}
      justifyContent={"right"}
    >
      <Box display="flex" justifyContent={"center"} className="col-span-10">
        <Typography sx={{ fontSize: 30 }} className="font-bold text-primary">
          Điểm cứng
        </Typography>
      </Box>
      <Box className={"col-span-10"}>
        <Typography sx={{ fontSize: 23 }} className="font-bold text-primary">
          Cấp bậc hiện tại
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection={"column"}
        className="gap-3 col-span-10"
        justifyContent={"space-between"}
        // sx={{ border: 1, borderRadius: "20px" }}
        p={2}
      >
        <Box pr={3} display="flex" flexDirection="row" width="100%">
          <OutlinedInput
            color="primary"
            className="border-primary"
            sx={{ width: "60%" }}
          ></OutlinedInput>
          <Box ml="20%" width="55px">
            <TextField>0.5</TextField>
          </Box>
        </Box>
      </Box>
      <Box className={"col-span-10"}>
        <Typography sx={{ fontSize: 23 }} className="font-bold text-primary">
          Cấp bậc hiện tại
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection={"column"}
        className="gap-3 col-span-10"
        justifyContent={"space-between"}
        // sx={{ border: 1, borderRadius: "20px" }}
        p={2}
      >
        <Box pr={3} display="flex" flexDirection="row" width="100%">
          <OutlinedInput
            color="primary"
            className="border-primary"
            sx={{ width: "60%" }}
          ></OutlinedInput>
          <Box ml="20%" width="55px">
            <TextField>0.5</TextField>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent={"center"} sx={{borderTop:1 }} className="col-span-10 border-primary">
        <Typography mt={1} sx={{ fontSize: 30 }} className="font-bold text-primary">
          Điểm cứng
        </Typography>
      </Box>
      <Box className="col-span-4">
        <Typography sx={{ fontSize: 23 }} className="font-bold text-primary">
          Bằng cấp
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent={"start"}
        width="100%"
        className="col-span-6"
        pr={2}
      >
        <IconButton className="group" onClick={handleAddDegree}>
          <AddBoxOutlinedIcon className="group-hover:bg-green-400 group-hover:text-white text-green-400" />
        </IconButton>
      </Box>
      <Box
        display="flex"
        className={"col-span-10 gap-2"}
        flexDirection={"column"}
      >
        {degreeList.map((input, index) => (
          <Box
            width="100%"
            display="flex"
            flexDirection={"row"}
            className="gap-3"
            justifyContent={"space-between"}
            // sx={{ border: 1, borderRadius: "20px" }}
            p={2}
            key={index}
          >
            <Box
              pr={3}
              sx={{ borderRight: 1, borderColor: "lightgray" }}
              width="60%"
            >
              <Select
                className="bg-white"
                defaultValue={"admin"}
                value={degreeList[index]}
                labelId="demo-simple-select-label"
                onChange={(event) => handleDegreeChange(index, event)}
                sx={{ width: "100%" }}
              >
                <MenuItem value={"admin"}>Tiếng Anh</MenuItem>
                <MenuItem value={"recruiter"}>Tiếng Trung</MenuItem>
              </Select>
            </Box>
            <Box width="55px">
              <TextField>0.5</TextField>
            </Box>
            <IconButton
              className="col-span-2"
              onClick={() => handleRemoveDegree(index)}
            >
              <CancelPresentationIcon className="text-red-500"/>
            </IconButton>
          </Box>
        ))}
      </Box>
      <Box
        className="col-span-4"
        display="flex"
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Typography sx={{ fontSize: 23 }} className="font-bold text-primary">
          Ngoại ngữ
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent={"start"}
        width="100%"
        className="col-span-6"
        pr={2}
      >
        <IconButton className="group" onClick={handleAddCerti}>
          <AddBoxOutlinedIcon className="group-hover:bg-green-400 group-hover:text-white text-green-400" />
        </IconButton>
      </Box>
      <Box
        display="flex"
        className={"col-span-10 gap-2"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        {certificatesList.map((input, index) => (
          <Box
            width="100%"
            display="flex"
            flexDirection={"row"}
            p={2}
            className="gap-3"
            justifyContent={"space-between"}
            // sx={{ border: 1, borderRadius: "20px" }}
            key={index}
          >
            <Box
              width="60%"
              display="flex"
              flexDirection={"column"}
              className="gap-3 border-light-gray"
              sx={{ borderRight: 1, borderColor: "lightgray" }}
              pr={3}
            >
              <Box width="100%">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Enter Your ___ Here
                    </InputLabel>
                    <Select
                      label="Enter Your ___ Here"
                      className="bg-white"
                      defaultValue="admin"
                      value={certificatesList[index].certificate_language}
                      labelId="demo-simple-select-label"
                      onChange={(event) => handleCerLanChange(index, event)}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={"admin"}>Tiếng Anh</MenuItem>
                      <MenuItem value={"recruiter"}>Tiếng Trung</MenuItem>
                    </Select>
                  </FormControl>
              </Box>
              <Box width="100%">
                <Select
                  defaultValue={"admin"}
                  labelId="demo-simple-select-label"
                  onChange={(event) => handleCerNameChange(index, event)}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value={"admin"}>Toeic</MenuItem>
                  <MenuItem value={"recruiter"}>Người tuyển dụng</MenuItem>
                </Select>
              </Box>
              <Box width="100%">
                <Select
                  label="Enter your point"
                  labelId="demo-simple-select-label"
                  onChange={(event) => handleCerPointChange(index, event)}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value={"admin"}>Toeic</MenuItem>
                  <MenuItem value={"recruiter"}>Người tuyển dụng</MenuItem>
                </Select>
              </Box>
            </Box>
            <Box
              width="55px"
              height="100%"
              display={"flex"}
              alignItems={"center"}
            >
              <TextField value="0.5" sx={{ height: "55px" }}>
                
              </TextField>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
            <IconButton
              className="col-span-2"
              onClick={() => handleRemoveCerti(index)}
            >
              <CancelPresentationIcon className="text-red-500"/>
            </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RevaluateForm;
