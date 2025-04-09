"use client";
import React from "react";
// import { SparklesCore } from "./ui/sparkles";

export function AboutPageHero() {
  return (
    <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
}
