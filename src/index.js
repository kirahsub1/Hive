// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// // import App from "./App";
// import Home from "./pages/home";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route index element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home"; // Assuming Home is the default page
import Register from "./pages/register";
// Concisely render the app with routing
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route for Home */}
         <Route path="/" element={<Register />} /> {/* Default route for Register */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
