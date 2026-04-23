import { useEffect } from "react";
import AOS from "aos";

import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";

export default function Gallery() {
  const images = [
    { src: img1, alt: "Glass railing" },
    { src: img2, alt: "Office partition" },
  ];

  // IMPORTANT: refresh AOS for this section
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-4 text-gray-900"
        >
          Our Work
        </h2>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-600 mb-10"
        >
          Recent glass installations
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
