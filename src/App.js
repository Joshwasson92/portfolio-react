import "./App.css";
import React from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <main>
          <About />
          <Contact />
          <Projects />
          <Skills />
        </main>
      </header>
    </div>
  );
}

export default App;
