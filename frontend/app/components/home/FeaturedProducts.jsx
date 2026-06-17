import { featuredProducts } from "@/data/homeData";
export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Vintage Hoodie",
      price: 599,
      image: "👕",
    },
    {
      id: 2,
      title: "Handmade Candle",
      price: 299,
      image: "🕯️",
    },
    {
      id: 3,
      title: "Mini Plant Pot",
      price: 399,
      image: "🪴",
    },
    {
      id: 4,
      title: "Aesthetic Tote Bag",
      price: 499,
      image: "👜",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>

        <button className="text-purple-600 font-semibold">View All →</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
              {product.image}
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{product.title}</h3>

              <p className="text-purple-600 font-bold mt-2">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
