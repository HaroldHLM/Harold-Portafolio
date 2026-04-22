"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const t = scrollTop / height;
      setProgress(t);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return progress;
}
