import { NeedMoreClarity } from "../../../constants";

import HomeBanner from "./sub-components/HomeBanner";
import HomeBazaar from "./sub-components/HomeBazaar";
import HomeCircles from "./sub-components/HomeCircles";
import HomeFeaturedHealingSessions from "./sub-components/HomeFeaturedHealingSessions";
import HomeInsightfulWorkshops from "./sub-components/HomeInsightfulWorkshops";
import HomeLatestBlogs from "./sub-components/HomeLatestBlogs";
import HomeMyGroups from "./sub-components/HomeMyGroups";
import HomeNewArrivals from "./sub-components/HomeNewArrivals";
import HomePopularCourses from "./sub-components/HomePopularCourses";
import HomePopularPractitioners from "./sub-components/HomePopularPractitioners";
import HomeReference from "./sub-components/HomeReference";
import HomeTestimonials from "./sub-components/HomeTestimonials";
import HomeTrendingCourses from "./sub-components/HomeTrendingCourses";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeFeaturedHealingSessions />
      <HomePopularCourses />
      <HomeInsightfulWorkshops />
      <HomeTrendingCourses />
      <HomeCircles />
      <HomePopularPractitioners />
      <HomeNewArrivals />
      <HomeBazaar />
      <HomeTestimonials />
      <HomeLatestBlogs />
      <HomeMyGroups />
      <HomeReference />
      <NeedMoreClarity />
    </>
  );
};

export default HomePage;
