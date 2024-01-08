"use client"
import { FileInputButton, FileCard, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function UploadFile(onFileChange:(uploadedFile:ExtFile[])=>void) {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    onFileChange(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleFinishUpload=(uploadedFiles:ExtFile[])=>{
    console.log("Upload has finished", uploadedFiles);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "10px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <FileInputButton
        onChange={updateFiles}
        value={files}
        accept={"image/*"}
        maxFileSize={28 * 1024 * 1024}
        maxFiles={2}
        // actionButtons={{
        //   position: "after",
        //   uploadButton: {},
        //   abortButton: {},
        // }}
        // uploadConfig={{
        //   url: "https://www.myawsomeserver.com/upload",
        //   method: "POST",
        //   headers: {
        //     Authorization:
        //       "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
        //   },
        //   cleanOnUpload: true,
        // }}
        // onUploadFinish={handleFinishUpload}
        fakeUpload
      />
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"5px",
            minWidth:"50%"
          }}
        >
          {files.map((file: ExtFile) => (
            <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
          ))}
        </div>
      )}
    </div>
  );
}