import {
    FaVial,
    FaUsers,
    FaCheckCircle,
    FaHeadset
} from "react-icons/fa";

function Stats() {

    const stats = [
        {
            number: "10K+",
            label: "Samples Tested",
            icon: <FaVial />,
        },
        {
            number: "500+",
            label: "Clients Served",
            icon: <FaUsers />,
        },
        {
            number: "99%",
            label: "Accuracy Rate",
            icon: <FaCheckCircle />,
        },
        {
            number: "24/7",
            label: "Support",
            icon: <FaHeadset />,
        },
    ];

    return (

        <section className="relative py-24 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">

            {/* Glow Effects */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 opacity-20 blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-blue-900">
                        BrightLab Achievements
                    </h2>

                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Delivering trusted laboratory testing and analytical
                        solutions with precision, innovation and scientific excellence.
                    </p>

                </div>

                {/* Stats Grid */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="group bg-white/70 backdrop-blur-xl border border-white rounded-[30px] p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
                        >

                            {/* Icon */}

                            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition duration-500">

                                {item.icon}

                            </div>

                            {/* Number */}

                            <h2 className="mt-8 text-5xl font-extrabold text-blue-900">

                                {item.number}

                            </h2>

                            {/* Label */}

                            <p className="mt-4 text-gray-600 text-lg">

                                {item.label}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Stats;