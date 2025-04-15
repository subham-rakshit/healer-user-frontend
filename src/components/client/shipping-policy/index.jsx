import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity, TermsAndConditionsAlert } from "../../../constants";

import ShippingPolicyHeroSection from "./sub-components/ShippingPolicyHeroSection";
import ShippingPolicyContentSection from "./sub-components/ShippingPolicyContentSection";

const ShippingPolicyPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Shipping Policy",
  });

  return (
    <>
      <TermsAndConditionsAlert />
      <ShippingPolicyHeroSection />
      <ShippingPolicyContentSection />
      <NeedMoreClarity />
    </>
  );
};

export default ShippingPolicyPage;
