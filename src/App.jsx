import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import ComparisonComingSoon from "./pages/ComparisonComingSoon.jsx";
import "./App.css";
export default function App() {
  const [page, setPage] = useState("home");

  // Parse hash on load and on hashchange
  useEffect(() => {
    const read = () => {
      const h =
        window.location.hash.replace("#", "") || "home";  
      setPage(h);  
      // Capitalize menu name
      const menuName =
        h.charAt(0).toUpperCase() + h.slice(1); 
      // Update tab title
      document.title = `Dip Projects - ${menuName}`; 
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }; 
    // Set default hash
    if (!window.location.hash) {
      window.location.hash = "home";
    }  
    read();  
    window.addEventListener("hashchange", read);  
    return () => {
      window.removeEventListener("hashchange", read);
    };
  }, []);

  const navigate = (p) => {
    setPage(p);
    window.location.hash = p; 
    const menuName =
      p.charAt(0).toUpperCase() + p.slice(1); 
    document.title = `Dip Projects - ${menuName}`;
  };

  const pages = { home: Home, about: About, services: Services, projects: Projects, contact: Contact,   "comparison-coming-soon":ComparisonComingSoon };
  const PageComponent = pages[page] || Home;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar current={page} navigate={navigate} />
      <main style={{ flex: 1 }}>
        <PageComponent navigate={navigate} />
      </main>
      <Footer navigate={navigate} />

      <a href="https://www.dipprojects.com/" target="_blank" rel="noopener noreferrer" className="website-float">
        <img src="/website.png" alt="Website" className="website-icon" />
      </a>
      <a href="https://wa.me/919099406405?text=Hello%20Dip%20Projects" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon"/>
      </a>
    </div>
  );

}
