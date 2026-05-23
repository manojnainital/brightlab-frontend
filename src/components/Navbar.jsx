import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="bg-blue-700 text-white px-8 py-4 shadow-md sticky top-0 z-50">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3 cursor-pointer">

                    <img
                        src={logo}
                        alt="BrightLab Logo"
                        className="w-12 h-12 object-contain transition duration-300 hover:scale-110"
                    />

                    <div>

                        <h1 className="text-2xl font-bold leading-none">
                            BrightLab
                        </h1>

                        <p className="text-xs text-cyan-200 tracking-wide">
                            Advanced Testing Laboratory
                        </p>

                    </div>

                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-lg">

                    <a
                        href="#home"
                        className="hover:text-cyan-200 transition"
                    >
                        Home
                    </a>

                    <a
                        href="#services"
                        className="hover:text-cyan-200 transition"
                    >
                        Services
                    </a>

                    <a
                        href="#industries"
                        className="hover:text-cyan-200 transition"
                    >
                        Industries
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-cyan-200 transition"
                    >
                        Contact
                    </a>

                </div>

                {/* Mobile Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <div className="md:hidden mt-4 flex flex-col gap-4 text-lg bg-blue-800 p-4 rounded-lg">

                    <a
                        href="#home"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>

                    <a
                        href="#services"
                        onClick={() => setMenuOpen(false)}
                    >
                        Services
                    </a>

                    <a
                        href="#industries"
                        onClick={() => setMenuOpen(false)}
                    >
                        Industries
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>

                </div>

            )}

        </nav>

    );
}

export default Navbar;