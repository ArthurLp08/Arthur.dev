"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const PreloaderReadyContext = createContext(true);

export function usePreloaderReady() {
  return useContext(PreloaderReadyContext);
}

const FULL_DURATION = 1650;
const REDUCED_DURATION = 450;

export function Preloader({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;

    const timer = window.setTimeout(
      () => setLoading(false),
      prefersReducedMotion ? REDUCED_DURATION : FULL_DURATION
    );
    return () => window.clearTimeout(timer);
  }, [loading, prefersReducedMotion]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const reduced = Boolean(prefersReducedMotion);

  return (
    <PreloaderReadyContext.Provider value={!loading}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={loading ? { opacity: 0 } : { opacity: 1 }}
        transition={{
          duration: reduced ? 0.25 : 0.6,
          delay: loading ? 0 : 0.1,
          ease: "easeOut",
        }}
        className="flex min-h-full flex-1 flex-col"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            role="status"
            aria-label="Carregando portfólio"
            className="fixed inset-0 z-[150] grid place-items-center bg-background px-6"
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{
              duration: reduced ? 0.2 : 0.5,
              ease: "easeInOut",
            }}
          >
            <div className="flex w-full max-w-xs flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              >
                <Image
                  src="/logoAL.png"
                  alt=""
                  width={88}
                  height={88}
                  priority
                />
              </motion.div>

              <div className="mt-8 h-px w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full w-full origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: reduced ? 0.3 : 1.15,
                    delay: reduced ? 0 : 0.3,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="size-1 rounded-full bg-muted-foreground"
                    animate={reduced ? undefined : { opacity: [0.25, 0.9, 0.25] }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : {
                            duration: 1.1,
                            repeat: Infinity,
                            delay: dot * 0.18,
                            ease: "easeInOut",
                          }
                    }
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PreloaderReadyContext.Provider>
  );
}
