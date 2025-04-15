import React from "react";
import { usePageMeta } from "../../../hooks/hooks";

import { SignUpForNewsLetter, NeedMoreClarity } from "../../../constants";

import ClientSupportHeroSection from "./sub-components/ClientSupportHeroSection";
import ClientSupportListingSection from "./sub-components/ClientSupportListingSection";
import ClientSupportCommonQNAs from "./sub-components/ClientSupportCommonQNAs";

const ClientsSupportPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Clients Help and Support",
  });

  return (
    <>
      <ClientSupportHeroSection />
      <ClientSupportListingSection />
      <SignUpForNewsLetter />
      <ClientSupportCommonQNAs />
      <NeedMoreClarity />
    </>
  );
};

export default ClientsSupportPage;
