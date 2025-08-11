"use client";
const HeroVideo = () => (
  <video
    src="/video/video.mp4"
    autoPlay
    loop
    muted
    className="absolute inset-0 object-cover object-bottom w-full h-dvh scale-103 z-0 mix-blend-screen"
  />
);
export default HeroVideo;