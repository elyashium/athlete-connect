import { useState } from 'react';
import { UserType } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload, Plus, Trash2 } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface ProfileSetupProps {
  userType: UserType;
  userData: any;
  setFormData: (data: any) => void;
}

export default function ProfileSetup({ userType, userData, setFormData }: ProfileSetupProps) {
  const [step, setStep] = useState(1);
  const [newSkill, setNewSkill] = useState('');
  const [profileData, setProfileData] = useState({
    bio: '',
    location: '',
    coverImage: '',
    avatar: userData.avatar || '',
    skills: [] as string[],
    achievements: [] as any[],
    education: [] as any[],
    experience: [] as any[],
    stats: {
      Matches: '0',
      Wins: '0',
      Experience: userData.yearsExperience || '0'
    },
    fundingCampaigns: [] as any[]
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Combine userData with profileData
      const updatedData = { ...userData, ...profileData };
      setFormData(updatedData);
      navigate('/home', { replace: true });
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {['Basic Info', 'Skills & Stats', 'Achievements', 'Education'].map((label, idx) => (
              <div
                key={idx}
                className={`text-sm font-medium ${
                  idx + 1 <= step ? 'text-[var(--neon-green)]' : 'text-gray-500'
                }`}
              >
                {label}
              </div>
            ))}
          </div>
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
        </div>

        {/* Step Content */}
        <div className="space-y-8">
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-40 h-40 bg-gray-800 rounded-xl flex items-center justify-center relative group">
                    {profileData.avatar ? (
                      <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Upload className="w-10 h-10 text-gray-400" />
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <button className="btn-secondary">Change Photo</button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <textarea
                        placeholder="Tell us about yourself..."
                        className="input-field min-h-[160px]"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <input
                        type="text"
                        placeholder="City, Country"
                        className="input-field"
                        value={profileData.location}
                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 2: Skills and Stats */}
          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold mb-6">Skills & Statistics</h2>
              <div className="space-y-6">
                {/* Skills Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[50px] p-2 bg-gray-900 rounded-lg">
                    {profileData.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm animate-fadeIn"
                      >
                        {skill}
                        <button
                          onClick={() => {
                            const newSkills = profileData.skills.filter((_, i) => i !== index);
                            setProfileData({ ...profileData, skills: newSkills });
                          }}
                          className="hover:bg-gray-700 rounded-full p-1"
                        >
                          <Trash2 className="w-3 h-3 text-gray-400 hover:text-red-400" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add a skill"
                      className="input-field flex-1"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleAddSkill();
                        }
                      }}
                    />
                    <button 
                      onClick={handleAddSkill}
                      className="btn-secondary px-4"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Statistics</label>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(profileData.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-900 p-4 rounded-lg">
                        <label className="text-sm text-gray-400 block mb-2">{key}</label>
                        <input
                          type="text"
                          className="input-field"
                          value={value}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              stats: { ...profileData.stats, [key]: e.target.value }
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 3: Achievements */}
          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold mb-6">Achievements</h2>
              <div className="space-y-4">
                {profileData.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-xl">
                    <div className="flex justify-between items-start">
                      <div className="space-y-4 flex-1">
                        <input
                          type="text"
                          placeholder="Achievement Title"
                          className="input-field"
                          value={achievement.title}
                          onChange={(e) => {
                            const newAchievements = [...profileData.achievements];
                            newAchievements[index] = { ...achievement, title: e.target.value };
                            setProfileData({ ...profileData, achievements: newAchievements });
                          }}
                        />
                        <div>
                          <label className="block text-sm font-medium mb-2">Date Achieved</label>
                          <DatePicker
                            selected={achievement.date ? new Date(achievement.date) : null}
                            onChange={(date) => {
                              const newAchievements = [...profileData.achievements];
                              newAchievements[index] = { 
                                ...achievement, 
                                date: date ? date.toISOString().split('T')[0] : '' 
                              };
                              setProfileData({ ...profileData, achievements: newAchievements });
                            }}
                            className="input-field w-full"
                            placeholderText="Select date"
                            dateFormat="MMMM d, yyyy"
                          />
                        </div>
                        <textarea
                          placeholder="Description"
                          className="input-field min-h-[80px]"
                          value={achievement.description}
                          onChange={(e) => {
                            const newAchievements = [...profileData.achievements];
                            newAchievements[index] = { ...achievement, description: e.target.value };
                            setProfileData({ ...profileData, achievements: newAchievements });
                          }}
                        />
                      </div>
                      <button
                        onClick={() => {
                          const newAchievements = profileData.achievements.filter((_, i) => i !== index);
                          setProfileData({ ...profileData, achievements: newAchievements });
                        }}
                        className="ml-4 p-2 hover:bg-gray-800 rounded-lg"
                      >
                        <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-400" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() =>
                    setProfileData({
                      ...profileData,
                      achievements: [
                        ...profileData.achievements,
                        { id: Date.now(), title: '', date: '', description: '', medal: 'gold' }
                      ]
                    })
                  }
                  className="btn-secondary w-full py-4"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Achievement
                </button>
              </div>
            </>
          )}

          {/* Step 4: Additional Information */}
          {step === 4 && (
            <>
              <h2 className="text-3xl font-bold mb-6">Additional Information</h2>
              <div className="space-y-6">
                {/* Education */}
                <div>
                  <label className="block text-sm font-medium mb-2">Education</label>
                  {profileData.education.map((edu, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-xl mb-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-4 flex-1">
                          <input
                            type="text"
                            placeholder="Institution"
                            className="input-field"
                            value={edu.institution}
                            onChange={(e) => {
                              const newEducation = [...profileData.education];
                              newEducation[index] = { ...edu, institution: e.target.value };
                              setProfileData({ ...profileData, education: newEducation });
                            }}
                          />
                          <input
                            type="text"
                            placeholder="Degree/Course"
                            className="input-field"
                            value={edu.degree}
                            onChange={(e) => {
                              const newEducation = [...profileData.education];
                              newEducation[index] = { ...edu, degree: e.target.value };
                              setProfileData({ ...profileData, education: newEducation });
                            }}
                          />
                          <div className="flex gap-4">
                            <input
                              type="text"
                              placeholder="Year Start"
                              className="input-field w-1/2"
                              value={edu.yearStart}
                              onChange={(e) => {
                                const newEducation = [...profileData.education];
                                newEducation[index] = { ...edu, yearStart: e.target.value };
                                setProfileData({ ...profileData, education: newEducation });
                              }}
                            />
                            <input
                              type="text"
                              placeholder="Year End"
                              className="input-field w-1/2"
                              value={edu.yearEnd}
                              onChange={(e) => {
                                const newEducation = [...profileData.education];
                                newEducation[index] = { ...edu, yearEnd: e.target.value };
                                setProfileData({ ...profileData, education: newEducation });
                              }}
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            const newEducation = profileData.education.filter((_, i) => i !== index);
                            setProfileData({ ...profileData, education: newEducation });
                          }}
                          className="ml-4 p-2 hover:bg-gray-800 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      setProfileData({
                        ...profileData,
                        education: [
                          ...profileData.education,
                          { id: Date.now(), institution: '', degree: '', yearStart: '', yearEnd: '' }
                        ]
                      })
                    }
                    className="btn-secondary w-full py-4"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add Education
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between pt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="btn-secondary px-6"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="btn-primary px-6 ml-auto flex items-center gap-2"
            >
              {step === 4 ? 'Complete Setup' : 'Next'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}