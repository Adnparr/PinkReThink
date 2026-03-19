import React from "react";
import SharedHeader from "../../components/SharedHeader";
import SharedFooter from "../../components/SharedFooter";
import MapView from "./components/MapView";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <div className="relative flex h-auto w-full flex-col overflow-x-hidden min-h-screen">
        <div className="flex h-full grow flex-col">
          <SharedHeader />

          <main className="flex flex-1 flex-col w-full">
            <MapView />
          </main>

          <SharedFooter />
        </div>
      </div>
    </div>
  );
}
