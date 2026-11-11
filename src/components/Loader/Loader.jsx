import React, { useState, useEffect, useRef } from 'react';
import './Loader.css';

export default function Loader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [percent, setPercent] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Animate percentage from 0 to 100 over 2 seconds with easing
    const duration = 2000;

    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a natural feel (fast start, slow finish)
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercent(Math.round(eased * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
      if (onFinish) onFinish();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onFinish]);

  if (removed) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-ring-scene">
        {/* Ambient forest green & black glow */}
        <div className="loader-ambient-glow" />

        {/* Outer ring — Green & Black gradient arc */}
        <svg className="loader-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="40%" stopColor="#0B6623" />
              <stop offset="80%" stopColor="#148332" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <circle
            className="ring-arc ring-arc-main"
            cx="50" cy="50" r="45"
            stroke="url(#grad-main)"
          />
        </svg>

        {/* Middle ring — Deep Black & Forest Green arc */}
        <svg className="loader-svg-secondary" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B6623" />
              <stop offset="60%" stopColor="#111111" />
              <stop offset="100%" stopColor="#0B6623" />
            </linearGradient>
          </defs>
          <circle
            className="ring-arc ring-arc-secondary"
            cx="50" cy="50" r="45"
            stroke="url(#grad-secondary)"
          />
        </svg>

        {/* Inner ring — Minimalist Accent Arc */}
        <svg className="loader-svg-tertiary" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad-tertiary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#0B6623" />
              <stop offset="100%" stopColor="#1e3a24" />
            </linearGradient>
          </defs>
          <circle
            className="ring-arc ring-arc-tertiary"
            cx="50" cy="50" r="45"
            stroke="url(#grad-tertiary)"
          />
        </svg>

        {/* Orbiting glow particles */}
        <div className="loader-particle particle-1" />
        <div className="loader-particle particle-2" />
        <div className="loader-particle particle-3" />

        {/* Percentage counter in the center */}
        <div className="loader-percent">
          <span className="loader-percent-number">{percent}</span>
          <span className="loader-percent-sign">%</span>
        </div>
      </div>

      <span className="loader-text">Loading...</span>
    </div>
  );
}
