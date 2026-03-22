import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="bg-gray-700 text-white w-full h-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
