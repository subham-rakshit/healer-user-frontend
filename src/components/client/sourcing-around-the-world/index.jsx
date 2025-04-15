import React from "react";
import { usePageMeta } from "../../../hooks/hooks";
import SourcingATWHeroSection from "./sub-components/SourcingATWHeroSection";
import SourcingATWSourcingListSection from "./sub-components/SourcingATWSourcingListSection";
import SourcingOurBazaarSection from "./sub-components/SourcingOurBazaarSection";

const SourcingAroundTheWorldPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Sourcing Around the World",
  });

  return (
    <>
      <SourcingATWHeroSection />
      <SourcingATWSourcingListSection />
      <SourcingOurBazaarSection />
    </>
  );
};

export default SourcingAroundTheWorldPage;
