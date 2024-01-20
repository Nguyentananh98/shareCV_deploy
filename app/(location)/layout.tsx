"use client";
 
import Header from "@/common/components/Header/Header";
// import { AppFooter } from "@/common/components/AppFooter";
// import AppHeader from "@/common/components/AppHeader";
// import { hasAuthCookies } from "@/common/helpers/authCookies";
// import dayjs from "dayjs";
// import "dayjs/locale/vi";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
 
export default function MainLayout({ children }: PropsWithChildren) {
//   const isLogin = hasAuthCookies();
//   const router = useRouter();
//   useEffect(() => {
//     dayjs.locale("vi");
//   }, []);
 
//   if(!isLogin) {
//     router.replace("/un-auth");
//   }
 
  return (
    < div  >
      <Header />
      <div className="flex justify-center">{children}</div>
      {/* <AppFooter /> */}
    </div >
  );
}