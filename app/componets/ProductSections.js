import { useState } from "react";
import { FaBuilding, FaUserTie, FaStore, FaBriefcase } from "react-icons/fa";

const products = [
  { title: "For Enterprise", icon: <FaBuilding className="text-blue-500 text-4xl" />, description: "Custom solutions for large businesses ensuring compliance and efficiency." },
  { title: "For Tax ", icon: <FaUserTie className="text-purple-500 text-4xl" />, description: "Powerful tools for tax professionals to manage multiple clients seamlessly." },
  { title: "For SMEs", icon: <FaStore className="text-green-500 text-4xl" />, description: "Affordable and easy tax solutions designed for small and medium businesses." },
  { title: "For Individuals", icon: <FaBriefcase className="text-white text-4xl" />, description: "File income tax returns in 1 day, invest and grow your wealth, get expert assistance.", highlighted: true },
];

export default function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Products for everyone</h2>
        <p className="text-gray-500 mt-4">
          Built for scale, made by experts, and secure by design. Bringing you maximum tax savings, unmatched speed, and complete peace of mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-center items-center p-6 rounded-2xl transition-all duration-300 shadow-lg ${
                product.highlighted || hoveredIndex === index
                  ? "bg-purple-500 text-white"
                  : "bg-white text-gray-900 hover:bg-purple-500 hover:text-white"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {product.icon}
              <h3 className="text-2xl font-bold mt-4">{product.title}</h3>
              {(product.highlighted || hoveredIndex === index) && (
                <p className="mt-2 text-sm text-white text-center">{product.description}</p>
              )}
              <span className="absolute right-4 bottom-4 text-lg">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
