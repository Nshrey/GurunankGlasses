import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";

export default function Gallery() {
  const images = [
    {
      src: img1,
      alt: "Glass Installation",
      height: "h-[500px]",
    },
    {
      src: img2,
      alt: "Office Glass Partition",
      height: "h-[320px]",
    },
    {
      src: img1,
      alt: "Modern Glass Work",
      height: "h-[380px]",
    },
    {
      src: img2,
      alt: "Decorative Glass",
      height: "h-[450px]",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-center mb-4 text-gray-900"
        >
          Our Work
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-600 mb-14"
        >
          Selected premium glass installations
        </p>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md group"
            >
              <div className={`relative ${img.height}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
