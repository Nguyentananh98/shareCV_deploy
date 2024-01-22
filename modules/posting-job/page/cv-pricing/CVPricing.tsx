"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState, useCallback } from "react";
import { ICompanyInfo, ICompanyInfoResponse } from "@/common/interfaces";
import { getAccessCookies } from "@/common/helpers/setCookies";
import PdfViewer from "./component/PdfViewer/PdfViewer";
import { Controller, useForm } from "react-hook-form";
import RevaluateForm from "./component/RevaluateForm/RevaluateForm";
import Valuation from "./component/Valuation/Valuation";
import { IRevaluate } from "../../types";

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
function CVPricing() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  const [inputList, setInputList] = useState<string[]>([""]); // Danh sách các ô nhập thông tin
  const [isEdit, setIsEdit] = useState<Boolean>(false);
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
    <Box
      width="100%"
      px={5}
      py={5}
      className="grid grid-cols-12 gap-5  bg-white"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        className="col-span-6"
        // height="200px"
        display="flex"
        flexDirection="row"
        alignItems={"top"}
        justifyContent={"left"}
      >
        <Typography
          sx={{ fontSize: "20px" }}
          className="text-primary font-medium"
        >
          Tổng điểm:
        </Typography>
        <Typography
          sx={{ fontSize: "20px" }}
          className="text-primary font-bold"
        >
          50
        </Typography>
      </Box>
      <Box
        className="col-span-6"
        // height="200px"
        display="flex"
        flexDirection="row"
        alignItems={"top"}
        justifyContent={"right"}
      >
        
        <Button
          variant="outlined"
          sx={{ width: "200px", height: "50px", borderRadius: "20px", ml: 3}}
          className="bg-primary border-primary text-white hover:border-primary hover:bg-white hover:text-primary"
          onClick={()=>setIsEdit(true)}
        >
          Định giá lại
        </Button>
      </Box>
      <Box
        className="col-span-7"
        display="flex"
        height="100%"
        // height="900px"
        flexDirection="row"
        alignItems={"top"}
        justifyContent={"left"}
        sx={{ overflow: "auto" }}
      >
        <PdfViewer url="/Resume-KieuKhanhQuan.pdf" />
      </Box>
      <Box
        className="col-span-5"
        py={"1em"}
        display="flex"
        height="100%"
        flexDirection="column"
        alignItems={"top"}
        justifyContent={"left"}
        sx={{ overflow: "auto" }}
      >
          {isEdit?<RevaluateForm />:  <Valuation/>}
          {/* <Valuation/>
          <RevaluateForm /> */}
        </Box>
    </Box>
  );
}

export default CVPricing;
