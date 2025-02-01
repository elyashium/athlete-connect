import { AthleteProfile } from '../types';
import { Medal, MapPin, Trophy, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  profile: AthleteProfile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="w-full max-w-md bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
      onClick={() => navigate(`/profile/${profile.id}`)}
    >
      {/* Cover Image */}
      <div 
        className="h-40 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80)' 
        }}
      />

      {/* Profile Info */}
      <div className="p-6 text-center relative">
        {/* Avatar */}
        <img
          src={profile.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80'}
          alt={profile.name}
          className="w-24 h-24 rounded-full border-4 border-gray-800 absolute -top-12 left-1/2 transform -translate-x-1/2"
        />

        {/* Name & Location */}
        <h2 className="text-2xl font-bold mt-12">{profile.name}</h2>
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-1">
          <MapPin className="w-4 h-4" />
          <span>{profile.location}</span>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {Object.entries(profile.stats).map(([key, value]) => (
            <div key={key} className="text-center p-3 rounded-lg bg-gray-800">
              <p className="text-lg font-bold">{value}</p>
              <p className="text-xs text-gray-400">{key}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold flex items-center justify-center gap-2 text-[var(--neon-green)]">
            <Trophy className="w-5 h-5" />
            Recent Achievements
          </h3>
          <div className="space-y-3 mt-3">
            {profile.achievements.slice(0, 3).map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
                <Medal className="w-5 h-5 text-[var(--neon-green)]" />
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-xs text-gray-400">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Profile Button */}
        <button 
          className="mt-6 w-full py-2 flex items-center justify-center gap-2 bg-[var(--neon-green)] text-black font-semibold rounded-lg hover:bg-green-500 transition-all"
          onClick={() => navigate(`/profile/${profile.id}`)}
        >
          <Eye className="w-5 h-5" />
          View Full Profile
        </button>
      </div>
    </div>
  );
}
