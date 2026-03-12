import React from "react";
import SharedHeader from "../../components/SharedHeader";
import SharedFooter from "../../components/SharedFooter";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <div className="relative flex h-auto w-full flex-col overflow-x-hidden min-h-screen">
        <div className="flex h-full grow flex-col">
          <SharedHeader />

          <main className="flex flex-1 flex-col lg:flex-row max-w-[1440px] mx-auto w-full my-16 px-4 lg:px-0 gap-4 lg:gap-0">
            <Sidebar />
            <MapView />
          </main>

          <SharedFooter />
        </div>
      </div>
    </div>
  );
}
