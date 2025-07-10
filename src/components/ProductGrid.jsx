import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Neon Drip Hoodie", price: 69.99, image: "https://via.placeholder.com/300x400?text=Neon+Hoodie", color: "Neon Pink" },
  { id: 2, name: "Glitch Cargo Pants", price: 49.99, image: "https://via.placeholder.com/300x400?text=Cargo+Pants", color: "Charcoal" },
  { id: 3, name: "Pastel Wave Tee", price: 29.99, image: "https://via.placeholder.com/300x400?text=Wave+Tee", color: "Pastel Blue" },
  { id: 4, name: "Cyber Jacket", price: 89.99, image: "https://via.placeholder.com/300x400?text=Cyber+Jacket", color: "Black" },
];

export default function ProductGrid() {
  return (
    <section className="py-12 px-4 bg-gray-900/50">
      <h2 className="text-4xl font-bebas neon-text text-center mb-8 animate-fadeIn">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}