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

  const openModal = (product = null) => {
    setSelectedProduct(product || null);
    setShowLocationModal(true);
  };

  const openGeneralModal = () => openModal(null);

  return (
    <>
      <Navbar openModal={openGeneralModal} />
      <Hero openModal={openGeneralModal} />
      <Products openModal={openModal} />
      <Gallery />
      <GoogleReviews />
      <Contact />

      {/* Floating WhatsApp */}
      <button
        onClick={openGeneralModal}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg z-50 animate-pulse-slow"
      >
        💬
      </button>

      {/* Premium Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-80 text-center shadow-2xl animate-fade-in">

            <h3 className="text-xl font-semibold mb-1">
              Select Location
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Choose your nearest branch
            </p>

            {selectedProduct && (
              <p className="text-xs text-blue-600 mb-4">
                {selectedProduct}
              </p>
            )}

            <div className="space-y-3">

              <button
                onClick={() => {
                  const message = selectedProduct
                    ? `Hi, I'm interested in ${selectedProduct} (Raipur branch)`
                    : `Hi, I want a quote from Raipur branch`;

                  window.open(`https://wa.me/919098455957?text=${encodeURIComponent(message)}`);
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                📍 Raipur
              </button>

              <button
                onClick={() => {
                  const message = selectedProduct
                    ? `Hi, I'm interested in ${selectedProduct} (Bilaspur branch)`
                    : `Hi, I want a quote from Bilaspur branch`;

                  window.open(`https://wa.me/919203656660?text=${encodeURIComponent(message)}`);
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                📍 Bilaspur
              </button>

            </div>

            <button
              onClick={() => setShowLocationModal(false)}
              className="mt-4 text-gray-500"
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