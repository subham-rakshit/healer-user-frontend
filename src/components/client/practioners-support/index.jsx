import React from "react";
import { usePageMeta } from "../../../hooks/hooks";
import { SignUpForNewsLetter, NeedMoreClarity } from "../../../constants";

import PractionersSupportListingSection from "./sub-components/PractionersSupportListingSection";
import PractionersSupportHeroSection from "./sub-components/PractionersSupportHeroSection";
import PractionersSupportCommonQNAs from "./sub-components/PractionersSupportCommonQNAs";


const PractionersSupportPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Practitioners Help and Support",
  });

  return (
    <>
      <PractionersSupportHeroSection />
      <PractionersSupportListingSection />
      <SignUpForNewsLetter />
      <PractionersSupportCommonQNAs />
      <NeedMoreClarity />
    </>
  );
};

export default PractionersSupportPage;
