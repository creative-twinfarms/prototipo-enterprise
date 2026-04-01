import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MobileHeader } from "../components/MobileHeader";
import { MobileDrawer } from "../components/MobileDrawer";
import { MobileBottomNav } from "../components/MobileBottomNav";

export default function Root() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f9fafb] min-h-screen flex flex-col">
      {/* Desktop Header */}
      <Header />
      
      {/* Mobile Header */}
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
      
      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <div className="flex flex-1 pt-[64px] md:pt-[70px]">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Main Content - ajustado para mobile (con bottom nav) y desktop */}
        <main className="flex-1 ml-0 md:ml-[280px] p-[16px] md:p-[24px] pb-[88px] md:pb-[24px] overflow-y-auto">
          <Outlet />
        </main>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}