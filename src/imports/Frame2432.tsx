import svgPaths from "./svg-gz01y6317n";

function Squares() {
  return (
    <div className="absolute inset-[20.37%]" data-name="squares">
      <div className="absolute inset-[-4.22%_-4.23%_-4.22%_-4.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7037 25.7037">
          <g id="squares">
            <path d={svgPaths.p2a920180} id="Rectangle" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
            <path d={svgPaths.p36593f00} id="Rectangle_2" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
            <path d={svgPaths.p3e76c480} id="Rectangle_3" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
            <path d={svgPaths.p37cc900} id="Rectangle_4" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconViewPhotoViewWhite() {
  return (
    <div className="absolute contents inset-[20.37%]" data-name="Icon/View/Photo-view/White">
      <Squares />
    </div>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-[20.37%]" data-name="Symbols">
      <IconViewPhotoViewWhite />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00512f] text-[28px] w-[124px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">All Farms</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Icon/photo view 2">
        <Symbols />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 tracking-[0.15px] w-[128px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#161c24] text-[16px] w-full">
        <p className="leading-[1.5]">La Esmeralda</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#637381] text-[10px] w-full">
        <p className="leading-[1.6]">Santo Domingo, Ecuador</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8052 20">
        <g id="Icon">
          <path d={svgPaths.p21547000} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p28284400} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p356b2200} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function IconEdit() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon/Edit">
      <Icon />
    </div>
  );
}

function Symbols1() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Symbols">
      <IconEdit />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.32%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.087">
        <g id="Group">
          <path d={svgPaths.p282c6580} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p182735c0} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p241d4480} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p2343ccc0} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function ManageList() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Manage-list">
      <Group />
    </div>
  );
}

function Symbols2() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Symbols">
      <ManageList />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/edit 2">
        <Symbols1 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/delate">
        <Symbols2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#c2eedc] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame1 />
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#454f5b] text-[12px] text-center tracking-[0.4px] w-[64px]">Bananas</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#454f5b] text-[12px] text-center tracking-[0.4px] whitespace-nowrap">Created 02/02/2024</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 tracking-[0.15px] w-[128px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#161c24] text-[16px] w-full">
        <p className="leading-[1.5]">Sol Naciente</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#637381] text-[10px] w-full">
        <p className="leading-[1.6]">Arequipa, Perú</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8052 20">
        <g id="Icon">
          <path d={svgPaths.p21547000} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p28284400} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p356b2200} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function IconEdit1() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon/Edit">
      <Icon1 />
    </div>
  );
}

function Symbols3() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Symbols">
      <IconEdit1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.32%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.087">
        <g id="Group">
          <path d={svgPaths.p282c6580} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p182735c0} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p241d4480} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p2343ccc0} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function ManageList1() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Manage-list">
      <Group1 />
    </div>
  );
}

function Symbols4() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Symbols">
      <ManageList1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/edit 2">
        <Symbols3 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/delate">
        <Symbols4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame5 />
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#454f5b] text-[12px] text-center tracking-[0.4px] w-[64px]">Coffee</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#454f5b] text-[12px] text-center tracking-[0.4px] whitespace-nowrap">Created 02/02/2024</p>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 tracking-[0.15px] w-[128px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#161c24] text-[16px] w-full">
        <p className="leading-[1.5]">Tierra Viva</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#637381] text-[10px] w-full">
        <p className="leading-[1.6]">Pátzcuaro, México</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8052 20">
        <g id="Icon">
          <path d={svgPaths.p21547000} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p28284400} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p356b2200} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function IconEdit2() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon/Edit">
      <Icon2 />
    </div>
  );
}

function Symbols5() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Symbols">
      <IconEdit2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.32%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.087">
        <g id="Group">
          <path d={svgPaths.p282c6580} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p182735c0} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p241d4480} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p2343ccc0} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function ManageList2() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Manage-list">
      <Group2 />
    </div>
  );
}

function Symbols6() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Symbols">
      <ManageList2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/edit 2">
        <Symbols5 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/delate">
        <Symbols6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame7 />
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#454f5b] text-[12px] text-center tracking-[0.4px] whitespace-nowrap">Baby corn</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#454f5b] text-[12px] text-center tracking-[0.4px] w-[129px]">Created 10/01/2024</p>
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
      <Frame3 />
      <Frame2 />
    </div>
  );
}