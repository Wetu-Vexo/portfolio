import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/Navbar";
import Home from "./components/sections/Home";
import OurProject from "./components/sections/OurProject";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<OurProject/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
