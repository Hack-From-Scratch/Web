import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// We will build this layout wrapper next
import Layout from "./components/Layout";

// Your distinct pages
import LiveRedirect from "./components/LiveRedirect";
import CreativeJam from "./pages/CreativeJam";
import Donate from "./pages/Donate";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component wraps all routes to provide the Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/jam" element={<CreativeJam />} />
          <Route path="/live" element={<LiveRedirect />} />
        </Route>
      </Routes>
    </Router>
  );
}
