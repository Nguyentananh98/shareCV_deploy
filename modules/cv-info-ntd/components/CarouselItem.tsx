import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { IProjectModel } from "../type";

function CarouselItem({
  title,
  startDate,
  endDate,
  archivements,
}: IProjectModel) {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxHeight="580px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="300px"
        height="300px"
        border={1}
        bgcolor="white"
        borderRadius="22px"
      >
        <Typography className="text-[22px] my-4">{title}</Typography>
        <Typography className=" text-emerald-300 mb-4">
          {dayjs(startDate).format("MM/YYYY")} -{" "}
          {dayjs(endDate).format("MM/YYYY")}
        </Typography>
        <div className="flex flex-col flex-1 items-center gap-5">
          {archivements.map((item) => (
            <Typography key={item} className="font-medium text-zinc-500">{item}</Typography>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default CarouselItem;
