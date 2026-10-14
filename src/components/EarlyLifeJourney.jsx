import * as Icons from 'lucide-react';import {Reveal,Heading,Paras,Photo,Wave,Quote} from './ui.jsx';
import {who,history,historyClose,historyYears,vision,mission,why,meaning,founderIntro,journey,coreMembers,wellWishers,impact,focus,nav} from '../data/content.js';
const W='mx-auto w-full max-w-6xl px-4 sm:px-6';
export default function EarlyLifeJourney(){return(<div id="journey" className="mt-16 bg-white rounded-lg p-6 sm:p-10 border-l-4 border-brand-blue"><Reveal><h3 className="text-xl sm:text-2xl uppercase tracking-wide text-brand-deep mb-6">His Early Life and Journey</h3><div className="text-gray-700 max-w-3xl"><Paras items={journey}/></div></Reveal></div>)}
