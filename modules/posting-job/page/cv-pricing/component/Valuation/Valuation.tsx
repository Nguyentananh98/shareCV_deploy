"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
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
function Valuation() {
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
  const handleDegreeChange = (index: number, event: any) => {
    const newList = [...degreeList];
    newList[index] = event.target.value;
    setDegreeList(newList);
    setValue("degree", degreeList);
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
    // <Box width="100%" alignItems={"center"} justifyContent={"center"}>
    <Box
      display="flex"
      className="gap-2 border-primary bg-white"
      width="100%"
      flexDirection={"column"}
      alignItems={"top"}
      justifyContent={"right"}
      sx={{border: 1,
        // borderColor: "primary",
        borderRadius: "20px",
        p: 5,
        overflow: "auto",}}
    >
      <Box width="100%" display="flex" justifyContent={"center"}>
        <Typography sx={{ fontSize: 30 }} className="font-semibold text-primary">
          Điểm cứng
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography sx={{ fontSize: 23 }} className="font-semibold text-primary">
          Cấp bậc hiện tại
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"space-between"}>
        <Box
          width="60%"
          height="40px"
          className="border-primary"
          display="flex"
          pl={2}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            Cấp bậc hiện tại
          </Typography>
        </Box>
        <Box
          width="40px"
          height="40px"
          className="border-primary"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            3
          </Typography>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography sx={{ fontSize: 23 }} className="font-semibold text-primary">
          Lương hiện tại
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"space-between"}>
        <Box
          width="60%"
          height="40px"
          className="border-primary"
          display="flex"
          pl={2}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            Lương hiện tại
          </Typography>
        </Box>
        <Box
          width="40px"
          height="40px"
          className="border-primary"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            3
          </Typography>
        </Box>
      </Box>
      <Box width="100%" className="border-primary" mt={2} py={3} sx={{borderTop:1}} display="flex" justifyContent={"center"}>
        <Typography sx={{ fontSize: 30 }} className="font-semibold text-primary">
          Điểm tham chiếu
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography sx={{ fontSize: 23 }} className="font-semibold text-primary">
          Bằng cấp
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"space-between"}>
        <Box
          width="60%"
          height="40px"
          className="border-primary"
          display="flex"
          pl={2}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            Cấp bậc hiện tại
          </Typography>
        </Box>
        <Box
          width="40px"
          height="40px"
          className="border-primary"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            3
          </Typography>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography sx={{ fontSize: 23 }} className="font-semibold text-primary">
          Ngoại ngữ
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"space-between"}>
        <Box
          width="60%"
          height="40px"
          className="border-primary"
          display="flex"
          pl={2}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            Lương hiện tại
          </Typography>
        </Box>
        <Box
          width="40px"
          height="40px"
          className="border-primary"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            3
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Valuation;
