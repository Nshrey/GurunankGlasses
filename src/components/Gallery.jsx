import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error("Failed to load gallery images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-gray-900">
          Our Work
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Selected premium glass installations
        </p>

        {loading && (
          <p className="text-center text-gray-500">Loading gallery...</p>
        )}

        {!loading && images.length === 0 && (
          <p className="text-center text-gray-500">
            Work images will appear here once uploaded.
          </p>
        )}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md group bg-white"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
