import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// We will build this layout wrapper next
import Layout from "./components/Layout";

// Your distinct pages
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import CreativeJam from "./pages/CreativeJam";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component wraps all routes to provide the Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/jam" element={<CreativeJam />} />
        </Route>
      </Routes>
    </Router>
  );
}
