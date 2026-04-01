import svgPaths from "./svg-cgupfyto9v";
import imgMapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes from "figma:asset/dbbd19cb4316f139c3446f89b01ca684b492fecb.png";
import { imgGroup } from "./svg-luyir";

function IconInformation() {
  return (
    <div className="absolute inset-[17.5%]" data-name="icon/information">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="icon/information">
          <path d={svgPaths.p28e19d00} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p21368a80} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p31117600} fill="var(--fill-0, #FE8340)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function IconInfo() {
  return (
    <div className="absolute contents inset-[17.5%]" data-name="Icon/Info">
      <IconInformation />
    </div>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-[17.5%]" data-name="Symbols">
      <IconInfo />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[12px] text-black tracking-[0.4px] whitespace-nowrap">Last Update: Friday, May 18, 2025</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/information">
        <Symbols />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_20.83%_16.67%_20.83%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.1667">
        <g id="Group">
          <path d={svgPaths.p1797e200} fill="var(--fill-0, #FE8340)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <div className="absolute left-[-4px] overflow-clip size-[20px] top-0" data-name="Icon Left">
        <Group />
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon />
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fe8340] text-[16px] tracking-[0.4px] whitespace-nowrap">Download</p>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <div className="absolute left-[-4px] overflow-clip size-[20px] top-0" data-name="Icon Left">
        <div className="absolute inset-[16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p2a06a700} fill="var(--fill-0, #FE8340)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon1 />
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fe8340] text-[16px] tracking-[0.4px] whitespace-nowrap">Guide</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative rounded-[4px] shrink-0" data-name="<Button>">
        <div className="content-stretch flex flex-col items-end justify-end overflow-clip px-[16px] py-[6px] relative rounded-[inherit]">
          <Base />
        </div>
        <div aria-hidden="true" className="absolute border border-[#fe8340] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="content-stretch flex flex-col items-end justify-end overflow-clip px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
        <Base1 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start shrink-0 size-[24px]" data-name="Icon" />
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] tracking-[0.4px] whitespace-nowrap">NDVI Vegetation</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[17.23%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[15.729px_15.729px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9376 22.9376">
        <g id="Group">
          <path d="M0 0H22.9376V22.9376H0V0Z" fill="var(--fill-0, #637381)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[17.23%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[17.23%]" data-name="Group">
      <ClipPathGroup />
      <div className="absolute inset-[41.67%_37.5%_39.58%_35.42%]">
        <div className="absolute inset-[-9.14%_-6.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6792 7.7625">
            <path d={svgPaths.p30852340} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
        <div className="overflow-clip relative shrink-0 size-[35px]" data-name="Icon/check btn">
          <Group1 />
        </div>
      </div>
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] tracking-[0.4px] whitespace-nowrap">Moisture</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[9px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start shrink-0 size-[24px]" data-name="Icon" />
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fe8340] text-[16px] tracking-[0.4px] whitespace-nowrap">Deforestation</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-start pb-[2px] px-[24px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="<Tab>">
            <Container />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="<Tab>">
            <Container1 />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="<Tab>">
            <Container2 />
            <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 2">
                  <line id="Line" stroke="var(--stroke-0, #FE8340)" strokeWidth="2" x2="221" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe3e8] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MinHeight() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Container3() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#161c24] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">Individual View</p>
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
        <p className="leading-[12px]">View</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Container3 />
        <LabelContainer />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="<Select>">
        <Input />
      </div>
    </div>
  );
}

function IconInformation1() {
  return (
    <div className="absolute inset-[17.5%]" data-name="icon/information">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="icon/information">
          <path d={svgPaths.p28e19d00} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p21368a80} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p31117600} fill="var(--fill-0, #FE8340)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function IconInfo1() {
  return (
    <div className="absolute contents inset-[17.5%]" data-name="Icon/Info">
      <IconInformation1 />
    </div>
  );
}

function Symbols1() {
  return (
    <div className="absolute contents inset-[17.5%]" data-name="Symbols">
      <IconInfo1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161c24] text-[16px] tracking-[0.15px] whitespace-nowrap">Current Percentage of Moisture</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/information">
        <Symbols1 />
      </div>
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center left-0 px-[24px] py-[12px] top-0 w-[418px]" data-name="Content Wrapper">
      <Frame3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-999px] relative" data-name="Container">
      <div className="absolute inset-[-0.46%_-0.5%_-0.5%_-0.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 201.923">
          <g id="Container">
            <path d={svgPaths.p3475e470} fill="var(--fill-0, #144818)" id="Ellipse" stroke="var(--stroke-0, white)" strokeWidth="2" />
            <path d={svgPaths.p30080280} fill="var(--fill-0, #EF5350)" id="Ellipse_2" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Spine() {
  return <div className="h-0 w-full" data-name="Spine" />;
}

function Component21FixedRatio() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1-fixed-ratio">
      <div className="flex h-[100px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-30 flex-none w-full">
          <Spine />
        </div>
      </div>
    </div>
  );
}

function Spine1() {
  return <div className="h-0 w-full" data-name="Spine" />;
}

function Component21FixedRatio1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1-fixed-ratio">
      <div className="flex h-[100px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-30 flex-none w-full">
          <Spine1 />
        </div>
      </div>
    </div>
  );
}

function SquareFixedRatio() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px mr-[-999px] relative" data-name="Square-fixed-ratio">
      <Component21FixedRatio />
      <Component21FixedRatio1 />
    </div>
  );
}

function ChartContainer1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pr-[999px] relative" data-name="Chart-container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container4 />
      </div>
      <SquareFixedRatio />
    </div>
  );
}

function DonutChart() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[200px]" data-name="Donut Chart">
      <ChartContainer1 />
    </div>
  );
}

function MinHeight1() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function TableHeadRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<TableHeadRow>">
      <div className="content-stretch flex items-center px-[16px] py-[6px] relative shrink-0 w-[173px]" data-name="<TableHead>">
        <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">Chart Labels</p>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">Hectares</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="<TableHead>">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">%</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
        <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
            <MinHeight1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[120px]" data-name="<Typography>">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] w-full">No deforestation</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[16px] py-[4px] relative shrink-0 w-[175px]" data-name="Cell #1">
      <div className="relative shrink-0 size-[16px]" data-name="Legend">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #144818)" id="Legend" r="8" />
        </svg>
      </div>
      <Box />
    </div>
  );
}

function Box1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">55.9 ha</p>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">55.9%</p>
      </div>
    </div>
  );
}

function MinHeight2() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function Row() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #1">
      <Cell />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <Box1 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <Box2 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
        <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
            <MinHeight2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="<Typography>">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">Deforestation</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[16px] py-[4px] relative shrink-0 w-[175px]" data-name="Cell #1">
      <div className="relative shrink-0 size-[16px]" data-name="Legend">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #EF5350)" id="Legend" r="8" />
        </svg>
      </div>
      <Box3 />
    </div>
  );
}

function Box4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">28.5 ha</p>
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
          <span className="leading-[1.43]">28.5</span>
          <span className="leading-[1.43]">%</span>
        </p>
      </div>
    </div>
  );
}

function MinHeight3() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #2">
      <Cell1 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <Box4 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <Box5 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
        <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
            <MinHeight3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Box6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="<Typography>">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">Very Poor</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-0 pl-[16px] py-[4px] relative shrink-0 w-[176px]" data-name="Cell #1">
      <div className="relative shrink-0 size-[16px]" data-name="Legend">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #8A4001)" id="Legend" r="8" />
        </svg>
      </div>
      <Box6 />
    </div>
  );
}

function Box7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['Poppins:Regular',sans-serif] leading-[2.66] not-italic relative shrink-0 text-[#637381] text-[12px] tracking-[1px] uppercase whitespace-nowrap">100 ha</p>
      </div>
    </div>
  );
}

function Box8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Box">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Variant=body2, Gutter Bottom=False">
        <p className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161c24] text-[14px] tracking-[0.17px] whitespace-nowrap">
          <span className="leading-[1.43]">05.5</span>
          <span className="leading-[1.43]">%</span>
        </p>
      </div>
    </div>
  );
}

function MinHeight4() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row #4">
      <Cell2 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Cell #3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] relative w-full">
            <Box7 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px opacity-0 relative" data-name="Cell #4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[6px] relative w-full">
            <Box8 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
        <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
            <MinHeight4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Table>">
      <TableHeadRow />
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Table />
    </div>
  );
}

function ChartContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-center min-h-px min-w-px relative" data-name="Chart Container">
      <DonutChart />
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex h-[232px] items-center justify-center left-0 px-[24px] py-[16px] top-[64px] w-[718px]">
      <ChartContainer />
    </div>
  );
}

function Component100StackedBarChart() {
  return (
    <div className="bg-white h-[477px] relative rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] shrink-0 w-full" data-name="100%Stacked bar chart">
      <ContentWrapper />
      <Frame />
    </div>
  );
}

function IconInformation2() {
  return (
    <div className="absolute inset-[17.5%]" data-name="icon/information">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6 15.6">
        <g id="icon/information">
          <path d={svgPaths.p36051000} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p1b236f00} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p29a40280} fill="var(--fill-0, #FE8340)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function IconInfo2() {
  return (
    <div className="absolute contents inset-[17.5%]" data-name="Icon/Info">
      <IconInformation2 />
    </div>
  );
}

function Symbols2() {
  return (
    <div className="absolute contents inset-[17.5%]" data-name="Symbols">
      <IconInfo2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#161c24] text-[16px] tracking-[0.15px] whitespace-nowrap">Deforestation Over Time</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/information">
        <Symbols2 />
      </div>
    </div>
  );
}

function MinHeight5() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth1() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Container5() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight5 />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#161c24] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">2026</p>
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
        <p className="leading-[12px]">Año</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Container5 />
        <LabelContainer1 />
      </div>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fffaf8] text-[16px] tracking-[0.4px] whitespace-nowrap">Months</p>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="font-['Baloo:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fe8340] text-[16px] tracking-[0.4px] whitespace-nowrap">Years</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="<Select>">
        <Input1 />
      </div>
      <div className="relative rounded-[4px] shrink-0" data-name="<ButtonGroup>">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none w-[100cqh]">
                <div className="h-0 relative w-full" data-name="Vertical">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                      <line id="Vertical" stroke="var(--stroke-0, #FE8340)" x2="36" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fe8340] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="<Button>">
            <Base2 />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none w-[100cqh]">
                <div className="h-0 relative w-full" data-name="Vertical">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                      <line id="Vertical" stroke="var(--stroke-0, #FE8340)" x2="36" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
            <Base3 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#fe8340] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function ContentWrapper1() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Content Wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Frame5 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function HLinesValues() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="h lines + values">
      <div className="content-stretch flex flex-col items-start justify-between py-[4px] relative size-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="_horizontal line">
          <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7880] text-[12px] text-right w-[32px]">
            <p className="leading-[12px]">100%</p>
          </div>
          <div className="bg-[#dde3e7] flex-[1_0_0] h-px min-h-px min-w-px" data-name="h line" />
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="_horizontal line">
          <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7880] text-[12px] text-right w-[32px]">
            <p className="leading-[12px]">75%</p>
          </div>
          <div className="bg-[#dde3e7] flex-[1_0_0] h-px min-h-px min-w-px" data-name="h line" />
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="_horizontal line">
          <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7880] text-[12px] text-right w-[32px]">
            <p className="leading-[12px]">50%</p>
          </div>
          <div className="bg-[#dde3e7] flex-[1_0_0] h-px min-h-px min-w-px" data-name="h line" />
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="_horizontal line">
          <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7880] text-[12px] text-right w-[32px]">
            <p className="leading-[12px]">25%</p>
          </div>
          <div className="bg-[#dde3e7] flex-[1_0_0] h-px min-h-px min-w-px" data-name="h line" />
        </div>
        <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="_horizontal line">
          <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7880] text-[12px] text-right w-[32px]">
            <p className="leading-[12px]">0</p>
          </div>
          <div className="bg-[#c7cfd5] flex-[1_0_0] h-px min-h-px min-w-px" data-name="h line" />
        </div>
      </div>
    </div>
  );
}

function DefaultGrid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] inset-0 items-start" data-name="default grid">
      <HLinesValues />
      <div className="relative shrink-0 w-full" data-name="_X axis values">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex font-['Public_Sans:Regular',sans-serif] font-normal gap-[20px] items-center leading-[12px] pl-[54px] relative text-[#6e7880] text-[12px] text-center w-full">
            <p className="h-[12px] relative shrink-0 w-[32px]">2014</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2015</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2016</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2017</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2018</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2019</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2020</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2021</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2022</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2023</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2024</p>
            <p className="h-[12px] relative shrink-0 w-[32px]">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="grid">
      <DefaultGrid />
      <div className="absolute content-stretch flex inset-0 items-start justify-between pb-[28px] pl-[19px] pt-[11px]" data-name="_vertical lines">
        <div className="content-stretch flex h-full items-start justify-center px-[29px] relative shrink-0" data-name="_vertical line">
          <div className="bg-[#dde3e7] h-full shrink-0 w-px" data-name="v line" />
        </div>
        <div className="content-stretch flex h-full items-start justify-center px-[29px] shrink-0 w-[59px]" data-name="_vertical line" />
        <div className="content-stretch flex h-full items-start justify-center px-[29px] relative shrink-0" data-name="_vertical line">
          <div className="bg-[#dde3e7] h-full shrink-0 w-px" data-name="v line" />
        </div>
        <div className="content-stretch flex h-full items-start justify-center px-[29px] relative shrink-0" data-name="_vertical line">
          <div className="bg-[#dde3e7] h-full shrink-0 w-px" data-name="v line" />
        </div>
      </div>
    </div>
  );
}

function ChartGrid() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[2px_0_0_0] items-start justify-center" data-name="Chart grid">
      <Grid />
    </div>
  );
}

function StackedBarChartItem() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[53px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[53px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[73px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[73px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[53px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[120px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[87px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[87px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[57px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[37px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[61px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChartItem11() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Stacked bar chart - item">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative size-full">
          <div className="bg-[#144818] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="bar">
            <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="bg-[#ef5350] h-[22px] relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="bar">
                <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedBarChart() {
  return (
    <div className="absolute content-stretch flex gap-[2px] inset-[12px_0_28px_48px] items-end" data-name="Stacked bar chart">
      <StackedBarChartItem />
      <StackedBarChartItem1 />
      <StackedBarChartItem2 />
      <StackedBarChartItem3 />
      <StackedBarChartItem4 />
      <StackedBarChartItem5 />
      <StackedBarChartItem6 />
      <StackedBarChartItem7 />
      <StackedBarChartItem8 />
      <StackedBarChartItem9 />
      <StackedBarChartItem10 />
      <StackedBarChartItem11 />
    </div>
  );
}

function BarChartGrid() {
  return (
    <div className="h-[242px] relative shrink-0 w-full" data-name="Bar chart + grid">
      <ChartGrid />
      <StackedBarChart />
    </div>
  );
}

function LegendItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend Item">
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #144818)" id="Ellipse 21" r="8" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#404040] text-[12px] tracking-[0.4px] whitespace-nowrap">No Deforestation</p>
    </div>
  );
}

function LegendItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend Item">
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #EF5350)" id="Ellipse 21" r="8" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#404040] text-[12px] tracking-[0.4px] whitespace-nowrap">Deforestation</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Legend">
      <LegendItem />
      <LegendItem1 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[16px] relative w-full">
        <BarChartGrid />
        <Legend />
      </div>
    </div>
  );
}

function Component100StackedBarChart1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shadow-[0px_0px_2px_0px_#d7d7d7] shrink-0 w-full" data-name="100%Stacked bar chart">
      <ContentWrapper1 />
      <Content />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Component100StackedBarChart />
      <Component100StackedBarChart1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-[800px] pb-[24px] pt-[30px] px-[24px] rounded-[24px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] top-0 w-[766px]">
      <Frame6 />
      <Frame2 />
      <Frame9 />
      <Frame1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.66] not-italic relative shrink-0 text-[#919eab] text-[12px] tracking-[0.4px] w-[718px]">{`Lorem ipsum dolor sit amet consectetur. Ut urna tortor aenean ipsum blandit. Elit consequat faucibus donec turpis vitae. Nisi volutpat montes ac ipsum proin mattis etiam sem. `}</p>
    </div>
  );
}

function MapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes() {
  return (
    <div className="absolute h-[1060px] left-0 rounded-[12px] top-[134px] w-[786px]" data-name="map of a part of eeuu, mostly farms and rural are, roads tivers and lakes">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#c4c4c4] inset-0 rounded-[12px]" />
        <img alt="" className="absolute backdrop-blur-[2px] max-w-none object-cover rounded-[12px] size-full" src={imgMapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes} />
      </div>
    </div>
  );
}

function MinHeight6() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth2() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Container6() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight6 />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#161c24] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">Farm 1</p>
      </div>
      <MinWidth2 />
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

function LabelContainer2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[2px] items-center left-[12px] px-[4px] top-0" data-name="Label Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[12px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[12px]">Farms</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Container6 />
        <LabelContainer2 />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[12px] top-[33px]">
      <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[33px] w-[148px]" data-name="<Select>">
        <Input2 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[12px] top-[33px]">
      <Group5 />
    </div>
  );
}

function MinHeight7() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth3() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Container7() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight7 />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#161c24] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">{` by zone`}</p>
      </div>
      <MinWidth3 />
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

function LabelContainer3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[2px] items-center left-[12px] px-[4px] top-0" data-name="Label Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161c24] text-[12px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[12px]">Filters</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Container7 />
        <LabelContainer3 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(16.67%+42.67px)] top-[32px]">
      <div className="absolute content-stretch flex flex-col items-start left-[calc(16.67%+42.67px)] top-[32px] w-[148px]" data-name="<Select>">
        <Input3 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(16.67%+42.67px)] top-[32px]">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(83.33%+46.33px)] top-[41px]">
      <div className="absolute content-stretch flex flex-col items-start left-[calc(83.33%+46.33px)] top-[41px]" data-name="<Link>">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.43] not-italic relative shrink-0 text-[#fe8340] text-[14px] tracking-[0.17px] whitespace-nowrap">All Farms</p>
      </div>
    </div>
  );
}

function ManuSolicitarVerificacionPerfilCompleto() {
  return (
    <div className="absolute bg-white h-[106px] left-0 rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] top-[2px] w-[788px]" data-name="Manú/Solicitar verificación/Perfil completo">
      <Group3 />
      <Group4 />
      <Group7 />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="relative size-full">
      <Frame4 />
      <MapOfAPartOfEeuuMostlyFarmsAndRuralAreRoadsTiversAndLakes />
      <ManuSolicitarVerificacionPerfilCompleto />
    </div>
  );
}