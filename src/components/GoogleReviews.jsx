export default function GoogleReviews() {
  const locations = [
    {
      city: "Raipur",
      phone: "9098455957",
      whatsapp: "919098455957",
      address:
        "Ringroad-01, NH6, Pachpedi Naka Rd, near Prakash Palace, Marble Market, Tikrapara, Raipur, Chhattisgarh 492001",
      map: "https://www.google.com/maps?q=Gurunanak+Glass+Industries,+Raipur&output=embed",
      link: "https://maps.app.goo.gl/2jt1yNzZFeDWfquw5",
    },
    {
      city: "Bilaspur",
      phone: "9203656660",
      whatsapp: "919203656660",
      address:
        "Opposite Valmiki Chowk, Shanichari Bazar, Gol Bazar, Bilaspur, Chhattisgarh 495001",
      map: "https://www.google.com/maps?q=Valmiki+Chowk+Bilaspur&output=embed",
      link: "https://share.google/7qxYkzCoLF393dtTK",
    },
  ];

  return (
    <section className="py-24 md:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Our Locations
        </h2>

        <p className="text-gray-600 mb-12">
          Visit or contact our nearest branch
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Map */}
              <iframe
                src={loc.map}
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {loc.city}
                </h3>

                <p className="text-gray-600 mb-4">{loc.address}</p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* Call */}
                  <a
                    href={`tel:${loc.phone}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg"
                  >
                    Call
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${loc.whatsapp}?text=Hi, I want to enquire about glass services`}
                    target="_blank"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    WhatsApp
                  </a>

                  {/* Map */}
                  <a
                    href={loc.link}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
