import React from "react";
import { usePageMeta } from "../../../hooks/hooks";

import BlogDirectoryHeroSection from "./sub-components/BlogDirectoryHeroSection";
import BlogDirectoryListSection from "./sub-components/BlogDirectoryListSection";

const BlogDirectoryPage = () => {
  // Meta Info
  usePageMeta({
    title: "Heelar | Blog Directory",
  });

  return (
    <>
      <BlogDirectoryHeroSection />
      <BlogDirectoryListSection />
    </>
  );
};

export default BlogDirectoryPage;
