/**
 * Central route path constants.
 * Import these instead of hardcoding path strings so the router,
 * Navbar, and Footer never drift out of sync.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  internships: "/internships",
  training: "/training",
  contact: "/contact",
  blog: "/blog",
  collegePartnership: "/college-partnership",
  companyPartnership: "/company-partnership",

  login: "/login",
  signup: "/signup",
  resetPassword: "/reset-password",

  studentPortal: "/student-portal",
  adminDashboard: "/admin-dashboard",
  collegePortal: "/college-portal",

  notFound: "/404",
} as const;

export type RouteKey = keyof typeof ROUTES;
