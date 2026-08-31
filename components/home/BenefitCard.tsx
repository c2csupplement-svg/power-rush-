"use client";
import {useState} from "react";
import {motion} from "framer-motion";
export default function BenefitCard({number,title,body}:{number:string;title:string;body:string}){
 const [hover,setHover]=useState(false);
 return <motion.article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={"benefit-card "+(hover?"is-hovered":"")} animate={{y:hover?-5:0}} transition={{duration:.25}}>
  <div className="corner tl"/><div className="corner tr"/><div className="corner bl"/><div className="corner br"/>
  <div className="benefit-number">{number}</div><h3>{title}</h3><p>{body}</p>
 </motion.article>
}