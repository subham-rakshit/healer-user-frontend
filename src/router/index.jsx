import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SuspenseLoader from "../features/SuspenseLoader";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import { PublicLayout } from "../layouts";
import ROUTE_PATHS from "../routes/paths";

import HomePage from "../components/client/home";
import ContactUsPage from "../components/client/contact-us";
import PrivacyPolicy from "../components/client/privacy-policy";
import RefundPolicyPage from "../components/client/refund-policy";
import ShippingPolicyPage from "../components/client/shipping-policy";
import TermsServicePage from "../components/client/terms-service";
import ReturnsPolicyPage from "../components/client/returns-policy";
import HelpAndSupportPage from "../components/client/support";
import WorkplaceSupportPage from "../components/client/workplace-support";
import PractionersSupportPage from "../components/client/practioners-support";
import ClientsSupportPage from "../components/client/clients-support";
import BecomePractionerPage from "../components/client/become-practioner";
import HealingSessionsPage from "../components/client/healing-sessions";
import CoursesContentDirectoryPage from "../components/client/course-content-directory";
import CirclesContentDirectoryPage from "../components/client/circles-content-directory";
import WorkshopsContentDirectoryPage from "../components/client/workshops-content-directory";
import GroupsContentDirectoryPage from "../components/client/groups-content-directory";
import BlogDirectoryPage from "../components/client/blog-directory";
import EthicalStandardsPage from "../components/client/ethical-standards";
import SourcingAroundTheWorldPage from "../components/client/sourcing-around-the-world";
import CareersPage from "../components/client/careers";

const Login = lazy(() => import("../components/client/auth/login"));
const ClientDashboard = lazy(() => import("../components/client/dashboard"));
const PractitionerDashboard = lazy(() =>
  import("../components/practitioner/dashboard")
);

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <Navigate to={ROUTE_PATHS.HEELAR_PUBLIC} />,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: (
      <PublicRoute>
        <Suspense fallback={<SuspenseLoader />}>
          <Login />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: ROUTE_PATHS.HEELAR_PUBLIC,
    element: (
      <PublicRoute>
        {/* Wrap the entire client Layout in Suspense */}
        <Suspense fallback={<SuspenseLoader />}>
          <PublicLayout />
        </Suspense>
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_CONTACT_US,
        element: (
          <PublicRoute>
            <ContactUsPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_PRIVACY_POLICY,
        element: (
          <PublicRoute>
            <PrivacyPolicy />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_REFUND_POLICY,
        element: (
          <PublicRoute>
            <RefundPolicyPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_SHIPPING_POLICY,
        element: (
          <PublicRoute>
            <ShippingPolicyPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_TERMS_SERVICE,
        element: (
          <PublicRoute>
            <TermsServicePage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_RETURNS_POLICY,
        element: (
          <PublicRoute>
            <ReturnsPolicyPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_SUPPORT,
        element: (
          <PublicRoute>
            <HelpAndSupportPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_CLIENTS_SUPPORT,
        element: (
          <PublicRoute>
            <ClientsSupportPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_PRACTIONERS_SUPPORT,
        element: (
          <PublicRoute>
            <PractionersSupportPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_WORKPLACE_SUPPORT,
        element: (
          <PublicRoute>
            <WorkplaceSupportPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_BECOME_PRACTIONER,
        element: (
          <PublicRoute>
            <BecomePractionerPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_HEALING_SESSIONS,
        element: (
          <PublicRoute>
            <HealingSessionsPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_COURSES,
        element: (
          <PublicRoute>
            <CoursesContentDirectoryPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_WORKSHOPS,
        element: (
          <PublicRoute>
            <WorkshopsContentDirectoryPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_CIRCLES,
        element: (
          <PublicRoute>
            <CirclesContentDirectoryPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_GROUPS,
        element: (
          <PublicRoute>
            <GroupsContentDirectoryPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_BLOG_DIRECTORY,
        element: (
          <PublicRoute>
            <BlogDirectoryPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_ETHICAL_STANDARDS,
        element: (
          <PublicRoute>
            <EthicalStandardsPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_SOURCING_ATW,
        element: (
          <PublicRoute>
            <SourcingAroundTheWorldPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.HEELAR_PUBLIC_CAREERS,
        element: (
          <PublicRoute>
            <CareersPage />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/practitioner",
    element: (
      <ProtectedRoute>
        {/* Wrap the entire practitioner Layout in Suspense */}
        <Suspense fallback={<SuspenseLoader />}>
          <PublicLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <PractitionerDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const RouteIndex = () => {
  return <RouterProvider router={router} />;
};

export default RouteIndex;
