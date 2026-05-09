import { useState } from "react";

// Images
import mirrorsImg from "../assets/categories/mirros.jpg";
import partitionsImg from "../assets/categories/partitions&Enclosures.jpg";
import safetyImg from "../assets/categories/safety&laminatedglass.jpg";
import decorativeImg from "../assets/categories/decorativeGlass.jpg";

export default function Products({ openModal }) {
  const categories = [
    {
      name: "Mirrors",
      image: mirrorsImg,
      products: ["LED Mirrors", "Beveled Mirror Wall Panels"],
    },
    {
      name: "Partitions & Enclosures",
      image: partitionsImg,
      products: [
        "Architectural Glass Partitions",
        "Decorative Glass Partition",
        "Shower Enclosures",
      ],
    },
    {
      name: "Safety Glass",
      image: safetyImg,
      products: [
        "Laminated Safety Glass",
        "Fabric Laminated Glass",
        "Sound Proof Glass",
      ],
    },
    {
      name: "Designer Glass",
      image: decorativeImg,
      products: [
        "UV Printed Glass",
        "Frosted Glass",
        "Fluted Glass",
        "Tinted Glass",
        "Tinted Fluted Glass",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="products" className="pt-12 pb-20 md:pt-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-center mb-4"
        >
          Our Glass Solutions
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-500 mb-12"
        >
          Explore our premium range of glass products
        </p>

        {/* GRID */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="break-inside-avoid border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Card Header */}
              <div
                onClick={() => toggleCategory(index)}
                className="relative h-52 cursor-pointer group"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <h3 className="text-white text-2xl font-semibold tracking-wide">
                    {category.name}
                  </h3>

                  <div className="text-white text-4xl font-light">
                    {openIndex === index ? "−" : "+"}
                  </div>
                </div>
              </div>

              {/* Expandable Products */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 p-5" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-3">
                  {category.products.map((product, i) => (
                    <button
                      key={i}
                      onClick={() => openModal(product)}
                      className="border rounded-xl py-4 px-5 text-left hover:bg-gray-50 hover:border-blue-400 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">
                          {product}
                        </span>

                        <span className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition">
                          ↗
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
