import { type ReactNode } from "react";
import { HelpCircle, LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  details?: ReactNode;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  trend?: {
    value: string;
    isPositive: boolean;
    explanation?: string;
  };
};

export function MetricCard({
  title,
  value,
  subtitle,
  details,
  icon: Icon,
  iconColor = "#00512f",
  iconBgColor = "#e8f5e9",
  trend,
}: MetricCardProps) {
  return (
    <div className="flex flex-col gap-[16px] rounded-[12px] bg-white p-[20px] shadow-[0px_0px_2px_0px_#d7d7d7] md:p-[24px]">
      <div className="flex items-center justify-between">
        <div
          className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] md:h-[56px] md:w-[56px]"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="h-[24px] w-[24px] md:h-[28px] md:w-[28px]" style={{ color: iconColor }} />
        </div>

        {trend && (
          <div className="group/badge relative">
            <button
              type="button"
              className={`flex items-center gap-[4px] rounded-[6px] px-[8px] py-[4px] text-left transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00512f]/25 ${
                trend.isPositive ? "bg-[#e8f5e9] text-[#00512f]" : "bg-[#ffebee] text-[#ef5350]"
              }`}
              aria-label={`Explicación de la variación: ${trend.value}`}
            >
              <span className="font-['Poppins:Medium',sans-serif] text-[12px] md:text-[14px]">
                {trend.isPositive ? "↑" : "↓"} {trend.value}
              </span>
              {trend.explanation && <HelpCircle className="h-[12px] w-[12px] md:h-[14px] md:w-[14px]" />}
            </button>

            {trend.explanation && (
              <div className="pointer-events-none absolute right-0 top-full z-20 mt-[8px] hidden w-[220px] rounded-[10px] border border-[#dfe3e8] bg-white p-[12px] shadow-[0px_8px_24px_rgba(22,28,36,0.12)] group-hover/badge:block group-focus-within/badge:block">
                <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#161c24]">
                  Variación del indicador
                </p>
                <p className="mt-[4px] font-['Poppins:Regular',sans-serif] text-[12px] leading-[1.5] text-[#637381]">
                  {trend.explanation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="font-['Roboto:Regular',sans-serif] text-[32px] leading-[1.2] text-[#161c24] md:text-[40px]">
          {value}
        </p>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] leading-[1.5] text-[#637381] md:text-[16px]">
          {title}
        </p>
        {subtitle && (
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] leading-[1.5] text-[#919EAB] md:text-[14px]">
            {subtitle}
          </p>
        )}
        {details}
      </div>
    </div>
  );
}
