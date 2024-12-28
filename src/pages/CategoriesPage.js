import React from "react";
import Header from "./components/Header"; 
import MainNav from "./components/MainNav"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Navigation */}
      <MainNav />

      <Footer />


      {/* Placeholder for Main Content */}
      {/* <main style={{ padding: "20px" }}>
        <h1>Welcome to Rubik World</h1>
        <p>This is the main content of the website.</p>
      </main> */}
    </div>
  );
}

export default App;
