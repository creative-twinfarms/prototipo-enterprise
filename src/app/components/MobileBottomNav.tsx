import { useNavigate, useLocation } from "react-router";
import { Plus } from "lucide-react";
import svgPaths from "../../imports/svg-c5psc3we6h";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex-1 h-[56px] relative active:scale-95 transition-transform"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[8px] pt-[6px] px-[12px] relative size-full">
          <div className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#919eab]'}`}>
            {icon}
          </div>
          <div className="content-stretch flex h-[16px] items-start relative shrink-0 mt-[2px]">
            <p className={`font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[12px] text-center tracking-[0.4px] whitespace-nowrap transition-colors duration-200 ${
              isActive ? 'text-white' : 'text-[#919eab]'
            }`}>
              {label}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function LocationIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%_20.83%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <path d={svgPaths.p27e21fc0} fill={isActive ? "white" : "#919EAB"} />
        </svg>
      </div>
    </div>
  );
}

function DashboardIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[18.77%_16.7%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9834 14.9923">
          <g>
            <path d={svgPaths.p5f53c80} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p211b4700} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p38392e80} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p30f4ba40} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p1150e780} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p8bdda00} fill={isActive ? "white" : "#919EAB"} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InventoryIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[5.07%_16.67%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21.5652">
          <g>
            <path d={svgPaths.p1fce20f2} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p92c0c00} fill={isActive ? "white" : "#919EAB"} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProfileIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[15.59%_16.67%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.5161">
          <g>
            <path d={svgPaths.pb393700} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p708fcc0} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p1b478cf0} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p10cff180} fill={isActive ? "white" : "#919EAB"} />
            <path d={svgPaths.p3cc11000} fill={isActive ? "white" : "#919EAB"} />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function MobileBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMapActive = location.pathname === "/mapa";
  const isDashboardActive = location.pathname === "/dashboard";
  const isInventoryActive = location.pathname === "/inventario";
  const isProfileActive = location.pathname === "/perfil";
  const isProductoresActive = location.pathname.startsWith("/productores") || location.pathname === "/";

  const handleAddClick = () => {
    // Navega a agregar productor o muestra un modal
    navigate("/productores");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white h-[72px]" data-name="<BottomNavigation>">
      {/* Background Shape con wave */}
      <div className="absolute h-[80px] left-0 top-0 w-full pointer-events-none" data-name="Subtract">
        <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 80">
          <path d={svgPaths.p1ecebd00} fill="#00512F" />
        </svg>
      </div>

      {/* Navigation Items - Left Side */}
      <div className="absolute content-stretch flex items-start left-[8px] top-[8px] w-[135.5px]">
        <NavItem
          icon={<LocationIcon isActive={isMapActive} />}
          label="Map"
          isActive={isMapActive}
          onClick={() => navigate("/mapa")}
        />
        <NavItem
          icon={<DashboardIcon isActive={isDashboardActive} />}
          label="Dashboard"
          isActive={isDashboardActive}
          onClick={() => navigate("/dashboard")}
        />
      </div>

      {/* Navigation Items - Right Side */}
      <div className="absolute content-stretch flex items-start right-[8px] top-[8px] w-[135.5px]">
        <NavItem
          icon={<InventoryIcon isActive={isInventoryActive} />}
          label="Inventario"
          isActive={isInventoryActive}
          onClick={() => navigate("/inventario")}
        />
        <NavItem
          icon={<ProfileIcon isActive={isProfileActive} />}
          label="Perfil"
          isActive={isProfileActive}
          onClick={() => navigate("/perfil")}
        />
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={handleAddClick}
        className="absolute bg-[#fe8340] content-stretch flex items-center justify-center left-1/2 -translate-x-1/2 overflow-clip rounded-full shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] size-[56px] top-[-28px] active:scale-95 transition-all duration-200 hover:shadow-[0px_4px_8px_rgba(254,131,64,0.5)]"
        aria-label="Agregar"
      >
        <Plus className="w-[24px] h-[24px] text-white" strokeWidth={3} />
      </button>
    </div>
  );
}