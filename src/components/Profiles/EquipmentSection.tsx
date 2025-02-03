
import { Box, ExternalLink } from 'lucide-react';

interface Equipment {
    name: string;
    link: string;
}

interface EquipmentSectionProps {
    equipment: Equipment[];
}

export default function EquipmentSection({ equipment }: EquipmentSectionProps) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
                <Box size={18} className="text-neon-green" />
                My Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-600 transition-colors group"
                    >
                        <span className="text-gray-200">{item.name}</span>
                        <ExternalLink size={16} className="text-neon-green group-hover:text-neon-blue transition-colors" />
                    </a>
                ))}
            </div>
        </div>
    );
}