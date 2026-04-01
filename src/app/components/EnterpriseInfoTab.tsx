import type { ElementType } from "react";
import { BriefcaseBusiness, ClipboardList } from "lucide-react";

const aboutHighlights = [
  {
    title: "Familia",
    description: "3 generaciones dedicados al cultivo",
  },
  {
    title: "Experiencia",
    description: "Más de 25 años en el sector",
  },
  {
    title: "Misión",
    description: "Calidad superior y sostenibilidad",
  },
];

const processSteps = [
  {
    title: "Siembra y Plantación",
    description:
      "Selección cuidadosa de plantones certificados y preparación especializada del terreno con análisis de suelo previo.",
  },
  {
    title: "Cuidado y Mantenimiento",
    description:
      "Riego por goteo, poda especializada y fertilización orgánica siguiendo las mejores prácticas agrícolas.",
  },
  {
    title: "Cosecha y Selección",
    description:
      "Recolección manual en el punto óptimo de maduración y clasificación por calidad y tamaño.",
  },
];

type SectionHeaderProps = {
  title: string;
  description: string;
  icon: ElementType;
};

function SectionHeader({ title, description, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[20px]">
      <div className="flex items-center gap-[12px] md:gap-[16px]">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#4d855d]">
          <Icon className="h-[24px] w-[24px] text-white" />
        </div>
        <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] leading-[1.2] text-[#2f5d42] md:text-[22px]">
          {title}
        </h3>
      </div>

      <p className="font-['Poppins:Regular',sans-serif] text-[14px] leading-[1.6] text-[#3a4352] md:text-[15px]">
        {description}
      </p>
    </div>
  );
}

type DetailCardProps = {
  title: string;
  description: string;
};

function DetailCard({ title, description }: DetailCardProps) {
  return (
    <div className="rounded-[20px] border border-[#d9dfe6] bg-[#fbfcfd] px-[20px] py-[18px] md:px-[24px] md:py-[20px]">
      <p className="font-['Poppins:Medium',sans-serif] text-[16px] leading-[1.35] text-[#3f855b] md:text-[18px]">
        {title}
      </p>
      <p className="mt-[6px] font-['Poppins:Regular',sans-serif] text-[14px] leading-[1.55] text-[#4b5563] md:text-[15px]">
        {description}
      </p>
    </div>
  );
}

export function EnterpriseInfoTab() {
  return (
    <div className="flex w-full flex-col gap-[20px] md:gap-[28px]">
      <section className="rounded-[20px] border border-[#d9dfe6] bg-white px-[20px] py-[22px] md:px-[26px] md:py-[28px]">
        <SectionHeader
          title="Sobre Nosotros"
          description="En la Finca Twins Farm, somos una explotación familiar de mangos dedicada a las prácticas sostenibles y a la calidad superior. Nuestros vibrantes huertos producen una variedad de mangos exquisitos, cada uno de ellos testimonio de nuestro compromiso con la tierra y la protección del medio ambiente."
          icon={BriefcaseBusiness}
        />

        <div className="mt-[20px] grid grid-cols-1 gap-[16px] md:mt-[24px] md:grid-cols-3">
          {aboutHighlights.map((item) => (
            <DetailCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="rounded-[20px] border border-[#d9dfe6] bg-white px-[20px] py-[22px] md:px-[26px] md:py-[28px]">
        <SectionHeader
          title="Nuestros Procesos"
          description="Nuestro proceso de cultivo del mango comienza con la cuidadosa selección de plantones de alta calidad, seguida de un esmerado cuidado durante todo su crecimiento. Utilizamos métodos de cultivo ecológicos, dando prioridad a la salud del suelo y del medio ambiente circundante."
          icon={ClipboardList}
        />

        <div className="mt-[20px] flex flex-col gap-[16px] md:mt-[24px] md:gap-[20px]">
          {processSteps.map((item) => (
            <DetailCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
