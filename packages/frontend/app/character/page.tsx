import React from "react";
import SharedHeader from "../../components/SharedHeader";
import SharedFooter from "../../components/SharedFooter";
import CharacterGrid from "./components/CharacterGrid";

export default function CharacterPage() {
  return (
    <div className="layout-container flex h-full grow flex-col min-h-screen">
      <SharedHeader />

      <main className="flex-grow flex items-center justify-center px-4 py-16 md:px-8 relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#f20d80 0.8px, transparent 0.8px)",
            backgroundSize: "28px 28px",
          }}
        />

        <CharacterGrid />
      </main>

      <SharedFooter />
    </div>
  );
}
