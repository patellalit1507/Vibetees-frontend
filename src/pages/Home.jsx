import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCarousel />
      <ProductGrid />
      <Footer />
    </div>
  );
}