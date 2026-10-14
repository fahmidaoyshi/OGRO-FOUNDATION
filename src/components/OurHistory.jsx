import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {history,historyClose,historyYears,vision,mission,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';

export default function OurHistory(){const bg=['bg-brand-orange','bg-brand-blue','bg-brand-deep'],off=['md:mt-0','md:mt-8','md:mt-16'];
return(<section id="history" className="bg-brand-mist py-16 sm:py-24"><div className={W}><Reveal><Heading>Our History</Heading></Reveal>
<ol className="relative mt-14 grid md:grid-cols-3 gap-10 md:gap-6"><span aria-hidden className="hidden md:block absolute top-2.5 left-0 right-0 border-t-2 border-dashed border-brand-orange/60"/>
{history.map((p,i)=>(<li key={i} className={`relative ${off[i]}`}><Reveal delay={i*120}><span aria-hidden className={`absolute -top-0.5 left-0 w-5 h-5 rounded-full ring-4 ring-brand-mist ${bg[i]}`}/>
<div className="mt-8 bg-white p-6 border-t-4 border-brand-orange relative hover:-translate-y-1 transition"><span aria-hidden className={`absolute -top-4 right-4 h-8 px-3 grid place-items-center text-xs font-semibold text-white ${bg[i]}`}>0{i+1}</span>
<span className="block text-6xl sm:text-7xl font-light text-brand-blue">{historyYears[i]}</span><span aria-hidden className="block h-0.5 w-10 my-4 bg-brand-orange"/><div className="text-gray-700"><Paras items={[p]}/></div></div></Reveal></li>))}</ol>
<Reveal><p className="mt-16 max-w-3xl mx-auto text-center text-lg font-medium text-brand-deep border-t border-brand-orange/40 pt-6">{historyClose}</p></Reveal></div></section>)}
