import Navbar from "./component/navbar";
import Hero from "./component/heroPage";
import Projects from "./component/projects";
import AboutMe from "./component/aboutUs";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Projects />
    <AboutMe />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
