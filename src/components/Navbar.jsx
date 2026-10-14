import {useEffect,useState} from 'react';import {Plus,Minus,X,Menu} from 'lucide-react';import {nav} from '../data/content.js';import logo from '../assets/ogro-logo.jpg';
export default function Navbar(){
const [scrolled,setS]=useState(false),[open,setO]=useState(false),[dd,setDd]=useState(null),[acc,setAcc]=useState(null);
useEffect(()=>{const f=()=>setS(window.scrollY>40);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
useEffect(()=>{document.body.style.overflow=open?'hidden':'';const k=e=>e.key==='Escape'&&(setO(false),setDd(null));window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[open]);
const go=()=>{setO(false);setDd(null)};
return(<header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3">
<div className="mx-auto max-w-6xl relative">
<div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(10,61,107,.15)] flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5">
<a href="#top" className="group flex items-center gap-2 sm:gap-3 shrink-0 min-w-0" aria-label="OGRO Foundation home"><img src={logo} alt="OGRO Foundation logo" className="h-10 sm:h-11 w-auto"/><span className="relative text-base sm:text-xl font-semibold tracking-wide text-brand-deep whitespace-nowrap">OGRO Foundation<span aria-hidden className="absolute left-0 -bottom-1 h-0.5 w-8 bg-brand-orange transition-all duration-300 group-hover:w-full"/></span></a>
<nav aria-label="Main" className="hidden lg:flex flex-col items-end">
<div className={`overflow-hidden transition-all duration-300 ${scrolled?'max-h-0 opacity-0':'max-h-10 opacity-100 mb-1'}`}/>
<ul className="flex items-center gap-6">{nav.map((n,i)=>(<li key={n.label} className="relative" onMouseEnter={()=>n.sub&&setDd(i)} onMouseLeave={()=>setDd(null)}>
<a href={n.href} onClick={()=>setDd(null)} aria-haspopup={!!n.sub} aria-expanded={dd===i} className="flex items-center gap-1 text-sm font-medium text-brand-deep hover:text-brand-orange py-2">{n.label}{n.sub&&<Plus size={12} className={`transition-transform ${dd===i?'rotate-45':''}`} aria-hidden/>}</a>
{n.sub&&dd===i&&<ul className="absolute right-0 top-full w-56 bg-white rounded-lg shadow-lg border-t-4 border-brand-orange py-2">{n.sub.map(([l,h])=><li key={h}><a href={h} onClick={go} className="block px-4 py-2 text-sm text-brand-deep hover:bg-brand-soft hover:text-brand-orange">{l}</a></li>)}</ul>}
</li>))}</ul></nav>
<button onClick={()=>setO(!open)} className="lg:hidden flex items-center gap-2 text-sm font-medium text-brand-deep h-11 px-2" aria-expanded={open} aria-controls="mnav" aria-label="Toggle menu">{open?<X size={22}/>:<Menu size={22}/>}Menu</button>
</div>
<div className={`hidden lg:flex absolute right-0 -top-3 rounded-b-lg overflow-hidden text-xs font-semibold transition-all ${scrolled?'opacity-0 pointer-events-none -translate-y-2':'opacity-100'}`}>
<a href="#impact" className="bg-brand-deep text-white px-5 py-1.5 hover:bg-brand-blue">Our Impact</a><a href="#focus" className="bg-brand-orange text-white px-5 py-1.5 hover:brightness-95">Focus Areas</a></div>
{open&&<div id="mnav" className="lg:hidden mt-2 bg-white rounded-xl shadow-xl max-h-[calc(100vh-90px)] overflow-y-auto p-2">
{nav.map((n,i)=>(<div key={n.label} className="border-b border-gray-100 last:border-0"><div className="flex items-center"><a href={n.href} onClick={go} className="flex-1 py-3.5 px-3 font-medium text-brand-deep">{n.label}</a>
{n.sub&&<button onClick={()=>setAcc(acc===i?null:i)} aria-expanded={acc===i} aria-label={`Toggle ${n.label}`} className="w-11 h-11 grid place-items-center text-brand-orange">{acc===i?<Minus size={18}/>:<Plus size={18}/>}</button>}</div>
{n.sub&&acc===i&&<ul className="pb-2 pl-6">{n.sub.map(([l,h])=><li key={h}><a href={h} onClick={go} className="block py-2.5 text-sm text-gray-600">{l}</a></li>)}</ul>}</div>))}</div>}
</div></header>)}
