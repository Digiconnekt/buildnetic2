import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import StickyWhatsapp from "./components/StickyWhatsapp";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

import ProductReEngineering from "./pages/services/ProductReEngineering";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import DevopsServices from "./pages/services/DevopsServices";
import EngagementModel from "./pages/EngagementModel";
import DataAnalytics from "./pages/services/DataAnalytics";
import Testing from "./pages/services/Testing";

import NodeJsDevelopment from "./pages/technologies/NodeJsDevelopment";
import Python from "./pages/technologies/Python";
import Java from "./pages/technologies/Java";
import Android from "./pages/technologies/Android";
import Ios from "./pages/technologies/Ios";
import ReactJs from "./pages/technologies/ReactJs";
import ReactNative from "./pages/technologies/ReactNative";
import Angular from "./pages/technologies/Angular";
import Blockchain from "./pages/technologies/Blockchain";

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
        <Route path="/engagement-model" element={<EngagementModel />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/nodejs" element={<NodeJsDevelopment />} />
        <Route path="/technology/python" element={<Python />} />
        <Route path="/technology/java" element={<Java />} />
        <Route path="/technology/android" element={<Android />} />
        <Route path="/technology/ios" element={<Ios />} />
        <Route path="/technology/reactjs" element={<ReactJs />} />
        <Route path="/technology/react-native" element={<ReactNative />} />
        <Route path="/technology/angular" element={<Angular />} />
        <Route path="/technology/blockchain" element={<Blockchain />} />

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
