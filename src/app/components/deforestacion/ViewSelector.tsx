import { ChevronDown } from "lucide-react";

type ViewSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ViewSelector({ value, onChange }: ViewSelectorProps) {
  return (
    <div className="relative w-full">
      <div className="absolute bg-white left-[12px] top-0 px-[4px] z-10 -translate-y-1/2">
        <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#161c24] leading-[12px] tracking-[0.15px]">
          Vistas
        </p>
      </div>
      
      <div className="relative border border-[rgba(0,0,0,0.23)] rounded-[12px] px-[12px] py-[6px] md:py-[8px] bg-white hover:border-[#161c24] transition-colors cursor-pointer">
        <div className="flex items-center justify-between">
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[24px] tracking-[0.15px]">
            Vista Individual
          </p>
          <ChevronDown className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-[#919EAB]" />
        </div>
      </div>
    </div>
  );
}