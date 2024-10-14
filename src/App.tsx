import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HeroSection from "./pages/HeroSection";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div className="bg-building-image bg-no-repeat h-full w-full bg-left-bottom relative xs:bg-[10%_70%] sm:bg-[13%_65%] xl:bg-left xl:h-[110%] xxl:h-[130%] 2xxl:h-[160%] 2xxl:bg-[10%_0%]">
        <div className="w-full h-full">
          <Navbar />
        </div>

        <div className="absolute top-[5.5rem] z-20 xxl:ml-8" id="home">
          <HeroSection />
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-h-max w-full bg-about-gradient" id="about">
        <AboutUs />
      </div>

      {/* Projects Section */}
      <div className="h-full w-full bg-project-gradient" id="projects">
        <Projects />
      </div>

      {/* Contact Us Section */}
      <div className="min-h-max w-full bg-project-gradient xl:py-[8rem] md:py-[14rem] py-[8rem]" id="contact">
        <ContactUs />
      </div>

      {/* Footer Section */}
      <div className="w-full py-[3rem]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
