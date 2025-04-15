import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity, SignUpForNewsLetter } from "../../../constants";
import SupportHeroSection from "./sub-components/SupportHeroSection";
import SupportFAQs from "./sub-components/SupportFAQs";

const HelpAndSupportPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Help and Support",
  });

  return (
    <>
      <SupportHeroSection />
      <SupportFAQs />
      <SignUpForNewsLetter />
      <NeedMoreClarity />
    </>
  );
};

export default HelpAndSupportPage;
