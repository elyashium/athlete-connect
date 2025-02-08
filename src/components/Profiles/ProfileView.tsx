import { Trophy, Target, Share2, Box, Activity, Building2, Medal, Calendar, MessageSquare, Award, Briefcase, GraduationCap } from 'lucide-react';
import ContributionGraph from './ContributionGraph.tsx';
import WishlistSection from './WishlistSection.tsx';
import EquipmentSection from './EquipmentSection.tsx';
import PostsSection from './PostsSection.tsx';
import SkillsSection from './SkillsSection.tsx';
import AchievementsSection from './AchievementsSection.tsx';
import { useLocation } from 'react-router-dom';

interface ProfileData {
    id?: string;
    type: 'athlete' | 'organization';
    name: string;
    avatar: string;
    coverImage: string;
    bio: string;
    location: string;
    title?: string;
    education?: Array<{
        school: string;
        degree: string;
        field: string;
        from: string;
        to: string;
    }>;
    experience?: Array<{
        role: string;
        organization: string;
        from: string;
        to: string;
        description: string;
    }>;
    achievements?: Array<{
        title: string;
        date: string;
        organization: string;
        description: string;
        media?: string;
    }>;
    skills?: Array<{
        name: string;
        endorsements: number;
        category: string;
    }>;
    posts?: Array<{
        id: string;
        content: string;
        media?: string;
        likes: number;
        comments: number;
        date: string;
    }>;
    wishlist?: Array<{
        title: string;
        description: string;
        goal: number;
        current: number;
    }>;
    equipment?: Array<{
        name: string;
        link: string;
    }>;
    activityData?: number[][];
}

interface ProfileViewProps {
    profile: ProfileData;
}

export default function ProfileView() {
    const location = useLocation();
    const profile = location.state?.profile;

    // If no profile data is passed, you might want to handle that case
    if (!profile) {
        return <div>Profile not found</div>;
    }

    const isAthlete = profile.type === 'athlete';

    return (
        <div className="min-h-screen bg-black">
            {/* Cover Image */}
            <div
                className="h-80 w-full bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${profile.coverImage || 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80'})`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            </div>

            {/* Profile Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Profile Info */}
                    <div className="lg:w-1/3 space-y-6">
                        {/* Profile Card */}
                        <div className="bg-gray-800 rounded-xl p-6 shadow-neon">
                            <div className="flex flex-col items-center">
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-32 h-32 rounded-full border-4 border-neon-green shadow-neon"
                                />
                                <h1 className="text-2xl font-bold text-white mt-4">{profile.name}</h1>
                                <p className="text-neon-green flex items-center gap-2 mt-2">
                                    {profile.sports.join(', ')}
                                </p>
                                <p className="text-gray-400 text-center mt-4">{profile.bio}</p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="bg-gray-800 rounded-xl p-6">
                            <h2 className="text-white font-semibold mb-4">Stats</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(profile.stats).map(([key, value]) => (
                                    <div key={key} className="text-center p-3 bg-gray-700 rounded-lg">
                                        <p className="text-lg font-bold text-white">{value}</p>
                                        <p className="text-sm text-gray-400">{key}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Section */}
                        {profile.achievements && profile.achievements.length > 0 && (
                            <div className="bg-gray-800 rounded-xl p-6">
                                <h2 className="text-white font-semibold mb-4">Recent Achievements</h2>
                                <div className="space-y-4">
                                    {profile.achievements.map((achievement) => (
                                        <div key={achievement.id} className="p-4 bg-gray-700 rounded-lg">
                                            <h3 className="text-white font-medium">{achievement.title}</h3>
                                            <p className="text-gray-400 text-sm">{achievement.date}</p>
                                            <p className="text-gray-300 mt-2">{achievement.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Dynamic Content */}
                    <div className="lg:w-2/3 space-y-6">
                        {isAthlete ? (
                            <>
                                {/* Posts Section */}
                                <div className="bg-black hover:bg-gray-900 transition-colors duration-200">
                                    <PostsSection posts={profile.posts || []} />
                                </div>

                                {/* Activity Graph */}
                                <div className="bg-black hover:bg-gray-900 transition-colors duration-200 rounded-xl p-6 ">
                                    <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
                                        <Activity size={18} className="text-neon-green" />
                                        Activity
                                    </h2>
                                    {profile.activityData && profile.activityData.length > 0 ? (
                                        <ContributionGraph data={profile.activityData} />
                                    ) : (
                                        <p className="text-gray-400">No activity data available</p>
                                    )}
                                </div>

                                {/* Skills Section */}
                                <div className="bg-black hover:bg-gray-900 transition-colors duration-200">
                                    <SkillsSection skills={profile.skills || []} />
                                </div>

                                {/* Achievements Section */}
                                <div className="bg-black hover:bg-gray-900 transition-colors duration-200">
                                    <AchievementsSection achievements={profile.achievements || []} />
                                </div>

                                {/* Wishlist Section */}
                                <div className="bg-black hover:bg-gray-900 transition-colors duration-200">
                                    <WishlistSection wishlist={profile.wishlist || []} />
                                </div>

                                {/* Equipment Section */}
                                <div className="bg-black hover:bg-gray-900 transition-colors duration-200">
                                    <EquipmentSection equipment={profile.equipment || []} />
                                </div>
                            </>
                        ) : (
                            <div className="bg-gray-800 rounded-xl p-6 ">
                                <h2 className="text-white font-semibold text-xl mb-4">About Organization</h2>
                                <p className="text-gray-300">{profile.bio}</p>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-700 rounded-lg p-4">
                                        <h3 className="text-white font-medium mb-2">Location</h3>
                                        <p className="text-gray-300">{profile.location}</p>
                                    </div>
                                    <div className="bg-gray-700 rounded-lg p-4">
                                        <h3 className="text-white font-medium mb-2">Contact</h3>
                                        <button className="text-neon-green hover:text-neon-blue transition-colors flex items-center gap-2">
                                            <Share2 size={18} />
                                            Connect
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}



