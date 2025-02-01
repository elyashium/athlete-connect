import { useParams } from 'react-router-dom';
import { AthleteProfile } from '../types';
import { Medal, MapPin, Trophy } from 'lucide-react';

interface ProfileViewProps {
    profiles: AthleteProfile[]; // Pass all profiles to find the selected one
}

export default function ProfileView({ profiles }: ProfileViewProps) {
    const { id } = useParams<{ id: string }>();
    const profile = profiles.find((p) => p.id === id);

    if (!profile) {
        return <div className="text-center text-white">Profile not found.</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-6">
            {/* Profile Header */}
            <div className="bg-gray-900 w-full max-w-2xl rounded-xl p-6 text-center">
                <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-28 h-28 rounded-full border-4 border-gray-800 mx-auto"
                />
                <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>
                <p className="text-gray-400 flex items-center justify-center gap-2 mt-1">
                    <MapPin className="w-5 h-5" />
                    {profile.location}
                </p>
            </div>

            {/* Stats */}
            <div className="bg-gray-800 w-full max-w-2xl p-6 mt-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4 text-center">Statistics</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="p-3 bg-gray-700 rounded-lg">
                            <p className="text-lg font-bold">{value}</p>
                            <p className="text-xs text-gray-400">{key}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-900 w-full max-w-2xl p-6 mt-6 rounded-xl">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[var(--neon-green)]" />
                    Achievements
                </h2>
                <div className="mt-4 space-y-4">
                    {profile.achievements.map((achievement) => (
                        <div key={achievement.id} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
                            <Medal className="w-6 h-6 text-[var(--neon-green)]" />
                            <div>
                                <p className="font-medium">{achievement.title}</p>
                                <p className="text-sm text-gray-400">{achievement.date}</p>
                                <p className="text-xs text-gray-500">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
