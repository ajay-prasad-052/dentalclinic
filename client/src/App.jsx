import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import TreatmentDetails from "./pages/TreatmentDetails";
import GalleryPage from "./pages/GalleryPage";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/:slug" element={<TreatmentDetails />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<Appointment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
      </Route>
    </Routes>
  );
}

export default App;
