import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import Header from "./components/globalLayout/Header";
import HeaderMobile from "./components/globalLayout/HeaderMobile";
import Footer from "./components/globalLayout/Footer";
import ScrollToTop from "./components/globalLayout/ScrollToTop";
import { useIsMobile } from "./hooks/useIsMobile";
import Page1Home from "./pages/Page1_Home";
import Page1HomeMobile from "./pages/Page1_Home_Mobile";
import Page2Services from "./pages/Page2_Services";
import Page3Members from "./pages/Page3_Members";
import PageXNotFound from "./pages/PageX_NotFound";
import Page2ServicesMobile from "./pages/Page2_Services_Mobile";
import Page3MembersMobile from "./pages/Page3_Members_Mobile";
import WIPPage from "./pages/WIP";
import DesktopLayout from "./layout/DesktopLayout";

function App() {
  const isBigMobile = useIsMobile();
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WIPPage />} />
          {isBigMobile ? (
            <>
              <Route path="/home" element={<Page1HomeMobile />} />
              <Route path="/service" element={<Page2ServicesMobile />} />
              <Route path="/member" element={<Page3MembersMobile />} />
            </>
          ) : (
            <Route element={<DesktopLayout />}>
              <Route path="/home" element={<Page1Home />} />
              <Route path="/service" element={<Page2Services />} />
              <Route path="/member" element={<Page3Members />} />
            </Route>
          )}
          <Route path="/*" element={<PageXNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//  /infoteam-introduce-page
