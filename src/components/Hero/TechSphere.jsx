import React from 'react';
import profileImg from '../../assets/Picsart_26-11-11_11-37-43-022.jpg';
import flutterLogo from '../../assets/tech tools logo/transparent/flutter.png';
import reactLogo from '../../assets/tech tools logo/transparent/react.png';
import androidStudioLogo from '../../assets/tech tools logo/transparent/androidstudio.png';
import githubLogo from '../../assets/tech tools logo/transparent/github.png';
import htmlLogo from '../../assets/tech tools logo/transparent/html.png';
import cssLogo from '../../assets/tech tools logo/transparent/css.png';
import './TechSphere.css';

export default function TechSphere() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  // 6 Tech Tools matching your exact logos with precise names
  const nodes = [
    { id: 'flutter', name: 'Flutter', img: flutterLogo, angle: 270, delay: 0.05 },
    { id: 'react', name: 'React.js', img: reactLogo, angle: 330, delay: 0.12 },
    { id: 'android', name: 'Android Studio', img: androidStudioLogo, angle: 30, delay: 0.19 },
    { id: 'github', name: 'GitHub', img: githubLogo, angle: 90, delay: 0.26 },
    { id: 'css3', name: 'CSS3', img: cssLogo, angle: 150, delay: 0.33 },
    { id: 'html5', name: 'HTML5', img: htmlLogo, angle: 210, delay: 0.40 },
  ];

  return (
    <div className="tech-sphere-wrapper">
      <div className="tech-sphere-glow"></div>
      <div className="tech-orbit orbit-large"></div>
      <div className="tech-orbit orbit-medium"></div>
      <div className="tech-orbit orbit-small"></div>

      <div className="tech-center-badge tech-center-avatar-badge" title="Varun R">
        <img 
          src={profileImg} 
          alt="Varun R" 
          className="tech-center-avatar-img" 
        />
        <div className="tech-center-avatar-ring"></div>
      </div>

      <div className={`tech-logos-container ${mounted ? 'is-shuffled' : 'is-initial'}`}>
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);

          return (
            <div 
              key={node.id}
              className={`logo-positioner pos-${node.id}`}
              style={{
                '--cos': cos.toFixed(4),
                '--sin': sin.toFixed(4),
                '--delay': `${node.delay}s`,
              }}
            >
              <div
                className="tech-floating-card custom-logo-card"
                title={node.name}
              >
                <div className="tech-card-icon">
                  <img
                    src={node.img}
                    alt={node.name}
                    className="custom-logo-img"
                  />
                </div>
                <span className="tech-card-label">{node.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
