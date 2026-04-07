export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-4xl">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight drop-shadow-lg">
          Premium Glass Solutions <br /> For Modern Spaces
        </h1>

        {/* Company Name */}
        <h2 className="text-lg md:text-xl mb-3 text-white/90 font-medium">
          Gurunanak Glass Industries
        </h2>

        {/* Tagline */}
        <p className="mb-8 text-white/80 text-base md:text-lg">
          Toughened, laminated & decorative glass
        </p>

        {/* CTA */}
        <a
  href="https://wa.me/918435666660?text=Hi, I want a quote"
  target="_blank"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-xl no-underline"
>
  Get Quote
</a>

      </div>
    </section>
  );
}