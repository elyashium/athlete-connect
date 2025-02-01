// components/Hero.tsx
import { useNavigate } from 'react-router-dom';


export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
     
      <div className="text-center">
        <div className="text-6xl font-bold text-[var(--neon-green)] mb-4">ATHELETE</div>
        <div className="text-6xl font-bold text-[var(--neon-green)] mb-4">CONNECT</div>
        <p className="text-xl text-white mb-8">Your ultimate platform for connecting athletes and coaches.</p>
        <button
          onClick={() => navigate('/onboarding')}
          className="bg-[var(--neon-green)] text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}