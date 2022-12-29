import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SuccessStories from "./pages/SuccessStories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import DevopsServices from "./pages/services/DevopsServices";
import ProductReEngineering from "./pages/services/ProductReEngineering";
import StickyWhatsapp from "./components/StickyWhatsapp";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/mobile-application-development"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/services/devops-solution-and-services"
          element={<DevopsServices />}
        />
        <Route
          path="/services/product-re-engineering"
          element={<ProductReEngineering />}
        />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      <StickyWhatsapp />
    </>
  );
};

export default App;
