import { useState } from "react";
import { ShoppingBasket, Info, Award, Trees, ChevronLeft, ChevronRight } from "lucide-react";
import svgPaths from "../../imports/svg-hjpn4qlg61";
import imgPortada from "figma:asset/083482ecb3b1ddbb1ed6a6d8e5e06d5a5e6d7e22.png";
import imgAvatar from "figma:asset/19b88fb142dd349b57fb017e29ae759d0d1b7a81.png";
import { TabButton } from "../components/TabButton";
import { DeforestacionTab } from "../components/deforestacion/DeforestacionTab";
import clsx from "clsx";

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

type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="flex flex-col font-['Poppins:Regular',sans-serif] items-start not-italic w-full">
      <div className="flex flex-col justify-center leading-[0] overflow-hidden text-[#00512f] text-[10px] md:text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap">
        <p className="leading-[1.66] overflow-hidden text-ellipsis">{text}</p>
      </div>
      <p className="leading-[14px] text-[#242424] text-[9px] md:text-[10px] truncate w-full">{text1}</p>
    </div>
  );
}

type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="flex flex-col font-['Poppins:Regular',sans-serif] items-start not-italic w-full">
      <div className="flex flex-col justify-center leading-[0] text-[#00512f] text-[10px] md:text-[12px] tracking-[0.4px]">
        <p className="leading-[1.66] truncate">{text}</p>
      </div>
      <p className="leading-[14px] text-[#242424] text-[9px] md:text-[10px] truncate w-full">{text1}</p>
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

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<"productos" | "informacion" | "certificados" | "deforestacion">("productos");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    imgPortada,
    "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBjcm9wc3xlbnwxfHx8fDE3NzQ0ODg4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1629997390995-aeca5462dde7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBnYXJkZW4lMjBoYXJ2ZXN0fGVufDF8fHx8MTc3NDM5NzU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1720487222334-f91d9d74c852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjB0b21hdG9lc3xlbnwxfHx8fDE3NzQ0ODg2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  // Imágenes de productos
  const productImages = {
    lettuce: "https://images.unsplash.com/photo-1657411657983-d035f5bae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxldHR1Y2UlMjBsZWF2ZXN8ZW58MXx8fHwxNzc0NzIzMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    beans: "https://images.unsplash.com/photo-1763368403529-0b8d9108cf9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBiZWFucyUyMGxlZ3VtZXN8ZW58MXx8fHwxNzc0NzI2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pumpkin: "https://images.unsplash.com/photo-1695362490404-cceba4247db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwc3F1YXNoJTIwdmVnZXRhYmxlfGVufDF8fHx8MTc3NDcyNjU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tomato: "https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwdG9tYXRvZXN8ZW58MXx8fHwxNzc0NzI2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    soy: "https://images.unsplash.com/photo-1719846923269-6fdf75444cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFucyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NDY5OTgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    apple: "https://images.unsplash.com/photo-1724497302427-3942dbd14fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBhcHBsZXMlMjBmcnVpdHxlbnwxfHx8fDE3NzQ2NzcxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    potato: "https://images.unsplash.com/photo-1744659751904-3b2e5c095323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG9lcyUyMGhhcnZlc3R8ZW58MXx8fHwxNzc0Njg3NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    coffeeTea: "https://images.unsplash.com/photo-1525480763055-62049f6b306d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0ZWElMjBsZWF2ZXN8ZW58MXx8fHwxNzc0NzI2NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    driedFruit: "https://images.unsplash.com/photo-1629212094136-3f113aa5382a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZydWl0JTIwc25hY2tzfGVufDF8fHx8MTc3NDcyNjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto">
      {/* Hero Cover con Carousel y Avatar superpuesto */}
      <div className="relative w-full mb-[16px] md:mb-[24px]">
        {/* Banner - FASE 1: Carousel Responsive */}
        <div className="relative h-[180px] md:h-[240px] w-full rounded-[12px] md:rounded-[16px] overflow-hidden" data-name="Cover/3">
          <div className="absolute inset-0" data-name="Cover">
            <div className="absolute inset-0 rounded-[12px] md:rounded-[16px]" data-name="portada">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px] md:rounded-[16px]">
                <img alt="" className="absolute h-full w-full object-cover" src={carouselImages[currentImageIndex]} />
              </div>
            </div>
            <div className="absolute bg-[#242424] inset-0 opacity-9 rounded-[12px] md:rounded-[16px]" data-name="layer" />
          </div>
          <div className="absolute backdrop-blur-[4.077px] bg-gradient-to-b from-[rgba(46,53,50,0)] inset-[70.5%_0_0_0] opacity-50 rounded-bl-[12px] md:rounded-bl-[16px] rounded-br-[12px] md:rounded-br-[16px] to-[#2e3532] to-[82.203%]" data-name="Mask" />
          
          {/* Botón flecha izquierda - Más pequeño en mobile */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-[#00512f]" />
          </button>
          
          {/* Botón flecha derecha - Más pequeño en mobile */}
          <button 
            onClick={handleNextImage}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-[#00512f]" />
          </button>
          
          {/* Dots - Más pequeños en mobile */}
          <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex gap-[8px] md:gap-[12px]" data-name="Dots">
            {currentImageIndex === 0 ? (
              <div className="relative w-[8px] h-[8px] md:w-[12px] md:h-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20.4">
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
                </svg>
              </div>
            ) : (
              <DotsHelper additionalClassNames="w-[8px] h-[8px] md:w-[12px] md:h-[12px] transition-all duration-300" />
            )}
            
            {currentImageIndex === 1 ? (
              <div className="relative w-[8px] h-[8px] md:w-[12px] md:h-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20.4">
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
                </svg>
              </div>
            ) : (
              <DotsHelper additionalClassNames="w-[8px] h-[8px] md:w-[12px] md:h-[12px] transition-all duration-300" />
            )}
            
            {currentImageIndex === 2 ? (
              <div className="relative w-[8px] h-[8px] md:w-[12px] md:h-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20.4">
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
                </svg>
              </div>
            ) : (
              <DotsHelper additionalClassNames="w-[8px] h-[8px] md:w-[12px] md:h-[12px] transition-all duration-300" />
            )}
            
            {currentImageIndex === 3 ? (
              <div className="relative w-[8px] h-[8px] md:w-[12px] md:h-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20.4">
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
                </svg>
              </div>
            ) : (
              <DotsHelper additionalClassNames="w-[8px] h-[8px] md:w-[12px] md:h-[12px] transition-all duration-300" />
            )}
          </div>
          
          {/* Iconos de navegación - Ocultos en mobile */}
          <Cover3Helper1 additionalClassNames="hidden md:block absolute bottom-[48%] right-[2%] w-[24px] h-[24px]">
            <path d={svgPaths.pd1b3d80} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          </Cover3Helper1>
          <Cover3Helper1 additionalClassNames="hidden md:block absolute bottom-[48%] left-[2%] w-[24px] h-[24px]">
            <path d={svgPaths.p14168ea0} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          </Cover3Helper1>
        </div>
        
        {/* Avatar y Nombre - FASE 2: Responsive */}
        <div className="absolute bottom-0 left-[8px] md:left-[10px] right-0 flex items-end gap-[12px] md:gap-[16px] transform translate-y-1/2 mx-[0px] my-[-27px]">
          {/* Avatar - Más pequeño en mobile */}
          <div className="relative rounded-full size-[80px] md:size-[126px] flex-shrink-0 z-10" data-name="<Avatar>">
            <img alt="Twin Farms Logo" className="w-full h-full object-cover pointer-events-none rounded-full" src={imgAvatar} />
            <div aria-hidden="true" className="absolute border-[#f9fafb] border-[2px] md:border-[2.625px] border-solid inset-0 pointer-events-none rounded-full" />
          </div>
          
          {/* Nombre y Título - Textos más pequeños en mobile */}
          <div className="flex flex-col items-start px-[0px] pt-[0px] pb-[16px]">
            <div className="flex items-center gap-[6px] md:gap-[8px]">
              <p className="font-['Poppins:Bold',sans-serif] leading-tight text-[#00512f] text-[18px] md:text-[24px]">Twins Farm</p>
              <span className="bg-[#fe8340] text-white text-[9px] md:text-[11px] font-['Poppins:SemiBold',sans-serif] px-[8px] md:px-[10px] py-[2px] md:py-[3px] rounded-[4px] uppercase tracking-wider">
                Enterprise
              </span>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] text-[#242424] text-[13px] md:text-[16px] tracking-[0.15px]">Santiago Jaramillo</p>
          </div>
        </div>
      </div>
      
      {/* Espaciado adicional para el avatar superpuesto - FASE 2: Responsive */}
      <div className="h-[40px] md:h-[63px] mx-[0px] my-[20px]"></div>
      
      {/* Card de Contenido con Tabs - FASE 5: Container Responsive */}
      <div className="bg-white flex flex-col gap-[16px] md:gap-[24px] items-start overflow-clip pb-[16px] px-[16px] md:px-[24px] rounded-[8px] md:rounded-[12px] shadow-[0px_0px_2px_2px_#d7d7d7] w-full">
        {/* FASE 3: Tabs Responsive - Scroll horizontal en mobile */}
        <div className="flex items-center w-full py-[8px] border-b border-[#dfe3e8] overflow-x-auto scrollbar-hide gap-[4px] md:gap-0">
          <TabButton
            isActive={activeTab === "productos"}
            icon={<ShoppingBasket className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />}
            label="Productos"
            onClick={() => setActiveTab("productos")}
          />
          
          <TabButton
            isActive={activeTab === "informacion"}
            icon={<Info className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />}
            label="Información"
            onClick={() => setActiveTab("informacion")}
          />
          
          <TabButton
            isActive={activeTab === "certificados"}
            icon={<Award className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />}
            label="Certificados"
            onClick={() => setActiveTab("certificados")}
          />
          
          <TabButton
            isActive={activeTab === "deforestacion"}
            icon={<Trees className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />}
            label="Deforestación"
            onClick={() => setActiveTab("deforestacion")}
          />
        </div>
        
        {activeTab === "productos" ? (
        <div className="flex flex-col gap-[16px] items-start w-full" data-name="ORGANIC">
          {/* ORGANICO */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <Text text="ORGANICO" />
            <div className="flex flex-wrap gap-[16px] items-start">
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.lettuce} />
                </div>
                <Helper text="Lechuga de Hoja" text1="Hortaliza" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.beans} />
                </div>
                <Helper text="Frijoles Secos" text1="Legumbre" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.pumpkin} />
                </div>
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] items-start not-italic text-center">
                  <div className="flex flex-col h-[11px] justify-center leading-[0] text-[#00512f] text-[12px] tracking-[0.4px] w-[131px]">
                    <p className="leading-[1.66]">Calabaza / Zapallo</p>
                  </div>
                  <p className="leading-[14px] text-[#242424] text-[10px] w-[131px]">Hortaliza</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CONVENCIONAL */}
          <div className="flex flex-col gap-[8px] items-start overflow-clip w-full">
            <Text text="CONVENCIONAL" />
            <div className="flex flex-wrap gap-[16px] items-start">
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.tomato} />
                </div>
                <Helper1 text="Tomate de Invernadero" text1="Hortaliza" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.soy} />
                </div>
                <Helper text="Soya (Soja) OGM" text1="Legumbre" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.apple} />
                </div>
                <Helper text="Manzana" text1="Frutas" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.potato} />
                </div>
                <Helper text="Patata" text1="Tubérculo" />
              </div>
            </div>
          </div>
          
          {/* UPCYCLED */}
          <div className="flex flex-col gap-[8px] items-start overflow-clip w-full">
            <Text text="UPCYCLED" />
            <div className="flex flex-wrap gap-[16px] items-start">
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.coffeeTea} />
                </div>
                <Helper text="Té de Hojas de Café" text1="Secado" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="h-[99px] rounded-[16.5px] w-[131px]" data-name="Rectangle Copy">
                  <img alt="" className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={productImages.driedFruit} />
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
          <DeforestacionTab />
        )}
      </div>
    </div>
  );
}