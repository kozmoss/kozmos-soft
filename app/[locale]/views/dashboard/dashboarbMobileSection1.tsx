import { Iphone16Pro } from "@/components/iphone";
import React from "react";

export default function DashboarbMobileSection1() {
  return (
    <div className="justify-center items-center p-12">
      <div className=" z-10 flex gap-4">
        <Iphone16Pro
          className="scale-70 md:scale-90 lg:scale-100"
          src="/static/videos/dashboard/mobile3.mp4"
          video={true}
        />
        <Iphone16Pro
          className="scale-70 md:scale-90 lg:scale-100"
          src="/static/videos/dashboard/mobile1.mov"
          video={true}
        />
      </div>
    </div>
  );
}
