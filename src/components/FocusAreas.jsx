import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
import FocusAreaCard from './FocusAreaCard.jsx';
export default function FocusAreas(){return(<section id="focus" className="py-16 sm:py-24"><div className={W}><Reveal><p className="text-center text-brand-orange font-semibold uppercase tracking-widest text-xs mb-2">Our Work</p><Heading>Focus Areas</Heading></Reveal>
<div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">{focus.map((f,i)=><FocusAreaCard key={f.title} f={f} i={i}/>)}</div></div></section>)}
