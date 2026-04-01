import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import imgMapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes from "figma:asset/dbbd19cb4316f139c3446f89b01ca684b492fecb.png";

type MapViewProps = {
  collapsible?: boolean;
};

export function MapView({ collapsible = false }: MapViewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (collapsible) {
    return (
      <div className="bg-white rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] overflow-hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-[16px] py-[12px] hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-[8px]">
            <MapPin className="w-[20px] h-[20px] text-[#00512f]" />
            <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#161c24]">
              View Satellite Map
            </p>
          </div>
          <ChevronDown 
            className={`w-[20px] h-[20px] text-[#637381] transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`} 
          />
        </button>

        {/* Map Content - Collapsible */}
        {isExpanded && (
          <div className="relative w-full h-[300px]">
            {/* Mapa de fondo */}
            <img 
              src={imgMapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes} 
              alt="Satellite map view" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlay de polígono verde translúcido */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 800">
              {/* Polígono de área de análisis */}
              <polygon
                points="100,150 400,100 450,600 200,650 50,400"
                fill="rgba(20, 72, 24, 0.15)"
                stroke="#144818"
                strokeWidth="2"
              />
              
              {/* Marcadores de deforestación */}
              <circle cx="250" cy="300" r="6" fill="#EF5350" stroke="white" strokeWidth="2" />
              <circle cx="300" cy="450" r="6" fill="#FE8340" stroke="white" strokeWidth="2" />
              <circle cx="180" cy="500" r="6" fill="#EF5350" stroke="white" strokeWidth="2" />
              <circle cx="350" cy="250" r="6" fill="#FE8340" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        )}
      </div>
    );
  }

  // Desktop: mapa normal (no collapsible)
  return (
    <div className="relative w-full h-full rounded-[8px] overflow-hidden shadow-[0px_0px_2px_0px_#d7d7d7]">
      {/* Mapa de fondo */}
      <img 
        src={imgMapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes} 
        alt="Satellite map view" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay de polígono verde translúcido */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 800">
        {/* Polígono de área de análisis */}
        <polygon
          points="100,150 400,100 450,600 200,650 50,400"
          fill="rgba(20, 72, 24, 0.15)"
          stroke="#144818"
          strokeWidth="2"
        />
        
        {/* Marcadores de deforestación */}
        <circle cx="250" cy="300" r="6" fill="#EF5350" stroke="white" strokeWidth="2" />
        <circle cx="300" cy="450" r="6" fill="#FE8340" stroke="white" strokeWidth="2" />
        <circle cx="180" cy="500" r="6" fill="#EF5350" stroke="white" strokeWidth="2" />
        <circle cx="350" cy="250" r="6" fill="#FE8340" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}