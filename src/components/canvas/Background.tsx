"use client";
import { useEffect, useRef } from "react";

export function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const lastMove = useRef(0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      // fuerza un repaint suave (opcional)
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastMove.current = Date.now();
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

    function isDarkMode() {
      return document.documentElement.classList.contains("dark");
    }

    function draw() {
      const darkMode = isDarkMode();
      const bgColor = darkMode
        ? "rgb(10, 20, 40)" // azul marino
        : "rgb(245, 247, 255)"; // claro elegante

      const textColor = darkMode
        ? "rgba(140,180,255," // números claros
        : "rgba(10,20,40,"; // números azul marino

      // fondo azul marino con fade
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // suavizado del mouse (interpolación)
      current.current.x += (mouse.current.x - current.current.x) * 0.08;
      current.current.y += (mouse.current.y - current.current.y) * 0.08;

      const idleTime = Date.now() - lastMove.current;

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = current.current.x - x;
          const dy = current.current.y - y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          function pseudoNoise(x: number, y: number) {
            return (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
          }
          const baseRadius = 50;
          const variation = 20;

          const noise = pseudoNoise(x, y);

          const dynamicRadius = baseRadius + noise * variation * 0.5;

          if (dist < dynamicRadius && idleTime < 800) {
            const intensity = 1 - dist / dynamicRadius;

            ctx.fillStyle = `${textColor}${intensity * 0.35})`;
            ctx.font = "10px monospace";

            const char = chars[(x + y) % 2]; // patrón ordenado (no random)

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

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
