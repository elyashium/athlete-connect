
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags?: string[];
  reactions?: {
    like: number;
    love: number;
    laugh: number;
  };
}

interface FeedPostProps {
  post: Post;
}





export default function FeedPost({ post }: FeedPostProps) {


  
  return (
    <div className="bg-gray-900 rounded-xl p-6 mb-4">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{post.author.name}</h3>
          <p className="text-gray-400 text-sm">{post.author.title}</p>
          <p className="text-gray-400 text-sm">{post.timestamp}</p>
        </div>
      </div>

      <p className="mb-4">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}

      {post.tags && (
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="bg-gray-800 text-gray-400 px-2 py-1 rounded-lg text-sm">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span>{post.likes} likes</span>
        <span>{post.comments} comments • {post.shares} shares</span>
      </div>

      <div className="border-t border-gray-800 pt-4">
        <div className="flex justify-between">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ThumbsUp className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}