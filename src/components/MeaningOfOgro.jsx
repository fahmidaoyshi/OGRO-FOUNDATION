import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
export default function MeaningOfOgro(){return(<section id="meaning" className="py-16 sm:py-24"><div className={`${W} max-w-4xl`}><Reveal><Heading>Meaning of OGRO</Heading><p className="mt-8 text-center text-gray-700 text-lg">{meaning.intro}</p><p className="mt-6 text-center font-medium text-brand-deep">{meaning.lead}</p></Reveal>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">{meaning.letters.map(([l,w],i)=>(<Reveal key={i} delay={i*80}><div className={`rounded-lg p-5 text-center text-white ${i%2?'bg-brand-orange':'bg-brand-blue'}`}><div className="text-5xl font-semibold">{l}</div><div className="mt-1 text-sm sm:text-base break-words">{w}</div></div></Reveal>))}</div>
<Reveal><p className="mt-8 text-center text-gray-700">{meaning.close}</p></Reveal></div></section>)}
