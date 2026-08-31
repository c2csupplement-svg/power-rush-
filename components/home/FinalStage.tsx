"use client";
import {motion} from "framer-motion";
export default function FinalStage(){
 return <section className="final-stage">
  <div className="final-rock final-left"/><div className="final-rock final-right"/>
  <motion.img initial={{opacity:0,y:-80,rotate:5}} whileInView={{opacity:1,y:0,rotate:3}} viewport={{once:true}} transition={{duration:1}} src="/images/hero-product.png" className="final-product" alt="Power Rush"/>
  <div className="final-bottom"><strong>#RUSH POWER</strong><div className="socials"><span>◉</span><span>◎</span><span>𝕏</span><span>▶</span></div></div>
 </section>
}