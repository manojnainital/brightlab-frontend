import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <div>

            <Navbar />

            <section className="py-20 px-8 bg-white min-h-screen">

                <div className="max-w-5xl mx-auto">

                    <h1 className="text-5xl font-bold text-blue-700">
                        About BrightLab
                    </h1>

                    <p className="mt-8 text-xl text-gray-700 leading-9">

                        BrightLab is an advanced testing and research laboratory
                        dedicated to delivering accurate, reliable and scientific
                        testing solutions across multiple industries.

                    </p>

                    <p className="mt-6 text-lg text-gray-600 leading-8">

                        We provide laboratory services for food testing,
                        water analysis, environmental testing, microbiology,
                        pharmaceuticals and industrial quality control.

                    </p>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default About;