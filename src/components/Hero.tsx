// components/Hero.tsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SplineComponent from './Spline';


export default function Hero() {
    const navigate = useNavigate();



    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* First Page: Title and Get Started Button */}
            <div className="relative flex-grow flex flex-col items-center justify-start py-12 md:py-24">
                {/* Split into two columns */}
                <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                  
                    <div className="md:w-1/2 md:pr-8 z-10 mt-8 md:mt-0">
                        <div className="text-5xl md:text-8xl font-chivo font-bold italic mb-4 text-white">
                            Athlete<br />Connect.
                        </div>
                        <p className="text-lg md:text-xl text-white mb-8 max-w-xl">
                            Your ultimate platform for connecting athletes and coaches. Train smarter, perform better, and achieve greatness together.
                        </p>
                        <div className="flex gap-4">
                            {/* Login Button */}
                            <motion.button
                                onClick={() => navigate('/login')}
                                className="bg-transparent text-[var(--neon-green)] border-2 border-[var(--neon-green)] font-bold py-3 px-8 rounded-full overflow-hidden relative"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <span className="relative z-10">Login</span>
                                <motion.div
                                    className="absolute inset-0 bg-[var(--neon-green)]"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.button>

                            {/* Sign Up Button */}
                            <motion.button
                                onClick={() => navigate('/signup')}
                                className="bg-[var(--neon-green)] text-black font-bold py-3 px-8 rounded-full overflow-hidden relative"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <span className="relative z-10">Sign Up</span>
                                <motion.div
                                    className="absolute inset-0 bg-black"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.button>
                        </div>
                    </div>
                    
                    {/* Right column - Spline Component */}
                    <div className="w-full md:w-1/2  h-[300px] md:h-[600px] relative overflow-hidden">
                        <div className="absolute inset-0 w-full h-full">
                            <SplineComponent />
                        </div>
                    </div>
                </div>
            </div>



            {/* Mock Profiles Section */}
            <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold gradient-text text-center mb-16">
                    Featured Profiles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Profile 1 */}
                    <motion.div
                        className="p-6 rounded-lg text-center relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <img
                                src="src/media/male2.jpeg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">Rohit Sharma</h3>
                            <p className="text-gray-400">Professional Sprinter</p>
                            <p className="text-gray-300 mt-2">
                                "Athlete Connect helped me find the perfect coach to improve my sprinting time!"
                            </p>
                        </div>
                    </motion.div>

                    {/* Profile 2 */}
                    <motion.div
                        className="p-6 rounded-lg text-center relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <img
                                src="src/media/female2.jpeg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">Neha Kapoor</h3>
                            <p className="text-gray-400">Badminton Coach</p>
                            <p className="text-gray-300 mt-2">
                                "I've connected with so many talented athletes through this platform. Highly recommend!"
                            </p>
                        </div>
                    </motion.div>

                    {/* Profile 3 */}
                    <motion.div
                        className="p-6 rounded-lg text-center relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <img
                                src="src/media/male1.jpg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">Arjun Nair</h3>
                            <p className="text-gray-400">Swimmer</p>
                            <p className="text-gray-300 mt-2">
                                "The training programs and analytics have been a game-changer for my performance."
                            </p>
                        </div>
                    </motion.div>

                    {/* Profile 4 */}
                    <motion.div
                        className="p-6 rounded-lg text-center relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <img
                                src="src/media/female.jpeg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">Priya Mehta</h3>
                            <p className="text-gray-400">Track and Field Athlete</p>
                            <p className="text-gray-300 mt-2">
                                "The platform's community support and resources are unmatched!"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* User Reviews Section */}
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold gradient-text text-center mb-16">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <motion.div
                        className="p-6 rounded-lg relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <p className="text-gray-300 italic">
                                "Athlete Connect is the best platform I've used to find coaching opportunities. The community is amazing!"
                            </p>
                            <p className="text-gray-400 mt-4">- Ananya Sharma, Tennis Coach</p>
                        </div>
                    </motion.div>

                    {/* Review 2 */}
                    <motion.div
                        className="p-6 rounded-lg relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <p className="text-gray-300 italic">
                                "I've improved my performance significantly thanks to the personalized training plans and feedback."
                            </p>
                            <p className="text-gray-400 mt-4">- Vikram Patel, Cyclist</p>
                        </div>
                    </motion.div>

                    {/* Review 3 */}
                    <motion.div
                        className="p-6 rounded-lg relative overflow-hidden"
                        whileHover="hover"
                        variants={{
                            hover: {
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gray-800"
                            initial={{ x: '-100%' }}
                            variants={{
                                hover: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.25, 0.8, 0.25, 1]
                                    }
                                }
                            }}
                        />
                        <div className="relative z-10">
                            <p className="text-gray-300 italic">
                                "The analytics tools are incredible. They've helped me track my progress like never before."
                            </p>
                            <p className="text-gray-400 mt-4">- Rajesh Verma, Triathlete</p>
                        </div>
                    </motion.div>
                </div>
            </div>


        </div>
    );
}