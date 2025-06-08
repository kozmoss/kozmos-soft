import { Iphone16Pro } from "@/components/iphone";
import { SkeletonCard } from "@/components/skeleton-card";
import React, { Suspense } from "react";

export default function DashboarbMobileSection1() {
  return (
    <div className="justify-center items-center p-12">
      <div className=" z-10 flex gap-4 flex-col lg:flex-row">
        <Suspense fallback={<SkeletonCard/>}>
          <Iphone16Pro
            className="scale-70 md:scale-90 lg:scale-100"
            src="/static/videos/dashboard/mobile3.mp4"
            video={true}
          />
        </Suspense>
      </div>
    </div>
  );
}
