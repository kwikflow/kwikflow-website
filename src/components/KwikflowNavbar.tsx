'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function KwikflowNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links: [string, string][] = [
    ['#werkwijze','Werkwijze'],['#diensten','Diensten'],['#prijzen','Prijzen'],
    ['#resultaten','Resultaten'],['#faq','FAQ'],['#contact','Contact']
  ]

  return (
    <>
      <header style={{position:'fixed',top:0,left:0,right:0,zIndex:100,height:'72px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',backdropFilter:scrolled?'blur(20px)':'none',WebkitBackdropFilter:scrolled?'blur(20px)':'none',background:scrolled?'rgba(4,8,18,0.95)':'transparent',borderBottom:scrolled?'1px solid rgba(0,200,232,0.1)':'1px solid transparent',transition:'all 0.3s'}}>
        <Link href="/" style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff',textDecoration:'none',display:'flex',alignItems:'center',gap:'6px'}}>
          <span style={{color:'#00C8E8',fontSize:'14px'}}>⚡</span>
          Kwik<span style={{color:'#00C8E8'}}>flow</span>
        </Link>

        <nav className="hidden md:flex" style={{gap:'8px',alignItems:'center'}}>
          {links.map(([href,label]) => (
            <a key={href} href={href} style={{padding:'8px 16px',color:'#94A3B8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'color 0.2s'}}
              onMouseEnter={e=>(e.target as HTMLElement).style.color='#fff'}
              onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>
              {label}
            </a>
          ))}
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
          <a href="#contact" className="hidden sm:inline-flex" style={{border:'1px solid #00C8E8',color:'#00C8E8',padding:'10px 24px',borderRadius:'8px',fontSize:'14px',fontWeight:600,textDecoration:'none',transition:'all 0.2s',background:'transparent'}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='#00C8E8';(e.currentTarget as HTMLElement).style.color='#040812'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='transparent';(e.currentTarget as HTMLElement).style.color='#00C8E8'}}>
            Plan gratis strategiegesprek
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(true)} className="md:hidden" style={{background:'none',border:'none',cursor:'pointer',padding:'8px',minHeight:'44px',minWidth:'44px',display:'flex',alignItems:'center',justifyContent:'center'}} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{position:'fixed',inset:0,zIndex:200,background:'rgba(4,8,18,0.97)',backdropFilter:'blur(20px)',display:'flex',flexDirection:'column'}}>
          <div style={{height:'72px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px'}}>
            <span style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff'}}>
              <span style={{color:'#00C8E8',fontSize:'14px',marginRight:'6px'}}>⚡</span>
              Kwik<span style={{color:'#00C8E8'}}>flow</span>
            </span>
            <button onClick={() => setOpen(false)} style={{background:'none',border:'none',cursor:'pointer',padding:'8px',minHeight:'44px',minWidth:'44px',display:'flex',alignItems:'center',justifyContent:'center'}} aria-label="Sluiten">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'24px'}}>
            {links.map(([href,label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} style={{fontFamily:'Syne,sans-serif',fontSize:'24px',fontWeight:700,color:'#fff',textDecoration:'none',minHeight:'44px',display:'flex',alignItems:'center'}}>
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{marginTop:'16px',background:'#00C8E8',color:'#040812',padding:'16px 40px',borderRadius:'10px',fontSize:'16px',fontWeight:700,textDecoration:'none',fontFamily:'Syne,sans-serif'}}>
              Plan strategiegesprek
            </a>
          </div>
        </div>
      )}
    </>
  )
}
