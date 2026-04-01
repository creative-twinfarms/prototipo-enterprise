import { useState } from "react";
import { useParams } from "react-router";
import { ShoppingBasket, Info, Award, Trees, ChevronLeft, ChevronRight } from "lucide-react";
import svgPaths from "../../imports/svg-hjpn4qlg61";
import imgPortada from "figma:asset/083482ecb3b1ddbb1ed6a6d8e5e06d5a5e6d7e22.png";
import { TabButton } from "../components/TabButton";
import { CertificatesTab } from "../components/CertificatesTab";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { DeforestacionTab } from "../components/deforestacion/DeforestacionTab";
import { EnterpriseInfoTab, type EnterpriseInfoContent } from "../components/EnterpriseInfoTab";
import { productoresData } from "../data/productoresData";
import clsx from "clsx";

type Cover3Helper1Props = {
  additionalClassNames?: string;
};

function Cover3Helper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Cover3Helper1Props>) {
  return (
    null
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

const richProducerInfoContent: Record<string, EnterpriseInfoContent> = {
  "1": {
    aboutDescription:
      "En la finca de Carlos Mendoza desarrollamos una producción agrícola diversificada enfocada en cacao de alta calidad, combinando tradición familiar con prácticas responsables de manejo del suelo, agua y biodiversidad.",
    aboutHighlights: [
      { title: "Trayectoria", description: "Más de 18 años cultivando cacao y café" },
      { title: "Enfoque", description: "Producción diversificada con manejo sostenible" },
      { title: "Compromiso", description: "Calidad constante y cuidado del territorio" },
    ],
    processDescription:
      "Nuestro modelo productivo integra una planificación técnica del cultivo, labores permanentes de mantenimiento y una cosecha cuidadosa que preserva la calidad del producto desde la finca hasta su comercialización.",
    processSteps: [
      {
        title: "Establecimiento del Cultivo",
        description:
          "Seleccionamos variedades adaptadas a la zona y preparamos el terreno con criterios de conservación y nutrición del suelo.",
      },
      {
        title: "Manejo Productivo",
        description:
          "Realizamos podas, monitoreo sanitario y fertilización planificada para mantener un desarrollo equilibrado del cultivo.",
      },
      {
        title: "Cosecha y Postcosecha",
        description:
          "Recolectamos en el punto óptimo y aplicamos procesos de selección y acondicionamiento para asegurar uniformidad y calidad.",
      },
    ],
  },
  "2": {
    aboutDescription:
      "La finca de Maria Garcia se especializa en una producción agrícola organizada y sostenible, con foco en cacao y cultivos complementarios que fortalecen la productividad del predio y la estabilidad de cada campaña.",
    aboutHighlights: [
      { title: "Experiencia", description: "Más de 15 años en gestión agrícola integral" },
      { title: "Especialidad", description: "Cacao y cultivos de apoyo de alto rendimiento" },
      { title: "Visión", description: "Eficiencia operativa con prácticas responsables" },
    ],
    processDescription:
      "Trabajamos con un esquema ordenado de siembra, seguimiento técnico y cosecha para garantizar un producto confiable, trazable y alineado con estándares de calidad del mercado.",
    processSteps: [
      {
        title: "Planificación y Siembra",
        description:
          "Organizamos calendarios productivos, selección de insumos y establecimiento de cultivos según las condiciones del terreno.",
      },
      {
        title: "Seguimiento y Cuidado",
        description:
          "Aplicamos control agronómico, riego y labores de mantenimiento para sostener la sanidad y productividad del sistema.",
      },
      {
        title: "Recolección y Clasificación",
        description:
          "Ejecutamos una cosecha ordenada y una clasificación por estado, calidad y destino comercial de cada lote.",
      },
    ],
  },
};

export default function ProductorPerfilPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"productos" | "informacion" | "certificados" | "deforestacion">("productos");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Obtener datos del productor o usar valores por defecto
  const productor = id && productoresData[id] ? productoresData[id] : {
    name: "Productor",
    location: "Ubicación",
    avatar: imgPortada,
    carouselImages: [imgPortada],
    productosOrganicos: [],
    productosConvencionales: []
  };

  const richInfoContent = id ? richProducerInfoContent[id] : undefined;
  const hasRichCertificates = id === "1" || id === "2";
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productor.carouselImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productor.carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto">
      {/* Hero Cover con Carousel y Avatar superpuesto */}
      <div className="relative w-full mb-[24px]">
        {/* Banner */}
        <div className="relative h-[240px] w-full rounded-[16px] overflow-hidden" data-name="Cover/3">
          <div className="absolute inset-0" data-name="Cover">
            <div className="absolute inset-0 rounded-[16px]" data-name="portada">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                <img alt="" className="absolute h-[413.33%] left-0 max-w-none top-[-121.92%] w-full object-cover" src={productor.carouselImages[currentImageIndex]} />
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
          
          <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex gap-[12px]" data-name="Dots">
            {productor.carouselImages.map((_, index) => (
              index === currentImageIndex ? (
                <div key={index} className="relative w-[12px] h-[12px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20.4">
                    <g filter={`url(#filter0_d_2_972_${index})`} id="Dot/Selected">
                      <ellipse cx="9.375" cy="9.45" fill="var(--fill-0, white)" rx="6.375" ry="7.2" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4" id={`filter0_d_2_972_${index}`} width="18.75" x="0" y="0">
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
                <DotsHelper key={index} additionalClassNames="w-[12px] h-[12px] transition-all duration-300" />
              )
            ))}
          </div>
          
          {/* Iconos de navegación */}
          <Cover3Helper1 additionalClassNames="absolute bottom-[48%] right-[2%] w-[24px] h-[24px]">
            <path d={svgPaths.pd1b3d80} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          </Cover3Helper1>
          <Cover3Helper1 additionalClassNames="absolute bottom-[48%] left-[2%] w-[24px] h-[24px]">
            <path d={svgPaths.p14168ea0} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          </Cover3Helper1>
        </div>
        
        {/* Avatar y Nombre - Superpuestos al banner */}
        <div className="absolute bottom-0 left-[10px] right-0 flex items-end gap-[16px] transform translate-y-1/2 mx-[0px] my-[-32px]">
          {/* Avatar */}
          <div className="relative rounded-[1000px] size-[80px] flex-shrink-0 z-10" data-name="<Avatar>">
            <ImageWithFallback alt={productor.name} className="w-full h-full object-cover pointer-events-none rounded-[1000px]" src={productor.avatar} />
            <div aria-hidden="true" className="absolute border-[#f9fafb] border-[2.625px] border-solid inset-0 pointer-events-none rounded-[1000px]" />
          </div>
          
          {/* Nombre y Ubicación */}
          <div className="flex flex-col items-start pb-[8px]">
            <p className="font-['Poppins:Bold',sans-serif] leading-[1.334] text-[#00512f] text-[20px]">{productor.name}</p>
            <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] text-[#242424] text-[16px] tracking-[0.15px]">{productor.location}</p>
          </div>
        </div>
      </div>
      
      {/* Espaciado adicional para el avatar superpuesto */}
      <div className="h-[63px]"></div>
      
      {/* Card de Contenido con Tabs */}
      <div className="bg-white flex flex-col gap-[24px] items-start overflow-clip pb-[16px] px-[24px] rounded-[12px] shadow-[0px_0px_2px_2px_#d7d7d7] w-full">
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
        <div className="flex flex-col gap-[24px] items-start w-full">
          {/* ORGANICO */}
          {productor.productosOrganicos && productor.productosOrganicos.length > 0 && (
            <div className="flex flex-col gap-[8px] items-start w-full">
              <Text text="ORGANICO" />
              <div className="flex flex-wrap gap-[16px] items-start">
                {productor.productosOrganicos.map((producto, index) => (
                  <div key={index} className="flex flex-col gap-[4px] items-start">
                    <div className="h-[99px] rounded-[16.5px] w-[131px]">
                      <img alt={producto.nombre} className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={producto.imagen} />
                    </div>
                    <Helper text={producto.nombre} text1={producto.tipo} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONVENCIONAL */}
          {productor.productosConvencionales && productor.productosConvencionales.length > 0 && (
            <div className="flex flex-col gap-[8px] items-start w-full">
              <Text text="CONVENCIONAL" />
              <div className="flex flex-wrap gap-[16px] items-start">
                {productor.productosConvencionales.map((producto, index) => (
                  <div key={index} className="flex flex-col gap-[4px] items-start">
                    <div className="h-[99px] rounded-[16.5px] w-[131px]">
                      <img alt={producto.nombre} className="max-w-none object-cover pointer-events-none rounded-[16.5px] size-full" src={producto.imagen} />
                    </div>
                    <Helper text={producto.nombre} text1={producto.tipo} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        ) : activeTab === "informacion" ? (
          richInfoContent ? (
            <EnterpriseInfoTab content={richInfoContent} />
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-24 gap-6">
              <div className="bg-[#e8f5e9] rounded-full p-6">
                <Info className="w-16 h-16 text-[#00512f]" />
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#161c24] text-center max-w-md">
                Información detallada sobre el productor y sus prácticas agrícolas
              </p>
            </div>
          )
        ) : activeTab === "certificados" ? (
          hasRichCertificates ? (
            <CertificatesTab />
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-24 gap-6">
              <div className="bg-[#fff8e1] rounded-full p-6">
                <Award className="w-16 h-16 text-[#f57c00]" />
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#161c24] text-center max-w-md">
                Certificaciones orgánicas y de calidad del productor
              </p>
            </div>
          )
        ) : (
          <DeforestacionTab />
        )}
      </div>
    </div>
  );
}
