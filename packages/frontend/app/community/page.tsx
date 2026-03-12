import SharedHeader from "../../components/SharedHeader";
import SharedFooter from "../../components/SharedFooter";
import Sidebar from "./components/Sidebar";
import FeedContent from "./components/FeedContent";
import TrendingSidebar from "./components/TrendingSidebar";
import MobileNavBar from "./components/MobileNavBar";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle at 0% 0%, #1a0b12 0%, #0a0508 50%, #1a0b12 100%)' }}
      ></div>

      {/* Main Layout Container */}
      <div className="layout-container flex h-full grow flex-col relative z-10 pb-20 lg:pb-0">
        <SharedHeader />
        
        <main className="max-w-7xl mx-auto w-full px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 py-4 gap-6 flex-grow">
          <Sidebar />
          <FeedContent />
          <TrendingSidebar />
        </main>

        <SharedFooter />
        <MobileNavBar />
      </div>
    </div>
  );
}
