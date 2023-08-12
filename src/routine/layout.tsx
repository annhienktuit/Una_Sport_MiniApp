import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { getSystemInfo } from "zmp-sdk";
import HomePage from "../pages/home/home";
import { Navigation } from "./navigation";
import FindGrounds from "../pages/findGroups/findGroups";
import Calendar from "../pages/calendar/calendar";
import Profile from "../pages/profile/profile";
import DetailSportCenter from "../pages/detailSportCenter/detailSportCenter";
import PublicCourtDetail from "../pages/findGroups/public-court-details";
import DetailInfo from "../pages/details/info-detail";

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
          <Route
            path="/detailSportCenter"
            element={<DetailSportCenter />}
          ></Route>
          <Route path="/public-court" element={<PublicCourtDetail />}></Route>
          <Route path="/detail-info" element={<DetailInfo />}></Route>
        </Routes>
      </Box>
      <Navigation></Navigation>
    </Box>
  );
};

export default Layout;
