import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab3 from "../assets/lab3.jpg";

function Gallery() {
    return (
        <section className="py-20 px-8 bg-white">

            <h2 className="text-4xl font-bold text-center text-blue-700 mb-14">
                Our Laboratory
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                <img
                    src={lab1}
                    alt="lab"
                    className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src={lab2}
                    alt="lab"
                    className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src={lab3}
                    alt="lab"
                    className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

            </div>

        </section>
    );
}

export default Gallery;