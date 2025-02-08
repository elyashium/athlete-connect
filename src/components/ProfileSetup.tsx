import { useState } from 'react';
import { UserType } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload, Plus, Trash2 } from 'lucide-react';

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
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold">Basic Information</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                    {profileData.avatar ? (
                      <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <Upload className="w-8 h-8 text-gray-400" />
                    )}
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

          {/* Step 2: Skills and Stats */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold">Skills & Statistics</h2>
              <div className="space-y-4">
                {/* Skills Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profileData.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-800 px-3 py-1 rounded-full flex items-center gap-2">
                        {skill}
                        <button
                          onClick={() => {
                            const newSkills = profileData.skills.filter((_, i) => i !== index);
                            setProfileData({ ...profileData, skills: newSkills });
                          }}
                        >
                          <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add a skill"
                      className="input-field flex-1"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value) {
                          setProfileData({
                            ...profileData,
                            skills: [...profileData.skills, e.currentTarget.value]
                          });
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    <button className="btn-secondary">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Statistics</label>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(profileData.stats).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <label className="text-xs text-gray-400">{key}</label>
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
              <h2 className="text-2xl font-bold">Achievements</h2>
              <div className="space-y-4">
                {profileData.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 flex-1">
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
                        <input
                          type="text"
                          placeholder="Date"
                          className="input-field"
                          value={achievement.date}
                          onChange={(e) => {
                            const newAchievements = [...profileData.achievements];
                            newAchievements[index] = { ...achievement, date: e.target.value };
                            setProfileData({ ...profileData, achievements: newAchievements });
                          }}
                        />
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
                        className="ml-2"
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
                  className="btn-secondary w-full"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Achievement
                </button>
              </div>
            </>
          )}

          {/* Step 4: Additional Information */}
          {step === 4 && (
            <>
              <h2 className="text-2xl font-bold">Additional Information</h2>
              <div className="space-y-4">
                {/* Education */}
                <div>
                  <label className="block text-sm font-medium mb-2">Education</label>
                  {profileData.education.map((edu, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2 flex-1">
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
                          className="ml-2"
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
                    className="btn-secondary w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add Education
                  </button>
                </div>
              </div>
            </>
          )}

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