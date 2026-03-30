import { useEffect, useRef } from "react";

type Options = IntersectionObserverInit;


export default function useInView<T extends HTMLElement = HTMLElement>(options?: Options, isHome?: boolean) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth <= 768;

    const resolvedIsHome = typeof isHome === "boolean" ? isHome : (typeof window !== "undefined" && window.location.pathname === "/");

    const homeDefaults: Options = {
      threshold: isMobile ? 0.1 : 0.15,
      rootMargin: isMobile ? "0px 0px 0px 0px" : "0px 0px -40px 0px",
    };

    const siteDefaults: Options = {
      threshold: isMobile ? 0.2 : 0.26,
      rootMargin: isMobile ? "0px 0px 0px 0px" : "0px 0px -80px 0px",
    };

    const defaultOptions: Options = resolvedIsHome ? homeDefaults : siteDefaults;

    const observerOptions: Options = { ...defaultOptions, ...(options || {}) };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options, isHome]);

  return ref;
}
