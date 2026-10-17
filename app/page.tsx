import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Illustrated Peaceful Pastel Sky & Landscape Background */}
      <Background />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Sticky Minimal Navbar */}
        <Navbar />

        {/* Hero Section */}
        <main id="main-content">
          <Hero />

          {/* Projects Section */}
          <Projects />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Resume Section */}
          <Resume />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </div>
  );
}
