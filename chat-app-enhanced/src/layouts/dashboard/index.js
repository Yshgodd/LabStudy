import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Alert, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import useSettings from "../../hooks/useSettings";
import SideBar from './SideBar';

const isAuthenticated = true;


const DashboardLayout = () => {

  if(!isAuthenticated){
    // alert("로그인 후 이용해주세요");// react strict모드 때문에 두번 나옴 => 빌드하면 정상작동
    return (
      <Navigate to="/auth/login"/>
      );
    
    
  }

  return (
    <Stack direction = "row" >
      {/* side bar */}
      <SideBar/>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
