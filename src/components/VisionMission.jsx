import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {history,historyClose,historyYears,vision,mission,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';

export default function VisionMission(){return(<section className="py-16 sm:py-24 overflow-hidden"><div className={`${W} grid lg:grid-cols-12`}>
<Reveal className="lg:col-span-7 relative z-10"><div id="vision" className="h-full bg-brand-orange text-white p-8 sm:p-12 rounded-tl-[3rem] rounded-br-[3rem]"><p className="text-xs uppercase tracking-[.3em] mb-4">01 — Vision</p><p className="text-2xl sm:text-4xl leading-tight font-light">{vision}</p></div></Reveal>
<Reveal className="lg:col-span-6 lg:-ml-12 lg:mt-20" delay={120}><div id="mission" className="h-full bg-brand-blue text-white p-8 sm:p-10 border-b-8 border-brand-deep"><p className="text-xs uppercase tracking-[.3em] text-brand-orange mb-4 lg:pl-12">02 — Mission</p><p className="leading-relaxed lg:pl-12">{mission}</p></div></Reveal></div></section>)}
