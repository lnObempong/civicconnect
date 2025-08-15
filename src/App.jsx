import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitReport from "./pages/SubmitReport";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== "/" && location.pathname !== "/login" && <Navbar />}
      <div className="flex-grow">{children}</div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<SubmitReport />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
