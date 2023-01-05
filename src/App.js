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
import Technology from "./pages/Technology";
import EngagementModel from "./pages/EngagementModel";
import DataAnalytics from "./pages/services/DataAnalytics";
import Testing from "./pages/services/Testing";
import NodeJsDevelopment from "./pages/services/NodeJsDevelopment";
import Python from "./pages/services/Python";
import Error from "./pages/Error";
import Java from "./pages/services/Java";
import Android from "./pages/services/Android";
import Ios from "./pages/services/Ios";
import ReactJs from "./pages/services/ReactJs";
import ReactNative from "./pages/services/ReactNative";
import Angular from "./pages/services/Angular";
import Blockchain from "./pages/services/Blockchain";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />

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
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/testing" element={<Testing />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/engagement-model" element={<EngagementModel />} />
        <Route path="/nodejs" element={<NodeJsDevelopment />} />
        <Route path="/python" element={<Python />} />
        <Route path="/java" element={<Java />} />
        <Route path="/android" element={<Android />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/reactjs" element={<ReactJs />} />
        <Route path="/react-native" element={<ReactNative />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/blockchain" element={<Blockchain />} />

        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <StickyWhatsapp />
    </>
  );
};

export default App;
