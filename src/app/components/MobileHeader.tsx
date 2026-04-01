import { Menu, MapPin } from "lucide-react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-c8nvsfhn8f";

type MobileHeaderProps = {
  onMenuClick: () => void;
};

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-[#00512f] h-[64px] z-50 shadow-md">
      <div className="flex items-center justify-between h-full px-[16px]">
        {/* Hamburger Menu */}
        <button
          onClick={onMenuClick}
          className="flex items-center justify-center w-[48px] h-[48px] -ml-[12px] active:bg-white/10 rounded-full transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="w-[24px] h-[24px] text-white" />
        </button>

        {/* Logo Twin Farms Centrado */}
        <Link
          to="/"
          className="absolute left-1/2 flex h-[27.75px] -translate-x-1/2 flex-col items-center justify-center rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
          aria-label="Ir al inicio"
        >
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 h-[15.777px] ml-0 mt-0 relative row-1 w-[88.277px]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.2775 15.7771">
                <g id="Group">
                  <path d={svgPaths.p283c9000} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.pc0c0300} fill="var(--fill-0, white)" id="Vector_2" />
                  <path d={svgPaths.p8b93200} fill="var(--fill-0, white)" id="Vector_3" />
                  <path d={svgPaths.p12434080} fill="var(--fill-0, white)" id="Vector_4" />
                </g>
              </svg>
            </div>
            <div className="col-1 h-[6.562px] ml-[14.66px] mt-[21.19px] relative row-1 w-[56.687px]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.6875 6.56234">
                <g id="Group">
                  <path d={svgPaths.paf20d00} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p6f2600} fill="var(--fill-0, white)" id="Vector_2" />
                  <path d={svgPaths.p2c911500} fill="var(--fill-0, white)" id="Vector_3" />
                  <path d={svgPaths.p4e68600} fill="var(--fill-0, white)" id="Vector_4" />
                  <path d={svgPaths.p373c6600} fill="var(--fill-0, white)" id="Vector_5" />
                </g>
              </svg>
            </div>
          </div>
        </Link>

        {/* Location Icon */}
        <button
          className="flex items-center justify-center w-[48px] h-[48px] -mr-[12px] active:bg-white/10 rounded-full transition-colors"
          aria-label="Ubicación"
        >
          <MapPin className="w-[24px] h-[24px] text-white" />
        </button>
      </div>
    </div>
  );
}
