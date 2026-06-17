import { categories } from "@/data/homeData";

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl p-4 text-center border shadow-sm bg-white"
          >
            <div className="text-3xl mb-2">{category.icon}</div>

            <span className="text-sm font-semibold text-gray-700">
              {category.name}
            </span>

            <span className="block text-xs text-gray-400 mt-1">
              {category.count} items
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
