import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity, TermsAndConditionsAlert } from "../../../constants";

import TermsServiceHeroSection from "./sub-components/TermsServiceHeroSection";
import TermsServiceContentSection from "./sub-components/TermsServiceContentSection";

const TermsServicePage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Terms of Service",
  });

  return (
    <>
      <TermsAndConditionsAlert />
      <TermsServiceHeroSection />
      <TermsServiceContentSection />
      <NeedMoreClarity />
    </>
  );
};

export default TermsServicePage;
