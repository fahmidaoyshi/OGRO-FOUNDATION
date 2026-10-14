import {useEffect,useState,useCallback} from 'react';import {ChevronLeft,ChevronRight,Pause,Play} from 'lucide-react';import slides from '../data/heroSlides.js';
const pad=n=>String(n).padStart(2,'0');
export default function Hero(){
const n=slides.length,[i,setI]=useState(0),[playing,setP]=useState(true),[hold,setH]=useState(false);
const go=useCallback(d=>setI(v=>(v+d+n)%n),[n]);
useEffect(()=>{if(!playing||hold||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const t=setInterval(()=>go(1),6500);return()=>clearInterval(t)},[playing,hold,go]);
return(<section id="top" aria-roledescription="carousel" aria-label="OGRO Foundation highlights" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} onFocus={()=>setH(true)} onBlur={()=>setH(false)}
onKeyDown={e=>{if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)}}
className="relative grid overflow-hidden bg-brand-deep text-white" style={{clipPath:'ellipse(160% 100% at 50% 0%)',minHeight:'clamp(430px,42vw,580px)'}}>
{slides.map((s,k)=>{const on=k===i;return(<div key={k} role="group" aria-roledescription="slide" aria-label={`${k+1} of ${n}`} aria-hidden={!on} className={`relative col-start-1 row-start-1 transition-opacity duration-1000 ${on?'opacity-100 z-10':'opacity-0 z-0 pointer-events-none'}`}>
<div className={`absolute inset-0 bg-gradient-to-br ${s.tone}`}>{s.image?<img src={s.image} alt={s.alt} style={{objectPosition:s.pos}} className={`w-full h-full object-cover ${on?'hero-zoom':''}`} loading={k?'lazy':'eager'}/>:
<svg aria-hidden className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice"><path d="M-20 420 C250 300 450 560 720 420 S1050 300 1250 380" fill="none" stroke="#F47A20" strokeWidth="2.5" strokeDasharray="10 8"/><path d="M-20 200 C300 100 500 260 800 160 S1100 120 1250 170" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="1.5" strokeDasharray="4 8"/></svg>}</div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-deep/85 via-brand-deep/50 to-brand-deep/10"/><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-deep/60 to-transparent"/>
<div className="relative h-full mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-28 pb-24 flex items-center"><div className={`max-w-2xl ${on?'hero-in':''}`}>
<p className="inline-block bg-brand-orange text-white text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded">{s.label}</p>
<h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight break-words">{s.title}</h1>
<p className="mt-3 sm:mt-4 text-[0.95rem] sm:text-lg text-white/90 leading-relaxed">{s.text}</p>
<a href={s.cta[1]} tabIndex={on?0:-1} className="mt-5 sm:mt-7 inline-flex items-center gap-2 bg-white text-brand-deep hover:bg-brand-orange hover:text-white transition px-5 py-2.5 rounded-full font-semibold text-sm min-h-11">{s.cta[0]}<ChevronRight size={16} aria-hidden/></a></div></div></div>)})}
<div className="absolute z-20 inset-x-0 bottom-6 sm:bottom-9"><div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between gap-3">
<div className="flex items-center gap-3"><span className="text-sm tabular-nums font-medium" aria-live="polite">{pad(i+1)} <span className="text-white/60">/ {pad(n)}</span></span>
<div className="flex gap-1.5">{slides.map((_,k)=><button key={k} onClick={()=>setI(k)} aria-label={`Go to slide ${k+1}`} aria-current={k===i} className="h-6 flex items-center"><span className={`block h-1 rounded-full transition-all duration-500 ${k===i?'w-8 sm:w-10 bg-brand-orange':'w-4 sm:w-5 bg-white/50'}`}/></button>)}</div></div>
<div className="flex gap-2">{[[()=>setP(!playing),playing?'Pause slideshow':'Play slideshow',playing?Pause:Play],[()=>go(-1),'Previous slide',ChevronLeft],[()=>go(1),'Next slide',ChevronRight]].map(([f,l,I])=><button key={l} onClick={f} aria-label={l} className="w-11 h-11 grid place-items-center rounded-full border border-white/50 bg-brand-deep/30 hover:bg-brand-orange hover:border-brand-orange transition"><I size={18} aria-hidden/></button>)}</div></div></div>
</section>)}
