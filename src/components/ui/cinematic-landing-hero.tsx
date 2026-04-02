"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }
  .bg-grid-kwik {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, rgba(0,200,232,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,200,232,0.04) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }
  .text-3d-kwik {
      color: #ffffff;
      text-shadow: 0 10px 30px rgba(0,200,232,0.2), 0 2px 4px rgba(0,0,0,0.5);
  }
  .text-cyan-matte {
      background: linear-gradient(180deg, #00C8E8 0%, #0099B8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: drop-shadow(0px 10px 20px rgba(0,200,232,0.3)) drop-shadow(0px 2px 4px rgba(0,200,232,0.2));
  }
  .premium-card-kwik {
      background: linear-gradient(145deg, #0B1A3E 0%, #040812 100%);
      box-shadow: 0 40px 100px -20px rgba(0,0,0,0.9), 0 20px 40px -20px rgba(0,0,0,0.8), inset 0 1px 2px rgba(0,200,232,0.1), inset 0 -2px 4px rgba(0,0,0,0.8);
      border: 1px solid rgba(0,200,232,0.1);
      position: relative;
  }
  .card-sheen-kwik {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,200,232,0.04) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }
  .iphone-bezel-kwik {
      background-color: #111;
      box-shadow: inset 0 0 0 2px #52525B, inset 0 0 0 7px #000, 0 40px 80px -15px rgba(0,0,0,0.9), 0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }
  .hardware-btn { background: linear-gradient(90deg, #404040 0%, #171717 100%); box-shadow: -2px 0 5px rgba(0,0,0,0.8), inset -1px 0 1px rgba(255,255,255,0.15), inset 1px 0 2px rgba(0,0,0,0.8); border-left: 1px solid rgba(255,255,255,0.05); }
  .screen-glare { background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%); }
  .widget-depth { background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%); box-shadow: 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.05), inset 0 -1px 1px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.03); }
  .floating-ui-badge { background: linear-gradient(135deg, rgba(0,200,232,0.08) 0%, rgba(0,200,232,0.01) 100%); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); box-shadow: 0 0 0 1px rgba(0,200,232,0.15), 0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 1px rgba(0,200,232,0.1), inset 0 -1px 1px rgba(0,0,0,0.5); }
  .btn-kwik-primary { transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); background: #00C8E8; color: #040812; box-shadow: 0 0 0 1px rgba(0,200,232,0.3), 0 2px 4px rgba(0,0,0,0.3), 0 12px 24px -4px rgba(0,200,232,0.4), inset 0 1px 1px rgba(255,255,255,0.4); }
  .btn-kwik-primary:hover { transform: translateY(-3px); box-shadow: 0 0 0 1px rgba(0,200,232,0.5), 0 6px 12px rgba(0,0,0,0.2), 0 20px 32px -6px rgba(0,200,232,0.5), inset 0 1px 1px rgba(255,255,255,0.4); }
  .btn-kwik-secondary { transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); background: transparent; color: #ffffff; box-shadow: 0 0 0 1px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3), 0 12px 24px -4px rgba(0,0,0,0.5); }
  .btn-kwik-secondary:hover { transform: translateY(-3px); box-shadow: 0 0 0 1px rgba(255,255,255,0.4), 0 6px 12px rgba(0,0,0,0.2), 0 20px 32px -6px rgba(0,0,0,0.6); }
  .progress-ring { transform: rotate(-90deg); transform-origin: center; stroke-dasharray: 402; stroke-dashoffset: 402; stroke-linecap: round; }
  @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-30px) translateX(15px); } }
  @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(20px) translateX(-20px); } }
  .orb1 { animation: float1 20s ease-in-out infinite; }
  .orb2 { animation: float2 25s ease-in-out infinite; }
`;

export interface KwikflowHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  metricValue?: number;
}

export function KwikflowHero({
  metricValue = 382,
  className,
  ...props
}: KwikflowHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.set(".text-track-kwik", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-cyan-reveal", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card-kwik", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-kwik", ".card-right-kwik", ".mockup-wrapper-kwik", ".floating-badge-kwik", ".phone-widget-kwik"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper-kwik", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track-kwik", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-cyan-reveal", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-kwik", ".bg-grid-kwik"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card-kwik", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card-kwik", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-wrapper-kwik",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget-kwik", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val-kwik", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge-kwik", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-kwik", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-kwik", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-kwik", { autoAlpha: 0 })
        .set(".cta-wrapper-kwik", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-wrapper-kwik", ".floating-badge-kwik", ".card-left-kwik", ".card-right-kwik"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(".main-card-kwik", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut",
          duration: 1.8
        }, "pullback")
        .to(".cta-wrapper-kwik", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card-kwik", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);
    return () => ctx.revert();
  }, [metricValue]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center", className)}
      style={{ perspective: "1500px", background: "#040812" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-kwik absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      <div style={{position:'absolute',inset:0,zIndex:0,overflow:'hidden',backgroundImage:'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=60)',backgroundSize:'cover',backgroundPosition:'center',opacity:0.07}}/>

      <div className="orb1 absolute pointer-events-none" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,200,232,0.06) 0%, transparent 70%)', top: '-200px', left: '-200px', zIndex: 0 }} />
      <div className="orb2 absolute pointer-events-none" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(27,42,94,0.3) 0%, transparent 70%)', bottom: '-100px', right: '-100px', zIndex: 0 }} />

      <div className="hero-text-kwik absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform">
        <div style={{ background: 'rgba(0,200,232,0.1)', border: '1px solid rgba(0,200,232,0.3)', borderRadius: '999px', padding: '6px 16px', fontSize: '11px', fontWeight: 700, color: '#00C8E8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', fontFamily: 'monospace' }}>
          AI Automatisering voor Vakmensen
        </div>
        <h1 className="text-track-kwik gsap-reveal text-3d-kwik" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 7vw, 90px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '8px', lineHeight: 1.05 }}>
          Nooit meer een
        </h1>
        <h1 className="text-cyan-reveal gsap-reveal text-cyan-matte" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 7vw, 90px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
          gemiste opdracht.
        </h1>
        <p style={{ color: '#94A3B8', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, maxWidth: '560px', marginTop: '24px', marginBottom: '32px' }}>
          Wij automatiseren jouw bereikbaarheid volledig. AI neemt de telefoon op, beantwoordt berichten en haalt leads binnen — terwijl jij gewoon werkt.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <a href="#contact" className="btn-kwik-primary" style={{ padding: '16px 32px', borderRadius: '10px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', cursor: 'pointer' }}>
            Start gratis vandaag →
          </a>
          <a href="#diensten" className="btn-kwik-secondary" style={{ padding: '16px 32px', borderRadius: '10px', fontWeight: 500, fontSize: '16px', textDecoration: 'none', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)' }}>
            Bekijk wat wij doen
          </a>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['382 oproepen gevangen', '€12.600 extra omzet', '38 reviews in 90 dagen'].map((stat, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', padding: '8px 20px', fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{stat.split(' ')[0]}</span> {stat.split(' ').slice(1).join(' ')}
            </div>
          ))}
        </div>
      </div>

      <div className="cta-wrapper-kwik absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto">
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.03em' }}>
          Begin vandaag. Gratis.
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '40px', maxWidth: '480px', lineHeight: 1.7 }}>
          Wij bouwen gratis een website of installeren een gratis AI widget. Alleen een eerlijke videoreview in ruil.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#contact" className="btn-kwik-primary" style={{ padding: '16px 32px', borderRadius: '10px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
            Claim jouw gratis website →
          </a>
          <a href="#contact" className="btn-kwik-secondary" style={{ padding: '16px 32px', borderRadius: '10px', fontWeight: 500, fontSize: '16px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
            Claim jouw gratis widget
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card-kwik premium-card-kwik relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen-kwik" aria-hidden="true" />
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

            <div className="card-right-kwik gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#00C8E8', lineHeight: 1 }}>
                Kwik<span style={{ color: '#ffffff' }}>flow</span>
              </h2>
            </div>

            <div className="mockup-wrapper-kwik order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full flex items-center justify-center" style={{ transform: 'scale(0.65)' }}>
                <div ref={mockupRef} className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel-kwik flex flex-col will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0" style={{ transform: 'scaleX(-1)' }} />
                  <div className="absolute inset-[7px] rounded-[2.5rem] overflow-hidden text-white z-10" style={{ background: '#050914', boxShadow: 'inset 0 0 15px rgba(0,0,0,1)' }}>
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" />
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3" style={{ boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.1)' }}>
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00C8E8', boxShadow: '0 0 8px rgba(0,200,232,0.8)' }} />
                    </div>
                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="phone-widget-kwik flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                          <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '2px' }}>Vandaag</span>
                          <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', fontFamily: 'Syne, sans-serif' }}>Kwikflow</span>
                        </div>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,200,232,0.1)', border: '1px solid rgba(0,200,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#00C8E8' }}>KF</div>
                      </div>
                      <div className="phone-widget-kwik relative mx-auto flex items-center justify-center mb-6" style={{ width: '160px', height: '160px' }}>
                        <svg className="absolute inset-0 w-full h-full">
                          <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(0,200,232,0.05)" strokeWidth="12" />
                          <circle className="progress-ring" cx="80" cy="80" r="64" fill="none" stroke="#00C8E8" strokeWidth="12" />
                        </svg>
                        <div style={{ textAlign: 'center', zIndex: 10 }}>
                          <span className="counter-val-kwik" style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', fontFamily: 'Syne, sans-serif', display: 'block' }}>0</span>
                          <span style={{ fontSize: '8px', color: 'rgba(0,200,232,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Oproepen gevangen</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div className="phone-widget-kwik widget-depth rounded-2xl p-3 flex items-center">
                          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,200,232,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', border: '1px solid rgba(0,200,232,0.2)' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C8E8" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ height: '6px', width: '80px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', marginBottom: '6px' }} />
                            <div style={{ height: '5px', width: '50px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px' }} />
                          </div>
                          <div style={{ fontSize: '10px', color: '#00C8E8', fontWeight: 700 }}>Nieuw</div>
                        </div>
                        <div className="phone-widget-kwik widget-depth rounded-2xl p-3 flex items-center">
                          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,200,232,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', border: '1px solid rgba(0,200,232,0.2)' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C8E8" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ height: '6px', width: '60px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', marginBottom: '6px' }} />
                            <div style={{ height: '5px', width: '90px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px' }} />
                          </div>
                          <div style={{ fontSize: '10px', color: '#00C8E8', fontWeight: 700 }}>Lead</div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full" style={{ width: '120px', height: '4px', background: 'rgba(255,255,255,0.2)' }} />
                    </div>
                  </div>
                </div>

                <div className="floating-badge-kwik absolute floating-ui-badge rounded-xl p-3 flex items-center gap-3 z-30" style={{ top: '24px', left: '-60px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,200,232,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,200,232,0.2)' }}>
                    <span style={{ fontSize: '18px' }}>⚡</span>
                  </div>
                  <div>
                    <p style={{ color: '#ffffff', fontSize: '12px', fontWeight: 700, margin: 0 }}>382 oproepen gevangen</p>
                    <p style={{ color: 'rgba(0,200,232,0.5)', fontSize: '10px', margin: 0 }}>Deze week automatisch</p>
                  </div>
                </div>

                <div className="floating-badge-kwik absolute floating-ui-badge rounded-xl p-3 flex items-center gap-3 z-30" style={{ bottom: '80px', right: '-60px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,200,232,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,200,232,0.2)' }}>
                    <span style={{ fontSize: '18px' }}>💬</span>
                  </div>
                  <div>
                    <p style={{ color: '#ffffff', fontSize: '12px', fontWeight: 700, margin: 0 }}>Nieuwe lead</p>
                    <p style={{ color: 'rgba(0,200,232,0.5)', fontSize: '10px', margin: 0 }}>Via WhatsApp ontvangen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-left-kwik gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 700, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                AI automatisering voor vakmensen.
              </h3>
              <p style={{ color: 'rgba(0,200,232,0.7)', fontSize: 'clamp(13px, 1.5vw, 15px)', lineHeight: 1.7, maxWidth: '320px' }} className="hidden md:block">
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Kwikflow</span> automatiseert jouw bereikbaarheid volledig. AI neemt de telefoon op, beantwoordt berichten via WhatsApp, Instagram en Facebook — terwijl jij gewoon werkt.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }} className="hidden md:flex">
                {['Voice agent', 'Chatbot', 'WhatsApp AI', 'Reviews'].map((tag, i) => (
                  <span key={i} style={{ background: 'rgba(0,200,232,0.1)', border: '1px solid rgba(0,200,232,0.2)', borderRadius: '999px', padding: '4px 12px', fontSize: '11px', color: '#00C8E8', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
