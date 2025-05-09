
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
