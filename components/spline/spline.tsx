"use client";

import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <span className="loader"></span>
        </div>
      }
    >
      <div className={`h-full ${className}`}>
        <Spline scene={scene} />
      </div>
    </Suspense>
  );
}
