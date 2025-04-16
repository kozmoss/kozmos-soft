import { Iphone16Pro } from "@/components/iphone";
import React from "react";

export default function DashboarbMobileSection1() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative">
      {/* Sol tarafta resim */}
      <div className="w-full md:w-2/5 flex justify-center items-center p-4">
        <img
          src="/static/image/mobilesection2.png"
          alt="mobilesection"
          className="max-w-full h-auto scale-70"
        />
      </div>

      {/* Sağ tarafta telefonlar, arka plan resmi ve opacity efekti */}
      <div className="w-full md:w-3/5 relative flex justify-center items-center py-12">
        {/* Arka plan resmi ve opaklık efekti */}
        <div
          className="absolute inset-0 bg-cover bg-center right-5 rounded-2xl opacity-60 "
          style={{ backgroundImage: 'url("/static/image/section2.png")' }}
        ></div>

        {/* Telefonlar */}
        <div className="relative z-10 flex gap-4">
          <Iphone16Pro src="/static/videos/safari1.mp4" video={true} />
          <Iphone16Pro src="/static/videos/safari2.mp4" video={true} />
          <Iphone16Pro src="/static/videos/safari1.mp4" video={true} />
        </div>
      </div>
    </div>
  );
}
