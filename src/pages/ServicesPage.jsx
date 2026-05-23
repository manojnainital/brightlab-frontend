import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServicesPage() {

    const services = [
        "Food Testing",
        "Water Testing",
        "Microbiology",
        "Environmental Testing",
        "Chemical Analysis",
        "Research & Development",
    ];

    return (
        <div>

            <Navbar />

            <section className="py-20 px-8 bg-gray-100 min-h-screen">

                <h1 className="text-5xl font-bold text-center text-blue-700 mb-16">
                    Our Services
                </h1>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="bg-white p-10 rounded-2xl shadow-lg"
                        >

                            <h2 className="text-2xl font-bold text-gray-800">
                                {service}
                            </h2>

                            <p className="mt-4 text-gray-600">
                                High quality scientific testing and laboratory solutions.
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default ServicesPage;