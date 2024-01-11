// react
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ImageListItem from "./ImageListItem";

export interface UploadImageProps {
  title:string
  decription: string
  onChange: (imageList: ImageListType) => void;
  noEdit: boolean;
  isMultiple?: boolean;
  imageList: ImageListType;
  maxImage?: number;
  dataURLKey?: string;
}

// add the check duplicate image later

export function ImageUpload({
  title,
  decription,
  onChange,
  noEdit,
  isMultiple,
  imageList,
  maxImage,
  dataURLKey,
}: UploadImageProps) {
  // const [images, setImages] = React.useState<ImageListType>([]);

  const defaulMaxImage = 69;
  const defaultDataURLKey = "dataURL";

  let dataURLKey_ =
    typeof dataURLKey !== "undefined" ? dataURLKey : defaultDataURLKey;
  let maxImage_ = typeof maxImage !== "undefined" ? maxImage : defaulMaxImage;

  return (
    <Box className="App" alignContent={"center"} height="100%" style={{ width: "100%" }}>
      <Typography variant="h6" className="text-secondary font-medium">
        {title}
      </Typography>
      <ImageUploading
        multiple={isMultiple}
        value={imageList}
        onChange={onChange}
        maxNumber={maxImage_}
        dataURLKey={dataURLKey_}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          // <Box height="200px">

          <Box
            className="upload__image-wrapper"
            height="70%"
            mt={2}
            display="flex"
            flexDirection="column"
            alignContent={"center"}
            justifyContent="center"
            sx={{
              // gap:10,
              border: 1,
              backgroundColor: "white",
              borderColor: "rgba(217, 217, 217, 1)",
              borderRadius: 2,
              flexWrap: "wrap",
              // overflow:"auto"
            }}
          >
            <Box
              display="flex"
              width="100%"
              alignContent={"center"}
              justifyContent={imageList.length!=0 ? "right" : "center"}
              p={1}
              // height="50px"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<FileUploadOutlinedIcon />}
                disabled={noEdit}
                sx={{
                  textTransform: "none",
                  mx: 2,
                }}
                onClick={onImageUpload}
              >
                <Typography className="font-bold">Upload</Typography>
              </Button>
            </Box>
            {imageList.length!=0 ? (
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                gap="10px"
                sx={{ flexWrap: "wrap" }}
                height="210px"
                overflow="auto"
              >
                {imageList.map((image, index) => (
                  <ImageListItem
                    key={index}
                    index={index}
                    imagePath={image[dataURLKey_]}
                    onDelete={() => onImageRemove(index)}
                    onUpdate={onImageUpdate}
                  />
                ))}
              </Box>
            ) : (
              <></>
            )}
            {/* <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              gap="10px"
              sx={{ flexWrap: "wrap" }}
              height="145px"
              overflow="auto"
            >
              {imageList.map((image, index) => (
                <ImageListItem
                  key={index}
                  index={index}
                  imagePath={image[dataURLKey_]}
                  onDelete={() => onImageRemove(index)}
                  onUpdate={onImageUpdate}
                />
              ))}
            </Box> */}
          </Box>
          // </Box>
        )}
      </ImageUploading>
      <Box >
        <Typography  className="text-slate-400">
          {decription}
        </Typography>
      </Box>
    </Box>
  );
}
