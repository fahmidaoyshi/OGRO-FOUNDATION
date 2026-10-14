import {useEffect,useRef,useState} from 'react';import {User,Quote} from 'lucide-react';
export function Reveal({children,className='',delay=0}){const r=useRef(null);const [on,set]=useState(false);
useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){set(true);io.disconnect()}},{threshold:.12});io.observe(r.current);return()=>io.disconnect()},[]);
return <div ref={r} style={{transitionDelay:`${delay}ms`}} className={`reveal ${on?'in':''} ${className}`}>{children}</div>}
export const Heading=({children,light,center=true})=>(<h2 className={`text-2xl sm:text-3xl uppercase tracking-wide font-normal ${center?'text-center':''} ${light?'text-white':'text-brand-deep'}`}>{children}<span className={`block h-1 w-12 mt-3 bg-brand-orange rounded-full ${center?'mx-auto':''}`}/></h2>);
export const Paras=({items,className=''})=>items.map((t,i)=><p key={i} className={`leading-relaxed text-[1.02rem] mb-4 last:mb-0 ${className}`}>{t}</p>);
export function Photo({src,alt,ratio='aspect-[4/5]',label='Photo to be added'}){
return src?<img src={src} alt={alt} loading="lazy" className={`w-full ${ratio} object-cover object-top rounded-lg`}/>:
<div role="img" aria-label={alt||label} className={`w-full ${ratio} rounded-lg border-2 border-dashed border-brand-blue/40 bg-brand-mist flex flex-col items-center justify-center gap-2 text-brand-blue/70`}><User size={40} aria-hidden/><span className="text-sm">{label}</span></div>}
export const Wave=({flip})=>(<svg aria-hidden viewBox="0 0 1200 60" preserveAspectRatio="none" className={`w-full h-10 sm:h-14 ${flip?'rotate-180':''}`}><path d="M0 40 C300 -10 600 70 1200 10" fill="none" stroke="#F47A20" strokeWidth="2" strokeDasharray="8 6"/></svg>);
export {Quote};
