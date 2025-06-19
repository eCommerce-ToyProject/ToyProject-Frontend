// src/components/StreamPlayer.jsx
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const StreamPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("http://<서버_IP>/hls/live.m3u8"); // 🔁 실제 서버 주소로 바꾸세요
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = "http://<서버_IP>/hls/live.m3u8";
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} controls autoPlay style={{ width: "100%", maxHeight: "60vh" }} />
    </div>
  );
};

export default StreamPlayer;
