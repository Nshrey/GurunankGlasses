import logo from "../assets/categories/logo.jpeg";

export default function Navbar({ openModal }) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] md:w-[90%] max-w-7xl bg-white/85 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 gap-3">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="Gurunanak Glass Industries"
            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-xl shadow-sm shrink-0"
          />

          <div className="min-w-0">
            <p className="text-sm md:text-xl font-semibold text-gray-900 tracking-wide truncate">
              Gurunanak Glass Industries
            </p>
            <p className="hidden md:block text-xs text-gray-500">
              Premium Glass Solutions
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="space-x-8 hidden md:flex text-gray-700 font-medium">
          <a href="#products" className="hover:text-black transition">
            Products
          </a>
          <a href="#gallery" className="hover:text-black transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        {/* CTA */}
        <button
          onClick={openModal}
          className="bg-gray-900 text-white px-4 md:px-5 py-2.5 rounded-xl hover:bg-black transition shadow-md text-sm md:text-base whitespace-nowrap shrink-0"
        >
          <span className="hidden md:inline">Get Quote</span>
          <span className="md:hidden">💬</span>
        </button>
      </div>
    </nav>
  );
}
