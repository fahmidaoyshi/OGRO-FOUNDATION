import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {history,historyClose,historyYears,vision,mission,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';

export default function FocusAreaCard({f,i}){const I=Icons[f.icon];return(<Reveal delay={(i%3)*100} className={i%3===1?'lg:mt-10':''}><article className="group relative h-full overflow-hidden bg-white border border-gray-200 hover:border-brand-orange p-6 sm:p-8 transition hover:-translate-y-1">
<span aria-hidden className="absolute top-0 left-0 h-1 w-12 group-hover:w-full transition-all duration-500 bg-brand-orange"/><span aria-hidden className="absolute -right-1 -top-3 text-8xl font-semibold text-brand-blue/10 select-none">0{i+1}</span>
<span className={`relative w-11 h-11 grid place-items-center text-white ${i%2?'bg-brand-orange':'bg-brand-blue'}`}><I size={22} aria-hidden/></span><h3 className="relative mt-5 text-lg font-semibold text-brand-deep break-words">{f.title}</h3><div className="relative mt-3 text-gray-700"><Paras items={f.body}/></div></article></Reveal>)}
