import { AlertTriangle, CheckCircle } from "lucide-react";
import { dashboardMetrics } from "../../data/productoresData";

export function DeforestationStats() {
  const {
    totalHectareas,
    hectareasDeforestacion,
    totalProductores,
    productoresLibresDeforestacion,
    productoresConDeforestacion,
  } = dashboardMetrics;

  const hectareasLibres = totalHectareas - hectareasDeforestacion;
  const porcentajeDeforestado = ((hectareasDeforestacion / totalHectareas) * 100).toFixed(1);
  const porcentajeLibre = ((hectareasLibres / totalHectareas) * 100).toFixed(1);

  return (
    <div className="rounded-[12px] bg-white p-[20px] shadow-[0px_0px_2px_0px_#d7d7d7] md:p-[24px]">
      <h2 className="mb-[20px] font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#161c24] md:text-[20px]">
        Analisis de Deforestacion
      </h2>

      <div className="mb-[24px]">
        <div className="mb-[12px] flex items-center justify-between">
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#161c24] md:text-[15px]">
            Hectareas Totales vs Deforestadas
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381]">
            {totalHectareas} Ha totales
          </p>
        </div>

        <div className="flex h-[12px] w-full overflow-hidden rounded-full bg-[#e8f5e9]">
          <div className="h-full bg-[#00512f]" style={{ width: `${porcentajeLibre}%` }} />
          <div className="h-full bg-[#ef5350]" style={{ width: `${porcentajeDeforestado}%` }} />
        </div>

        <div className="mt-[12px] flex flex-wrap items-center gap-[16px]">
          <div className="flex items-center gap-[6px]">
            <div className="h-[12px] w-[12px] rounded-full bg-[#00512f]" />
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381] md:text-[13px]">
              Libres: {hectareasLibres} Ha ({porcentajeLibre}%)
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="h-[12px] w-[12px] rounded-full bg-[#ef5350]" />
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381] md:text-[13px]">
              Deforestadas: {hectareasDeforestacion} Ha ({porcentajeDeforestado}%)
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
        <div className="rounded-[12px] border-2 border-[#00512f20] bg-[#e8f5e9] p-[16px]">
          <div className="mb-[8px] flex items-center gap-[12px]">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-[#00512f20]">
              <CheckCircle className="h-[18px] w-[18px] text-[#00512f]" />
            </div>
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[24px] leading-[1.2] text-[#00512f]">
                {productoresLibresDeforestacion}
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381]">
                productores de {totalProductores}
              </p>
            </div>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#00512f]">
            Libres de Deforestacion
          </p>
        </div>

        <div className="rounded-[12px] border-2 border-[#ef535020] bg-[#ffebee] p-[16px]">
          <div className="mb-[8px] flex items-center gap-[12px]">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-[#ef535020]">
              <AlertTriangle className="h-[18px] w-[18px] text-[#ef5350]" />
            </div>
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[24px] leading-[1.2] text-[#ef5350]">
                {productoresConDeforestacion}
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381]">
                productores de {totalProductores}
              </p>
            </div>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#ef5350]">
            Con Deforestacion Detectada
          </p>
        </div>
      </div>
    </div>
  );
}
