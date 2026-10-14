const imgs=import.meta.glob('../assets/hero/hero-*.{jpg,jpeg,png,webp}',{eager:true,import:'default'});
const pick=n=>Object.entries(imgs).find(([k])=>k.includes(`hero-${n}.`))?.[1]||'';
import {who,vision,meaning,historyClose} from './content.js';
// Add a real image path per slide, e.g. image: '/images/hero-1.jpg' (or import from src/assets). Empty = brand placeholder.
export default [
{image:pick(1),pos:'center',alt:'',label:'Who We Are',title:'OGRO Foundation',text:who[3],cta:['About Us','#who'],tone:'from-brand-deep to-brand-blue'},
{image:pick(2),pos:'center',alt:'',label:'OGRO Foundation',title:'Vision',text:vision,cta:['Mission','#vision'],tone:'from-brand-blue to-brand-deep'},
{image:pick(3),pos:'center',alt:'',label:'OGRO Foundation',title:'Meaning of OGRO',text:meaning.intro,cta:['Read more','#meaning'],tone:'from-brand-deep via-brand-blue to-brand-blue'},
{image:pick(4),pos:'center',alt:'',label:'OGRO Foundation',title:'Our History',text:historyClose,cta:['Our History','#history'],tone:'from-brand-blue to-brand-deep'}];
