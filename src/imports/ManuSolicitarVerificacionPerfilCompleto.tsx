function MinHeight() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Container() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#161c24] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">Farm 1</p>
      </div>
      <MinWidth />
      <div className="-translate-y-1/2 absolute overflow-clip right-0 size-[24px] top-1/2" data-name="ArrowDropDownFilled">
        <div className="absolute inset-[39.58%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #919EAB)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="absolute bg-white content-stretch flex h-[2px] items-center left-[12px] px-[4px] top-0" data-name="Label Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[12px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[12px]">Farms</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Container />
        <LabelContainer />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[12px] top-[33px]">
      <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[33px] w-[148px]" data-name="<Select>">
        <Input />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[12px] top-[33px]">
      <Group2 />
    </div>
  );
}

function MinHeight1() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth1() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight1 />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#161c24] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">{` by zone`}</p>
      </div>
      <MinWidth1 />
      <div className="-translate-y-1/2 absolute overflow-clip right-0 size-[24px] top-1/2" data-name="ArrowDropDownFilled">
        <div className="absolute inset-[39.58%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #919EAB)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[2px] items-center left-[12px] px-[4px] top-0" data-name="Label Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[12px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[12px]">Filters</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Container1 />
        <LabelContainer1 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(16.67%+42.67px)] top-[32px]">
      <div className="absolute content-stretch flex flex-col items-start left-[calc(16.67%+42.67px)] top-[32px] w-[148px]" data-name="<Select>">
        <Input1 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(16.67%+42.67px)] top-[32px]">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(83.33%+46.33px)] top-[41px]">
      <div className="absolute content-stretch flex flex-col items-start left-[calc(83.33%+46.33px)] top-[41px]" data-name="<Link>">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#fe8340] text-[14px] tracking-[0.17px] whitespace-nowrap">All Farms</p>
      </div>
    </div>
  );
}

export default function ManuSolicitarVerificacionPerfilCompleto() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] size-full" data-name="Manú/Solicitar verificación/Perfil completo">
      <Group />
      <Group1 />
      <Group4 />
    </div>
  );
}