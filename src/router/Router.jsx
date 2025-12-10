import ScrollToTop from "../components/ScrollToTop";
import PageTitle from "../hooks/PageTitle";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/page";
import ServicesPage from "../pages/services/page";
import PortfolioPage from "../pages/portfolio/page";

const Router = () => {
  return (
    <>
      {/* <ScrollToTop />
      <PageTitle /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
