export default function Products({ openModal }) {
  const products = [
    { name: "Toughened Glass", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" },
    { name: "Laminated Glass", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { name: "Decorative Glass", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
    { name: "Mirrors", image: "https://images.unsplash.com/photo-1618220179428-22790b461013" },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
          Our Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item.name)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="p-4 text-center font-medium text-gray-800">
                {item.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}