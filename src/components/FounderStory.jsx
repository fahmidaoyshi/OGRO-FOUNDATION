import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
import EarlyLifeJourney from './EarlyLifeJourney.jsx';
export default function FounderStory(){return(<section id="founder" className="bg-brand-mist py-16 sm:py-24"><div className={W}><Reveal><p className="text-center text-brand-orange font-semibold uppercase tracking-widest text-xs mb-2">Founder & Team</p><Heading>Founder’s Story & Introduction</Heading></Reveal>
<div className="mt-12 grid md:grid-cols-5 gap-8 items-start"><Reveal className="md:col-span-2 md:sticky md:top-28"><Photo alt="Portrait of Abdullah Al Abid (photo to be added)" label="Founder photo to be added"/></Reveal>
<Reveal className="md:col-span-3 text-gray-700" delay={100}><Paras items={founderIntro}/></Reveal></div>
<EarlyLifeJourney/></div></section>)}
