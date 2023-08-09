import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import useSettings from "../../hooks/useSettings";
import SideBar from './SideBar';




const DashboardLayout = () => {
  return (
    <Stack direction = "row" >
      {/* side bar */}
      <SideBar/>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
