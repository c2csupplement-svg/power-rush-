import Reveal from "./Reveal";
export default function About(){return <section className="about section-screen">
 <div className="about-ghost">POWER<br/>RUSH</div>
 <div className="about-inner"><Reveal><div className="eyebrow">ABOUT US</div></Reveal><Reveal delay={.1}><h2>WE’RE FOCUSED ON CREATING PERFORMANCE-DRIVEN PRODUCTS THAT FIT INTO REAL TRAINING, REAL ROUTINES, AND REAL GOALS. FROM INTENSE GYM SESSIONS TO THE FINAL REP, OUR FORMULAS ARE DESIGNED FOR PEOPLE WHO SHOW UP, PUT IN THE WORK, AND KEEP PUSHING WHEN THINGS GET DIFFICULT.</h2></Reveal><Reveal delay={.2}><button className="read-more"><i/>READ MORE</button></Reveal></div>
 </section>}