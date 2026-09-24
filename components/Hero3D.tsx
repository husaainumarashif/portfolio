"use client";

import { useEffect } from "react";

function addTilt(el: HTMLElement, strength: number, scale: number) {
  const onEnter = () => {
    el.style.transition =
      "transform 0.15s ease-out, opacity 0.7s ease, translate 0.7s ease";
  };

  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const onLeave = () => {
    el.style.transition =
      "transform 0.5s ease-out, opacity 0.7s ease, translate 0.7s ease";
    el.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  el.style.willChange = "transform";
  el.addEventListener("mouseenter", onEnter);
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    el.removeEventListener("mouseenter", onEnter);
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

export default function Hero3D() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      const photo = document.getElementById("photo-tilt");
      if (photo) cleanups.push(addTilt(photo, 14, 1.02));

      const all = Array.from(
        document.querySelectorAll<HTMLElement>('div[class*="border-white"]')
      );

      const picked = all.filter((el) => {
        if (el.closest("#photo-tilt") || el.closest("header") || el.closest("nav")) {
          return false;
        }
        const r = el.getBoundingClientRect();
        return r.width >= 200 && r.width <= 800 && r.height >= 100 && r.height <= 700;
      });

      const cards = picked.filter(
        (el) => !picked.some((other) => other !== el && other.contains(el))
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.style.opacity = "1";
              target.style.translate = "0 0";
              observer?.unobserve(target);
            }
          });
        },
        { threshold: 0.15 }
      );

      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.translate = "0 40px";
        card.style.transition =
          "transform 0.3s ease-out, opacity 0.7s ease, translate 0.7s ease";
        cleanups.push(addTilt(card, 7, 1.015));
        observer?.observe(card);
      });
    }, 600);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}