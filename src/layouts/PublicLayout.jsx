import React from "react";
import { Outlet } from "react-router-dom";

import { PublicHeader, PublicFooter } from "../components/client/layout";
import { ScrollToTop } from "../constants";

const PublicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <PublicHeader />
      <main className="pageMainLayout__wr homePageLayout__wr">
        <Outlet />
      </main>
      <PublicFooter />
    </>
  );
};

export default PublicLayout;
