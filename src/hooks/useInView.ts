import { useEffect, useRef } from "react";

type Options = IntersectionObserverInit;

export default function useInView<T extends HTMLElement = HTMLElement>(options?: Options) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth <= 768;
    const defaultOptions: Options = {
      threshold: 0.2,
      rootMargin: isMobile ? "0px 0px 00px 0px" : "0px 0px -80px 0px",
    };

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
  }, [ref, options]);

  return ref;
}
