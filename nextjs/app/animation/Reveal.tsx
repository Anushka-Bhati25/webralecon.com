"use client";
import React, {useEffect, useRef} from 'react'
import {motion , useInView, useAnimation} from 'framer-motion';
import '../shared/constant.css'
import classNames from 'classnames';

interface Props{
    children:JSX.Element;
    className?:string;
    width?:"fit-content" | "100%";
}

export const Reveal =({children, width = 'fit-content'}: Props) => {
    const ref = useRef(null);
    const isinView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    // const slideControls = useAnimation();
    useEffect(() => {
            if(isinView){
                mainControls.start("visible")
                // slideControls.start("visible")
            }
        }, [isinView]);
    
    return (
    <div className='mx-auto text-blue-500' ref={ref} style={{ width, overflow:"hidden"}}>
      <motion.div
        style={{textAlign:"center"}}
        variants={{
            hidden: {opacity: 0, y:75},
            visible:{ opacity: 1, y:0} ,
        }}
        initial = "hidden"
        animate = {mainControls}
        transition={{repeat:Infinity, repeatDelay: 3,
          duration: 0.5, delay: 0.15}}
      >{children}</motion.div>
    </div>
  )
}


