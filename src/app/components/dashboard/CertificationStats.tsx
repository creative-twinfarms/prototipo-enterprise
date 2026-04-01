import { Award, Leaf, CheckCircle } from "lucide-react";

type CertificationItem = {
  name: string;
  count: number;
  total: number;
  color: string;
  icon: "award" | "leaf" | "check";
};

const certifications: CertificationItem[] = [
  {
    name: "Orgánicos",
    count: 8,
    total: 13,
    color: "#00512f",
    icon: "leaf"
  },
  {
    name: "Certificaciones (USDA/Rainforest)",
    count: 10,
    total: 13,
    color: "#2196f3",
    icon: "award"
  },
  {
    name: "Buenas Prácticas Agrícolas (BPA)",
    count: 11,
    total: 13,
    color: "#fe8340",
    icon: "check"
  }
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
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[20px] md:p-[24px]">
      {/* Header */}
      <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] md:text-[20px] text-[#161c24] mb-[20px]">
        Certificaciones y Prácticas
      </h2>

      {/* Stats Grid */}
      <div className="flex flex-col gap-[16px]">
        {certifications.map((cert, index) => {
          const Icon = getIcon(cert.icon);
          const percentage = ((cert.count / cert.total) * 100).toFixed(0);
          
          return (
            <div 
              key={index}
              className={`p-[16px] md:p-[20px] rounded-[12px] border-2 ${
                index !== certifications.length - 1 ? "mb-[4px]" : ""
              }`}
              style={{ borderColor: `${cert.color}20`, backgroundColor: `${cert.color}08` }}
            >
              <div className="flex items-center justify-between gap-[12px] mb-[12px]">
                <div className="flex items-center gap-[12px]">
                  <div 
                    className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <Icon className="w-[20px] h-[20px]" style={{ color: cert.color }} />
                  </div>
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[15px] text-[#161c24] leading-[1.4]">
                      {cert.name}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[13px] text-[#637381]">
                      {cert.count} de {cert.total} productores
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-['Roboto:Regular',sans-serif] text-[24px] md:text-[28px] leading-[1.2]" style={{ color: cert.color }}>
                    {percentage}%
                  </p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-[8px] bg-[#f4f6f8] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    backgroundColor: cert.color,
                    width: `${percentage}%`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-[20px] p-[16px] bg-[#f4f6f8] rounded-[8px]">
        <div className="flex items-center justify-between">
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#637381]">
            Productores No Orgánicos
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] md:text-[16px] text-[#161c24]">
            5 productores (38%)
          </p>
        </div>
      </div>
    </div>
  );
}
