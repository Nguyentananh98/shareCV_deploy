"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { Box, Button, Grid, ImageListItem, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImageList from "@mui/material/ImageList";
import { CardCarousel } from "../Carousel/CardCarousel";
import ReactPlayer from "react-player";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Title(props: { companyName: string; map: string; image: string }) {
  console.log(getCookie("token"));
  if (getCookie("token")) {
    redirect("/home", RedirectType.replace);
  }

  return (
    // <Box className="flex w-full" height="100px"  display="flex" flexDirection="row">
    <Grid
      container
      spacing={{ xs: 10, md: 5 }}
      py={5}
      px={10}
      className="flex w-full"
      // height="700px"
      sx={{
        backgroundSize: "cover",
        backgroundColor: "rgba(217, 217, 217, 0.1)",
      }}
    >
      <Grid
        item
        xs={8}
        height="100px"
        display="flex"
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Image src="/Logo.png" height={100} width={100} alt="" />
        <Box display="flex" flexDirection="column">
          <Typography>Name</Typography>
          <Typography>link</Typography>
        </Box>
      </Grid>
      <Grid item xs={4} display="flex" height="100px" justifyContent={"right"}>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"right"}
          sx={
            {
              // p: 3,
            }
          }
        >
          <Button
            component={Link}
            href="/register"
            sx={{ boxShadow: 5 }}
            style={{
              color: "white",
              // backgroundColor: "primary",
              borderRadius: 10,
              // marginRight: "5%",
            }}
            variant="contained"
          >
            Chỉnh sửa
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={8}
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
      >
        <Box
          py={5}
          className={"border-primary"}
          sx={{
            borderTop: 1,
            borderBottom: 1,
          }}
        >
          <Typography
            className="text-secondary"
            variant="h6"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Mô tả công ty
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"left"}
          sx={{ pt: 3 }}
        >
          <Typography
            className="text-secondary"
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Hình ảnh
          </Typography>
          <CardCarousel />
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"left"}
          sx={{ pt: 3 }}
        >
          <Typography
            className="text-secondary"
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Video
          </Typography>
          <Box
            sx={{
              "& .player-wrapper": {
                width: "auto",
                // Reset width
                height: "auto",
              },
              "& .react-player": {
                width: "500px",
                paddingTop: "0", // Percentage ratio for 16:9
                position: "relative", // Set to relative}
              },
              "& .react-player > div": {
                position: "absolute", // Scaling will occur since parent is relative now
              },
            }}
          >
            <ReactPlayer
              width="100%"
              height={"200px"}
              controls
              file="mp4"
              url="/video.mp4"
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        width="100%"
        xs={4}
        display="flex"
        flexDirection="column"
        justifyContent={"right"}
      >
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"right"}
          sx={
            {
              // p: 3,
            }
          }
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"right"}
            className="border-primary"
            sx={{
              color: "black",
              border: 1,
              // borderColor: "primary",
              borderRadius: "20px",
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              className="text-secondary"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                extDecoration: "none",
              }}
            >
              Thông tin công ty
            </Typography>
            <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
              <Typography
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 400,
                  fontSize: 15,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Ngành nghề
              </Typography>
              <Typography
                className="text-primary"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 400,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Công nghệ thông tin
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
              <Typography
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 400,
                  fontSize: 15,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Ngành nghề
              </Typography>
              <Typography
                className="text-primary"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 400,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Công nghệ thông tin
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
              <Typography
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 400,
                  fontSize: 15,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Ngành nghề
              </Typography>
              <Typography
                className="text-primary"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 400,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Công nghệ thông tin
              </Typography>
            </Box>
          </Box>
          <Box
            mt={5}
            // py={20}
            sx={{
              backgroundImage: `url(${"/map.png"})`,
              borderRadius: "20px",
            }}
            display="flex"
            position="relative"
            alignItems="center"
            justifyContent="center"
            // zIndex={2}
            height="200px"
            width="100%"
          >
            <Button
              component={Link}
              href="/register"
              sx={{ boxShadow: 5 }}
              style={{
                color: "white",
                borderRadius: 10,
              }}
              variant="contained"
              color="primary"
            >
              View map
            </Button>
            {/* </Image> */}
          </Box>
        </Box>
      </Grid>
    </Grid>

    // </Box>
  );
}

export default Title;
