import { useState } from 'react';
import { UserType } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload } from 'lucide-react';

interface ProfileSetupProps {
  userType: UserType;
  userData: any;
  setFormData: (data: any) => void;
}

export default function ProfileSetup({ userType, userData, setFormData }: ProfileSetupProps) {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    bio: '',
    location: '',
    coverImage: '',
    avatar: userData.avatar || '',
    skills: [],
    achievements: [],
    education: [],
    experience: []
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Combine userData with profileData
      const updatedData = { ...userData, ...profileData };
      setFormData(updatedData);
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-1/4 h-1 rounded ${
                num <= step ? 'bg-[var(--neon-green)]' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-6">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold">Basic Information</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Profile Picture</label>
                    <button className="btn-secondary w-full">Upload Photo</button>
                  </div>
                </div>
                <textarea
                  placeholder="Tell us about yourself..."
                  className="input-field min-h-[120px]"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="input-field"
                  value={profileData.location}
                  onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                />
              </div>
            </>
          )}

          {/* Add more steps here for skills, achievements, etc. */}

          <button
            onClick={handleNext}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {step === 4 ? 'Complete Setup' : 'Next'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}