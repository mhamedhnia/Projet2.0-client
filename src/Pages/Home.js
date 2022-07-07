import React from "react";

import Service from "../Components/Services/Service";
import GallerieList from "../Components/Gallerie/GallerieList";
import Contact from "../Components/ContactForm/Contact";

import Hero from "../Components/Hero/Hero";

import About from "../Components/AboutUs/About";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />

            <Service />

            <GallerieList />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
