function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-14 px-8">

            <div className="grid md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-3xl font-bold">
                        BrightLab
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Advanced Testing & Research Laboratory
                        delivering trusted scientific solutions.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Contact
                    </h3>

                    <p className="text-gray-400">
                        brightlab.co.in
                    </p>

                    <p className="text-gray-400 mt-2">
                        info@brightlab.co.in
                    </p>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
                © 2026 BrightLab. All Rights Reserved.
            </div>

        </footer>
    );
}

export default Footer;