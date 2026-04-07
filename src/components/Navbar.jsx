export default function Navbar() {
    return (
      <nav className="fixed w-full top-0 left-0 bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          
          <div className="text-xl font-bold text-gray-900">
            Gurunanak Glass
          </div>
  
          <div className="space-x-6 hidden md:flex">
            <a href="#products">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <a
  href="https://wa.me/918435666660?text=Hi, I want a quote"
  target="_blank"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-xl no-underline"
>
  Get Quote
</a>

        </div>
      </nav>
    );
  }