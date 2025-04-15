import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity, TermsAndConditionsAlert } from "../../../constants";
import RefundPolicyHeroSection from "./sub-components/RefundPolicyHeroSection";
import RefundPolicyContentSection from "./sub-components/RefundPolicyContentSection";

const RefundPolicyPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Refund Policy",
  });

  return (
    <>
      <TermsAndConditionsAlert />
      <RefundPolicyHeroSection />
      <RefundPolicyContentSection />
      <NeedMoreClarity />
    </>
  );
};

export default RefundPolicyPage;
