import { Bell } from "lucide-react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-hjpn4qlg61";
import { productoresList } from "../data/productoresData";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const carlosMendoza = productoresList.find((producer) => producer.producerName === "Carlos Mendoza");
const anaMorales = productoresList.find((producer) => producer.producerName === "Ana Morales");
const joseRamirez = productoresList.find((producer) => producer.producerName === "Jose Ramirez");

const pendingNotifications = [
  {
    avatar: carlosMendoza?.profilePhoto,
    initials: "CM",
    title: "El productor Carlos Mendoza cargó una certificación USDA.",
    detail: "Documento recibido hoy a las 09:24.",
  },
  {
    avatar: anaMorales?.profilePhoto,
    initials: "AM",
    title: "La productora Ana Morales actualizó sus hectáreas sembradas.",
    detail: "Cambió su registro a 3.4 Ha en el perfil.",
  },
  {
    avatar: joseRamirez?.profilePhoto,
    initials: "JR",
    title: "El productor José Ramírez subió una nueva evidencia orgánica.",
    detail: "Archivo agregado en su expediente hace 15 minutos.",
  },
];

export function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 hidden h-[70px] bg-[#00512f] md:block">
      <div className="flex size-full flex-row items-end">
        <div className="relative flex w-full items-end justify-between px-[24px] py-[16px]">
          <Link
            to="/"
            className="relative flex shrink-0 items-end gap-[3px] rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
            aria-label="Ir al inicio"
          >
            <div className="relative h-[38px] w-[78.924px] shrink-0" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.9238 38">
                <g id="Group">
                  <path d={svgPaths.p271e4b00} fill="var(--fill-0, #F9FAFB)" id="Vector" />
                  <path d={svgPaths.p1dc79e00} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
                  <path d={svgPaths.p1e0df100} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
                </g>
              </svg>
            </div>
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <div className="relative col-1 row-1 ml-0 mt-0 h-[20.355px] w-[114.046px]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.046 20.3554">
                  <g id="Group">
                    <path d={svgPaths.pbefb200} fill="var(--fill-0, #F9FAFB)" id="Vector" />
                    <path d={svgPaths.p359b9400} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
                    <path d={svgPaths.p2f46ed00} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
                    <path d={svgPaths.p8f9270} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
                  </g>
                </svg>
              </div>
              <div className="relative col-1 row-1 ml-[20.29px] mt-[27.34px] h-[8.466px] w-[73.24px]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.2404 8.46654">
                  <g id="Group">
                    <path d={svgPaths.p2df94f80} fill="var(--fill-0, #F9FAFB)" id="Vector" />
                    <path d={svgPaths.p2b2c5580} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
                    <path d={svgPaths.p145acc80} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
                    <path d={svgPaths.p18fea600} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
                    <path d={svgPaths.p12f5ab00} fill="var(--fill-0, #F9FAFB)" id="Vector_5" />
                  </g>
                </svg>
              </div>
            </div>
          </Link>

          <div className="relative flex shrink-0 items-center gap-[16px]">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="relative flex h-[42px] w-[42px] items-center justify-center rounded-[999px] border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
                  aria-label="Notificaciones pendientes"
                >
                  <Bell className="h-[18px] w-[18px]" />
                  <span className="absolute right-[8px] top-[8px] h-[8px] w-[8px] rounded-full bg-[#fe8340]" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-[340px] rounded-[14px] border-[#dfe3e8] p-0">
                <div className="border-b border-[#eef2f6] px-[16px] py-[14px]">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#161c24]">
                    Notificaciones pendientes
                  </p>
                </div>
                <div className="flex flex-col">
                  {pendingNotifications.map((notification) => (
                    <div
                      key={notification.title}
                      className="flex items-start gap-[12px] border-b border-[#eef2f6] px-[16px] py-[14px] last:border-b-0"
                    >
                      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e8f5e9]">
                        {notification.avatar ? (
                          <img
                            src={notification.avatar}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#00512f]">
                            {notification.initials}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-['Poppins:Medium',sans-serif] text-[13px] leading-[1.45] text-[#161c24]">
                          {notification.title}
                        </p>
                        <p className="mt-[4px] font-['Poppins:Regular',sans-serif] text-[12px] leading-[1.5] text-[#637381]">
                          {notification.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <div className="relative flex items-center gap-[16px]">
              <div className="relative shrink-0 rounded-[100px] bg-[#0288d1]" data-name="Avatar">
                <div className="flex size-full flex-row items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="relative flex shrink-0 flex-col items-center justify-center p-[6px]" data-name="container">
                      <div className="relative flex size-[20px] shrink-0 flex-col justify-center text-center font-['Public_Sans:SemiBold',sans-serif] text-[12px] font-semibold leading-[0] text-white">
                        <p className="leading-[18px]">S</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex shrink-0 items-center justify-center gap-[12px]">
                <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap font-['Poppins:Regular',sans-serif] text-[13px] not-italic leading-[1.43] tracking-[0.15px]">
                  <div className="flex items-center gap-[8px]">
                    <p className="relative shrink-0 font-medium text-[#f9fafb]">Twins Farm</p>
                    <span className="rounded-[4px] bg-[#fe8340] px-[8px] py-[2px] font-['Poppins:SemiBold',sans-serif] text-[10px] uppercase tracking-wider text-white">
                      Enterprise
                    </span>
                  </div>
                  <p className="relative shrink-0 text-[12px] text-[#c4cdd5]">Santiago Jaramillo</p>
                </div>
                <div className="relative flex size-[14px] shrink-0 items-center justify-center">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d="M7 9.5L3.5 6L4.55 4.95L7 7.4L9.45 4.95L10.5 6L7 9.5Z" fill="#F9FAFB" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
