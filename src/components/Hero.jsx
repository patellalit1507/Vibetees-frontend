import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <LazyLoadImage
        src="https://via.placeholder.com/1920x1080?text=Hero+Background"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        effect="blur"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <h2 className="relative text-5xl sm:text-6xl md:text-8xl font-bebas glitch animate-pulseNeon">
        GenZ Threads
      </h2>
      <p className="relative text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-md animate-slideUp">
        Drop the drip, rock the vibe. Exclusive streetwear for the bold.
      </p>
      <a
        href="/home"
        className="relative gradient-btn text-white font-bold py-3 px-6 rounded-lg text-xl sm:text-2xl animate-slideUp"
      >
        Shop Now
      </a>
    </section>
  );
}