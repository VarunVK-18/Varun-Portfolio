import React from 'react';
import './TechSphere.css';

export const TechIcons = {
  flutter: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" fill="#42A5F5" />
      <path d="M14.286 11.457L8.571 17.171 14.314 22.914h7.372l-9.4-9.4 2-2.057z" fill="#0D4CA1" />
      <path d="M11.971 13.743l2.315 2.314-5.715 5.714H1.2l8.457-8.457 2.314 2.429z" fill="#42A5F5" />
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  androidStudio: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#073042" d="M51.3 17.7H23.2C17.6 17.7 13 22.3 13 28c-.2 5.5 4.2 10.1 9.7 10.3h28.9l-.3-20.6z"/><path fill="#4285F4" d="M115 109.3H23.2c-5.7 0-10.2-4.6-10.2-10.3V27.9c0 5.7 4.6 10.3 10.2 10.4h76.9s15-1.3 15 10v61z"/><path fill="#3870B2" d="M72.2 72.9C76.3 69.8 77.1 64 74 60c-1.7-2.2-4.3-3.6-7.1-3.7h.3c.5-.1 1.1-.1 1.6 0v-5.7c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-16.9 36.2h11l7.8-16.6c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9l8.1 16.6h11.2L72.2 72.9zm-5.7-1.6c-3.2 0-5.7-2.6-5.7-5.8 0-3.2 2.6-5.7 5.8-5.6 1.5 0 2.8.6 3.9 1.6 2.3 2.2 2.3 5.8.1 8.1-1 1-2.5 1.7-4.1 1.7z"/><path fill="#FFF" d="M45.2 22.7h39.4v7.2H45.2v-7.2z"/><path fill="#073042" d="M63.5 59.8c3.1 0 5.7 2.6 5.6 5.8 0 3.1-2.6 5.7-5.8 5.6-3.1 0-5.6-2.6-5.6-5.7 0-1.5.6-2.9 1.7-4s2.6-1.7 4.1-1.7zm2.2-3.3v-6c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-21.3 45.7c-.8 1.6-.7 3.6.4 5.1 1.6 2.3 4.7 2.9 7 1.3.8-.5 1.4-1.3 1.8-2.1l14.2-30.4c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9L82 122.8c1.2 2.5 4.2 3.5 6.7 2.3 2.5-1.2 3.5-4.2 2.3-6.7L69.1 72.9c4-3.2 4.7-9.1 1.5-13.1-1.2-1.6-2.9-2.7-4.9-3.3"/><path fill="#3DDC84" d="M78.8 29.1c-1.5 0-2.7-1.1-2.7-2.6 0-.7.3-1.5.8-2 1.1-1 2.7-1 3.8 0 .5.5.8 1.2.8 1.9-.1 1.5-1.2 2.6-2.7 2.7M49.2 29c-1.5 0-2.7-1.2-2.7-2.6 0-.7.3-1.4.8-1.9.9-1.1 2.6-1.3 3.7-.4h.1c1.1 1 1.2 2.7.2 3.8l-.3.4c-.5.5-1.2.8-1.9.8m30.5-16.2l5.3-9.2c.3-.5.1-1.1-.3-1.5-.5-.2-1-.1-1.3.3L77.8 12C69 8.1 59 8.1 50.3 12l-5.4-9.4c-.2-.3-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.2.8 0 1.1l5.4 9.2C38.9 18 32.8 27.6 31.9 38.2h64.2c-.8-10.7-7-20.2-16.4-25.3"/><path fill="#073042" d="M105.6 58.1h-4.2c-.2.1-.4.3-.4.6v66.5c0 .3.2.5.5.5h4.4c5.1 0 9.2-4.2 9.2-9.2V48.8c0 5.1-4.1 9.2-9.2 9.2h-.3z"/></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M11.996 0c-.394 0-.745.242-.87.602-.782 2.254-2.887 7.781-3.666 9.773-.854 2.188-1.46 4.502-1.46 6.625 0 3.867 2.72 6.96 6.074 7-.078-.515-.125-1.042-.125-1.578 0-4.664 2.348-8.867 2.348-8.867s.449.629.805 1.258c.277.492.527 1.055.722 1.668.649 2.039.926 4.098.926 5.941 0 .536-.047 1.063-.125 1.578 3.355-.04 6.075-3.133 6.075-7 0-2.123-.606-4.437-1.46-6.625-.78-1.992-2.884-7.519-3.666-9.773a.925.925 0 00-.87-.602h-.83z" fill="#13AA52" />
      <path d="M11.922 23.961c-.078-.515-.125-1.042-.125-1.578 0-4.664 2.348-8.867 2.348-8.867l-2.223 10.445z" fill="#FFEAA5" />
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#E34F26" />
      <path d="M12 22.02l6.83-1.944 1.547-17.476H12v19.42z" fill="#EF652A" />
      <path d="M12 9.61H8.055l-.273-3.078H12V3.793H4.496l.82 9.078H12V9.61zm0 6.643l-.039.011-3.219-.871-.207-2.316H5.789l.41 4.59 5.801 1.61.039-.011.039.011 5.809-1.61.059-.66.699-7.859.082-.922H6.969l.273 3.078h8.07l-.273 3.078-3.039.871z" fill="#FFFFFF" />
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#1572B6" />
      <path d="M12 22.02l6.83-1.944 1.547-17.476H12v19.42z" fill="#33A9DC" />
      <path d="M12 9.61h4.156l-.391 4.383-3.765 1.016v2.859l6.094-1.64.059-.66.82-9.219.078-.898H12V9.61zm0-4.047h7.242l.141-1.77H2V5.563zm0 10.449v-2.86l-3.766-1.015.262-2.946H12V6.449H4.758l.742 8.328 6.5 1.805z" fill="#FFFFFF" />
    </svg>
  )
};


export default function TechSphere() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Reduced logo sizes (45px - 52px) with optimal radius for a clean, premium fit
  const nodes = [
    { id: 'flutter', name: 'Flutter', icon: TechIcons.flutter, color: '#02569B', bg: '#F0F7FF', size: 48, radius: 156, angle: 270, delay: 0.05 },
    { id: 'react', name: 'React', icon: TechIcons.react, color: '#087ea4', bg: '#F0FAFF', size: 46, radius: 156, angle: 321, delay: 0.12 },
    { id: 'android', name: 'Android Studio', icon: TechIcons.androidStudio, color: '#3DDC84', bg: '#F2FDF5', size: 46, radius: 156, angle: 12, delay: 0.19 },
    { id: 'mongodb', name: 'MongoDB', icon: TechIcons.mongodb, color: '#13AA52', bg: '#F0FDF4', size: 48, radius: 156, angle: 63, delay: 0.26 },
    { id: 'github', name: 'GitHub', icon: TechIcons.github, color: '#24292F', bg: '#F8F9FA', size: 46, radius: 156, angle: 114, delay: 0.33 },
    { id: 'html5', name: 'HTML5', icon: TechIcons.html5, color: '#E34F26', bg: '#FFF5F2', size: 48, radius: 156, angle: 165, delay: 0.40 },
    { id: 'css3', name: 'CSS3', icon: TechIcons.css3, color: '#1572B6', bg: '#F0F8FF', size: 48, radius: 156, angle: 216, delay: 0.47 },
  ];

  return (
    <div className="tech-sphere-wrapper">
      <div className="tech-sphere-glow"></div>
      <div className="tech-orbit orbit-large"></div>
      <div className="tech-orbit orbit-medium"></div>
      <div className="tech-orbit orbit-small"></div>

      <div className="tech-center-badge">
        <span className="tech-center-code">&lt;/&gt;</span>
        <span className="tech-center-title">TECH STACK</span>
      </div>

      <div className={`tech-logos-container ${mounted ? 'is-shuffled' : 'is-initial'}`}>
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const targetX = Math.round(node.radius * Math.cos(rad));
          const targetY = Math.round(node.radius * Math.sin(rad));

          return (
            <div 
              key={node.id}
              className={`logo-positioner pos-${node.id}`}
              style={{
                '--target-x': `${targetX}px`,
                '--target-y': `${targetY}px`,
                '--delay': `${node.delay}s`,
                '--node-size': `${node.size}px`,
              }}
            >
              <div
                className="tech-floating-card"
                style={{
                  width: node.size,
                  height: node.size,
                  backgroundColor: node.bg,
                  borderColor: 'rgba(34, 34, 34, 0.08)',
                }}
                title={node.name}
              >
                <div className="tech-card-icon">{node.icon}</div>
                <span className="tech-card-label">{node.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
