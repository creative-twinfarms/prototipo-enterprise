import { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
};

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  iconColor = "#00512f",
  iconBgColor = "#e8f5e9",
  trend
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[20px] md:p-[24px] flex flex-col gap-[16px]">
      {/* Header con Icono */}
      <div className="flex items-center justify-between">
        <div 
          className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[12px] flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" style={{ color: iconColor }} />
        </div>
        {trend && (
          <div className={`flex items-center gap-[4px] px-[8px] py-[4px] rounded-[6px] ${
            trend.isPositive ? "bg-[#e8f5e9] text-[#00512f]" : "bg-[#ffebee] text-[#ef5350]"
          }`}>
            <span className="font-['Poppins:Medium',sans-serif] text-[12px] md:text-[14px]">
              {trend.isPositive ? "↑" : "↓"} {trend.value}
            </span>
          </div>
        )}
      </div>

      {/* Métrica Principal */}
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Roboto:Regular',sans-serif] text-[32px] md:text-[40px] text-[#161c24] leading-[1.2]">
          {value}
        </p>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#637381] leading-[1.5]">
          {title}
        </p>
        {subtitle && (
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[14px] text-[#919EAB] leading-[1.5]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
