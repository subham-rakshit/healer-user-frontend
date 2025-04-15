import React from 'react'
import {usePageMeta} from "../../../hooks/hooks"

import CourseContentDirectoryHeroSection from "./sub-components/CourseContentDirectoryHeroSection";
import CourseContentDirectoryListSection from "./sub-components/CourseContentDirectoryListSection";

const CoursesContentDirectoryPage = () => {
 // Meta Info
   usePageMeta({
     title: "Heelar | Courses Content Directory",
   });

  return (
    <>
      <CourseContentDirectoryHeroSection />
      <CourseContentDirectoryListSection />
    </>
  )
}

export default CoursesContentDirectoryPage