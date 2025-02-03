import React from 'react';
import { Trophy } from 'lucide-react';

interface Achievement {
  title: string;
  date: string;
  organization: string;
  description: string;
  media?: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h2 className="text-white font-semibold flex items-center gap-2 mb-6">
        <Trophy size={18} className="text-neon-green" />
        Awards & Achievements
      </h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-l-2 border-neon-green pl-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-medium">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.organization}</p>
                <p className="text-gray-400 text-sm">{achievement.date}</p>
              </div>
              {achievement.media && (
                <img
                  src={achievement.media}
                  alt={achievement.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
            </div>
            <p className="text-gray-400 mt-2">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}