import clsx from "clsx";

type TabButtonProps = {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export function TabButton({ isActive, icon, label, onClick }: TabButtonProps) {
  return (
    <div className="relative flex-1 min-w-fit">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative w-full">
          <div 
            className={clsx(
              "content-stretch flex gap-[6px] items-center justify-center px-[12px] md:px-[16px] py-[9px] relative shrink-0 cursor-pointer transition-all duration-200 w-full",
              isActive ? "" : "hover:bg-gray-100 rounded-[8px]"
            )} 
            data-name="Container"
            onClick={onClick}
          >
            <div className="relative shrink-0" data-name="Icon">
              <div className={clsx(
                "content-stretch flex items-center justify-center relative transition-colors",
                isActive ? "text-[#fe8340]" : "text-[#637381]"
              )}>
                {icon}
              </div>
            </div>
            {/* Label oculto en mobile, visible en desktop */}
            <p className={clsx(
              "hidden md:block font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[0.4px] whitespace-nowrap transition-colors",
              isActive ? "text-[#fe8340]" : "text-[#637381]"
            )}>{label}</p>
            {/* Label accesible para screen readers en mobile */}
            <span className="md:hidden sr-only">{label}</span>
          </div>
          {isActive && (
            <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 2">
                  <line id="Line" stroke="var(--stroke-0, #FE8340)" strokeWidth="2" x2="151" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}