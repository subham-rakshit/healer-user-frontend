import React from 'react'
import {usePageMeta} from "../../../hooks/hooks"

import WorkshopContentDirectoryHeroSection from "./sub-components/WorkshopContentDirectoryHeroSection";
import WorkshopContentDirectoryListSection from "./sub-components/WorkshopContentDirectoryListSection";

const WorkshopsContentDirectoryPage = () => {
 // Meta Info
   usePageMeta({
     title: "Heelar | Content Directory Workshops",
   });

  return (
    <>
      <WorkshopContentDirectoryHeroSection />
      <WorkshopContentDirectoryListSection />
    </>
  )
}

export default WorkshopsContentDirectoryPage