import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Library from "./pages/Library";
import ContactPage from "./pages/ContactPage";
import { mountReveal } from "./utils/reveal"; // scroll/entrance effects
import "./App.css";




/** Home page layout (hero + about + projects). */
function HomeLayout() {
  // One-time mount hook for reveal animations
  useEffect(() => { mountReveal(); }, []);
  useEffect(() => {
    document.title = "Home • ML/DS Portfolio Website";
  }, []);
  
  return (
    <div className="viewport">
      <Hero />
      <div className="split">
        <aside className="pane-left">
          <div className="reveal"><About /></div>
        </aside>
        <main className="pane-right">
          <div className="reveal"><Projects /></div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/library" element={<Library />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
