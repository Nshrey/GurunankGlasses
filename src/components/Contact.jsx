export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 text-center">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12"
      >
        Our Branches & Contact
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {/* Raipur */}
        <div
          data-aos="fade-up"
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            📍 Raipur
          </h3>

          <p className="text-gray-700 mb-2 font-medium">📞 +91 9098455957</p>

          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Ringroad-01, NH6, Pachpedi Naka Rd, near Prakash Palace, Marble
            Market, Tikrapara, Raipur, Chhattisgarh
          </p>

          <div className="flex gap-3">
            <a
              href="tel:9098455957"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Call
            </a>

            <a
              href="https://wa.me/919098455957"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bilaspur */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            📍 Bilaspur
          </h3>

          <p className="text-gray-700 mb-2 font-medium">📞 +91 9203656660</p>

          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Opposite Valmiki Chowk, Shanichari Bazar, Gol Bazar, Bilaspur,
            Chhattisgarh
          </p>

          <div className="flex gap-3">
            <a
              href="tel:9203656660"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Call
            </a>

            <a
              href="https://wa.me/919203656660"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
