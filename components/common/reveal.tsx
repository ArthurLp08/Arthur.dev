"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { usePreloaderReady } from "@/components/common/preloader";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ready = usePreloaderReady();
  const shouldShow = ready && inView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={
        shouldShow ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined
      }
      transition={{ duration: 0.6, delay: shouldShow ? delay : 0, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
