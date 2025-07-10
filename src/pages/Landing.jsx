import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Landing() {
  const navigate = useNavigate();

  console.log('Landing component mounted'); // Log when component mounts

  useEffect(() => {
    console.log('useEffect triggered'); // Log when useEffect runs
    const hasVisited = localStorage.getItem('hasVisited');
    console.log('hasVisited:', hasVisited); // Log localStorage value
    if (hasVisited) {
      console.log('Redirecting to /home (already visited)');
      navigate('/home');
    } else {
      console.log('First visit, setting hasVisited and redirecting after 10 seconds');
      const timer = setTimeout(() => {
        localStorage.setItem('hasVisited', 'true');
        console.log('hasVisited set to true, redirecting to /home');
        navigate('/home');
      }, 10000); // 10-second delay

      // Cleanup timeout on component unmount
      return () => {
        console.log('Cleaning up timer');
        clearTimeout(timer);
      };
    }
  }, [navigate]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://via.placeholder.com/1920x1080?text=GenZ+Vibes')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <h1 className="relative text-5xl sm:text-7xl md:text-9xl font-bebas neon-text glitch animate-pulseNeon">
        GenZ Threads
      </h1>
      <p className="relative text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 mb-8 max-w-md animate-slideUp">
        Drop the drip, rock the vibe. Exclusive streetwear for the bold.
      </p>
      <a
        href="/home"
        className="relative gradient-btn text-white font-bold py-3 px-8 rounded-lg text-xl sm:text-2xl animate-slideUp"
      >
        Enter the Vibe
      </a>
      <div className="relative flex space-x-4 mt-6 animate-slideUp">
        <a href="#" className="text-neonPink hover:text-neonCyan text-base sm:text-lg">Instagram</a>
        <a href="#" className="text-neonPink hover:text-neonCyan text-base sm:text-lg">TikTok</a>
        <a href="#" className="text-neonPink hover:text-neonCyan text-base sm:text-lg">X</a>
      </div>
    </section>
  );
}