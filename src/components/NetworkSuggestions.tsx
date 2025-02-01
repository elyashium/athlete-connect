import React from 'react';
import { UserPlus } from 'lucide-react';

const suggestions = [
  {
    id: '1',
    name: 'Alex Thompson',
    title: 'Professional Soccer Player',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    mutualConnections: 12,
  },
  {
    id: '2',
    name: 'Emma Rodriguez',
    title: 'Sports Nutritionist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    mutualConnections: 8,
  },
  {
    id: '3',
    name: 'David Kim',
    title: 'Tennis Coach',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    mutualConnections: 15,
  },
];

export default function NetworkSuggestions() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">People You May Know</h2>
      <div className="space-y-4">
        {suggestions.map((person) => (
          <div key={person.id} className="flex items-start gap-3">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium">{person.name}</h3>
              <p className="text-sm text-gray-400">{person.title}</p>
              <p className="text-xs text-gray-500">{person.mutualConnections} mutual connections</p>
            </div>
            <button className="btn-primary p-2">
              <UserPlus className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button className="w-full text-center text-[var(--neon-green)] mt-4 text-sm hover:underline">
        View More
      </button>
    </div>
  );
}