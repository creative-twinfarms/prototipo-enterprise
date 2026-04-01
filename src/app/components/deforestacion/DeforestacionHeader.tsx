import { Download, FileText, Info } from "lucide-react";
import svgPaths from "../../../imports/svg-cgupfyto9v";

type DeforestacionHeaderProps = {
  farmName: string;
};

export function DeforestacionHeader({ farmName }: DeforestacionHeaderProps) {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] px-[16px] md:px-[24px] py-[12px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-[12px] md:gap-0">
        {/* Lado izquierdo - Last Update y info */}
        <div className="flex items-center gap-[4px]">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] text-[11px] md:text-[12px] text-black tracking-[0.4px]">
            Última Actualización: <span className="hidden md:inline">Viernes, </span>18 mayo 2025
          </p>
          <div className="relative size-[18px] md:size-[20px] flex items-center justify-center flex-shrink-0">
            <Info className="w-[12px] h-[12px] md:w-[13px] md:h-[13px] text-[#FE8340]" />
          </div>
        </div>

        {/* Lado derecho - Botones */}
        <div className="flex items-center gap-[8px] w-full md:w-auto">
          {/* Botón Download */}
          <button className="flex-1 md:flex-none flex items-center justify-center gap-[8px] px-[12px] md:px-[16px] py-[6px] border border-[#fe8340] rounded-[4px] hover:bg-[#fe8340]/5 transition-colors">
            <div className="relative w-[16px] h-[20px]">
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 16 20">
                <path d={svgPaths.p1797e200} fill="#FE8340" />
              </svg>
            </div>
            <span className="font-['Baloo:Regular',sans-serif] text-[14px] md:text-[16px] text-[#fe8340] leading-[24px] tracking-[0.4px]">
              Descargar
            </span>
          </button>

          {/* Botón Guide */}
          <button className="flex-1 md:flex-none flex items-center justify-center gap-[8px] px-[8px] py-[6px] hover:bg-gray-100 rounded-[4px] transition-colors">
            <div className="relative w-[16px] h-[20px]">
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 13.3333 13.3333">
                <path clipRule="evenodd" d={svgPaths.p2a06a700} fill="#FE8340" fillRule="evenodd" />
              </svg>
            </div>
            <span className="font-['Baloo:Regular',sans-serif] text-[14px] md:text-[16px] text-[#fe8340] leading-[24px] tracking-[0.4px]">
              Guía
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}