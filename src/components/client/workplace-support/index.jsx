import React from 'react'
import { usePageMeta } from "../../../hooks/hooks";
import { SignUpForNewsLetter, NeedMoreClarity } from "../../../constants";

import WorkplaceSupportHeroSection from "./sub-components/WorkplaceSupportHeroSection";
import WorkplaceSupportListingSection from "./sub-components/WorkplaceSupportListingSection";
import WorkplaceSupportCommonQNAs from "./sub-components/WorkplaceSupportCommonQNAs";

const WorkplaceSupportPage = () => {
   // Meta Info
    usePageMeta({
      title: "Heelar | Workplace Help and Support",
    });

  return (
    <>
      <WorkplaceSupportHeroSection />
      <WorkplaceSupportListingSection />
      <SignUpForNewsLetter />
      <WorkplaceSupportCommonQNAs />
      <NeedMoreClarity />
    </>
  )
}

export default WorkplaceSupportPage