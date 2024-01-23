import { Language, Monitor, Work } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import ExperienceItem from "../components/ExperienceItem";
import { adwards, certificates, projects, skills, workExps } from "../mockData";
import ProjectCarousel from "../components/ProjectCarousel";
import { useState } from "react";

function CvInfoPage() {
  const [allown, setAllown] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  return (
    <Box display="flex" flexDirection="column" width="100%" p={"120px"}>
      <div className="flex w-full items-center mb-8">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-600 rounded-full" />
          <Typography className="text-green-600">ShareCVApproved</Typography>
        </div>

        <Box display="flex" alignItems="center" mx={3}>
          <Monitor color="primary" className="mr-2" />
          <Typography className="text-primary">Đăng tin tuyển dụng</Typography>
        </Box>

        <div className="flex-1" />

        {/* <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "22px",
            px: 5,
            py: 1,
            mx: 1,
          }}
        >
          <Typography className="font-bold">Xem kết quả AI</Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "22px",
            px: 5,
            py: 1,
            mx: 1,
          }}
        >
          <Typography className="font-bold">Xem định giá</Typography>
        </Button> */}

        <Typography className="text-[22px] font-bold text-amber-400">
          50 điểm
        </Typography>
      </div>

      <div className="w-full grid grid-cols-3 gap-5">
        <div
          className={`w-full ${
            allown ? "col-span-2" : "col-span-3"
          } flex flex-col gap-6`}
        >
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Box display="flex" alignItems="center">
              <Avatar src="https://i.pravatar.cc/300" className="mr-3" />
              <Box display="flex" flexDirection="column">
                <Typography className="text-[22px] text-primary font-bold">
                  Lương Mẫn Nhi
                </Typography>
                <Typography className="text-green-600">
                  Quản lý dự án <span className="text-black">ngành</span> Công
                  nghệ thông tin
                </Typography>
              </Box>
            </Box>

            <div className="flex flex-col my-5">
              <Typography>Ngày sinh: 01/01/1991</Typography>
              <Typography>Tuổi: 33</Typography>
              <Typography>Giới tính: Nữ</Typography>
            </div>

            <Typography className="mb-3 font-bold text-[22px]">
              Mục tiêu nghề nghiệp
            </Typography>
            <Typography>
              Tìm kiếm vị trí Quản lý dự án ngành Công nghệ thông tin
            </Typography>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Kỹ năng
            </Typography>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Box
                  key={skill}
                  bgcolor="#B7DAED"
                  borderRadius="22px"
                  py={1}
                  px={2}
                >
                  <Typography className="text-primary">{skill}</Typography>
                </Box>
              ))}
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Kinh nghiệm làm việc
            </Typography>
            <div className="flex flex-col gap-8">
              {workExps.map((workExp) => (
                <ExperienceItem
                  key={workExp.id}
                  title={workExp.title}
                  subTitle1={workExp.department}
                  subTitle2={workExp.company}
                  startDate={workExp.startDate}
                  endDate={workExp.endDate}
                  keywords={workExp.keywords}
                />
              ))}
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Chứng chỉ
            </Typography>
            <div className="flex flex-col gap-8">
              {certificates.map((item) => (
                <ExperienceItem
                  key={item.id}
                  title={item.title}
                  subTitle1={item.type}
                  subTitle2={item.score.toString()}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              ))}
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Dự án
            </Typography>
            <div className="flex flex-col gap-8">
              <ProjectCarousel initialData={projects} />
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Giải thưởng
            </Typography>
            <div className="flex flex-col gap-8">
              {adwards.map((item) => (
                <ExperienceItem
                  key={item.id}
                  title={item.title}
                  startDate={item.received_date}
                  description={item.description}
                />
              ))}
            </div>
          </Box>
          <Box width="100%" display="flex" justifyContent={"space-between"}>
            <Button
              variant="outlined"
              sx={{ height: "50px", borderRadius: "20px" }}
            >
              Từ chối
            </Button>
            <Box display="flex" className="gap-5">
              <Button
                variant="outlined"
                sx={{ height: "50px", borderRadius: "20px" }}
              >
                Thêm vào giỏ
              </Button>
              <Box display="flex" className="gap-5" flexDirection={"column"}>
                <Button
                  className="hover:text-primary"
                  variant="contained"
                  onClick={() => setShowButton(!showButton)}
                  sx={{ height: "50px", borderRadius: "20px" }}
                >
                  Chọn ứng viên
                </Button>
                {showButton ? (
                  <Box display="flex" flexDirection={"column"}>
                    <Button
                      disabled={allown}
                      variant="outlined"
                      onClick={() => setAllown(true)}
                      sx={{ height: "50px", borderRadius: "20px" }}
                    >
                      Mua thông tin
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ height: "50px", borderRadius: "20px" }}
                    >
                      Đặt lịch phỏng vấn
                    </Button>
                  </Box>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Box>
        </div>
        {allown ? (
          <div className="flex flex-col w-full">
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              p={5}
              bgcolor="#F8FBFD"
              borderRadius="22px"
            >
              <Typography className="text-[22px] font-bold mb-3">
                Thông tin cá nhân
              </Typography>
              <div className="flex flex-col gap-8">
                <div>
                  <Typography className="text-zinc-500">Email</Typography>
                  <Typography className="text-primary font-medium">
                    a@a.acom
                  </Typography>
                </div>

                <div>
                  <Typography className="text-zinc-500">
                    Số điện thoại
                  </Typography>
                  <Typography className="text-primary font-medium">
                    0123456789
                  </Typography>
                </div>

                <div>
                  <Typography className="text-zinc-500">
                    Số CMND/CCCD
                  </Typography>
                  <Typography className="text-primary font-medium">
                    1212121212
                  </Typography>
                </div>

                <div>
                  <Typography className="text-zinc-500">Quốc gia</Typography>
                  <Typography className="text-primary font-medium">
                    Việt Nam
                  </Typography>
                </div>

                <div>
                  <Typography className="text-zinc-500">
                    Tỉnh/Thành phố
                  </Typography>
                  <Typography className="text-primary font-medium">
                    TP.HCM
                  </Typography>
                </div>

                <div>
                  <Typography className="text-zinc-500">Địa chỉ</Typography>
                  <Typography className="text-primary font-medium">
                    202 Lê Lai, phường Bến Thành
                  </Typography>
                </div>

                <div className="flex items-center">
                  <Language className="mr-3" />
                </div>
              </div>
            </Box>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Box>
  );
}

export default CvInfoPage;
