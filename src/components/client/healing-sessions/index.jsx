import React from 'react'
import { usePageMeta } from "../../../hooks/hooks";

import HealingSessionsHeroSection from "./sub-components/HealingSessionsHeroSection";
import HealingSessionsListingSection from "./sub-components/HealingSessionsListingSection";

const HealingSessionsPage = () => {
 // Meta Info
   usePageMeta({
     title: "Heelar | Content Directory Healing Sessions",
   });

  return (
    <>
      <HealingSessionsHeroSection />
      <HealingSessionsListingSection />
    </>
  )
}

export default HealingSessionsPage