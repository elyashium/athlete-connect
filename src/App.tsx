import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import OnboardingForm from './components/OnboardingForm';
import Hero from './components/Hero';
import ProfileView from './components/Profiles/ProfileView';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import { UserType } from './types'; // Adjust the path as needed

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
    navigate('/'); // Redirect to the home page
  };

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route
        path="/onboarding"
        element={
          <OnboardingForm
            userType={userType}
            setUserType={setUserType}
            formData={formData}
            setFormData={setFormData}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />
      {isLoggedIn ? (
        <Route path="/home" element={<Dashboard userType={userType!} userData={formData} onLogout={handleLogout} />} />
      ) : (
        <Route path="/home" element={<Navigate to="/" />} />
      )}
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="/profile/:id" element={<ProfileView />} /> */}
    </Routes>
  );
}

export default App;