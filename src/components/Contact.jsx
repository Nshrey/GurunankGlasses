export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Get in Touch
      </h2>

      <p className="text-gray-600 mb-2">
        📞 +91 8435666660
      </p>

      <p className="text-gray-600 mb-6">
      Ringroad-01, NH6, Pachpedi Naka Rd, near Prakash Palace, Marble Market, Postal Colony, Tikrapara, Raipur
      </p>

      <a
        href="https://wa.me/918435666660"
        target="_blank"
        className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}