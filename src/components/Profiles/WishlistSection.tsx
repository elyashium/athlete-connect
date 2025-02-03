import { Target, DollarSign } from 'lucide-react';

interface WishlistItem {
    title: string;
    description: string;
    goal: number;
    current: number;
}

interface WishlistSectionProps {
    wishlist: WishlistItem[];
}

export default function WishlistSection({ wishlist }: WishlistSectionProps) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
                <Target size={18} className="text-neon-green" />
                Wishlist & Goals
            </h2>
            <div className="space-y-4">
                {wishlist.map((item, index) => {
                    const progress = (item.current / item.goal) * 100;
                    return (
                        <div key={index} className="bg-gray-700 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-white font-medium">{item.title}</h3>
                                <div className="flex items-center text-neon-green">
                                    <DollarSign size={16} />
                                    <span>{item.current}</span>
                                    <span className="text-gray-400">/{item.goal}</span>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                            <div className="relative h-2 bg-gray-600 rounded-full overflow-hidden">
                                <div
                                    className="absolute h-full bg-neon-green transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}