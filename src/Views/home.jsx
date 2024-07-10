import NavBar from "../Components/NAVBAR/navBar";
import Hero from "../Components/HERO/hero";
import Skills from "../Components/SKILLS/skills";
import Fotter from "../Components/FOTTER/fotter";
import Works from "../Components/WORKS/works";
import Contact from "../Components/CONTACT/contact";
import Header from "../Components/HEADER/header";
import "./home.css";
import "boxicons";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", function () {
    var scrollTopButton = document.querySelector(".scroll-top");
    if (this.window.pageYOffset > 200) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });

  return (
    <>
      <Header />
      <NavBar />
      <Hero />
      <Skills />
      <Works />
      <Contact />
      <Fotter />
      <button className="scroll-top" onClick={scrollToTop}>
        <box-icon name="up-arrow" type="solid" color="white"></box-icon>
      </button>
      <Analytics />
    </>
  );
};

export default Home;
