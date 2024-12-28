import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import MainNav from "./components/MainNav"; 
import HeroSection from "./components/HeroSection"; 
import CategorySection from "./components/CategorySection";
import WorldNewsSection from "./components/WorldNewsSection";
import VideoSection from "./components/VideoSection";
import LatestNewsSection from "./components/LatestNewsSection";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage"; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <MainNav />

        <Routes>
          {/* HomePage Nav*/}
          <Route path="/" element={
            <>
              <HeroSection />
              <CategorySection />
              <WorldNewsSection />
              <VideoSection />
              <LatestNewsSection />
            </>
          } />
          
          {/* Articles Page*/}
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
