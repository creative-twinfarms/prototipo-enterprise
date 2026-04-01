import { Award, CheckCircle, Leaf } from "lucide-react";
import { dashboardMetrics } from "../../data/productoresData";

type CertificationItem = {
  name: string;
  count: number;
  total: number;
  color: string;
  icon: "award" | "leaf" | "check";
};

const certifications: CertificationItem[] = [
  {
    name: "Organicos",
    count: dashboardMetrics.certificacionesOrganicas,
    total: dashboardMetrics.totalProductores,
    color: "#00512f",
    icon: "leaf",
  },
  {
    name: "Certificaciones (USDA/Organic)",
    count: dashboardMetrics.certificacionesUsdaRainforest,
    total: dashboardMetrics.totalProductores,
    color: "#2196f3",
    icon: "award",
  },
  {
    name: "Buenas Practicas Agricolas (BPA)",
    count: dashboardMetrics.buenasPracticasAgricolas,
    total: dashboardMetrics.totalProductores,
    color: "#fe8340",
    icon: "check",
  },
];

function getIcon(type: "award" | "leaf" | "check") {
  switch (type) {
    case "award":
      return Award;
    case "leaf":
      return Leaf;
    case "check":
      return CheckCircle;
  }
}

export function CertificationStats() {
  const nonOrganicCount =
    dashboardMetrics.totalProductores - dashboardMetrics.certificacionesOrganicas;
  const nonOrganicPercentage = Math.round(
    (nonOrganicCount / dashboardMetrics.totalProductores) * 100,
  );

  return (
    <div className="rounded-[12px] bg-white p-[20px] shadow-[0px_0px_2px_0px_#d7d7d7] md:p-[24px]">
      <h2 className="mb-[20px] font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#161c24] md:text-[20px]">
        Certificaciones y Practicas
      </h2>

      <div className="flex flex-col gap-[16px]">
        {certifications.map((cert, index) => {
          const Icon = getIcon(cert.icon);
          const percentage = ((cert.count / cert.total) * 100).toFixed(0);

          return (
            <div
              key={index}
              className={`rounded-[12px] border-2 p-[16px] md:p-[20px] ${
                index !== certifications.length - 1 ? "mb-[4px]" : ""
              }`}
              style={{ borderColor: `${cert.color}20`, backgroundColor: `${cert.color}08` }}
            >
              <div className="mb-[12px] flex items-center justify-between gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <div
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px]"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <Icon className="h-[20px] w-[20px]" style={{ color: cert.color }} />
                  </div>
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[14px] leading-[1.4] text-[#161c24] md:text-[15px]">
                      {cert.name}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381] md:text-[13px]">
                      {cert.count} de {cert.total} productores
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className="font-['Roboto:Regular',sans-serif] text-[24px] leading-[1.2] md:text-[28px]"
                    style={{ color: cert.color }}
                  >
                    {percentage}%
                  </p>
                </div>
              </div>

              <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#f4f6f8]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ backgroundColor: cert.color, width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[20px] rounded-[8px] bg-[#f4f6f8] p-[16px]">
        <div className="flex items-center justify-between">
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381] md:text-[14px]">
            Productores No Organicos
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#161c24] md:text-[16px]">
            {nonOrganicCount} productores ({nonOrganicPercentage}%)
          </p>
        </div>
      </div>
    </div>
  );
}
