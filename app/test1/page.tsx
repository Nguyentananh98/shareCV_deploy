"use client";
import {
  FileInputButton,
  FileCard,
  ExtFile,
  FileMosaic,
} from "@files-ui/react";
import * as React from "react";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box } from "@mui/material";

export default function UploadFile(
  onFileChange: (uploadedFile: ExtFile[]) => void,
  IsList: Boolean = false,
  IsRequired: Boolean
) {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles: ExtFile[]) => {
    //do something with the files
    
    setFiles(incommingFiles);
    // onFileChange(incommingFiles);
    console.log(files)
    //even your own upload implementation
  };
  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
    console.log(files)
  };
  const handleFinishUpload = (uploadedFiles: ExtFile[]) => {
    console.log("Upload has finished", uploadedFiles);
  };
  return (
    <div style={{height:"200px"}}>
    <Box
      // className="border-primary"
      sx={{
        border:2,
        borderColor:"#000000",
        borderRadius:2,
        height:"60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        width: "100%",
        overflow:"auto"
      }}
    >
      {IsList || !files ? (
        <FileInputButton
          textTransform="none"
          className="bg-primary"
          onChange={updateFiles}
          value={files}
          accept={"image/*"}
          maxFileSize={28 * 1024 * 1024}
          maxFiles={10}
          fakeUpload
        >
          <FileUploadOutlinedIcon/>
          <div>Upload</div>
        </FileInputButton>
      ) : (
        <></>
      )}
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            // gap:"5px",
            // minWidth:"50%"
          }}
        >
          {files.map((file: ExtFile) => (
            <FileMosaic
              key={file.id}
              {...file}
              smartImgFit="orientation"
              onDelete={removeFile}
              info
              preview
            />
          ))}
        </div>
      )}
    </Box>
    </div>
  );
}
