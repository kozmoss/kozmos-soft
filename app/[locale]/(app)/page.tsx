// app/dashboard/page.js

import React from "react";
import DashboarbMobileSection from "../views/dashboard/dashboarbMobileSection";
import DashboarbMobileSection1 from "../views/dashboard/dashboarbMobileSection1";

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src={"/static/image/dashboardmain.jpg"}
          alt={"Görsel"}
          className="w-full h-full object-cover"
        />
        <div className="absolute  left-10 top-10 flex flex-col">
          <>
            <div className="text-white text-5xl font-bold"> Ideas </div>
            <div className="text-white text-5xl font-bold ">
              Beyond the Horizon
            </div>
          </>
          <div>
            <div className="text-white text-3xl font-bold text-wrap">
              {" "}
              Iasdasdasdasdasdasdasdasdasdasdasdasdasddeas{" "}
            </div>
          </div>
        </div>
      </section>
      <section >
        <DashboarbMobileSection />
      </section>
      <section >
        <DashboarbMobileSection1 />
      </section>
    </div>
  );
}
