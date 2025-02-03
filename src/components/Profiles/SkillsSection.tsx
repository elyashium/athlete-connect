
import { Award } from 'lucide-react';

interface Skill {
    name: string;
    endorsements: number;
    category: string;
}

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    const categories = Array.from(new Set(skills.map(skill => skill.category)));

    return (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold flex items-center gap-2 mb-6">
                <Award size={18} className="text-neon-green" />
                Skills & Expertise
            </h2>
            <div className="space-y-6">
                {categories.map(category => (
                    <div key={category}>
                        <h3 className="text-gray-300 font-medium mb-3">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills
                                .filter(skill => skill.category === category)
                                .map((skill, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-700 rounded-lg p-4 flex items-center justify-between group hover:bg-gray-600 transition-colors"
                                    >
                                        <span className="text-gray-200">{skill.name}</span>
                                        <span className="text-neon-green text-sm">
                                            {skill.endorsements} endorsements
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}