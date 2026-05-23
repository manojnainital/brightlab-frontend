import { motion } from "framer-motion";
import {
    FaFlask,
    FaMicroscope,
    FaShieldAlt
} from "react-icons/fa";

function Hero() {

    return (

        <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#070F4E] text-white px-6">

            {/* Animated Grid Background */}

            <div className="absolute inset-0 opacity-10">

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            </div>

            {/* Glow Effects */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#B7E43A]/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>

            {/* Floating Glass Cards */}

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity
                }}
                className="hidden lg:flex absolute top-32 left-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 items-center gap-4 shadow-2xl"
            >

                <FaMicroscope className="text-3xl text-[#B7E43A]" />

                <div>

                    <h3 className="font-bold">
                        Advanced Research
                    </h3>

                    <p className="text-sm text-gray-300">
                        Precision Scientific Analysis
                    </p>

                </div>

            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity
                }}
                className="hidden lg:flex absolute bottom-32 right-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 items-center gap-4 shadow-2xl"
            >

                <FaShieldAlt className="text-3xl text-cyan-300" />

                <div>

                    <h3 className="font-bold">
                        NABL Standards
                    </h3>

                    <p className="text-sm text-gray-300">
                        Trusted & Certified Testing
                    </p>

                </div>

            </motion.div>

            {/* Hero Content */}

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center max-w-6xl"
            >

                {/* Badge */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8 shadow-xl"
                >

                    <FaFlask className="text-[#B7E43A]" />

                    <span className="text-sm tracking-wide">
                        Scientific Research & Testing Solutions
                    </span>

                </motion.div>

                {/* Main Heading */}

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-extrabold leading-tight"
                >

                    Precision Testing <br />

                    <span className="text-[#B7E43A]">
                        For A Smarter Future
                    </span>

                </motion.h1>

                {/* Subtitle */}

                <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">

                    Delivering reliable scientific testing,
                    research innovation, environmental analysis,
                    and quality assurance for industries worldwide.

                </p>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap justify-center gap-6">

                    <a
                        href="#services"
                        className="bg-[#B7E43A] text-[#111C7A] px-8 py-4 rounded-2xl font-bold hover:scale-110 hover:bg-[#D4FF5A] transition duration-300 shadow-2xl"
                    >
                        Explore Services
                    </a>

                    <a
                        href="#contact"
                        className="border border-white/20 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#111C7A] transition duration-300"
                    >
                        Contact Us
                    </a>

                </div>

                {/* Stats */}

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">

                    {[
                        { value: "10K+", label: "Samples Tested" },
                        { value: "500+", label: "Clients" },
                        { value: "99%", label: "Accuracy" },
                        { value: "24/7", label: "Support" },
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08 }}
                            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
                        >

                            <h2 className="text-4xl font-bold text-[#B7E43A]">
                                {item.value}
                            </h2>

                            <p className="mt-2 text-gray-300">
                                {item.label}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </motion.div>

        </section>
    );
}

export default Hero;