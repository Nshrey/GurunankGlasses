import { useState } from "react";

// 🔥 IMPORT YOUR IMAGES
import mirrorsImg from "../assets/categories/mirros.jpg";
import partitionsImg from "../assets/categories/partitions&Enclosures.jpg";
import safetyImg from "../assets/categories/safety&laminatedglass.jpg";
import decorativeImg from "../assets/categories/decorativeGlass.jpg";

export default function Products({ openModal }) {
  const categories = [
    {
      name: "Mirrors",
      products: ["LED Mirrors", "Beveled Mirror Wall Panels"],
      image: mirrorsImg,
    },
    {
      name: "Partitions & Enclosures",
      products: [
        "Architectural Glass Partitions",
        "Decorative Glass Partition",
        "Shower Enclosures",
      ],
      image: partitionsImg,
    },
    {
      name: "Safety Glass",
      products: [
        "Laminated Safety Glass",
        "Fabric Laminated Glass",
        "Sound Proof Glass",
      ],
      image: safetyImg,
    },
    {
      name: "Designer Glass",
      products: [
        "UV Printed Glass",
        "Frosted Glass",
        "Fluted Glass",
        "Tinted Glass",
        "Tinted Fluted Glass",
      ],
      image: decorativeImg,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="products" className="py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Our Glass Solutions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Explore our range of premium glass products
        </p>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group hover:border hover:border-blue-400"
            >
              <div className="h-52 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 backdrop-blur-[1px] transition"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold tracking-wide text-center px-2">
                    {cat.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 max-h-[80vh] overflow-y-auto shadow-2xl">
            <h3 className="text-xl font-semibold mb-4 text-center">
              {selectedCategory.name}
            </h3>

            <div className="space-y-3">
              {selectedCategory.products.map((product, i) => (
                <button
                  key={i}
                  onClick={() => {
                    openModal(product);
                    setSelectedCategory(null);
                  }}
                  className="w-full border py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  {product}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-5 w-full text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
