"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState, useCallback } from "react";
import { ICompanyInfo, ICompanyInfoResponse } from "@/common/interfaces";
import { getAccessCookies } from "@/common/helpers/setCookies";
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.min.js")

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;
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
  const [file, setFile] = useState<PDFFile>("./Resume-KieuKhanhQuan.pdf");
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }
  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
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
      className="grid grid-cols-10 gap-10  bg-secondary"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ borderRadius: "5px", backgroundColor: "rgba(217, 217, 217, 0.2)" }}
    >
      <Box
        className="col-span-5"
        height="300px"
        display="flex"
        flexDirection="row"
        alignItems={"center"}
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
        className="col-span-5"
        height="300px"
        display="flex"
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"right"}
      >
        <Button
          variant="outlined"
          sx={{ width: "200px", height: "50px", borderRadius: "20px" }}
          className="bg-primary border-primary text-white hover:border-primary hover:bg-white hover:text-primary"
          type="submit"
        >
          Xem Kết Quả AI
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "200px", height: "50px", borderRadius: "20px", ml: 3 }}
          className="bg-primary border-primary text-white hover:border-primary hover:bg-white hover:text-primary"
          type="submit"
        >
          Định giá lại
        </Button>
      </Box>
      <Box
        className="col-span-5"
        display="flex"
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={500}
                renderAnnotationLayer={false}
              renderTextLayer={false}
              />
            ))}
          </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      </Box>
    </Box>
  );
}

export default CVPricing;
