"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ReviewForm() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-white">Leave a Review</h3>
        <p className="text-white text-sm">Your email address will not be published. Required fields are marked *</p>
      </div>

      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs font-bold uppercase tracking-widest">Name *</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-(--highlight) transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs font-bold uppercase tracking-widest">Rating *</label>
            <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-(--highlight) transition-all appearance-none cursor-pointer">
              <option value="5">5 Stars - Excellent</option>
              <option value="4">4 Stars - Good</option>
              <option value="3">3 Stars - Average</option>
              <option value="2">2 Stars - Poor</option>
              <option value="1">1 Star - Very Bad</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white text-xs font-bold uppercase tracking-widest">Review *</label>
          <textarea 
            placeholder="Write your review here..."
            rows={5}
            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-(--highlight) transition-all resize-none"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-(--highlight) hover:bg-white text-white hover:text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-500 w-fit"
        >
          Post Review
          <Send size={16} />
        </motion.button>
      </form>
    </div>
  );
}
