import React from "react";
import { usePageMeta } from "../../../hooks/hooks";
import EthicalStandardsHeroSection from "./sub-components/EthicalStandardsHeroSection";
import EthicalStandardsOtherSections from "./sub-components/EthicalStandardsOtherSections";

const EthicalStandardsPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Ethical Standards",
  });

  return (
   <>
     <EthicalStandardsHeroSection />
     <EthicalStandardsOtherSections />
   </>
  )
};

export default EthicalStandardsPage;
