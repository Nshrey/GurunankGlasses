export default function Hero({ openModal }) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      <div className="relative text-center text-white px-6 max-w-4xl">

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Premium Glass Solutions <br /> For Modern Spaces
        </h1>

        <h2 className="text-xl md:text-2xl mb-3 text-white/90">
          Gurunanak Glass Industries
        </h2>

        <p className="mb-8 text-white/80">
          Toughened, laminated & decorative glass
        </p>

        <button
          onClick={openModal}
          className="bg-white text-gray-900 px-8 py-3 rounded-full shadow-lg"
        >
          Get Quote
        </button>

      </div>
    </section>
  );
}