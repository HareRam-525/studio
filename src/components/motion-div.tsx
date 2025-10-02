
"use client";

import { useRef, useEffect, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MotionDivProps extends HTMLAttributes<HTMLDivElement> {
  transition?: {
    delay?: number;
  };
}

export default function MotionDiv({
  children,
  className,
  transition,
  ...props
}: MotionDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("fade-in-bottom", isVisible && "is-visible", className)}
      style={{
        transitionDelay: `${transition?.delay || 0}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
