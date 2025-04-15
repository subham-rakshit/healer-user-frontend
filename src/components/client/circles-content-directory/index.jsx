import React from 'react'
import {usePageMeta} from "../../../hooks/hooks"

import CirclesContentDirectoryHeroSection from "./sub-components/CirclesContentDirectoryHeroSection";
import CirclesContentDirectoryListSection from "./sub-components/CirclesContentDirectoryListSection";

const CirclesContentDirectoryPage = () => {
 // Meta Info
   usePageMeta({
     title: "Heelar | Content Directory Circles",
   });

  return (
    <>
      <CirclesContentDirectoryHeroSection />
      <CirclesContentDirectoryListSection />
    </>
  )
}

export default CirclesContentDirectoryPage