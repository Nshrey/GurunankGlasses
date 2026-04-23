import {
  FaRegLightbulb,
  FaDoorOpen,
  FaShower,
  FaThLarge,
  FaRegSquare,
  FaCogs,
  FaLayerGroup,
  FaVolumeUp,
  FaShieldAlt,
  FaPrint,
  FaGripLines,
  FaTint,
} from "react-icons/fa";

export default function Products({ openModal }) {
  const products = [
    { name: "LED Mirrors", icon: <FaRegLightbulb /> },
    { name: "Architectural Glass Partitions", icon: <FaDoorOpen /> },
    { name: "Shower Enclosures", icon: <FaShower /> },
    { name: "Decorative Glass Partition", icon: <FaThLarge /> },
    { name: "Beveled Mirror Wall Panels", icon: <FaRegSquare /> },
    { name: "Glass Hardwares", icon: <FaCogs /> },
    { name: "Fabric Laminated Glass", icon: <FaLayerGroup /> },
    { name: "Sound Proof Glass", icon: <FaVolumeUp /> },
    { name: "Laminated Safety Glass", icon: <FaShieldAlt /> },
    { name: "UV Printed Glass", icon: <FaPrint /> },
    { name: "Fluted Glass", icon: <FaGripLines /> },
    { name: "Tinted Glass", icon: <FaTint /> },
    { name: "Tinted Fluted Glass", icon: <FaGripLines /> },
    { name: "Frosted Glass", icon: <FaRegSquare /> },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
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
          Wide range of premium glass products for residential and commercial
          spaces
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => openModal(item.name)}
              className="cursor-pointer border border-gray-200 rounded-xl p-6 text-center bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 relative overflow-hidden group"
            >
              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 -translate-x-full group-hover:translate-x-full"></div>

              <div className="text-2xl text-blue-600 mb-3 flex justify-center relative z-10">
                {item.icon}
              </div>

              <p className="font-medium text-gray-800 relative z-10">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
