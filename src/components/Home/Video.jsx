'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'Ci2YEz6roRU';

  return (
    <div
      className="relative w-[80%] max-w-7xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          {/* YouTube Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition">
            <Play className="w-16 h-16 text-white" />
          </div>
        </>
      ) : (
        // Embedded YouTube Player
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="GoalQuest Video"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
