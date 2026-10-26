import React from 'react';
import { 
  Smartphone, 
  Server, 
  Database, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Code2, 
  Terminal, 
  Globe, 
  Sparkles, 
  Workflow, 
  Boxes,
  Zap,
  CheckCircle2
} from 'lucide-react';
import './TechMarquee.css';

export default function TechMarquee() {
  const rowOne = [
    { title: "Flutter", tag: "Mobile Framework", icon: Smartphone },
    { title: "Dart", tag: "Core Language", icon: Code2 },
    { title: "Node.js", tag: "Backend Runtime", icon: Server },
    { title: "MongoDB", tag: "NoSQL Database", icon: Database },
    { title: "Angular", tag: "Web Architecture", icon: Globe },
    { title: "TypeScript", tag: "Typed JavaScript", icon: Terminal },
    { title: "Express.js", tag: "REST API Framework", icon: Server },
    { title: "Firebase", tag: "Auth & Cloud DB", icon: Zap },
    { title: "Google Gemini", tag: "AI Integration", icon: Sparkles },
    { title: "React", tag: "Frontend Library", icon: Layers },
  ];

  const rowTwo = [
    { title: "Provider & Riverpod", tag: "State Management", icon: Workflow },
    { title: "2FA / TOTP Security", tag: "Authentication", icon: ShieldCheck },
    { title: "Google Play Store", tag: "Production Apps", icon: Smartphone },
    { title: "RESTful API Design", tag: "Backend Services", icon: Server },
    { title: "MEAN-Stack Web", tag: "Full-Stack Dev", icon: Boxes },
    { title: "Offline-First Sync", tag: "Data Architecture", icon: Database },
    { title: "UI/UX Engineering", tag: "Component Systems", icon: Cpu },
    { title: "Performance Tuning", tag: "Optimization", icon: CheckCircle2 },
    { title: "Git & CI/CD", tag: "Version Control", icon: Terminal },
    { title: "Clean Code", tag: "SOLID & DRY", icon: Code2 },
  ];

  return (
    <section className="marquee-section" aria-label="Technology & Capabilities Marquee">
      {/* Edge gradient mask for smooth in-and-out fade */}
      <div className="marquee-edge-fade left" aria-hidden="true" />
      <div className="marquee-edge-fade right" aria-hidden="true" />

      <div className="marquee-wrapper">
        
        {/* Row 1: Sliding Left */}
        <div className="marquee-row marquee-slide-left">
          <div className="marquee-track">
            {rowOne.concat(rowOne).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={`r1-${index}`} className="marquee-card">
                  <div className="marquee-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="marquee-info">
                    <span className="marquee-title hover-gradient-text">{item.title}</span>
                    <span className="marquee-tag">{item.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="marquee-row marquee-slide-right">
          <div className="marquee-track">
            {rowTwo.concat(rowTwo).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={`r2-${index}`} className="marquee-card">
                  <div className="marquee-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="marquee-info">
                    <span className="marquee-title hover-gradient-text">{item.title}</span>
                    <span className="marquee-tag">{item.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
