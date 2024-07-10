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