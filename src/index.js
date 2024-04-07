import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Nopage from "./pages/nopage" // Uncomment if needed



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Default route */}
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nopage" element={<Nopage />} />
        {/* <Route path="*" element={<NotFound />} />  {/* Catch-all for unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
