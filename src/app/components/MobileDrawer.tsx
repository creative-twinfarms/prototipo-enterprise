import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Building2, Users, BarChart3, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-hjpn4qlg61";
import { imgGroup, imgGroup1, imgGroup2 } from "../../imports/svg-qz2nl";
import clsx from "clsx";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type MenuSelectProps = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function MenuSelect({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<MenuSelectProps>) {
  return (
    <div 
      className={clsx("relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200 active:bg-[#f0f4f0]", additionalClassNames)}
      onClick={onClick}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function SidebarHelper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 2.80374 2.85967" className="absolute block size-full">
      <g id="Group">
        <path d="M0 0H2.80374V2.85967H0V0Z" fill="var(--fill-0, #919EAB)" id="Vector" />
      </g>
    </svg>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-1/4 contents left-[4.12%] right-[4.11%] top-1/4">
      <div className="absolute bottom-1/4 contents left-[4.12%] right-[4.11%] top-1/4" data-name="Group">
        {children}
      </div>
    </div>
  );
}

function LocationOnFilled() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <path d={svgPaths.p27e21fc0} fill="var(--fill-0, #919EAB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEnterpriseExpanded, setIsEnterpriseExpanded] = useState(
    location.pathname.startsWith("/productores") || location.pathname === "/" || location.pathname === "/dashboard"
  );

  const isPerfilActive = location.pathname === "/perfil";
  const isProductoresActive = location.pathname.startsWith("/productores") || location.pathname === "/";
  const isDashboardActive = location.pathname === "/dashboard";

  // Prevenir scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed left-0 top-0 bottom-0 bg-white w-[280px] max-w-[85vw] z-40 overflow-y-auto shadow-2xl"
          >
            <div className="content-stretch flex flex-col items-start justify-between px-[16px] py-[24px] min-h-full">
              {/* Header con botón cerrar */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-[24px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="bg-[#0288d1] rounded-full p-[8px]">
                      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[20px] text-[12px] text-center text-white">
                        <p className="leading-[18px]">A</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <div className="flex items-center gap-[8px]">
                        <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#161c24]">Twins Farm</p>
                        <span className="bg-[#fe8340] text-white text-[9px] font-['Poppins:SemiBold',sans-serif] px-[6px] py-[2px] rounded-[4px] uppercase tracking-wider">
                          Enterprise
                        </span>
                      </div>
                      <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#637381]">Santiago Jaramillo</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center w-[40px] h-[40px] -mr-[8px] active:bg-[#f0f4f0] rounded-full transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-[24px] h-[24px] text-[#637381]" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <MenuSelect 
                    additionalClassNames={isPerfilActive ? "bg-[#e8f5e9]" : "bg-white"}
                    onClick={() => handleNavigate("/perfil")}
                  >
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Profile">
                      <div className="absolute inset-[15.59%_16.67%]" data-name="Icon/Nav-Bar/Profile">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.5161">
                          <g id="Icon/Nav-Bar/Profile">
                            <path d={svgPaths.pb393700} fill="var(--fill-0, #919EAB)" id="Path" />
                            <path d={svgPaths.p708fcc0} fill="var(--fill-0, #919EAB)" id="Path_2" />
                            <path d={svgPaths.p1b478cf0} fill="var(--fill-0, #919EAB)" id="Path_3" />
                            <path d={svgPaths.p10cff180} fill="var(--fill-0, #919EAB)" id="Path_4" />
                            <path d={svgPaths.p3cc11000} fill="var(--fill-0, #919EAB)" id="Path_5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.1px] whitespace-nowrap">
                      <p className="leading-[1.57]">Perfil</p>
                    </div>
                  </MenuSelect>

                  <MenuSelect additionalClassNames="bg-white">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Dashboard-Graficos2">
                      <div className="absolute inset-[18.77%_16.7%]" data-name="Layer 36">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9834 14.9923">
                          <g id="Layer 36">
                            <path d={svgPaths.p5f53c80} fill="var(--fill-0, #919EAB)" id="Vector" />
                            <path d={svgPaths.p211b4700} fill="var(--fill-0, #919EAB)" id="Vector_2" />
                            <path d={svgPaths.p38392e80} fill="var(--fill-0, #919EAB)" id="Vector_3" />
                            <path d={svgPaths.p30f4ba40} fill="var(--fill-0, #919EAB)" id="Vector_4" />
                            <path d={svgPaths.p1150e780} fill="var(--fill-0, #919EAB)" id="Vector_5" />
                            <path d={svgPaths.p8bdda00} fill="var(--fill-0, #919EAB)" id="Vector_6" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                      <p className="leading-[1.43]">Dashboard</p>
                    </div>
                  </MenuSelect>
                  
                  {/* Módulo Enterprise con submenús */}
                  <div className="w-full">
                    <div 
                      className="relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200 active:bg-[#f0f4f0] bg-white"
                      onClick={() => setIsEnterpriseExpanded(!isEnterpriseExpanded)}
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full justify-between">
                          <div className="flex gap-[16px] items-center">
                            <Building2 className="w-[24px] h-[24px] text-[#919EAB]" />
                            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                              <p className="leading-[1.43]">Enterprise</p>
                            </div>
                          </div>
                          <ChevronDown 
                            className={`w-[18px] h-[18px] text-[#919EAB] transition-transform duration-300 ${isEnterpriseExpanded ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Submódulos con animación */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isEnterpriseExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pl-[16px] pt-[4px] flex flex-col gap-[2px]">
                        {/* Submódulo Productores */}
                        <div 
                          className={clsx(
                            "relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200",
                            isProductoresActive ? "bg-[#e8f5e9]" : "bg-white active:bg-[#f0f4f0]"
                          )}
                          onClick={() => handleNavigate("/productores")}
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative w-full">
                              <Users className="w-[20px] h-[20px] text-[#919EAB]" />
                              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[13px] tracking-[0.15px] whitespace-nowrap">
                                <p className="leading-[1.43]">Productores</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Submódulo Dashboard */}
                        <div 
                          className={clsx(
                            "relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200",
                            isDashboardActive ? "bg-[#e8f5e9]" : "bg-white active:bg-[#f0f4f0]"
                          )}
                          onClick={() => handleNavigate("/dashboard")}
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative w-full">
                              <BarChart3 className="w-[20px] h-[20px] text-[#919EAB]" />
                              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[13px] tracking-[0.15px] whitespace-nowrap">
                                <p className="leading-[1.43]">Dashboard</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <MenuSelect additionalClassNames="bg-white">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Inventory">
                      <div className="absolute inset-[5.07%_16.67%]" data-name="Icon/Nav-Bar/Inventory">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21.5652">
                          <g id="Icon/Nav-Bar/Inventory">
                            <path d={svgPaths.p1fce20f2} fill="var(--fill-0, #919EAB)" id="Shape" />
                            <path d={svgPaths.p92c0c00} fill="var(--fill-0, #919EAB)" id="Path" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                      <p className="leading-[1.43]">Inventario</p>
                    </div>
                  </MenuSelect>

                  <MenuSelect additionalClassNames="bg-white">
                    <LocationOnFilled />
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                      <p className="leading-[1.43]">Mapa</p>
                    </div>
                  </MenuSelect>

                  <MenuSelect additionalClassNames="bg-white">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Dashboard-orders">
                      <Wrapper2>
                        <div className="absolute bottom-1/4 contents left-[4.12%] right-[4.11%] top-1/4" data-name="Group">
                          <div className="absolute bottom-[30.99%] contents left-[4.12%] right-[44.17%] top-1/4" data-name="Clip path group">
                            <div className="absolute bottom-[30.99%] left-[4.12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[12.409px_10.563px] right-[44.17%] top-1/4" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4086 10.5626">
                                <g id="Group">
                                  <path d="M0 0H12.4086V10.5626H0V0Z" fill="var(--fill-0, #919EAB)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute contents inset-[62.99%_62.89%_25.09%_25.43%]" data-name="Group">
                            <div className="absolute contents inset-[62.99%_62.89%_25.09%_25.43%]" data-name="Clip path group">
                              <div className="absolute inset-[62.99%_62.89%_25.09%_25.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[2.804px_2.86px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <SidebarHelper />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-1/4 contents left-[69.28%] right-[19.03%] top-[63.08%]" data-name="Group">
                            <div className="absolute bottom-1/4 contents left-[69.28%] right-[19.03%] top-[63.08%]" data-name="Clip path group">
                              <div className="absolute bottom-1/4 left-[69.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[2.804px_2.86px] right-[19.03%] top-[63.08%]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <SidebarHelper />
                              </div>
                            </div>
                          </div>
                          <div className="absolute contents inset-[29.98%_4.11%_30.99%_58.27%]" data-name="Group">
                            <div className="absolute contents inset-[29.98%_4.11%_30.99%_58.27%]" data-name="Clip path group">
                              <div className="absolute inset-[29.98%_4.11%_30.99%_58.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[9.028px_9.368px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.02849 9.36787">
                                  <g id="Group">
                                    <path d="M0 0H9.02849V9.36787H0V0Z" fill="var(--fill-0, #919EAB)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Wrapper2>
                    </div>
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                      <p className="leading-[1.43]">Órdenes</p>
                    </div>
                  </MenuSelect>

                  <MenuSelect additionalClassNames="bg-white">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/calculator">
                      <div className="absolute contents inset-[16.88%]" data-name="Symbols">
                        <div className="absolute inset-[16.88%]" data-name="Icon/Cash">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8985 15.8985">
                            <g id="Icon/Cash">
                              <path d={svgPaths.p3efaef10} fill="var(--fill-0, #919EAB)" id="Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                      <p className="leading-[1.43]">Precios</p>
                    </div>
                  </MenuSelect>

                  <MenuSelect additionalClassNames="bg-white">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ReceiptFilled">
                      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                          <path d={svgPaths.pe1c4640} fill="var(--fill-0, #919EAB)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                      <p className="leading-[1.43]">Noticias</p>
                    </div>
                  </MenuSelect>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="bg-[#fe8340] cursor-pointer relative rounded-[4px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] shrink-0 transition-all duration-200 w-full active:bg-[#ff9560] active:scale-95" data-name="<Button>">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fffaf8] text-[16px] tracking-[0.4px] whitespace-nowrap">Agregar +</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}