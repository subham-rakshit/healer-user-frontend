import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity, TermsAndConditionsAlert } from "../../../constants";

import PrivacyPolicyHeroSection from "./sub-components/PrivacyPolicyHeroSection";
import PrivacyPolicyContentSection from "./sub-components/PrivacyPolicyContentSection";

const PrivacyPolicy = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Privacy Policy",
  });

  return (
    <>
      <TermsAndConditionsAlert />
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContentSection />
      <NeedMoreClarity />
    </>
  );
};

export default PrivacyPolicy;
