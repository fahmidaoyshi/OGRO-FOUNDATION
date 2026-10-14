import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
export default function WhoWeAre(){return(<section id="who" className="py-16 sm:py-24 bg-white"><div className={`${W} max-w-3xl text-center`}><Reveal><p className="text-brand-orange font-semibold uppercase tracking-widest text-xs mb-2">About Us</p><Heading>Who We Are</Heading><div className="mt-8 text-left sm:text-center text-gray-700"><Paras items={who.slice(0,3)}/></div><p className="mt-6 font-semibold text-brand-blue text-lg">{who[3]}</p></Reveal></div></section>)}
