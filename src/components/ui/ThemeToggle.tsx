"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 z-50 px-4 py-2 border rounded"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
