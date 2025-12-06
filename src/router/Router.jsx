import ScrollToTop from "../components/ScrollToTop";
import PageTitle from "../hooks/PageTitle";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/page";

const Router = () => {
  return (
    <>
      {/* <ScrollToTop />
      <PageTitle /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
