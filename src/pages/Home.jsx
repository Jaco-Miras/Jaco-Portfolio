import React from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
}

export default Home;
