import React from 'react';
import SharedHeader from '../../components/SharedHeader';
import SharedFooter from '../../components/SharedFooter';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';

export default function RoadmapPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto w-full flex-col overflow-x-hidden min-h-screen">
        <div className="layout-container flex h-full grow flex-col">
          <SharedHeader />

          <main className="flex flex-1 flex-col lg:flex-row max-w-[1440px] mx-auto w-full">
            <Sidebar />
            <MapView />
          </main>
          
          <SharedFooter />
        </div>
      </div>
    </div>
  );
}
