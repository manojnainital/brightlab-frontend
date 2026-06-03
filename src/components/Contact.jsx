import { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

import API from "../api/axios";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/api/contact", formData);

            alert("Message Sent Successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    };

    return (

        <section
            id="contact"
            className="relative py-16 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 overflow-hidden"
        >

            {/* Background Glow */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}

                <div className="text-center mb-10">

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Get In Touch
                    </h2>

                    <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
                        Connect with BrightLab for advanced scientific testing,
                        research consultation and analytical solutions tailored
                        for industries, healthcare and environmental sectors.
                    </p>

                </div>

                {/* Main Grid */}

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left Side */}

                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[30px] p-7 text-white shadow-2xl">

                        <h3 className="text-3xl font-bold mb-10">
                            Contact Information
                        </h3>

                        <div className="space-y-5">

                            <div className="flex gap-5 items-start">

                                <div className="bg-cyan-500 p-4 rounded-2xl">
                                    <FaMapMarkerAlt size={22} />
                                </div>

                                <div>

                                    <h4 className="text-xl font-semibold">
                                        Address
                                    </h4>

                                    <p className="text-gray-300 mt-2 leading-relaxed">
                                        C-125, Sector-63 HCL, Noida Uttar Pradesh 201301
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5 items-start">

                                <div className="bg-cyan-500 p-4 rounded-2xl">
                                    <FaPhoneAlt size={20} />
                                </div>

                                <div>

                                    <h4 className="text-xl font-semibold">
                                        Phone
                                    </h4>

                                    <p className="text-gray-300 mt-2">
                                        +91 7011212220, +91 8796071220
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5 items-start">

                                <div className="bg-cyan-500 p-4 rounded-2xl">
                                    <FaEnvelope size={20} />
                                </div>

                                <div>

                                    <h4 className="text-xl font-semibold">
                                        Email
                                    </h4>

                                    <p className="text-gray-300 mt-2">
                                        btltestinglabs@gmail.com
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5 items-start">

                                <div className="bg-cyan-500 p-4 rounded-2xl">
                                    <FaClock size={20} />
                                </div>

                                <div>

                                    <h4 className="text-xl font-semibold">
                                        Working Hours
                                    </h4>

                                    <p className="text-gray-300 mt-2">
                                        Monday - Saturday
                                    </p>

                                    <p className="text-gray-300">
                                        10:00 AM - 6:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Bottom Card */}

                        <div className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 shadow-xl">

                            <h4 className="text-2xl font-bold">
                                Trusted Scientific Partner
                            </h4>

                            <p className="mt-4 text-cyan-100 leading-relaxed">
                                Delivering accurate laboratory testing,
                                research excellence and certified analytical
                                services with modern technology.
                            </p>

                        </div>

                    </div>

                    {/* Right Form */}

                    <div className="bg-white rounded-[30px] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">

                        <h3 className="text-3xl font-bold text-gray-800 mb-10">
                            Send Your Inquiry
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-7"
                        >

                            <div className="grid md:grid-cols-2 gap-6">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    required
                                />

                            </div>

                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-5 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Contact;