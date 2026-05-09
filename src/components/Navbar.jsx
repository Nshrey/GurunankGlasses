export default function Navbar({ openModal }) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-4 gap-3">
        <div className="text-base md:text-xl font-semibold text-gray-900 tracking-wide truncate">
          Gurunanak Glass Industries
        </div>

        <div className="space-x-8 hidden md:flex text-gray-700">
          <a href="#products" className="hover:text-black transition">
            Products
          </a>
          <a href="#gallery" className="hover:text-black transition">
            {" "}
            Gallery
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        <button
          onClick={openModal}
          className="bg-white text-black px-4 md:px-5 py-2 rounded-xl hover:bg-gray-100 transition shadow-md text-sm md:text-base whitespace-nowrap"
        >
          <span className="hidden md:inline">Get Quote</span>
          <span className="md:hidden">💬</span>
        </button>
      </div>
    </nav>
  );
}
