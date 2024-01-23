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
import {
  ICompanyInfo,
  ICompanyInfoResponse,
  ValuateCV,
} from "@/common/interfaces";
import { Controller, useForm } from "react-hook-form";
import { ILanguageCertificates, IRevaluate } from "@/modules/posting-job/types";

function Valuation({ data }: { data: ValuateCV }) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  return (
    // <Box width="100%" alignItems={"center"} justifyContent={"center"}>
    <Box
      display="flex"
      className="gap-2 border-primary bg-white"
      width="100%"
      flexDirection={"column"}
      alignItems={"top"}
      justifyContent={"right"}
      sx={{
        border: 1,
        // borderColor: "primary",
        borderRadius: "20px",
        p: 5,
        overflow: "auto",
      }}
    >
      <Box width="100%" display="flex" justifyContent={"center"}>
        <Typography
          sx={{ fontSize: 30 }}
          className="font-semibold text-primary"
        >
          Điểm cứng
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography
          sx={{ fontSize: 23 }}
          className={
            data && data.hard_item.level
              ? "text-primary font-semibold"
              : "text-gray font-semibold"
          }
        >
          Cấp bậc hiện tại
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"space-between"}>
        <Box
          width="60%"
          height="40px"
          className={
            data && data.hard_item.level ? "border-primary" : "border-gray"
          }
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
            {data && data.hard_item.level ? data.hard_item.level : ""}
          </Typography>
        </Box>
        <Box
          width="40px"
          height="40px"
          className={data.hard_item.level ? "border-primary" : "border-gray"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            {data.hard_item.level ? data.hard_point : ""}
          </Typography>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography
          sx={{ fontSize: 23 }}
          className="font-semibold text-primary"
        >
          Lương hiện tại
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"space-between"}>
        <Box
          width="60%"
          height="40px"
          className={
            data && data.hard_item.salary ? "border-primary" : "border-gray"
          }
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
            {data && data.hard_item.salary ? data.hard_item.salary : ""}
          </Typography>
        </Box>
        <Box
          width="40px"
          height="40px"
          className={data.hard_item.level ? "border-primary" : "border-gray"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            className="font-medium text-primary"
          >
            {data.hard_item.salary ? data.hard_point : ""}
          </Typography>
        </Box>
      </Box>
      <Box
        width="100%"
        className="border-primary"
        mt={2}
        py={3}
        sx={{ borderTop: 1 }}
        display="flex"
        justifyContent={"center"}
      >
        <Typography
          sx={{ fontSize: 30 }}
          className="font-semibold text-primary"
        >
          Điểm tham chiếu
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography
          sx={{ fontSize: 23 }}
          className="font-semibold text-primary"
        >
          Bằng cấp
        </Typography>
      </Box>
      {data &&
        data.degrees.map((item, index) => (
          <Box
            key={index}
            width="100%"
            display="flex"
            justifyContent={"space-between"}
          >
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
                {`${item}`}
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
                0.5
              </Typography>
            </Box>
          </Box>
        ))}
      <Box width="100%" display="flex" justifyContent={"start"}>
        <Typography
          sx={{ fontSize: 23 }}
          className="font-semibold text-primary"
        >
          Ngoại ngữ
        </Typography>
      </Box>
      {data &&
        data.certificates.map((item, index) => (
          <Box
            key={index}
            width="100%"
            display="flex"
            justifyContent={"space-between"}
          >
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
                {`${item.certificate_language} - ${item.certificate_name} - ${item.certificate_point_level}`}
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
                0.5
              </Typography>
            </Box>
          </Box>
        ))}
    </Box>
  );
}

export default Valuation;
