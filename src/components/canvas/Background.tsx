"use client";
import { useEffect, useRef } from "react";

export function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const lastMove = useRef(0);

  //Colores actuales del tema
  const themeColors = useRef({
    bg: "#0a1428",
    text: "#f9fafb",
  });

  // convertimos hex a rgb
  function hexToRgb(hex: string) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  }

  // obtener variables CSS
  function getThemeColors() {
    const styles = getComputedStyle(document.documentElement);

    return {
      bg: styles.getPropertyValue("--bg").trim(),
      text: styles.getPropertyValue("--text").trim(),
    };
  }

  useEffect(() => {
    lastMove.current = Date.now();

    // inicializar colores
    themeColors.current = getThemeColors();

    const observer = new MutationObserver(() => {
      themeColors.current = getThemeColors(); // 🔥 actualiza al cambiar tema
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 15;
    const chars = ["0", "1"];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMove.current = Date.now();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);

    function pseudoNoise(x: number, y: number) {
      return (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
    }

    function draw() {
      const { bg, text } = themeColors.current;

      ctx.clearRect(0, 0, width, height);

      // fondo dinámico
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // suavizado mouse
      current.current.x += (mouse.current.x - current.current.x) * 0.08;
      current.current.y += (mouse.current.y - current.current.y) * 0.08;

      const idleTime = Date.now() - lastMove.current;

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = current.current.x - x;
          const dy = current.current.y - y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          const baseRadius = 50;
          const variation = 20;

          const noise = pseudoNoise(x, y);
          const dynamicRadius = baseRadius + noise * variation * 0.5;

          if (dist < dynamicRadius && idleTime < 800) {
            const intensity = 1 - dist / dynamicRadius;

            ctx.fillStyle = `rgba(${hexToRgb(text)}, ${intensity * 0.35})`;

            ctx.font = "10px monospace";

            const char = chars[(x + y) % 2];

            ctx.fillText(char, x, y);
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
