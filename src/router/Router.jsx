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
import CustomStoresPage from "../pages/custom_stores/page";
import DigitalMarketingCaseStudy1 from "../pages/digital_marketing/case_study_1/page";
import DigitalMarketingCaseStudy2 from "../pages/digital_marketing/case_study_2/page";
import DigitalMarketingCaseStudy3 from "../pages/digital_marketing/case_study_3/page";
import DigitalMarketingCaseStudy4 from "../pages/digital_marketing/case_study_4/page";

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
          <Route path="/digital-marketing/case-study-1" element={<DigitalMarketingCaseStudy1 />} />
          <Route path="/digital-marketing/case-study-2" element={<DigitalMarketingCaseStudy2 />} />
          <Route path="/digital-marketing/case-study-3" element={<DigitalMarketingCaseStudy3 />} />
          <Route path="/digital-marketing/case-study-4" element={<DigitalMarketingCaseStudy4 />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-stores" element={<CustomStoresPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
