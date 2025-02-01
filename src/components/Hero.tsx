// components/Hero.tsx
import { useNavigate } from 'react-router-dom';
import Bg from './Bg';

export default function Hero() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* First Page: Title and Get Started Button */}
            <div className="relative flex-grow flex flex-col items-center justify-center py-20 md:py-60">
                <div className="absolute left-10 md:left-20">
                    <Bg />
                </div>
                <div className="relative text-center px-4">
                    <div className="text-4xl md:text-6xl font-bold text-[var(--neon-green)] mb-4">ATHLETE</div>
                    <div className="text-4xl md:text-6xl font-bold text-[var(--neon-green)] mb-4">CONNECT</div>
                    <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
                        Your ultimate platform for connecting athletes and coaches. Train smarter, perform better, and achieve greatness together.
                    </p>
                    <button
                        onClick={() => navigate('/onboarding')}
                        className="bg-[var(--neon-green)] text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Mock Profiles Section */}
            <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-[var(--neon-green)] text-center mb-8">Featured Profiles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Profile 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-white">John Doe</h3>
                        <p className="text-gray-400">Professional Runner</p>
                        <p className="text-gray-300 mt-2">
                            "Athlete Connect helped me find the perfect coach to improve my marathon time!"
                        </p>
                    </div>

                    {/* Profile 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-white">Jane Smith</h3>
                        <p className="text-gray-400">Basketball Coach</p>
                        <p className="text-gray-300 mt-2">
                            "I’ve connected with so many talented athletes through this platform. Highly recommend!"
                        </p>
                    </div>

                    {/* Profile 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-white">Mike Johnson</h3>
                        <p className="text-gray-400">Swimmer</p>
                        <p className="text-gray-300 mt-2">
                            "The training programs and analytics have been a game-changer for my performance."
                        </p>
                    </div>

                    {/* Profile 4 */}
                    <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-white">Emily Davis</h3>
                        <p className="text-gray-400">Track and Field Athlete</p>
                        <p className="text-gray-300 mt-2">
                            "The platform’s community support and resources are unmatched!"
                        </p>
                    </div>
                </div>
            </div>

            {/* User Reviews Section */}
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-[var(--neon-green)] text-center mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                        <p className="text-gray-300 italic">
                            "Athlete Connect is the best platform I’ve used to find coaching opportunities. The community is amazing!"
                        </p>
                        <p className="text-gray-400 mt-4">- Sarah Lee, Tennis Coach</p>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                        <p className="text-gray-300 italic">
                            "I’ve improved my performance significantly thanks to the personalized training plans and feedback."
                        </p>
                        <p className="text-gray-400 mt-4">- Alex Brown, Cyclist</p>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                        <p className="text-gray-300 italic">
                            "The analytics tools are incredible. They’ve helped me track my progress like never before."
                        </p>
                        <p className="text-gray-400 mt-4">- Chris Taylor, Triathlete</p>
                    </div>
                </div>
            </div>
        </div>
    );
}