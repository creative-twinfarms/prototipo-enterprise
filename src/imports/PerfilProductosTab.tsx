import clsx from "clsx";
import { useState } from "react";
import { ShoppingBasket, Info, Award, Trees, ChevronLeft, ChevronRight, Building2, Users, BarChart3, ChevronDown } from "lucide-react";
import svgPaths from "./svg-hjpn4qlg61";
import { imgGroup, imgGroup1, imgGroup2, imgTab, imgTab1, imgTab2 } from "./svg-qz2nl";
import imgPortada from "figma:asset/083482ecb3b1ddbb1ed6a6d8e5e06d5a5e6d7e22.png";
import imgAvatar from "figma:asset/19b88fb142dd349b57fb017e29ae759d0d1b7a81.png";
import imgRectangleCopy from "figma:asset/dbb08ff1b8ed201313a879ec2002ae75ab04bae3.png";
import imgRectangleCopy1 from "figma:asset/0473e595ae176d490ff920ccd2fca0ea653cf546.png";
import imgRectangleCopy2 from "figma:asset/2702084e0b90b61a4101edf4b39e49cbcb9210ef.png";
import imgRectangleCopy3 from "figma:asset/58eb8c9e1c9df950bb2a495ed112af7a0edd8cd5.png";
import imgRectangleCopy4 from "figma:asset/3163a5313e88d7a623205e41931348f7b2546abb.png";
import imgRectangleCopy5 from "figma:asset/4072896e711f1efbdad8231bfb23c25c101827c1.png";
import imgRectangleCopy6 from "figma:asset/f61d8dce3f5b66c6d9ea67e4199f567dfa043802.png";
import imgRectangleCopy7 from "figma:asset/6debc4a97b26beec9fb2552df88771fbd4064068.png";
import imgRectangleCopy8 from "figma:asset/cd37df17b991fba5409e64c3ada21b51cc7b7474.png";
import { TabButton } from "../app/components/TabButton";

function Frame448Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-[21.97%_16.67%]">
      <div className="absolute contents inset-[21.97%_16.67%]" data-name="Group">
        {children}
      </div>
    </div>
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
type Cover3Helper1Props = {
  additionalClassNames?: string;
};

function Cover3Helper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Cover3Helper1Props>) {
  return (
    <div className={clsx("absolute bg-[#fe8340] overflow-clip rounded-[16px]", additionalClassNames)}>
      <div className="absolute inset-[16.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          {children}
        </svg>
      </div>
    </div>
  );
}
type MenuSelectProps = {
  additionalClassNames?: string;
};

function MenuSelect({ children, additionalClassNames = "" }: React.PropsWithChildren<MenuSelectProps>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200 hover:bg-[#f0f4f0] hover:scale-[1.02]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-15.63%_-23.53%_-26.04%_-23.53%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20.4">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative">{children}</div>
      </div>
    </div>
  );
}
type Frame448TabTextProps = {
  text: string;
};

function Frame448TabText({ text, children }: React.PropsWithChildren<Frame448TabTextProps>) {
  return (
    <Wrapper>
      <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
        <div className="relative shrink-0" data-name="Icon">
          <div className="content-stretch flex items-start relative">{children}</div>
        </div>
        <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] tracking-[0.4px] whitespace-nowrap">{text}</p>
      </div>
    </Wrapper>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start not-italic relative shrink-0 text-center">
      <div className="flex flex-col h-[12px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#00512f] text-[12px] text-ellipsis tracking-[0.4px] w-[131px] whitespace-nowrap">
        <p className="leading-[1.66] overflow-hidden text-ellipsis">{text}</p>
      </div>
      <p className="leading-[14px] relative shrink-0 text-[#242424] text-[10px] w-[131px]">{text1}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start not-italic relative shrink-0 text-center">
      <div className="flex flex-col h-[12px] justify-center leading-[0] relative shrink-0 text-[#00512f] text-[12px] tracking-[0.4px] w-[131px]">
        <p className="leading-[1.66]">{text}</p>
      </div>
      <p className="leading-[14px] relative shrink-0 text-[#242424] text-[10px] w-[131px]">{text1}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[12px] relative w-full">
          <p className="font-['Poppins:Medium',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[#00512f] text-[14px] tracking-[0.1px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Cover3HelperProps = {
  additionalClassNames?: string;
};

function Cover3Helper({ additionalClassNames = "" }: Cover3HelperProps) {
  return (
    <div className={clsx("flex-none h-[60px] w-[240px]", additionalClassNames)}>
      <div className="backdrop-blur-[4.077px] bg-gradient-to-b from-[rgba(46,53,50,0)] opacity-50 rounded-bl-[16px] rounded-br-[16px] size-full to-[#2e3532] to-[82.203%]" data-name="Mask" />
    </div>
  );
}
type DotsHelperProps = {
  additionalClassNames?: string;
};

function DotsHelper({ additionalClassNames = "" }: DotsHelperProps) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <g filter="url(#filter0_d_2_1628)" id="Dot/Unselected">
        <path d={svgPaths.p2082fc00} stroke="var(--stroke-0, white)" strokeWidth="1.8" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4" id="filter0_d_2_1628" width="18.75" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="0.75" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_1628" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_1628" mode="normal" result="shape" />
        </filter>
      </defs>
    </Wrapper1>
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
type FrameProps = {
  className?: string;
  device?: "Desktop" | "Mobile";
  showIconRight?: boolean;
};

function Frame({ className, device = "Desktop", showIconRight = true }: FrameProps) {
  const isDesktop = device === "Desktop";
  const isMobile = device === "Mobile";
  return (
    <div className={className || `bg-[#00512f] relative ${isMobile ? "w-[375px]" : "w-[2012px]"}`}>
      <div className={`flex flex-row size-full ${isMobile ? "items-center" : "items-end"}`}>
        <div className={`content-stretch flex relative w-full ${isMobile ? "items-center overflow-clip px-[12px]" : "items-end justify-between px-[24px] py-[16px]"}`}>
          <div className={`content-stretch flex relative shrink-0 ${isMobile ? "items-center justify-center size-[48px]" : "gap-[3px] items-end"}`}>
            {isDesktop && (
              <>
                <div className="h-[38px] relative shrink-0 w-[78.924px]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.9238 38">
                    <g id="Group">
                      <path d={svgPaths.p271e4b00} fill="var(--fill-0, #F9FAFB)" id="Vector" />
                      <path d={svgPaths.p1dc79e00} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
                      <path d={svgPaths.p1e0df100} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
                    </g>
                  </svg>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <div className="col-1 h-[20.355px] ml-0 mt-0 relative row-1 w-[114.046px]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.046 20.3554">
                      <g id="Group">
                        <path d={svgPaths.pbefb200} fill="var(--fill-0, #F9FAFB)" id="Vector" />
                        <path d={svgPaths.p359b9400} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
                        <path d={svgPaths.p2f46ed00} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
                        <path d={svgPaths.p8f9270} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
                      </g>
                    </svg>
                  </div>
                  <div className="col-1 h-[8.466px] ml-[20.29px] mt-[27.34px] relative row-1 w-[73.24px]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.2404 8.46654">
                      <g id="Group">
                        <path d={svgPaths.p2df94f80} fill="var(--fill-0, #F9FAFB)" id="Vector" />
                        <path d={svgPaths.p2b2c5580} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
                        <path d={svgPaths.p145acc80} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
                        <path d={svgPaths.p18fea600} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
                        <path d={svgPaths.p12f5ab00} fill="var(--fill-0, #F9FAFB)" id="Vector_5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </>
            )}
            {isMobile && (
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ViewHeadlineFilled">
                <div className="absolute inset-[20.83%_16.67%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                    <path d={svgPaths.p37e21840} fill="var(--fill-0, #919EAB)" id="Vector" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className={`content-stretch flex items-center relative shrink-0 ${isMobile ? "flex-col h-[27.75px] justify-center w-[255px]" : "gap-[16px]"}`}>
            {isDesktop && (
              <div className="bg-[#0288d1] relative rounded-[100px] shrink-0" data-name="Avatar">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative">
                    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative shrink-0" data-name="container">
                      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[20px] text-[12px] text-center text-white">
                        <p className="leading-[18px]">A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={`relative shrink-0 ${isMobile ? "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start" : "content-stretch flex gap-[12px] items-center justify-center"}`}>
              {isDesktop && (
                <>
                  <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[1.43] not-italic relative shrink-0 text-[13px] tracking-[0.15px] whitespace-nowrap">
                    <p className="relative shrink-0 text-[#f9fafb] font-medium">Santiago Jaramillo</p>
                    <p className="relative shrink-0 text-[#c4cdd5] text-[12px]">[email del usuario]</p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[14px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M7 9.5L3.5 6L4.55 4.95L7 7.4L9.45 4.95L10.5 6L7 9.5Z" fill="#F9FAFB" />
                    </svg>
                  </div>
                </>
              )}
              {isMobile && (
                <>
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
                </>
              )}
            </div>
          </div>
          {isMobile && showIconRight && (
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <LocationOnFilled />
            </div>
          )}
          {isMobile && <div className="h-[64px] shrink-0 w-0" data-name="min-height" />}
        </div>
      </div>
    </div>
  );
}

export default function PerfilProductosTab() {
  const [activeTab, setActiveTab] = useState<"productos" | "informacion" | "certificados" | "deforestacion">("productos");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnterpriseExpanded, setIsEnterpriseExpanded] = useState(false);

  const carouselImages = [
    imgPortada,
    "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBjcm9wc3xlbnwxfHx8fDE3NzQ0ODg4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1629997390995-aeca5462dde7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBnYXJkZW4lMjBoYXJ2ZXN0fGVufDF8fHx8MTc3NDM5NzU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1720487222334-f91d9d74c852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjB0b21hdG9lc3xlbnwxfHx8fDE3NzQ0ODg2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f9fafb] relative size-full" data-name="Perfil | Productos | Tab">
      <div className="absolute h-[240px] left-[calc(25%+18px)] top-[94px] w-[1240px]" data-name="Cover/3">
        <div className="absolute contents inset-0" data-name="Cover">
          <div className="absolute inset-0 rounded-[16px]" data-name="portada">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[413.33%] left-0 max-w-none top-[-121.92%] w-full" src={carouselImages[currentImageIndex]} />
            </div>
          </div>
          <div className="absolute bg-[#242424] inset-0 opacity-9 rounded-[16px]" data-name="layer" />
        </div>
        <div className="absolute backdrop-blur-[4.077px] bg-gradient-to-b from-[rgba(46,53,50,0)] inset-[70.5%_0_0_0] opacity-50 rounded-bl-[16px] rounded-br-[16px] to-[#2e3532] to-[82.203%]" data-name="Mask" />
        
        {/* Botón flecha izquierda */}
        <button 
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 text-[#00512f]" />
        </button>
        
        {/* Botón flecha derecha */}
        <button 
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6 text-[#00512f]" />
        </button>
        
        <div className="absolute contents inset-[85%_47.04%_9%_47.04%]" data-name="Dots">
          {currentImageIndex === 0 ? (
            <Wrapper1 additionalClassNames="inset-[85%_47.04%_9%_51.94%] transition-all duration-300">
              <g filter="url(#filter0_d_2_972_0)" id="Dot/Selected">
                <ellipse cx="9.375" cy="9.45" fill="var(--fill-0, white)" rx="6.375" ry="7.2" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4" id="filter0_d_2_972_0" width="18.75" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="0.75" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_972" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_972" mode="normal" result="shape" />
                </filter>
              </defs>
            </Wrapper1>
          ) : (
            <DotsHelper additionalClassNames="inset-[85%_47.04%_9%_51.94%] transition-all duration-300" />
          )}
          
          {currentImageIndex === 1 ? (
            <Wrapper1 additionalClassNames="inset-[85%_48.67%_9%_50.3%] transition-all duration-300">
              <g filter="url(#filter0_d_2_972_1)" id="Dot/Selected">
                <ellipse cx="9.375" cy="9.45" fill="var(--fill-0, white)" rx="6.375" ry="7.2" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4" id="filter0_d_2_972_1" width="18.75" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="0.75" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_972" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_972" mode="normal" result="shape" />
                </filter>
              </defs>
            </Wrapper1>
          ) : (
            <DotsHelper additionalClassNames="inset-[85%_48.67%_9%_50.3%] transition-all duration-300" />
          )}
          
          {currentImageIndex === 2 ? (
            <Wrapper1 additionalClassNames="inset-[85%_50.3%_9%_48.67%] transition-all duration-300">
              <g filter="url(#filter0_d_2_972_2)" id="Dot/Selected">
                <ellipse cx="9.375" cy="9.45" fill="var(--fill-0, white)" rx="6.375" ry="7.2" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4" id="filter0_d_2_972_2" width="18.75" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="0.75" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_972" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_972" mode="normal" result="shape" />
                </filter>
              </defs>
            </Wrapper1>
          ) : (
            <DotsHelper additionalClassNames="inset-[85%_50.3%_9%_48.67%] transition-all duration-300" />
          )}
          
          {currentImageIndex === 3 ? (
            <Wrapper1 additionalClassNames="inset-[85%_51.94%_9%_47.04%] transition-all duration-300">
              <g filter="url(#filter0_d_2_972_3)" id="Dot/Selected">
                <ellipse cx="9.375" cy="9.45" fill="var(--fill-0, white)" rx="6.375" ry="7.2" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4" id="filter0_d_2_972_3" width="18.75" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="0.75" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_972" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_972" mode="normal" result="shape" />
                </filter>
              </defs>
            </Wrapper1>
          ) : (
            <DotsHelper additionalClassNames="inset-[85%_51.94%_9%_47.04%] transition-all duration-300" />
          )}
        </div>
        <div className="absolute left-[10px] rounded-[1000px] size-[126px] top-[195px]" data-name="<Avatar>">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1000px] size-full" src={imgAvatar} />
          <div aria-hidden="true" className="absolute border-[#f9fafb] border-[2.625px] border-solid inset-0 pointer-events-none rounded-[1000px]" />
          <div className="flex flex-col items-end justify-end size-full">
            <div className="content-stretch flex flex-col items-end justify-end size-full" />
          </div>
        </div>
        <Cover3Helper1 additionalClassNames="inset-[44%_96.13%_46%_1.94%]">
          <path d={svgPaths.pd1b3d80} fill="var(--fill-0, #F9FAFB)" id="Vector" />
        </Cover3Helper1>
        <Cover3Helper1 additionalClassNames="inset-[44%_1.94%_46%_96.13%]">
          <path d={svgPaths.p14168ea0} fill="var(--fill-0, #F9FAFB)" id="Vector" />
        </Cover3Helper1>
      </div>
      <div className="absolute content-stretch flex gap-[771px] items-center left-[calc(33.33%+4px)] top-[350px]">
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap">
          <p className="font-['Poppins:Bold',sans-serif] leading-[1.334] relative shrink-0 text-[#00512f] text-[24px]">Twins Farm</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#242424] text-[16px] tracking-[0.15px]">Santiago Jaramillo</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-[calc(25%+18px)] overflow-clip pb-[16px] px-[24px] rounded-[12px] shadow-[0px_0px_2px_2px_#d7d7d7] top-[446px] w-[1240px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full py-[8px]">
          <div aria-hidden="true" className="absolute border-[#dfe3e8] border-b border-solid inset-0 pointer-events-none" />
          
          <TabButton
            isActive={activeTab === "productos"}
            icon={<ShoppingBasket className="w-[24px] h-[24px]" />}
            label="Productos"
            onClick={() => setActiveTab("productos")}
          />
          
          <TabButton
            isActive={activeTab === "informacion"}
            icon={<Info className="w-[24px] h-[24px]" />}
            label="Información"
            onClick={() => setActiveTab("informacion")}
          />
          
          <TabButton
            isActive={activeTab === "certificados"}
            icon={<Award className="w-[24px] h-[24px]" />}
            label="Certificados"
            onClick={() => setActiveTab("certificados")}
          />
          
          <TabButton
            isActive={activeTab === "deforestacion"}
            icon={<Trees className="w-[24px] h-[24px]" />}
            label="Deforestación"
            onClick={() => setActiveTab("deforestacion")}
          />
        </div>
        
        {activeTab === "productos" ? (
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1192px]" data-name="ORGANIC">
            <Text text="ORGANICO" />
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy} />
                </div>
                <Helper text="Lechuga de Hoja" text1="Hortaliza" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy1} />
                </div>
                <Helper text="Frijoles Secos" text1="Legumbre" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy2} />
                </div>
                <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start not-italic relative shrink-0 text-center">
                  <div className="flex flex-col h-[11px] justify-center leading-[0] relative shrink-0 text-[#00512f] text-[12px] tracking-[0.4px] w-[131px]">
                    <p className="leading-[1.66]">Calabaza / Zapallo</p>
                  </div>
                  <p className="leading-[14px] relative shrink-0 text-[#242424] text-[10px] w-[131px]">Hortaliza</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[1192px]" data-name="ORGANIC">
            <Text text="CONVENCIONAL" />
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy3} />
                </div>
                <Helper1 text="Tomate de Invernadero" text1="Hortaliza" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy4} />
                </div>
                <Helper text="Soya (Soja) OGM" text1="Legumbre" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy5} />
                </div>
                <Helper text="Manzana" text1="Frutas" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy6} />
                </div>
                <Helper text="Patata" text1="Tubérculo" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[1192px]" data-name="ORGANIC">
            <Text text="UPCYCLED" />
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy7} />
                </div>
                <Helper text="Té de Hojas de Café" text1="Secado" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[99px] relative rounded-[16.5px] shrink-0 w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={imgRectangleCopy8} />
                </div>
                <Helper1 text="Bocadillos de Fruta Seca" text1="Deshidratación" />
              </div>
            </div>
          </div>
        </div>
        ) : activeTab === "informacion" ? (
          <div className="flex flex-col items-center justify-center w-full py-24 gap-6">
            <div className="bg-[#e8f5e9] rounded-full p-6">
              <Info className="w-16 h-16 text-[#00512f]" />
            </div>
            <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#161c24] text-center max-w-md">
              Agrega información detallada sobre tu granja para que tus clientes te conozcan mejor
            </p>
            <button className="bg-[#00512f] hover:bg-[#003d24] text-white font-['Poppins:Medium',sans-serif] text-[14px] px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              Agregar Información
            </button>
          </div>
        ) : activeTab === "certificados" ? (
          <div className="flex flex-col items-center justify-center w-full py-24 gap-6">
            <div className="bg-[#fff8e1] rounded-full p-6">
              <Award className="w-16 h-16 text-[#f57c00]" />
            </div>
            <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#161c24] text-center max-w-md">
              Muestra tus certificaciones orgánicas y de calidad para generar confianza en tus productos
            </p>
            <button className="bg-[#00512f] hover:bg-[#003d24] text-white font-['Poppins:Medium',sans-serif] text-[14px] px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              Agregar Certificados
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-24 gap-6">
            <div className="bg-[#e8f5e9] rounded-full p-6">
              <Trees className="w-16 h-16 text-[#2e7d32]" />
            </div>
            <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#161c24] text-center max-w-md">
              Comparte tu compromiso con la sostenibilidad y la prevención de la deforestación
            </p>
            <button className="bg-[#00512f] hover:bg-[#003d24] text-white font-['Poppins:Medium',sans-serif] text-[14px] px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              Agregar Información
            </button>
          </div>
        )}
      </div>
      <Frame className="absolute bg-[#00512f] left-0 top-0 w-[1920px] z-20" />
      <div className="absolute bg-white bottom-0 h-[1010px] left-0 w-[280px] z-10">
        <div className="content-stretch flex flex-col items-start justify-between px-[16px] py-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <MenuSelect additionalClassNames="bg-[#e8f5e9]">
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
            
            {/* Módulo Enterprise con submenús */}
            <div className="w-full">
              <div 
                className="relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200 hover:bg-[#f0f4f0] hover:scale-[1.02] bg-white"
                onClick={() => setIsEnterpriseExpanded(!isEnterpriseExpanded)}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full justify-between">
                    <div className="flex gap-[16px] items-center">
                      <Building2 className="w-[24px] h-[24px] text-[#919EAB]" />
                      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
                        <p className="leading-[1.43]\">Enterprise</p>
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
                  <div className="relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200 hover:bg-[#f0f4f0] hover:scale-[1.01] bg-white">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative w-full">
                        <Users className="w-[20px] h-[20px] text-[#919EAB]" />
                        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[13px] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[1.43]\">Productores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submódulo Dashboard */}
                  <div className="relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-200 hover:bg-[#f0f4f0] hover:scale-[1.01] bg-white">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative w-full">
                        <BarChart3 className="w-[20px] h-[20px] text-[#919EAB]" />
                        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[13px] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[1.43]\">Dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
          </div>
          <div className="bg-[#fe8340] cursor-pointer relative rounded-[4px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] shrink-0 transition-all duration-200 w-full hover:bg-[#ff9560] hover:shadow-[0px_4px_8px_rgba(254,131,64,0.5)] hover:scale-105 active:scale-95 active:shadow-[0px_2px_4px_rgba(0,0,0,0.3)]" data-name="<Button>">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                  <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fffaf8] text-[16px] tracking-[0.4px] whitespace-nowrap">Agregar +</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}