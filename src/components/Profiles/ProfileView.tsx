
import { Trophy, Target, Share2, Box, Activity, Building2, Medal, Calendar, MessageSquare, Award, Briefcase, GraduationCap } from 'lucide-react';
import ContributionGraph from './ContributionGraph.tsx';
import WishlistSection from './WishlistSection.tsx';
import EquipmentSection from './EquipmentSection.tsx';
import PostsSection from './PostsSection.tsx';
import SkillsSection from './SkillsSection.tsx';
import AchievementsSection from './AchievementsSection.tsx';

interface ProfileData {
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

export default function ProfileView({ profile }: ProfileViewProps) {
    const isAthlete = profile.type === 'athlete';

    return (
        <div className="min-h-screen bg-gray-900">
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
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-neon">
                            <div className="flex flex-col items-center">
                                <img
                                    src={profile.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80'}
                                    alt={profile.name}
                                    className="w-32 h-32 rounded-full border-4 border-neon-green shadow-neon"
                                />
                                <h1 className="text-2xl font-bold text-white mt-4">{profile.name}</h1>
                                <p className="text-neon-green flex items-center gap-2 mt-2">
                                    {isAthlete ? <Trophy size={18} /> : <Building2 size={18} />}
                                    {profile.title || profile.type.charAt(0).toUpperCase() + profile.type.slice(1)}
                                </p>
                                <p className="text-gray-400 text-center mt-4">{profile.bio}</p>
                                <div className="flex items-center gap-2 mt-4 text-gray-300">
                                    <MessageSquare size={16} className="text-neon-green" />
                                    <span>Message</span>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        {profile.education && (
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
                                    <GraduationCap size={18} className="text-neon-green" />
                                    Education
                                </h2>
                                <div className="space-y-4">
                                    {profile.education.map((edu, index) => (
                                        <div key={index} className="border-l-2 border-neon-green pl-4">
                                            <h3 className="text-white font-medium">{edu.school}</h3>
                                            <p className="text-gray-300">{edu.degree} in {edu.field}</p>
                                            <p className="text-gray-400 text-sm">{edu.from} - {edu.to}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Experience Section */}
                        {profile.experience && (
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
                                    <Briefcase size={18} className="text-neon-green" />
                                    Experience
                                </h2>
                                <div className="space-y-4">
                                    {profile.experience.map((exp, index) => (
                                        <div key={index} className="border-l-2 border-neon-green pl-4">
                                            <h3 className="text-white font-medium">{exp.role}</h3>
                                            <p className="text-gray-300">{exp.organization}</p>
                                            <p className="text-gray-400 text-sm">{exp.from} - {exp.to}</p>
                                            <p className="text-gray-400 mt-2">{exp.description}</p>
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
                                <PostsSection posts={profile.posts || []} />

                                {/* Activity Graph */}
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                    <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
                                        <Activity size={18} className="text-neon-green" />
                                        Activity
                                    </h2>
                                    <ContributionGraph data={profile.activityData || []} />
                                </div>

                                {/* Skills Section */}
                                <SkillsSection skills={profile.skills || []} />

                                {/* Achievements Section */}
                                <AchievementsSection achievements={profile.achievements || []} />

                                {/* Wishlist Section */}
                                <WishlistSection wishlist={profile.wishlist || []} />

                                {/* Equipment Section */}
                                <EquipmentSection equipment={profile.equipment || []} />
                            </>
                        ) : (
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
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



