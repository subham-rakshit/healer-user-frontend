import { usePageMeta } from "../../../hooks/hooks";
import { NeedMoreClarity } from "../../../constants";

import ContactUsForm from "./sub-components/ContactUsForm";
import ContactUsHeroSection from "./sub-components/ContactUsHeroSection";
import ContactUsPowerHealingExperience from "./sub-components/ContactUsPowerHealingExperience";
import ContactUsTeamChat from "./sub-components/ContactUsTeamChat";

const ContactUsPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Contact Us",
  });

  return (
    <>
      <ContactUsHeroSection />
      <ContactUsForm />
      <ContactUsTeamChat />
      <ContactUsPowerHealingExperience />
      <NeedMoreClarity />
    </>
  );
};

export default ContactUsPage;
