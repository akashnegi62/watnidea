"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton({ count }: { count: number }) {
  const [likes, setLikes] = useState(count);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
          isLiked 
          ? "bg-(--highlight) border-(--highlight) text-white" 
          : "bg-transparent border-white/10 text-white hover:border-white/30"
        }`}
      >
        <Heart size={20} fill={isLiked ? "white" : "none"} />
        <span className="font-bold uppercase tracking-widest text-xs">
          {isLiked ? "Liked" : "Like Button"}
        </span>
      </motion.button>
      <span className="text-white text-sm font-bold">{likes} Likes</span>
    </div>
  );
}
