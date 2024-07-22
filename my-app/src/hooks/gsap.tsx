"use client";

import gsap from "gsap";
import { useEffect } from "react";

export const useGsapEffect = () => {
    useEffect(() => {
        gsap.registerEffect({
            name: "fade",
            default: {duration: 5},
            effect: (targets:any,config:any) => {
                return gsap.to(targets, { duration: config.duration, opacity: 0 });
            },
            extendTimeline: true
        })
    },[])
}

// const timeline = gsap.timeline();
// timeline.to(containerRef.current, { opacity: 0, duration: 5, onComplete: () => {
// }});
// gsap.effects.fade(containerRef.current);

// setTimeout(() => {
//   issetFormShow(true);
//   gsap.effects.fade(containerRef.current);
// }, 2000); 