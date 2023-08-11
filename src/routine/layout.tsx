import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { getSystemInfo } from "zmp-sdk";
import HomePage from "../pages/home";
import { Navigation } from "./navigation";
import FindGrounds from "../pages/findGroups";
import Calendar from "../pages/calendar";
import Profile from "../pages/profile";

if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
      window.devicePixelRatio
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}

export const Layout: FC = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/findGroups" element={<FindGrounds />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Box>
      <Navigation></Navigation>
    </Box>
  );
};

export default Layout;