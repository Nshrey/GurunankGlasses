export default function Navbar({ openModal }) {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">
          Gurunanak Glass Industries
        </div>

        <div className="space-x-6 hidden md:flex">
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={openModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition duration-300"
        >
          Get Quote
        </button>
      </div>
    </nav>
  );
}
