import { useState } from 'react';
import { UserType } from '../types';
import ProfileCard from './ProfileCard';
import { Plus, Search, Bell, LogOut, MessageSquare, Users2, Briefcase, Award, TrendingUp } from 'lucide-react';
import NetworkSuggestions from './NetworkSuggestions';
import FeedPost from './FeedPost';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
  userType: UserType;
  userData: any;
  onLogout: () => void;
}

export default function Dashboard({ userType, userData, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'feed' | 'network' | 'jobs' | 'achievements'>('feed');
  const navigate = useNavigate();

  // Create a profile object that matches the expected structure
  const profile = {
    id: '1',
    type: userType,
    name: userData.name || 'User Name',
    email: userData.email || 'user@example.com',
    avatar: userData.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80',
    sports: [userData.sport || 'General'],
    achievements: userData.achievements || [],
    stats: userData.stats || {
      'Matches': '0',
      'Wins': '0',
      'Experience': userData.yearsExperience || '0'
    },
    bio: userData.bio || 'Aspiring athlete with a passion for excellence.',
    location: userData.location || 'Mumbai, Maharashtra',
    skills: userData.skills || [],
    education: userData.education || [],
    experience: userData.experience || [],
    fundingCampaigns: userData.fundingCampaigns || []
  };

  // Create more realistic mock posts
  const mockPosts = [
    {
      id: '1',
      author: profile,
      content: 'Just completed my morning training session! 💪 Feeling stronger every day. #AthleteLife #Training',
      timestamp: new Date().toISOString(),
      likes: 24,
      comments: 5,
      media: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop'
    },
    {
      id: '2',
      author: {
        ...profile,
        id: '2',
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      },
      content: 'Great practice match today! Thanks to everyone who participated. Looking forward to the upcoming tournament! 🏆',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      likes: 18,
      comments: 3
    },
    {
      id: '3',
      author: {
        ...profile,
        id: '3',
        name: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      },
      content: 'New personal best in today\'s training! Remember: consistency is key 🎯',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 32,
      comments: 7,
      media: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-white">AthleteConnect</h1>
              <div className="hidden md:flex items-center relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input-field pl-10 w-[300px]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
              </div>
              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`flex items-center gap-2 ${
                    activeTab === 'feed' ? 'text-[var(--neon-green)]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Feed</span>
                </button>
                <button className="nav-item" onClick={() => setActiveTab('network')}>
                  <Users2 className={`w-5 h-5 ${activeTab === 'network' ? 'text-[var(--neon-green)]' : 'text-gray-400'}`} />
                  <span className="text-sm">Network</span>
                </button>
                <button className="nav-item" onClick={() => setActiveTab('jobs')}>
                  <Briefcase className={`w-5 h-5 ${activeTab === 'jobs' ? 'text-[var(--neon-green)]' : 'text-gray-400'}`} />
                  <span className="text-sm">Opportunities</span>
                </button>
                <button className="nav-item" onClick={() => setActiveTab('achievements')}>
                  <Award className={`w-5 h-5 ${activeTab === 'achievements' ? 'text-[var(--neon-green)]' : 'text-gray-400'}`} />
                  <span className="text-sm">Achievements</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Bell className="w-5 h-5" />
              </button>
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-700 cursor-pointer"
                onClick={() => navigate(`/profile/${profile.id}`)}
              />
              <button
                onClick={onLogout}
                className="text-gray-400 hover:text-white"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-3">
            <div onClick={() => navigate(`/profile/${profile.id}`)}>
              <ProfileCard profile={profile} />
            </div>
          </div>

          {/* Feed Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Create Post */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex gap-4">
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    placeholder="Share your achievements, updates, or start a campaign..."
                    className="input-field min-h-[100px] resize-none mb-4 w-full"
                  ></textarea>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <button className="text-gray-400 hover:text-white flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        <span>Media</span>
                      </button>
                      <button className="text-gray-400 hover:text-white flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>Achievement</span>
                      </button>
                    </div>
                    <button className="btn-primary">Post</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed Posts */}
            {mockPosts.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>

          {/* Network Suggestions */}
          <div className="lg:col-span-3">
            <NetworkSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
}