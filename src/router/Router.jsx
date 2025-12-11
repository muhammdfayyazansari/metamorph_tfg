import ScrollToTop from "../components/ScrollToTop";
import PageTitle from "../hooks/PageTitle";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/page";
import ServicesPage from "../pages/services/page";
import PortfolioPage from "../pages/portfolio/page";
import LogoAndBranding from "../pages/logo_and_branding/page";
import UiUxDesignPage from "../pages/ui_ux_design/page";
import MotionGraphicsPage from "../pages/motion_graphics/page";
import AnimationsPage from "../pages/animations/page";
import DigitalMarketingPage from "../pages/digital_marketing/page";
import CaseStudyPage from "../pages/case_study/page";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <>
      <ScrollToTop />
      
      <PageTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/logo-and-branding" element={<LogoAndBranding />} />
          <Route path="/ui-ux-design" element={<UiUxDesignPage />} />
          <Route path="/motion-graphics" element={<MotionGraphicsPage />} />
          <Route path="/animations" element={<AnimationsPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
