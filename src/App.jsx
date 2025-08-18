import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitReport from "./pages/SubmitReport";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Navbar only if NOT on Landing or Login */}
      {location.pathname !== "/" && location.pathname !== "/login" && <Navbar />}
      <div className="flex-grow">{children}</div>
      {/* Show footer only if NOT on Landing */}
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

function App() {
  const [reports, setReports] = useState([]);

  const handleReportSubmit = (newReport) => {
    setReports((prevReports) => [...prevReports, newReport]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard reports={reports} />} />
          <Route path="/report" element={<SubmitReport onSubmit={handleReportSubmit} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
