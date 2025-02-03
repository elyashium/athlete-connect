import React, { useState } from 'react';
import { UserType } from '../types';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import trophy from '../media/trophy.json';
import coach from '../media/coach.json';

interface OnboardingFormProps {
  userType: UserType | null;
  setUserType: (userType: UserType | null) => void;
  formData: {
    email: string;
    password: string;
    name: string;
    sport: string;
    experienceLevel: string;
    organizationName: string;
    role: string;
    yearsExperience: string;
  };
  setFormData: (formData: any) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const sportsList = ['Football', 'Basketball', 'Tennis', 'Swimming', 'Running', 'Cycling', 'Martial Arts', 'Gymnastics'];
const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];

export default function OnboardingForm({
  userType,
  setUserType,
  formData,
  setFormData,
  setIsLoggedIn,
}: OnboardingFormProps) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.password.trim()) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';

    if (userType === 'athlete') {
      if (!formData.sport.trim()) newErrors.sport = 'Please select a sport.';
      if (!formData.experienceLevel.trim()) newErrors.experienceLevel = 'Please select your experience level.';
    }

    if (userType === 'organization') {
      if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required.';
      if (!formData.role.trim()) newErrors.role = 'Role is required.';
      if (!formData.yearsExperience.trim()) newErrors.yearsExperience = 'Please select years of experience.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = { userType, userData: formData };
    localStorage.setItem('athleteConnectUser', JSON.stringify(userData));
    setIsLoggedIn(true);
    navigate('/home'); // Redirect to the home page after successful submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-lg w-full p-8 shadow-lg">
        {step === 1 ? (
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold neon-text">Choose Your Path</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setUserType('athlete');
                  setStep(2);
                }}
                className="p-6 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-18 h-18 mx-auto mb-4">
                  <Lottie animationData={trophy} loop={true} />
                </div>
                <span className="block text-lg font-semibold">Athlete</span>
              </button>
              <button
                onClick={() => {
                  setUserType('organization');
                  setStep(2);
                }}
                className="p-6 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-18 h-18 mx-auto mb-4">
                  <Lottie animationData={coach} loop={true} />
                </div>
                <span className="block text-lg font-semibold">Coach / Organization</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-center neon-text mb-4">Create Your Account</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            {userType === 'athlete' && (
              <>
                <select
                  className="input-field"
                  value={formData.sport}
                  onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                >
                  <option value="">Select Sport</option>
                  {sportsList.map((sport) => (
                    <option key={sport} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>
                {errors.sport && <p className="text-red-500 text-sm">{errors.sport}</p>}

                <select
                  className="input-field"
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                >
                  <option value="">Select Experience Level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                {errors.experienceLevel && <p className="text-red-500 text-sm">{errors.experienceLevel}</p>}
              </>
            )}

            {userType === 'organization' && (
              <>
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="input-field"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                />
                {errors.organizationName && <p className="text-red-500 text-sm">{errors.organizationName}</p>}
                <input
                  type="text"
                  placeholder="Role"
                  className="input-field"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}

                <select
                  className="input-field"
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                >
                  <option value="">Select Years of Experience</option>
                  {[...Array(41)].map((_, i) => (
                    <option key={i} value={i}>
                      {i} Years
                    </option>
                  ))}
                </select>
                {errors.yearsExperience && <p className="text-red-500 text-sm">{errors.yearsExperience}</p>}
              </>
            )}

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}