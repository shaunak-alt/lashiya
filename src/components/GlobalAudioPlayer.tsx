"use client";

import { useEffect, useState, useRef } from "react";

export default function GlobalAudioPlayer() {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Start music on first user interaction
    useEffect(() => {
        const startMusic = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(() => { });
            }
            document.removeEventListener("click", startMusic);
        };
        document.addEventListener("click", startMusic);

        return () => document.removeEventListener("click", startMusic);
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            {/* Background Music */}
            <audio ref={audioRef} src="/music.webm" loop preload="auto" />

            {/* Mute Button */}
            <button
                onClick={toggleMute}
                className="fixed top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                title={isMuted ? 'Unmute' : 'Mute'}
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                )}
            </button>
        </>
    );
}
