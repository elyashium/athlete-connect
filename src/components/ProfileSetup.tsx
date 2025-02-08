import { useState } from 'react';
import { UserType } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload, Plus, Trash2, Building, MapPin, Globe, Phone } from 'lucide-react';
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
  const navigate = useNavigate();

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const [profileData, setProfileData] = useState({
    bio: '',
    location: '',
    coverImage: '',
    avatar: userData.avatar || '',
    skills: [] as string[],
    achievements: [] as any[],
    education: [] as any[],
    experience: [] as any[],
    organizationDetails: {
      name: userData.organizationName || '',
      type: '',
      establishedYear: '',
      website: '',
      phone: '',
      socialMedia: {
        facebook: '',
        instagram: '',
        twitter: ''
      },
      facilities: [] as string[],
      programs: [] as any[],
      coaches: [] as any[],
      memberships: [] as any[]
    },
    stats: userType === 'athlete' ? {
      Matches: '0',
      Wins: '0',
      Experience: userData.yearsExperience || '0'
    } : {
      ActiveMembers: '0',
      CoachesEmployed: '0',
      YearsOperating: userData.yearsExperience || '0'
    }
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Combine userData with profileData
      const updatedData = { ...userData, ...profileData };
      setFormData(updatedData);
    }
  };

  const organizationTypes = [
    'Sports Club',
    'Training Academy',
    'Fitness Center',
    'Sports School',
    'Coaching Institute',
    'Sports Association',
    'Private Training Center'
  ];

  const facilityOptions = [
    'Indoor Court',
    'Outdoor Field',
    'Swimming Pool',
    'Gym',
    'Training Room',
    'Medical Facility',
    'Equipment Room',
    'Locker Room',
    'Cafeteria'
  ];

  const getStepContent = () => {
    if (userType === 'organization') {
      switch (step) {
        case 1:
          return (
            <>
              <h2 className="text-3xl font-bold mb-6">Organization Details</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-40 h-40 bg-gray-800 rounded-xl flex items-center justify-center relative group">
                    {profileData.avatar ? (
                      <img src={profileData.avatar} alt="Logo" className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Upload className="w-10 h-10 text-gray-400" />
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <button className="btn-secondary">Upload Logo</button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Organization Name</label>
                      <input
                        type="text"
                        className="input-field"
                        value={profileData.organizationDetails.name}
                        onChange={(e) => setProfileData({
                          ...profileData,
                          organizationDetails: {
                            ...profileData.organizationDetails,
                            name: e.target.value
                          }
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Organization Type</label>
                      <select
                        className="input-field"
                        value={profileData.organizationDetails.type}
                        onChange={(e) => setProfileData({
                          ...profileData,
                          organizationDetails: {
                            ...profileData.organizationDetails,
                            type: e.target.value
                          }
                        })}
                      >
                        <option value="">Select Type</option>
                        {organizationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">About Organization</label>
                      <textarea
                        className="input-field min-h-[100px]"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        placeholder="Tell us about your organization..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        case 2:
          return (
            <>
              <h2 className="text-3xl font-bold mb-6">Contact & Location</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <textarea
                    className="input-field min-h-[80px]"
                    value={profileData.location}
                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                    placeholder="Full address of your facility"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="input-field"
                      value={profileData.organizationDetails.phone}
                      onChange={(e) => setProfileData({
                        ...profileData,
                        organizationDetails: {
                          ...profileData.organizationDetails,
                          phone: e.target.value
                        }
                      })}
                      placeholder="Contact number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Website</label>
                    <input
                      type="url"
                      className="input-field"
                      value={profileData.organizationDetails.website}
                      onChange={(e) => setProfileData({
                        ...profileData,
                        organizationDetails: {
                          ...profileData.organizationDetails,
                          website: e.target.value
                        }
                      })}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-medium">Social Media</label>
                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="url"
                      className="input-field"
                      value={profileData.organizationDetails.socialMedia.facebook}
                      onChange={(e) => setProfileData({
                        ...profileData,
                        organizationDetails: {
                          ...profileData.organizationDetails,
                          socialMedia: {
                            ...profileData.organizationDetails.socialMedia,
                            facebook: e.target.value
                          }
                        }
                      })}
                      placeholder="Facebook URL"
                    />
                    <input
                      type="url"
                      className="input-field"
                      value={profileData.organizationDetails.socialMedia.instagram}
                      onChange={(e) => setProfileData({
                        ...profileData,
                        organizationDetails: {
                          ...profileData.organizationDetails,
                          socialMedia: {
                            ...profileData.organizationDetails.socialMedia,
                            instagram: e.target.value
                          }
                        }
                      })}
                      placeholder="Instagram URL"
                    />
                    <input
                      type="url"
                      className="input-field"
                      value={profileData.organizationDetails.socialMedia.twitter}
                      onChange={(e) => setProfileData({
                        ...profileData,
                        organizationDetails: {
                          ...profileData.organizationDetails,
                          socialMedia: {
                            ...profileData.organizationDetails.socialMedia,
                            twitter: e.target.value
                          }
                        }
                      })}
                      placeholder="Twitter URL"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        case 3:
          return (
            <>
              <h2 className="text-3xl font-bold mb-6">Facilities & Programs</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Available Facilities</label>
                  <div className="grid grid-cols-3 gap-2">
                    {facilityOptions.map((facility) => (
                      <label key={facility} className="flex items-center space-x-2 bg-gray-900 p-3 rounded-lg">
                        <input
                          type="checkbox"
                          checked={profileData.organizationDetails.facilities.includes(facility)}
                          onChange={(e) => {
                            const newFacilities = e.target.checked
                              ? [...profileData.organizationDetails.facilities, facility]
                              : profileData.organizationDetails.facilities.filter(f => f !== facility);
                            setProfileData({
                              ...profileData,
                              organizationDetails: {
                                ...profileData.organizationDetails,
                                facilities: newFacilities
                              }
                            });
                          }}
                          className="form-checkbox"
                        />
                        <span>{facility}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Training Programs</label>
                  {profileData.organizationDetails.programs.map((program, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg mb-4">
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Program Name"
                          className="input-field"
                          value={program.name}
                          onChange={(e) => {
                            const newPrograms = [...profileData.organizationDetails.programs];
                            newPrograms[index] = { ...program, name: e.target.value };
                            setProfileData({
                              ...profileData,
                              organizationDetails: {
                                ...profileData.organizationDetails,
                                programs: newPrograms
                              }
                            });
                          }}
                        />
                        <textarea
                          placeholder="Program Description"
                          className="input-field min-h-[80px]"
                          value={program.description}
                          onChange={(e) => {
                            const newPrograms = [...profileData.organizationDetails.programs];
                            newPrograms[index] = { ...program, description: e.target.value };
                            setProfileData({
                              ...profileData,
                              organizationDetails: {
                                ...profileData.organizationDetails,
                                programs: newPrograms
                              }
                            });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setProfileData({
                      ...profileData,
                      organizationDetails: {
                        ...profileData.organizationDetails,
                        programs: [
                          ...profileData.organizationDetails.programs,
                          { name: '', description: '' }
                        ]
                      }
                    })}
                    className="btn-secondary w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add Program
                  </button>
                </div>
              </div>
            </>
          );
        case 4:
          return (
            <>
              <h2 className="text-3xl font-bold mb-6">Membership Plans</h2>
              <div className="space-y-6">
                {profileData.organizationDetails.memberships.map((membership, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-xl">
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Plan Name"
                        className="input-field"
                        value={membership.name}
                        onChange={(e) => {
                          const newMemberships = [...profileData.organizationDetails.memberships];
                          newMemberships[index] = { ...membership, name: e.target.value };
                          setProfileData({
                            ...profileData,
                            organizationDetails: {
                              ...profileData.organizationDetails,
                              memberships: newMemberships
                            }
                          });
                        }}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="number"
                          placeholder="Duration (months)"
                          className="input-field"
                          value={membership.duration}
                          onChange={(e) => {
                            const newMemberships = [...profileData.organizationDetails.memberships];
                            newMemberships[index] = { ...membership, duration: e.target.value };
                            setProfileData({
                              ...profileData,
                              organizationDetails: {
                                ...profileData.organizationDetails,
                                memberships: newMemberships
                              }
                            });
                          }}
                        />
                        <input
                          type="number"
                          placeholder="Price"
                          className="input-field"
                          value={membership.price}
                          onChange={(e) => {
                            const newMemberships = [...profileData.organizationDetails.memberships];
                            newMemberships[index] = { ...membership, price: e.target.value };
                            setProfileData({
                              ...profileData,
                              organizationDetails: {
                                ...profileData.organizationDetails,
                                memberships: newMemberships
                              }
                            });
                          }}
                        />
                      </div>
                      <textarea
                        placeholder="Plan Benefits (one per line)"
                        className="input-field min-h-[80px]"
                        value={membership.benefits}
                        onChange={(e) => {
                          const newMemberships = [...profileData.organizationDetails.memberships];
                          newMemberships[index] = { ...membership, benefits: e.target.value };
                          setProfileData({
                            ...profileData,
                            organizationDetails: {
                              ...profileData.organizationDetails,
                              memberships: newMemberships
                            }
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setProfileData({
                    ...profileData,
                    organizationDetails: {
                      ...profileData.organizationDetails,
                      memberships: [
                        ...profileData.organizationDetails.memberships,
                        { name: '', duration: '', price: '', benefits: '' }
                      ]
                    }
                  })}
                  className="btn-secondary w-full"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Membership Plan
                </button>
              </div>
            </>
          );
        default:
          return null;
      }
    } else {
      // Return existing athlete profile setup content
      switch (step) {
        case 1:
          return (
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
          );
        case 2:
          return (
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
          );
        case 3:
          return (
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
                  className="btn-secondary w-full"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Achievement
                </button>
              </div>
            </>
          );
        case 4:
          return (
            <>
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="space-y-4">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-xl">
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
                  className="btn-secondary w-full"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Education
                </button>
              </div>
            </>
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {(userType === 'organization' 
              ? ['Organization Info', 'Contact Details', 'Facilities', 'Memberships']
              : ['Basic Info', 'Skills & Stats', 'Achievements', 'Education']
            ).map((label, idx) => (
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
          {getStepContent()}

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