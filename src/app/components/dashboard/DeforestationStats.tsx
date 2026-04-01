import { Trees, AlertTriangle, CheckCircle } from "lucide-react";

export function DeforestationStats() {
  const totalHectares = 324.5;
  const hectareasDeforestadas = 28.5;
  const hectareasLibres = totalHectares - hectareasDeforestadas;
  const porcentajeDeforestado = ((hectareasDeforestadas / totalHectares) * 100).toFixed(1);
  const porcentajeLibre = ((hectareasLibres / totalHectares) * 100).toFixed(1);
  
  const productoresLibresDeforestacion = 10;
  const productoresConDeforestacion = 3;
  const totalProductores = 13;

  return (
    <div className="bg-white rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[20px] md:p-[24px]">
      {/* Header */}
      <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] md:text-[20px] text-[#161c24] mb-[20px]">
        Análisis de Deforestación
      </h2>

      {/* Hectáreas: Total vs Deforestadas */}
      <div className="mb-[24px]">
        <div className="flex items-center justify-between mb-[12px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[15px] text-[#161c24]">
            Hectáreas Totales vs Deforestadas
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381]">
            {totalHectares} ha totales
          </p>
        </div>

        {/* Stacked Progress Bar */}
        <div className="w-full h-[12px] bg-[#e8f5e9] rounded-full overflow-hidden flex">
          <div 
            className="h-full bg-[#00512f] transition-all duration-500"
            style={{ width: `${porcentajeLibre}%` }}
          />
          <div 
            className="h-full bg-[#ef5350] transition-all duration-500"
            style={{ width: `${porcentajeDeforestado}%` }}
          />
        </div>

        {/* Legend */}
        <div className="flex items-center gap-[16px] mt-[12px] flex-wrap">
          <div className="flex items-center gap-[6px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#00512f]" />
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[13px] text-[#637381]">
              Libres: {hectareasLibres} ha ({porcentajeLibre}%)
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#ef5350]" />
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[13px] text-[#637381]">
              Deforestadas: {hectareasDeforestadas} ha ({porcentajeDeforestado}%)
            </p>
          </div>
        </div>
      </div>

      {/* Productores por Estado de Deforestación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
        {/* Libres de Deforestación */}
        <div className="p-[16px] bg-[#e8f5e9] rounded-[12px] border-2 border-[#00512f20]">
          <div className="flex items-center gap-[12px] mb-[8px]">
            <div className="w-[36px] h-[36px] bg-[#00512f20] rounded-[8px] flex items-center justify-center">
              <CheckCircle className="w-[18px] h-[18px] text-[#00512f]" />
            </div>
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-[#00512f] leading-[1.2]">
                {productoresLibresDeforestacion}
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381]">
                de {totalProductores}
              </p>
            </div>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#00512f]">
            Libres de Deforestación
          </p>
        </div>

        {/* Con Deforestación */}
        <div className="p-[16px] bg-[#ffebee] rounded-[12px] border-2 border-[#ef535020]">
          <div className="flex items-center gap-[12px] mb-[8px]">
            <div className="w-[36px] h-[36px] bg-[#ef535020] rounded-[8px] flex items-center justify-center">
              <AlertTriangle className="w-[18px] h-[18px] text-[#ef5350]" />
            </div>
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-[#ef5350] leading-[1.2]">
                {productoresConDeforestacion}
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381]">
                de {totalProductores}
              </p>
            </div>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#ef5350]">
            Con Deforestación Detectada
          </p>
        </div>
      </div>
    </div>
  );
}
