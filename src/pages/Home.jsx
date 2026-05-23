import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Industries />
            <Gallery />
            <Stats />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;