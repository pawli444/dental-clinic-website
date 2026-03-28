import { useEffect, useRef } from "react";

type Options = IntersectionObserverInit;

export default function useInView<T extends HTMLElement = HTMLElement>(options: Options = { threshold: 0.12 }) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return ref;
}
