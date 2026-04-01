import { Info, ChevronDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const deforestationData = [
  { year: "2020", noDeforestation: 76, deforestation: 24 },
  { year: "2021", noDeforestation: 79, deforestation: 21 },
  { year: "2022", noDeforestation: 74, deforestation: 26 },
  { year: "2023", noDeforestation: 71, deforestation: 29 },
  { year: "2024", noDeforestation: 68, deforestation: 32 },
  { year: "2025", noDeforestation: 72, deforestation: 28 }
];

type StackedBarChartProps = {
  selectedYear: number;
  onYearChange: (year: number) => void;
  timeRange: "months" | "years";
  onTimeRangeChange: (range: "months" | "years") => void;
};

export function StackedBarChart({
  selectedYear,
  onYearChange,
  timeRange,
  onTimeRangeChange
}: StackedBarChartProps) {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[16px] md:p-[24px]">
      {/* Header con controles */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[12px] md:gap-0 mb-[16px] md:mb-[24px]">
        {/* Título */}
        <div className="flex items-start md:items-center gap-[8px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[1.4] tracking-[0.15px]">
            Deforestación a lo largo del tiempo
          </p>
          <Info className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#FE8340] flex-shrink-0" />
        </div>

        {/* Controles */}
        <div className="flex items-center gap-[8px]">
          {/* Dropdown Año */}
          <div className="relative w-[100px] md:w-[148px]">
            <div className="absolute bg-white left-[12px] top-0 px-[4px] z-10 -translate-y-1/2">
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#161c24] leading-[12px] tracking-[0.15px]">
                Año
              </p>
            </div>
            <div className="relative border border-[rgba(0,0,0,0.23)] rounded-[12px] px-[12px] py-[6px] md:py-[8px] bg-white hover:border-[#161c24] transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[24px] tracking-[0.15px]">
                  {selectedYear}
                </p>
                <ChevronDown className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-[#919EAB]" />
              </div>
            </div>
          </div>

          {/* ButtonGroup Months/Years */}
          <div className="flex border border-[#fe8340] rounded-[4px] overflow-hidden">
            <button
              onClick={() => onTimeRangeChange("months")}
              className={`px-[12px] md:px-[16px] py-[4px] md:py-[6px] font-['Baloo:Regular',sans-serif] text-[14px] md:text-[16px] leading-[24px] tracking-[0.4px] transition-colors ${
                timeRange === "months"
                  ? "bg-[#fe8340] text-white shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]"
                  : "bg-white text-[#fe8340] hover:bg-[#fe8340]/5"
              }`}
            >
              <span className="hidden md:inline">Meses</span>
              <span className="md:hidden">M</span>
            </button>
            <div className="w-px bg-[#fe8340]" />
            <button
              onClick={() => onTimeRangeChange("years")}
              className={`px-[12px] md:px-[16px] py-[4px] md:py-[6px] font-['Baloo:Regular',sans-serif] text-[14px] md:text-[16px] leading-[24px] tracking-[0.4px] transition-colors ${
                timeRange === "years"
                  ? "bg-[#fe8340] text-white shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]"
                  : "bg-white text-[#fe8340] hover:bg-[#fe8340]/5"
              }`}
            >
              <span className="hidden md:inline">Años</span>
              <span className="md:hidden">Y</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="w-full h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={deforestationData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="0" stroke="#dde3e7" vertical={false} />
            <XAxis 
              dataKey="year" 
              tick={{ fill: "#6e7880", fontSize: 12, fontFamily: "Public_Sans:Regular, sans-serif" }}
              axisLine={{ stroke: "#c7cfd5" }}
              tickLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: "#6e7880", fontSize: 12, fontFamily: "Public_Sans:Regular, sans-serif" }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="noDeforestation" stackId="a" fill="#144818" radius={[0, 0, 0, 0]}>
              {deforestationData.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke="white" strokeWidth={1} />
              ))}
            </Bar>
            <Bar dataKey="deforestation" stackId="a" fill="#EF5350" radius={[2, 2, 0, 0]}>
              {deforestationData.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke="white" strokeWidth={1} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda */}
      <div className="flex items-center justify-center gap-[16px] md:gap-[24px] mt-[16px] md:mt-[24px]">
        <div className="flex items-center gap-[6px] md:gap-[8px]">
          <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full bg-[#144818] flex-shrink-0" />
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
            <span className="md:hidden">No Defor</span>
            <span className="hidden md:inline">No Deforestación</span>
          </p>
        </div>
        <div className="flex items-center gap-[6px] md:gap-[8px]">
          <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full bg-[#EF5350] flex-shrink-0" />
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
            <span className="md:hidden">Deforest</span>
            <span className="hidden md:inline">Deforestación</span>
          </p>
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-[16px] md:mt-[24px] pt-[16px] md:pt-[24px] border-t border-[#dfe3e8]">
        <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#637381] leading-[1.6] tracking-[0.15px] line-clamp-3 md:line-clamp-none">
          Este gráfico muestra la evolución de la deforestación en el área monitoreada a lo largo de los años. 
          Los datos reflejan el porcentaje de área sin deforestación (verde) versus el área con deforestación detectada (rojo). 
          La tendencia indica un ligero incremento en la deforestación en años recientes, lo que requiere atención y acciones preventivas.
        </p>
      </div>
    </div>
  );
}
