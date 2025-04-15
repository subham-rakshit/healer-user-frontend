import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity, TermsAndConditionsAlert } from "../../../constants";

import ReturnsPolicyHeroSection from "./sub-components/ReturnsPolicyHeroSection";
import ReturnsPolicyContentSection from "./sub-components/ReturnsPolicyContentSection";

const ReturnsPolicyPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Returns Policy",
  });

  return (
    <>
      <TermsAndConditionsAlert />
      <ReturnsPolicyHeroSection />
      <ReturnsPolicyContentSection />
      <NeedMoreClarity />
    </>
  );
};

export default ReturnsPolicyPage;
