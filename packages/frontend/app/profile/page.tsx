import React from 'react';
import SharedHeader from '../../components/SharedHeader';
import Sidebar from './components/Sidebar';
import SettingsTabs from './components/SettingsTabs';
import SettingsContent from './components/SettingsContent';
import SharedFooter from '../../components/SharedFooter';

export default function ProfilePage() {
  return (
    <div className="bg-[#0a051a] bg-gradient-to-br from-[#0a051a] via-[#1a0b2e] to-[#0a051a] font-display text-slate-300 min-h-screen selection:bg-primary/30">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <SharedHeader />

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Sidebar />

            {/* Main Settings Area */}
            <div className="lg:col-span-8 space-y-6">
              <SettingsTabs />
              <SettingsContent />
            </div>
          </div>
        </main>

        <SharedFooter />
      </div>
    </div>
  );
}
