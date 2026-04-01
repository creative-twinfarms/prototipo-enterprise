import { ChevronRight, FileText, Plus } from "lucide-react";

type CertificateItem = {
  name: string;
  verified: boolean;
  expiresAt: string;
  highlighted?: boolean;
};

type CertificateSection = {
  title: string;
  items: CertificateItem[];
};

const certificateSections: CertificateSection[] = [
  {
    title: "CERTIFICADOS",
    items: [
      { name: "USDA Oganic", verified: true, expiresAt: "28/02/2023", highlighted: true },
      { name: "Food Aliance", verified: true, expiresAt: "28/02/2023" },
      { name: "Fair trade International", verified: true, expiresAt: "28/02/2023" },
      { name: "Global GAP", verified: false, expiresAt: "28/02/2023" },
      { name: "Animal Walfare", verified: false, expiresAt: "28/02/2023" },
    ],
  },
  {
    title: "FITOSANITARIOS",
    items: [
      { name: "Certificados Fitosanitarios", verified: false, expiresAt: "28/02/2023" },
    ],
  },
];

type CertificatesTabProps = {
  showAddButton?: boolean;
};

function CertificateRow({ name, verified, expiresAt, highlighted = false }: CertificateItem) {
  return (
    <div
      className={`flex w-full items-center gap-[12px] rounded-[12px] px-[16px] py-[16px] transition-colors md:px-[20px] ${
        highlighted ? "bg-[#e2f1eb]" : "bg-white hover:bg-[#fafbfc]"
      }`}
    >
      <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] bg-transparent">
        <FileText className={`h-[24px] w-[24px] ${verified ? "text-[#f2b632]" : "text-[#98a2b3]"}`} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-['Poppins:Medium',sans-serif] text-[14px] leading-[1.4] text-[#1f2937] md:text-[15px]">
          {name}
        </p>
        <p
          className={`mt-[2px] font-['Poppins:Regular',sans-serif] text-[13px] leading-[1.4] ${
            verified ? "text-[#3f855b]" : "text-[#667085]"
          }`}
        >
          {verified ? "Verificado" : "No verificado"}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-[12px] pl-[8px]">
        <p className="hidden font-['Poppins:Regular',sans-serif] text-[13px] leading-[1.4] text-[#667085] md:block">
          Expira {expiresAt}
        </p>
        <ChevronRight className="h-[18px] w-[18px] text-[#fe8340]" />
      </div>
    </div>
  );
}

export function CertificatesTab({ showAddButton = true }: CertificatesTabProps) {
  return (
    <div className="flex w-full flex-col gap-[28px]">
      {certificateSections.map((section) => (
        <section key={section.title} className="w-full">
          <h3 className="mb-[12px] font-['Poppins:SemiBold',sans-serif] text-[14px] uppercase tracking-[0.4px] text-[#2f5d42]">
            {section.title}
          </h3>

          <div className="flex flex-col gap-[4px]">
            {section.items.map((item) => (
              <CertificateRow key={`${section.title}-${item.name}`} {...item} />
            ))}
          </div>
        </section>
      ))}

      {showAddButton ? (
        <button className="inline-flex w-fit items-center gap-[8px] font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#fe8340] transition-colors hover:text-[#e67537]">
          <span>Agregar certificado</span>
          <Plus className="h-[16px] w-[16px]" />
        </button>
      ) : null}
    </div>
  );
}
