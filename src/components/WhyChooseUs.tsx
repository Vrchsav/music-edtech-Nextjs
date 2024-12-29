"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

// Content array with gradient and dark theme
const content = [
  {
    title: "Collaborative Learning",
    description:
      "Collaborate with fellow musicians in real time, whether you're composing, rehearsing, or discussing music theory. Share sheet music, ideas, and techniques with your peers. With our platform, you can make music together, regardless of your physical location, and enhance your creative process.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center text-white p-8 rounded-lg shadow-lg">
        Collaborative Learning
      </div>
    ),
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get immediate feedback from your instructors and peers. Whether it's a piano piece, a vocal performance, or a composition, our platform allows you to receive constructive feedback instantly. Make improvements quickly and efficiently, ensuring you're always moving forward in your musical journey.",
    content: (
      <div className="h-full w-full bg-gray-900 flex items-center justify-center text-white p-8 rounded-lg shadow-lg">
        Real-Time Feedback
      </div>
    ),
  },
  {
    title: "Music Composition Version Control",
    description:
      "Keep track of your music compositions with ease. Our platform ensures that every change made to your scores is saved and accessible. Whether you're composing a symphony or a simple melody, our version control feature guarantees that you won't lose any of your ideas and can revert to previous versions whenever needed.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white p-8 rounded-lg shadow-lg">
        Music Composition Version Control
      </div>
    ),
  },
  {
    title: "Expanding Your Repertoire",
    description:
      "Never run out of music to practice. Our platform offers an ever-growing library of sheet music, from classical masterpieces to modern hits. You can access new pieces, explore different genres, and broaden your musical horizons, all while tracking your progress and improving your skills.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center text-white p-8 rounded-lg shadow-lg">
        Expanding Your Repertoire
      </div>
    ),
  },
  {
    title: "Virtual Music Classes",
    description:
      "Take part in virtual lessons and masterclasses from renowned musicians and instructors around the world. Learn at your own pace or join group sessions. Whether you're a beginner or an advanced student, you'll have access to high-quality resources to help you grow as a musician.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white p-8 rounded-lg shadow-lg">
        Virtual Music Classes
      </div>
    ),
  },
  {
    title: "Practice with Play-Along Tracks",
    description:
      "Enhance your practice sessions with play-along tracks. Whether you're playing piano, guitar, or another instrument, you can play along with high-quality backing tracks designed to help you improve timing, rhythm, and improvisation skills. Practice alone or with others for a more dynamic learning experience.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white p-8 rounded-lg shadow-lg">
        Practice with Play-Along Tracks
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-12">
      {/* Wrapper div for StickyScroll */}
      <div className="w-full h-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
