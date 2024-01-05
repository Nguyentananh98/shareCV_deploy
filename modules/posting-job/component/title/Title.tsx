import { getCookie } from "@/common/helpers/getCokkies";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image"
import Link from "next/link";
function Title(props:{companyName:string,map:string,image:string}) {
  console.log(getCookie("token"))

  if (getCookie("token")) {
    redirect("/home", RedirectType.replace);
  }
  
  return (
    // <Box className="flex w-full" height="100px"  display="flex" flexDirection="row">
        <Grid 
            container 
            spacing={{ xs: 10, md: 5 }} 
            py={5}
            className="flex w-full"
            // height="700px" 
            sx={{backgroundSize: 'cover',backgroundColor:"rgba(217, 217, 217, 0.9)"}}>
            <Grid item xs={8} height="100px" display="flex" flexDirection="row" alignItems={"center"} justifyContent={"left"}>
                <Image src="/Logo.png" height={100} width={100} alt=''/>
                <Box 
                    display="flex"
                    flexDirection="column"
                >
                    <Typography>Name</Typography>
                    <Typography>link</Typography>
                </Box>   
            </Grid>
            <Grid item xs={4} display="flex" height="100px" justifyContent={"right"}>
                <Button  
                    component={Link} 
                    href="/register" 
                    sx={{ boxShadow: 5 ,color:"white",backgroundColor:"orange",borderRadius: 3,marginRight:"5%" }} 
                    variant="contained"
                >   Chỉnh sửa
                </Button>
            </Grid> 
            <Grid item xs={8} display="flex" flexDirection="column" alignItems={"left"} justifyContent={"left"}>
                <Typography
                    variant="h6"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'black',
                    textDecoration: 'none',
                    }}
                >
                    Mô tả công ty
                </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </Typography>
                <Box display="flex" flexDirection={"column"} justifyContent={"left"} sx={{pt:3}}>
                <Typography
                    variant="h6"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'black',
                    textDecoration: 'none',
                    }}
                >
                    Hình ảnh
                </Typography>
                    <Typography>
                        IMAGE
                    </Typography>
            </Box>
            </Grid>
            <Grid item width="100%" xs={4} display="flex" justifyContent={"center"}>
                <Box display="flex" flexDirection={"column"} justifyContent={"right"} sx={{color:"black",border:1,borderColor:"orange",p:3}}>
                    <Typography
                        variant="h6"
                        sx={{mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        color: 'black',
                        extDecoration: 'none',
                        }}
                    >
                        Thông tin công ty
                    </Typography>
                    <Box 
                        sx={{mt:2}}
                        display="flex"
                        flexDirection="column"
                    >
                        <Typography
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 400,
                                fontSize: 15,
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Ngành nghề
                        </Typography>
                        <Typography
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 400,
                                fontSize: 15,
                                color: 'orange',
                                textDecoration: 'none',
                            }}
                        >
                            Công nghệ thông tin
                        </Typography>
                    </Box>
                    <Box 
                        sx={{mt:2}}
                        display="flex"
                        flexDirection="column"
                    >
                        <Typography
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 400,
                                fontSize: 15,
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Ngành nghề
                        </Typography>
                        <Typography
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 400,
                                fontSize: 15,
                                color: 'orange',
                                textDecoration: 'none',
                            }}
                        >
                            Công nghệ thông tin
                        </Typography>
                    </Box>
                </Box>
            </Grid> 
            {/* <Box 
                width="65%"
                // sx={{marginLeft:"5%"}}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="left"
            >
                <Image src="/Logo.png" height={150} width={150} alt=''/>
                <Box 
                    display="flex"
                    flexDirection="column"
                >
                    <Typography>Name</Typography>
                    <Typography>link</Typography>
                </Box>   
            </Box>
            <Box 
                width={"35%"}
                // sx={{marginRight:"5%"}}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="right"
            >
                <Button  component={Link} href="/register" sx={{ boxShadow: 5 ,color:"white",backgroundColor:"orange"}} variant="contained">Chỉnh sửa</Button>
            </Box>  */}
        </Grid>

    // </Box>
  );
}

export default Title;
