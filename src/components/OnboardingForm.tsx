import React, { useState, useEffect } from 'react';
import { UserType } from '../types';
import { Trophy, Users, ArrowRight } from 'lucide-react';
import Dashboard from './Dashboard';

interface StoredUserData {
  userType: UserType;
  userData: {
    name: string;
    email: string;
    password: string;
  };
}

export default function OnboardingForm() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for stored user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('athleteConnectUser');
    if (storedUser) {
      const { userType: storedUserType, userData } = JSON.parse(storedUser) as StoredUserData;
      setUserType(storedUserType);
      setFormData(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user data in localStorage
    const userData = {
      userType,
      userData: formData
    };
    localStorage.setItem('athleteConnectUser', JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('athleteConnectUser');
    setIsLoggedIn(false);
    setUserType(null);
    setFormData({
      email: '',
      password: '',
      name: '',
    });
    setStep(1);
  };

  if (isLoggedIn) {
    return <Dashboard userType={userType!} userData={formData} onLogout={handleLogout} />;
  }

  return (
    <div className="w-full max-w-md space-y-8">
      {step === 1 ? (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center neon-text">Choose Your Path</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setUserType('athlete');
                setStep(2);
              }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${userType === 'athlete'
                  ? 'neon-border bg-[var(--neon-green)] bg-opacity-10'
                  : 'border-gray-700 hover:neon-border'
                }`}
            >
              <Trophy className="w-12 h-12 mx-auto mb-4" />
              <span className="block text-lg font-semibold">Athlete</span>
            </button>
            <button
              onClick={() => {
                setUserType('organization');
                setStep(2);
              }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${userType === 'organization'
                  ? 'neon-border bg-[var(--neon-green)] bg-opacity-10'
                  : 'border-gray-700 hover:neon-border'
                }`}
            >
              <Users className="w-12 h-12 mx-auto mb-4" />
              <span className="block text-lg font-semibold">Organization</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-center neon-text mb-8">
              Create Your Account
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}