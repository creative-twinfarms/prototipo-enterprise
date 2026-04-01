import { ChevronDown } from "lucide-react";

type FarmFiltersProps = {
  selectedFarm?: string;
  selectedFilter?: string;
  onFarmChange?: (farm: string) => void;
  onFilterChange?: (filter: string) => void;
};

export function FarmFilters({ 
  selectedFarm = "Farm 1", 
  selectedFilter = "by zone",
  onFarmChange,
  onFilterChange 
}: FarmFiltersProps) {
  return (
    <div className="bg-white rounded-[12px] max-md:rounded-none shadow-[0px_0px_2px_0px_#d7d7d7] px-[12px] py-[16px] md:py-[20px] relative">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-[12px] md:gap-[16px]">
        {/* Dropdowns - en fila en mobile */}
        <div className="flex items-center gap-[8px] w-full md:w-auto">
          {/* Dropdown Farms */}
          <div className="flex-1 md:w-[148px]">
            <div className="relative">
              <div className="absolute bg-white left-[12px] top-0 px-[4px] z-10 -translate-y-1/2">
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#161c24] leading-[12px] tracking-[0.15px]">
                  Finca
                </p>
              </div>
              <div className="relative border border-[rgba(0,0,0,0.23)] rounded-[12px] px-[12px] py-[8px] bg-white hover:border-[#161c24] transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[24px] tracking-[0.15px]">
                    {selectedFarm}
                  </p>
                  <ChevronDown className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-[#919EAB]" />
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="flex-1 md:w-[148px]">
            <div className="relative">
              <div className="absolute bg-white left-[12px] top-0 px-[4px] z-10 -translate-y-1/2">
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#161c24] leading-[12px] tracking-[0.15px]">
                  Filtros
                </p>
              </div>
              <div className="relative border border-[rgba(0,0,0,0.23)] rounded-[12px] px-[12px] py-[8px] bg-white hover:border-[#161c24] transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#161c24] leading-[24px] tracking-[0.15px]">
                    {selectedFilter}
                  </p>
                  <ChevronDown className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-[#919EAB]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Farms Link */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#fe8340] leading-[1.43] tracking-[0.17px] hover:text-[#e67537] transition-colors">
            Todas las fincas
          </button>
        </div>
      </div>
    </div>
  );
}