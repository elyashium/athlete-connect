
import { AthleteProfile } from '../types';
import { Medal, MapPin, Trophy } from 'lucide-react';

interface ProfileCardProps {
  profile: AthleteProfile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="w-full max-w-xl bg-gray-900 rounded-xl overflow-hidden">
      <div 
        className="h-32 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80)'
        }}
      />
      <div className="p-6">
        <div className="flex items-start gap-4">
          <img
            src={profile.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80'}
            alt={profile.name}
            className="w-24 h-24 rounded-full border-4 border-black -mt-12"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[var(--neon-green)]" />
            Recent Achievements
          </h3>
          <div className="space-y-3">
            {profile.achievements.slice(0, 3).map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-3">
                <Medal className="w-5 h-5 text-[var(--neon-green)]" />
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-gray-400">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {Object.entries(profile.stats).map(([key, value]) => (
            <div key={key} className="text-center p-3 rounded-lg bg-black">
              <p className="text-lg font-bold">{value}</p>
              <p className="text-sm text-gray-400">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}