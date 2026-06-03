import {
    FaSeedling,
    FaIndustry,
    FaFlask,
    FaLeaf,
    FaAppleAlt,
    FaGraduationCap
} from "react-icons/fa";

function Industries() {

    const industries = [
        {
            title: "Food Product Testing",
            icon: <FaAppleAlt />,
            desc: "Ensuring food quality, safety and compliance through advanced laboratory testing services.",
        },
        {
            title: "Training Programs",
            icon: <FaGraduationCap />,
            desc: "Industry-focused training programs designed to enhance skills, build expertise, and prepare professionals for real-world challenges."
        },
        {
            title: "Agriculture Product",
            icon: <FaSeedling />,
            desc: "Agricultural soil, fertilizer and crop testing for sustainable farming solutions.",
        },
        // {
        //     title: "Pharmaceutical",
        //     icon: <FaFlask />,
        //     desc: "Reliable pharmaceutical analysis and quality assurance for modern healthcare industries.",
        // },
        {
            title: "Environment Test",
            icon: <FaLeaf />,
            desc: "Environmental monitoring and pollution assessment with certified methodologies.",
        },
        {
            title: "Manufacturing",
            icon: <FaIndustry />,
            desc: "Industrial material testing and process quality analysis for manufacturing sectors.",
        },
    ];

    return (

        <section
            id="industries"
            className="relative py-24 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden"
        >

            {/* Background Glow */}

            <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-200 opacity-40 blur-[100px]"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-40 blur-[100px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-blue-900">
                        Industries We Serve
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        BrightLab supports multiple industries with accurate
                        scientific testing, analytical research and certified
                        laboratory solutions tailored to business requirements.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {industries.map((industry, index) => (

                        <div
                            key={index}
                            className="group bg-white/70 backdrop-blur-xl border border-white shadow-xl p-8 rounded-[30px] hover:-translate-y-3 hover:shadow-2xl transition duration-500"
                        >

                            {/* Icon */}

                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition duration-500">

                                {industry.icon}

                            </div>

                            {/* Title */}

                            <h3 className="text-2xl font-bold text-gray-800 mt-8">

                                {industry.title}

                            </h3>

                            {/* Description */}

                            <p className="text-gray-600 mt-5 leading-relaxed">

                                {industry.desc}

                            </p>

                            {/* Link */}

                            <button className="mt-8 text-blue-700 font-semibold hover:text-cyan-500 transition">

                                Explore Industry →

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Industries;