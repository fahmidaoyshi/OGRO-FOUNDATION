import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
export default function WellWishers(){return(<section id="wellwishers" className="bg-brand-soft py-16 sm:py-24"><div className={W}><Reveal><Heading>Well Wishers</Heading></Reveal>
<div className="mt-12 grid md:grid-cols-3 gap-6">{wellWishers.map((w,i)=>(<Reveal key={i} delay={i*100}><figure className="h-full bg-white rounded-sm p-6 border-l-4 border-brand-orange shadow-sm"><Quote className="text-brand-orange mb-3" size={28} aria-hidden/>
{w.quote?<blockquote className="text-gray-700 mb-5">{w.quote}</blockquote>:<div className="mb-5 space-y-2" aria-label="Quote to be added">{[100,90,60].map(x=><div key={x} style={{width:x+'%'}} className="h-3 rounded bg-gray-200"/>)}</div>}
<div className="flex items-center gap-3"><div className="w-16"><Photo src={w.image} alt={w.name||`Well wisher ${i+1} (photo to be added)`} ratio="aspect-square" label=""/></div><figcaption className="font-semibold text-brand-deep">{w.name||<span className="text-gray-400 font-normal text-sm">Name to be added</span>}</figcaption></div></figure></Reveal>))}</div></div></section>)}
