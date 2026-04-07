import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import GoogleReviews from "./components/GoogleReviews";
import Contact from "./components/Contact";

function App() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handles both product + general cases
  const openModal = (product = null) => {
    setSelectedProduct(product || null);
    setShowLocationModal(true);
  };

  // For Hero/Navbar (no product context)
  const openGeneralModal = () => openModal(null);

  return (
    <>
      {/* Navbar */}
      <Navbar openModal={openGeneralModal} />

      {/* Hero */}
      <Hero openModal={openGeneralModal} />

      {/* Products (IMPORTANT: passes product name) */}
      <Products openModal={openModal} />

      <Gallery />
      <GoogleReviews />
      <Contact />

      {/* Floating WhatsApp */}
      <button
        onClick={openGeneralModal}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M16 .4C7.3.4.3 7.4.3 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.7 0 15.7-7 15.7-15.6C31.7 7.4 24.7.4 16 .4z" />
        </svg>
      </button>

      {/* Modal */}
      {showLocationModal && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-80 text-center shadow-2xl animate-fade-in">

      {/* Title */}
      <h3 className="text-xl font-semibold mb-1 text-gray-900">
        Select Location
      </h3>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mb-4">
        Choose your nearest branch
      </p>

      {/* Product Context */}
      {selectedProduct && (
        <p className="text-xs text-blue-600 mb-4 font-medium">
          {selectedProduct}
        </p>
      )}

      <div className="space-y-3">

        {/* Raipur */}
        <button
          onClick={() => {
            const message = selectedProduct
              ? `Hi, I'm interested in ${selectedProduct} (Raipur branch)`
              : `Hi, I want a quote from Raipur branch`;

            window.open(
              `https://wa.me/919098455957?text=${encodeURIComponent(message)}`
            );
            setShowLocationModal(false);
          }}
          className="w-full flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition"
        >
          <span>📍 Raipur</span>
          <span className="text-sm opacity-80">→</span>
        </button>

        {/* Bilaspur */}
        <button
          onClick={() => {
            const message = selectedProduct
              ? `Hi, I'm interested in ${selectedProduct} (Bilaspur branch)`
              : `Hi, I want a quote from Bilaspur branch`;

            window.open(
              `https://wa.me/919203656660?text=${encodeURIComponent(message)}`
            );
            setShowLocationModal(false);
          }}
          className="w-full flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition"
        >
          <span>📍 Bilaspur</span>
          <span className="text-sm opacity-80">→</span>
        </button>

      </div>

      {/* Cancel */}
      <button
        onClick={() => setShowLocationModal(false)}
        className="mt-5 text-sm text-gray-500 hover:text-gray-700 transition"
      >
        Cancel
      </button>

    </div>
  </div>
)}
    </>
  );
}

export default App;