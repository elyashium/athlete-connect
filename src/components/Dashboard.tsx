import { useState } from 'react';
import { UserType } from '../types';
import ProfileCard from './ProfileCard';
import { Plus, Search, Bell, LogOut, MessageSquare, Users2, Briefcase, Award, TrendingUp } from 'lucide-react';
import NetworkSuggestions from './NetworkSuggestions';
import FeedPost from './FeedPost';
import { useNavigate } from 'react-router-dom';





interface DashboardProps {
  userType: UserType;
  userData: any; // Match the formData type from App.tsx
  onLogout: () => void;
}

export default function Dashboard({ userType, userData, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'feed' | 'network' | 'jobs' | 'achievements'>('feed');

  // Mock data for demonstration
  const mockProfile: AthleteProfile = {
    id: '1',
    type: userType,
    name: userData.name || 'User Name',
    email: userData.email || 'user@example.com',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80',
    sports: [userData.sport || 'General'],
    achievements: [
      {
        id: '1',
        title: 'State Championship Winner',
        date: '2023',
        description: 'Won state-level championship',
        medal: 'gold'
      }
    ],
    stats: {
      'Matches': '48',
      'Wins': '35',
      'Experience': userData.yearsExperience || '2 years'
    },
    bio: 'Aspiring athlete with a passion for excellence.',
    location: 'Mumbai, Maharashtra',
    fundingCampaigns: [
      {
        id: '1',
        title: 'Training Camp Funding',
        description: 'Support my journey to the national championship',
        goal: 5000,
        raised: 2500,
        deadline: '2024-12-31',
        status: 'active'
      }
    ]
  };

  const mockPosts = [
    {
      id: '1',
      author: {
        name: 'Virat Sharma',
        title: 'Cricketer - Delhi Capitals',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      },
      content: 'Thrilled to be part of Delhi Capitals for this IPL season! Looking forward to showcasing my skills on the field. #IPL #DelhiCapitals #Cricket',
      image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80',
      likes: 532,
      comments: 89,
      shares: 23,
      timestamp: '2h ago',
    },
    {
      id: '2',
      author: {
        name: 'Ajay Deshmukh',
        title: 'Kabaddi Coach - U Mumba',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      },
      content: 'Looking for young and talented raiders for our Pro Kabaddi League team. Trials happening in Mumbai this weekend. DM for details! #Kabaddi #ProKabaddiLeague #U-Mumba',
      likes: 289,
      comments: 64,
      shares: 48,
      timestamp: '4h ago',
    },
    {
      id: '3',
      author: {
        name: 'Sneha Reddy',
        title: 'Athlete - Track & Field',
        avatar: 'https://images.unsplash.com/photo-1490135900371-3476360c1e9b?auto=format&fit=crop&q=80',
      },
      content: 'Excited to represent India in the Asian Games 2024! Training hard every day to bring home the gold. #AsianGames #TrackAndField #IndiaProud',
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80',
      likes: 421,
      comments: 72,
      shares: 15,
      timestamp: '6h ago',
    },
  ];


  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold neon-text">Athlete Connect</h1>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search athletes, teams, or opportunities..."
                  className="pl-10 pr-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:neon-border focus:outline-none w-[300px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button className="nav-item" onClick={() => setActiveTab('feed')}>
                  <TrendingUp className={`w-5 h-5 ${activeTab === 'feed' ? 'text-[var(--neon-green)]' : 'text-gray-400'}`} />
                  <span className="text-sm">Feed</span>
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
              <div className="h-6 w-px bg-gray-700" />
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-white relative">
                  <MessageSquare className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--neon-green)] text-black text-xs rounded-full flex items-center justify-center">3</span>
                </button>
                <button className="text-gray-400 hover:text-white relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--neon-green)] text-black text-xs rounded-full flex items-center justify-center">5</span>
                </button>
                <div className="flex items-center gap-3">
                  <img
                    // onClick={() => navigate(`/profile/${profile.id}`)}
                    onClick={() => navigate(`/profile/${mockProfile.id}`)}
                    src={mockProfile.avatar}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-gray-700 cursor-pointer"
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-3">
            <ProfileCard profile={mockProfile} />
          </div>

          {/* Feed Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Create Post */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex gap-4 mb-4">
                <img
                  src={mockProfile.avatar}
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