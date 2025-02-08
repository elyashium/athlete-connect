import { Routes, Route, useNavigate, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserType } from './types';
import OnboardingForm from './components/OnboardingForm';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ProfileView from './components/Profiles/ProfileView';
import { ProfileData } from './components/Profiles/ProfileView';
import ProfileSetup from './components/ProfileSetup';

function App() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    sport: '',
    experienceLevel: '',
    organizationName: '',
    role: '',
    yearsExperience: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('athleteConnectUser');
    if (storedUser) {
      const { userType: storedUserType, userData } = JSON.parse(storedUser);
      setUserType(storedUserType);
      setFormData(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('athleteConnectUser');
    setIsLoggedIn(false);
    setUserType(null);
    setFormData({
      email: '',
      password: '',
      name: '',
      sport: '',
      experienceLevel: '',
      organizationName: '',
      role: '',
      yearsExperience: '',
    });
    navigate('/', { replace: true });
  };

  // Mock data store (moved inside App component)
  const mockProfiles: ProfileData[] = [
    {
      id: '1',
      type: 'athlete',
      name: 'John Athlete',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80',
      coverImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
      bio: 'Professional athlete with 5+ years of experience in competitive sports.',
      location: 'New York, USA',
      title: 'Professional Athlete',
      education: [
        {
          school: 'Sports University',
          degree: 'Bachelor of Sports Science',
          field: 'Sports Management',
          from: '2015',
          to: '2019',
        },
      ],
      experience: [
        {
          role: 'Team Captain',
          organization: 'National Sports Team',
          from: '2020',
          to: 'Present',
          description: 'Leading team strategies and training programs',
        },
      ],
      achievements: [
        {
          title: 'National Championship Winner',
          date: '2022',
          organization: 'Sports Association',
          description: 'Won national championship in athletics',
        },
      ],
      skills: [{ name: 'Team Leadership', endorsements: 45, category: 'Soft Skills' }],
      posts: [],
      wishlist: [],
      equipment: [],
      activityData: [
        [1, 4],
        [2, 3],
      ],
    },
  ];

  // Profile view wrapper component (moved inside App component)
  const ProfileViewWrapper = () => {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<ProfileData | null>(null);

    useEffect(() => {
      // Find profile in mock data
      const foundProfile = mockProfiles.find((p) => p.id === id);
      if (foundProfile) {
        setProfile(foundProfile);
      }
    }, [id]);

    if (!profile) return <div>Loading...</div>;

    return <ProfileView profile={profile} />;
  };

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route
        path="/signup"
        element={
          <OnboardingForm
            mode="signup"
            userType={userType}
            setUserType={setUserType}
            formData={formData}
            setFormData={setFormData}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />
      <Route
        path="/login"
        element={
          <OnboardingForm
            mode="login"
            userType={userType}
            setUserType={setUserType}
            formData={formData}
            setFormData={setFormData}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />
      <Route
        path="/profile-setup"
        element={
          isLoggedIn ? (
            <ProfileSetup
              userType={userType!}
              userData={formData}
              setFormData={setFormData}
            />
          ) : (
            <Navigate to="/signup" replace />
          )
        }
      />
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <Dashboard userType={userType!} userData={formData} onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/profile/:id" element={<ProfileViewWrapper />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;