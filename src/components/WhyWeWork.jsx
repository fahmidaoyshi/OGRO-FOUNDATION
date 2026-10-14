import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
export default function WhyWeWork(){return(<section id="why" className="bg-brand-soft py-16 sm:py-24"><div className={`${W} max-w-4xl`}><Reveal><Heading>Why We Work</Heading></Reveal>
<Reveal><div className="mt-10 text-gray-700"><Paras items={[why[0],why[1]]}/><blockquote className="my-8 border-l-4 border-brand-orange pl-5 text-2xl text-brand-blue font-medium">{why[2]}</blockquote><Paras items={[why[3]]}/></div></Reveal></div></section>)}
