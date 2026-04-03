import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// We will build this layout wrapper next
import Layout from "./components/Layout";

// Your distinct pages
import LiveRedirect from "./components/LiveRedirect";
import CreativeJam from "./pages/CreativeJam";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import P3Showcase from "./pages/showcase/P3";
import SteamysShowcase from "./pages/showcase/Steamys";
import McCutcheonMayhem from "./pages/showcase/McCutcheonMayhem";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component wraps all routes to provide the Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcase/p3" element={<P3Showcase />} />
          <Route path="/showcase/steamys" element={<SteamysShowcase />} />
          <Route path="/showcase/mcutmayhem" element={<McCutcheonMayhem />} />
          <Route path="/jam" element={<CreativeJam />} />
          <Route path="/live" element={<LiveRedirect />} />
        </Route>
      </Routes>
    </Router>
  );
}
