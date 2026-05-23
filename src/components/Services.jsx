import {
    FaFlask,
    FaTint,
    FaMicroscope,
    FaLeaf,
    FaVial,
    FaLaptopMedical
} from "react-icons/fa";

function Services() {

    const services = [
        {
            title: "Food Testing",
            icon: <FaFlask />,
            desc: "Advanced food quality and safety analysis with certified laboratory standards.",
        },
        {
            title: "Water Testing",
            icon: <FaTint />,
            desc: "Comprehensive water purity testing for industrial and domestic applications.",
        },
        {
            title: "Chemical Analysis",
            icon: <FaVial />,
            desc: "Precise chemical composition analysis using modern scientific techniques.",
        },
        {
            title: "Microbiology",
            icon: <FaMicroscope />,
            desc: "Microbial identification and contamination testing with high accuracy.",
        },
        {
            title: "Environmental Testing",
            icon: <FaLeaf />,
            desc: "Environmental monitoring and pollution assessment services for industries.",
        },
        {
            title: "Research & Development",
            icon: <FaLaptopMedical />,
            desc: "Innovative research solutions and laboratory development support.",
        },
    ];

    return (

        <section
            id="services"
            className="relative py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
        >

            {/* Glow Background */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 opacity-20 blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-white">
                        Our Services
                    </h2>

                    <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
                        BrightLab provides advanced scientific testing,
                        analytical research and certified laboratory services
                        with modern technologies and professional expertise.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="group backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-[30px] shadow-2xl hover:-translate-y-3 hover:border-cyan-400 transition duration-500"
                        >

                            {/* Icon */}

                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition duration-500">

                                {service.icon}

                            </div>

                            {/* Title */}

                            <h3 className="text-2xl font-bold text-white mt-8">

                                {service.title}

                            </h3>

                            {/* Description */}

                            <p className="text-gray-300 mt-5 leading-relaxed">

                                {service.desc}

                            </p>

                            {/* Button */}

                            <button className="mt-8 text-cyan-400 font-semibold hover:text-white transition">

                                Learn More →

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Services;