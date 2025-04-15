import React from "react";
import { usePageMeta } from "../../../hooks/hooks";

import GroupsContentDirectoryHeroSection from "./sub-components/GroupsContentDirectoryHeroSection";
import GroupsContentDirectoryListSection from "./sub-components/GroupsContentDirectoryListSection";

const GroupsContentDirectoryPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Content Directory Groups",
  });

  return (
    <>
      <GroupsContentDirectoryHeroSection />
      <GroupsContentDirectoryListSection />
    </>
  );
};

export default GroupsContentDirectoryPage;
