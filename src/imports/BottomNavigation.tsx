import svgPaths from "./svg-c5psc3we6h";

function TextWrapper() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Text Wrapper">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#919eab] text-[12px] text-center tracking-[0.4px] whitespace-nowrap">Map</p>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[18.77%_16.7%]" data-name="Layer 36">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9834 14.9923">
        <g id="Layer 36">
          <path d={svgPaths.p5f53c80} fill="var(--fill-0, #919EAB)" id="Vector" />
          <path d={svgPaths.p211b4700} fill="var(--fill-0, #919EAB)" id="Vector_2" />
          <path d={svgPaths.p38392e80} fill="var(--fill-0, #919EAB)" id="Vector_3" />
          <path d={svgPaths.p30f4ba40} fill="var(--fill-0, #919EAB)" id="Vector_4" />
          <path d={svgPaths.p1150e780} fill="var(--fill-0, #919EAB)" id="Vector_5" />
          <path d={svgPaths.p8bdda00} fill="var(--fill-0, #919EAB)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Text Wrapper">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#919eab] text-[12px] text-center tracking-[0.4px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] top-[8px] w-[135.5px]">
      <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="<BottomNavigationAction>">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pb-[8px] pt-[6px] px-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LocationOnFilled">
              <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
                  <path d={svgPaths.p27e21fc0} fill="var(--fill-0, #919EAB)" id="Vector" />
                </svg>
              </div>
            </div>
            <TextWrapper />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="<BottomNavigationAction>">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pb-[8px] pt-[6px] px-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Dashboard-Graficos2">
              <Layer />
            </div>
            <TextWrapper1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconNavBarInventory() {
  return (
    <div className="absolute inset-[5.07%_16.67%]" data-name="Icon/Nav-Bar/Inventory">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21.5652">
        <g id="Icon/Nav-Bar/Inventory">
          <path d={svgPaths.p1fce20f2} fill="var(--fill-0, #919EAB)" id="Shape" />
          <path d={svgPaths.p92c0c00} fill="var(--fill-0, #919EAB)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Text Wrapper">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#919eab] text-[12px] text-center tracking-[0.4px] whitespace-nowrap">Inventario</p>
    </div>
  );
}

function IconNavBarProfile() {
  return (
    <div className="absolute inset-[15.59%_16.67%]" data-name="Icon/Nav-Bar/Profile">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.5161">
        <g id="Icon/Nav-Bar/Profile">
          <path d={svgPaths.pb393700} fill="var(--fill-0, white)" id="Path" />
          <path d={svgPaths.p708fcc0} fill="var(--fill-0, white)" id="Path_2" />
          <path d={svgPaths.p1b478cf0} fill="var(--fill-0, white)" id="Path_3" />
          <path d={svgPaths.p10cff180} fill="var(--fill-0, white)" id="Path_4" />
          <path d={svgPaths.p3cc11000} fill="var(--fill-0, white)" id="Path_5" />
        </g>
      </svg>
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Text Wrapper">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.4px] whitespace-nowrap">Perfil</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-start left-[231.5px] top-[8px] w-[135.5px]">
      <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="<BottomNavigationAction>">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pb-[8px] pt-[6px] px-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Inventory">
              <IconNavBarInventory />
            </div>
            <TextWrapper2 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="<BottomNavigationAction>">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center pb-[8px] pt-[6px] px-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Profile">
              <IconNavBarProfile />
            </div>
            <TextWrapper3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[64px]" data-name="Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="AddFilled">
            <div className="absolute inset-[20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p38adf480} fill="var(--fill-0, #FFFAF8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomNavigation() {
  return (
    <div className="bg-white relative size-full" data-name="<BottomNavigation>">
      <div className="absolute h-[80px] left-0 top-0 w-[375px]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 80">
          <path d={svgPaths.p1ecebd00} fill="var(--fill-0, #00512F)" id="Subtract" />
        </svg>
      </div>
      <Frame />
      <Frame1 />
      <div className="absolute bg-[#fe8340] content-stretch flex items-center justify-center left-[164px] overflow-clip rounded-[64px] shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] size-[48px] top-[-24px]" data-name="<Fab>">
        <Base />
      </div>
    </div>
  );
}