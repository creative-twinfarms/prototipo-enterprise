import { AlertTriangle, ChevronRight } from "lucide-react";

type DeforestationAlertProps = {
  hectaresAffected: number;
  totalHectares: number;
  percentage: number;
};

export function DeforestationAlert({ 
  hectaresAffected, 
  totalHectares, 
  percentage 
}: DeforestationAlertProps) {
  const isAlert = percentage >= 80;

  if (!isAlert) {
    return (
      <div className="bg-white rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[20px] md:p-[24px] border-2 border-[#e8f5e9]">
        <div className="flex items-start gap-[16px]">
          <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[12px] bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] text-[#00512f]" />
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <h3 className="font-['Poppins:Medium',sans-serif] text-[16px] md:text-[18px] text-[#00512f] leading-[1.4]">
              Estado de Deforestación Normal
            </h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#637381] leading-[1.6]">
              {hectaresAffected} ha ({percentage.toFixed(1)}%) con deforestación detectada de {totalHectares} ha totales.
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#919EAB] leading-[1.5]">
              Los niveles están dentro de los parámetros aceptables.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ffebee] rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[20px] md:p-[24px] border-2 border-[#ef5350]">
      <div className="flex items-start gap-[16px]">
        <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[12px] bg-[#ef5350] flex items-center justify-center flex-shrink-0 animate-pulse">
          <AlertTriangle className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] text-white" />
        </div>
        <div className="flex-1 flex flex-col gap-[8px]">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#ef5350] leading-[1.4]">
            ⚠️ Alerta de Deforestación Crítica
          </h3>
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[1.6]">
            {hectaresAffected} hectáreas ({percentage.toFixed(1)}%) tienen más del 80% de deforestación detectada.
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#637381] leading-[1.5]">
            Se requiere acción inmediata. Revisa el módulo de Deforestación para más detalles.
          </p>
          <button className="mt-[8px] self-start flex items-center gap-[8px] px-[16px] py-[8px] bg-[#ef5350] text-white rounded-[8px] hover:bg-[#d32f2f] transition-colors">
            <span className="font-['Poppins:Medium',sans-serif] text-[14px]">Ver Detalles</span>
            <ChevronRight className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
