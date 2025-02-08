import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface FeedPostProps {
  post: {
    id: string;
    author: {
      id: string;
      name: string;
      avatar: string;
      type?: string;
    };
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    media?: string;
  };
}

export default function FeedPost({ post }: FeedPostProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={() => navigate(`/profile/${post.author.id}`)}
        />
        <div>
          <h3 
            className="font-semibold text-white cursor-pointer hover:text-[var(--neon-green)]"
            onClick={() => navigate(`/profile/${post.author.id}`)}
          >
            {post.author.name}
          </h3>
          <p className="text-sm text-gray-400">
            {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-gray-100 mb-4 whitespace-pre-wrap">{post.content}</p>

      {/* Post Media */}
      {post.media && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={post.media}
            alt="Post media"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-800">
        <button className="flex items-center gap-2 text-gray-400 hover:text-[var(--neon-green)]">
          <Heart className="w-5 h-5" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-400 hover:text-[var(--neon-green)]">
          <MessageSquare className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-400 hover:text-[var(--neon-green)]">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}