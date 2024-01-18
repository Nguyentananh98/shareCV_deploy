"use client";
import {
  Box,
  Button,
  Grid,
  MenuItem,
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
  const [certificatesList, setCertificatesList] = useState<
    ILanguageCertificates[]
  >([initialCertificates]);
  const [degreeList, setDegreeList] = useState<string[]>([""]);

  const handleAddCerti = () => {
    setCertificatesList([...certificatesList, initialCertificates]);
  };
  const handleAddDegree = () => {
    setDegreeList([...degreeList, ""]);
  };

  // Hàm xử lý khi thay đổi giá trị của ô nhập thông tin
  const handleCerLanChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_language = event.target.value;
    setCertificatesList(newList);
    setValue("language_certificates", certificatesList);
  };
  const handleCerNameChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_name = event.target.value;
    setCertificatesList(newList);
  };
  const handleCerPointChange = (index: number, value: string) => {
    const newList = [...certificatesList];
    newList[index].certificate_point_level = value;
    setCertificatesList(newList);
  };
  const handleRemoveInput = (index: number) => {
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
    <Box width="100%" alignItems={"center"} justifyContent={"center"}>
      <Box
        display="flex"
        width="100%"
        flexDirection={"column"}
        alignItems={"top"}
        justifyContent={"right"}
      >
        <Box
          className="gap-3"
          display="flex"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pr="20%"
          py={2}
        >
          <Typography className="font-bold text-primary">Bằng cấp</Typography>
          <Button variant="contained" onClick={handleAddDegree}>
            Thêm
          </Button>
        </Box>
        <Box display="flex" className={"gap-5"} flexDirection={"column"}>
          {degreeList.map((input, index) => (
            <Box
              width="100%"
              display="flex"
              flexDirection={"row"}
              className="gap-3"
              key={index}
            >
              <Box
                width="100%"
                display="flex"
                flexDirection={"column"}
                className="gap-3"
                key={index}
              >
                <Box
                  display="flex"
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  width="100%"
                >
                  <Box width="80%">
                    <Select
                      className="bg-white"
                      defaultValue={"none"}
                      labelId="demo-simple-select-label"
                      onChange={(event) => handleCerLanChange(index, event)}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={"admin"}>Tiếng Anh</MenuItem>
                      <MenuItem value={"recruiter"}>Tiếng Trung</MenuItem>
                    </Select>
                  </Box>
                  <Box width="15%" className="bg-white">
                    <TextField>0.5</TextField>
                  </Box>
                </Box>

              </Box>
              <Button
                variant="contained"
                onClick={() => handleRemoveDegree(index)}
              >
                Xoá
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          className="gap-3"
          display="flex"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pr="20%"
          py={2}
        >
          <Typography className="font-bold text-primary">Ngoại ngữ</Typography>
          <Button variant="contained" onClick={handleAddCerti}>
            Thêm
          </Button>
        </Box>
        <Box display="flex" className={"gap-5"} flexDirection={"column"}>
          {certificatesList.map((input, index) => (
            <Box
              width="100%"
              display="flex"
              flexDirection={"row"}
              className="gap-3"
              key={index}
            >
              <Box
                width="100%"
                display="flex"
                flexDirection={"column"}
                className="gap-3"
                key={index}
              >
                <Box
                  display="flex"
                  flexDirection={"row"}
                  className="gap-5"
                  width="80%"
                >
                  <Box width="100%">
                    <Select
                      className="bg-white"
                      defaultValue={"none"}
                      labelId="demo-simple-select-label"
                      onChange={(event) => handleCerLanChange(index, event)}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={"admin"}>Tiếng Anh</MenuItem>
                      <MenuItem value={"recruiter"}>Tiếng Trung</MenuItem>
                    </Select>
                  </Box>
                </Box>
                <Box width="80%">
                  <Box>
                    <Select
                      defaultValue={"none"}
                      labelId="demo-simple-select-label"
                      onChange={(event) => handleCerNameChange(index, event)}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={"admin"}>Toeic</MenuItem>
                      <MenuItem value={"recruiter"}>Người tuyển dụng</MenuItem>
                    </Select>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  sx={{ height: "50px" }}
                  variant="contained"
                  onClick={() => handleRemoveInput(index)}
                >
                  Xoá
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default RevaluateForm;
