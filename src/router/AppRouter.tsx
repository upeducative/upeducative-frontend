import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Internships from "@/pages/Internships";
import Training from "@/pages/Training";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import CollegePartnership from "@/pages/CollegePartnership";
import CompanyPartnership from "@/pages/CompanyPartnership";
import StudentPortal from "@/pages/StudentPortal";
import AdminDashboard from "@/pages/AdminDashboard";
import CollegePortal from "@/pages/CollegePortal";
import NotFound from "@/pages/NotFound";
import { LoginPage, SignupPage, PasswordResetPage } from "@/pages/Auth";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.internships} element={<Internships />} />
      <Route path={ROUTES.training} element={<Training />} />
      <Route path={ROUTES.contact} element={<Contact />} />
      <Route path={ROUTES.blog} element={<Blog />} />
      <Route path={ROUTES.collegePartnership} element={<CollegePartnership />} />
      <Route path={ROUTES.companyPartnership} element={<CompanyPartnership />} />

      {/* Authentication */}
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.signup} element={<SignupPage />} />
      <Route path={ROUTES.resetPassword} element={<PasswordResetPage />} />

      {/* Portals */}
      <Route path={ROUTES.studentPortal} element={<StudentPortal />} />
      <Route path={ROUTES.adminDashboard} element={<AdminDashboard />} />
      <Route path={ROUTES.collegePortal} element={<CollegePortal />} />

      {/* Error Pages */}
      <Route path={ROUTES.notFound} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
