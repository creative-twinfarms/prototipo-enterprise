import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import mapDeforestacion from "../../../assets/map-deforestacion.png";

type MapViewProps = {
  collapsible?: boolean;
};

export function MapView({ collapsible = false }: MapViewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (collapsible) {
    return (
      <div className="bg-white rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] overflow-hidden">
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

        {isExpanded && (
          <div className="relative w-full h-[300px]">
            <img
              src={mapDeforestacion}
              alt="Satellite map view"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-[8px] overflow-hidden shadow-[0px_0px_2px_0px_#d7d7d7]">
      <img
        src={mapDeforestacion}
        alt="Satellite map view"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}
