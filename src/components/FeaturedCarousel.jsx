import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const featuredItems = [
  { id: 1, name: "Neon Drip Hoodie", image: "https://via.placeholder.com/600x400?text=Neon+Hoodie", price: 69.99 },
  { id: 2, name: "Glitch Cargo Pants", image: "https://via.placeholder.com/600x400?text=Cargo+Pants", price: 49.99 },
  { id: 3, name: "Pastel Wave Tee", image: "https://via.placeholder.com/600x400?text=Wave+Tee", price: 29.99 },
];

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % featuredItems.length);
  const prev = () => setCurrent((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);

  return (
    <section className="relative py-12 px-4">
      <h2 className="text-4xl font-bebas neon-text text-center mb-6 animate-fadeIn">Featured Vibes</h2>
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg">
        <LazyLoadImage
          src={featuredItems[current].image}
          alt={featuredItems[current].name}
          className="w-full h-[300px] sm:h-[500px] object-cover"
          effect="blur"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 p-4 rounded animate-slideUp">
          <h3 className="text-2xl font-bebas text-white">{featuredItems[current].name}</h3>
          <p className="text-lg text-neonCyan">${featuredItems[current].price}</p>
        </div>
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-neonPink"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-neonPink"
        >
          →
        </button>
      </div>
    </section>
  );
}