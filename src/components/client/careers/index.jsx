import React from "react";
import { usePageMeta } from "../../../hooks/hooks";
import CareersListSection from "./sub-components/CareersListSection";
import WhyWeDiffrentSection from "./sub-components/WhyWeDiffrentSection";

const CareersPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Careers",
  });

  return (
   <>
     <CareersListSection />
     <WhyWeDiffrentSection />
   </>
  )
};

export default CareersPage;
