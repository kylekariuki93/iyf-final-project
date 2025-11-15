import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/stats";
import Features from "./components/sections/Features";
import Navigation from "./components/layout/Navigation";
import NewStock from "./components/sections/Arrivals";
import AboutKyleCars from "./components/sections/Biography";
import Catalogue from "./components/common/category";
import Testimonials from "./components/common/testimonials";
import SubscriptionSection from "./components/common/subscription";
import Footer from "./components/layout/Footer";
import AuthButtons from "./components/common/Buttons";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function HomePage() {
  return (
    <div>
      {/* Header + Navigation */}
      <div className="bg-gray-900 text-white p-5 flex justify-between items-center">
        <Header />
        <Navigation />
      </div>

      {/* Auth Buttons Section — above Hero */}
      <div className="flex justify-center bg-gray-800 py-6">
        <AuthButtons />
      </div>

      {/* Main homepage sections */}
      <Hero />
      <Stats />
      <Features />
      <NewStock />
      <AboutKyleCars />
      <Catalogue />
      <Testimonials />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Authentication pages */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
