import React from 'react';
import { MessageSquare, Heart, Share2, Image } from 'lucide-react';

interface Post {
  id: string;
  content: string;
  media?: string;
  likes: number;
  comments: number;
  date: string;
}

interface PostsSectionProps {
  posts: Post[];
}

export default function PostsSection({ posts }: PostsSectionProps) {
  return (
    <div className="space-y-4">
      {/* Create Post */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Share an update..."
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>
          <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <Image size={20} className="text-neon-green" />
          </button>
        </div>
      </div>

      {/* Posts List */}
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="mb-4">
            <p className="text-gray-300 whitespace-pre-wrap">{post.content}</p>
            {post.media && (
              <img
                src={post.media}
                alt="Post media"
                className="mt-4 rounded-lg w-full object-cover max-h-96"
              />
            )}
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 hover:text-neon-green transition-colors">
                <Heart size={16} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-neon-green transition-colors">
                <MessageSquare size={16} />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-neon-green transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
            <span>{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}