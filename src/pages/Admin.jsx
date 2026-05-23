import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Admin() {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {

        fetchContacts();

    }, []);

    const fetchContacts = async () => {

        try {

            const response = await API.get("/api/contact");

            setContacts(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteContact = async (id) => {

        try {

            await API.delete(`/api/contact/${id}`);

            fetchContacts();

        } catch (error) {

            console.log(error);

        }

    };

    const logout = () => {

        localStorage.removeItem("admin");

        navigate("/login");

    };

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-blue-700 mb-10">
                Admin Dashboard
            </h1>

            <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm"
            >
                Logout
            </button>

            {/* Search Box */}

            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-6 p-4 border rounded-lg w-full max-w-md"
            />

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-700 text-white">

                    <tr>

                        <th className="p-4 text-left">ID</th>

                        <th className="p-4 text-left">Name</th>

                        <th className="p-4 text-left">Email</th>

                        <th className="p-4 text-left">Message</th>

                        <th className="p-4 text-left">Date & Time</th>

                        <th className="p-4 text-left">Action</th>

                    </tr>

                    </thead>

                    <tbody>

                    {contacts
                        .filter((contact) =>
                            contact.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .map((contact) => (

                            <tr
                                key={contact.id}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="p-4">
                                    {contact.id}
                                </td>

                                <td className="p-4">
                                    {contact.name}
                                </td>

                                <td className="p-4">
                                    {contact.email}
                                </td>

                                <td className="p-4">
                                    {contact.message}
                                </td>

                                <td className="p-4">
                                    {new Date(contact.createdAt).toLocaleString()}
                                </td>

                                <td className="p-4">

                                    <button
                                        onClick={() =>
                                            deleteContact(contact.id)
                                        }
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default Admin;