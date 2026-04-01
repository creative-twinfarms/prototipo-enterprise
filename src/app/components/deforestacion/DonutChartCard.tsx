import { Info } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "No Deforestación", value: 55.9, color: "#144818" },
  { name: "Deforestación", value: 28.5, color: "#EF5350" }
];

export function DonutChartCard() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[16px] md:p-[24px]">
      {/* Header */}
      <div className="flex items-start md:items-center gap-[8px] mb-[16px] md:mb-[24px]">
        <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[1.4] tracking-[0.15px]">
          Porcentaje actual de deforestación
        </p>
        <Info className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#FE8340] flex-shrink-0" />
      </div>

      {/* Donut Chart */}
      <div className="flex flex-col items-center gap-[24px] md:gap-[40px]">
        <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                stroke="white"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Table Header */}
          <div className="flex items-center border-b border-[#dfe3e8] pb-[4px]">
            <div className="flex-1 md:w-[173px] px-[8px] md:px-[16px] py-[4px] md:py-[6px]">
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] md:text-[14px] text-[#161c24] leading-[24px] tracking-[0.17px]">
                Labels
              </p>
            </div>
            <div className="w-[70px] md:flex-1 px-[8px] md:px-[16px] py-[4px] md:py-[6px]">
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] md:text-[14px] text-[#161c24] leading-[24px] tracking-[0.17px]">
                Ha
              </p>
            </div>
            <div className="w-[60px] md:flex-1 px-[8px] md:px-[16px] py-[4px] md:py-[6px]">
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] md:text-[14px] text-[#161c24] leading-[24px] tracking-[0.17px]">
                %
              </p>
            </div>
          </div>

          {/* Table Rows */}
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-b border-[#dfe3e8] transition-colors hover:bg-[#f5f5f5]"
            >
              <div className="flex-1 md:w-[173px] px-[8px] md:px-[16px] py-[4px] flex items-center gap-[4px]">
                <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
                  {item.name}
                </p>
              </div>
              <div className="w-[70px] md:flex-1 px-[8px] md:px-[16px] py-[4px] md:py-[6px]">
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
                  {item.value}
                </p>
              </div>
              <div className="w-[60px] md:flex-1 px-[8px] md:px-[16px] py-[4px] md:py-[6px]">
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
                  {((item.value / total) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ))}

          {/* Total Row (hidden but keeps structure) */}
          <div className="flex items-center border-b border-[#dfe3e8] opacity-0">
            <div className="flex-1 md:w-[173px] px-[8px] md:px-[16px] py-[4px]">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
                Total
              </p>
            </div>
            <div className="w-[70px] md:flex-1 px-[8px] md:px-[16px]">
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381] leading-[2.66] tracking-[1px] uppercase">
                100 ha
              </p>
            </div>
            <div className="w-[60px] md:flex-1 px-[8px] md:px-[16px] py-[4px] md:py-[6px]">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#161c24] leading-[1.43] tracking-[0.17px]">
                100%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
