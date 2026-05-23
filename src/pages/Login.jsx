import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        if (
            email === "admin@brightlab.com" &&
            password === "admin123"
        ) {

            localStorage.setItem("admin", "true");

            navigate("/admin");

        } else {

            alert("Invalid Credentials");

        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md"
            >

                <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
                    Admin Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border rounded-lg mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 border rounded-lg mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="w-full bg-blue-700 text-white py-4 rounded-lg hover:bg-blue-800"
                >
                    Login
                </button>

            </form>

        </div>

    );
}

export default Login;