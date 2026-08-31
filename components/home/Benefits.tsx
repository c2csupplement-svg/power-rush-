import Reveal from "./Reveal";
import BenefitCard from "./BenefitCard";
const data=[
["01","STRENGTH OUTPUT","Increase muscular strength for heavier lifts and better training performance."],
["02","POWER PRODUCTION","Support explosive movements during high-intensity workouts."],
["03","FASTER RECOVERY","Help restore energy between sets and after intense training sessions."],
["04","MICRONIZED PURITY","Ultra-fine, high-purity creatine that mixes smoothly with no unnecessary fillers."],
["05","DAILY PERFORMANCE","Maintain consistent performance across every workout and training cycle."],
["06","LEAN MUSCLE SUPPORT","Support muscle growth alongside consistent training and proper nutrition."]
];
export default function Benefits(){return <section className="benefits section-screen"><div className="benefits-heading"><Reveal><div className="eyebrow">BENEFITS</div><h2>FUEL EVERY TRAINING SESSION</h2><p>Every serving is formulated to help you perform, recover, and<br/>progress with confidence.</p></Reveal></div><div className="benefit-grid">{data.map((x,i)=><Reveal key={x[0]} delay={i*.04}><BenefitCard number={x[0]} title={x[1]} body={x[2]}/></Reveal>)}</div></section>}