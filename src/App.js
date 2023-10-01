import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
        </Helmet>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
