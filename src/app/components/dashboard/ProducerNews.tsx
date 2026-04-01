import { FileText, Package, Award, MapPin, Clock } from "lucide-react";

type NewsItem = {
  id: string;
  type: "product" | "certificate" | "location" | "general";
  producerName: string;
  producerFarm: string;
  message: string;
  timestamp: string;
  timeAgo: string;
};

const newsData: NewsItem[] = [
  {
    id: "1",
    type: "product",
    producerName: "María González",
    producerFarm: "Finca Santa Rosa",
    message: "agregó un nuevo producto: Cacao Orgánico Premium",
    timestamp: "2025-03-29T14:30:00",
    timeAgo: "Hace 2 horas"
  },
  {
    id: "2",
    type: "certificate",
    producerName: "Carlos Mendoza",
    producerFarm: "Finca El Bosque",
    message: "subió certificado: Orgánico USDA 2025",
    timestamp: "2025-03-29T10:15:00",
    timeAgo: "Hace 6 horas"
  },
  {
    id: "3",
    type: "location",
    producerName: "Ana Rodríguez",
    producerFarm: "Finca Los Pinos",
    message: "actualizó coordenadas de parcela #3",
    timestamp: "2025-03-28T16:45:00",
    timeAgo: "Ayer"
  },
  {
    id: "4",
    type: "certificate",
    producerName: "Luis Pérez",
    producerFarm: "Finca La Esperanza",
    message: "renovó certificado: Rainforest Alliance",
    timestamp: "2025-03-28T09:20:00",
    timeAgo: "Hace 2 días"
  },
  {
    id: "5",
    type: "product",
    producerName: "Patricia Silva",
    producerFarm: "Finca Verde",
    message: "agregó un nuevo producto: Café Especial Lavado",
    timestamp: "2025-03-27T11:30:00",
    timeAgo: "Hace 3 días"
  }
];

function getIcon(type: NewsItem["type"]) {
  switch (type) {
    case "product":
      return Package;
    case "certificate":
      return Award;
    case "location":
      return MapPin;
    default:
      return FileText;
  }
}

function getIconColor(type: NewsItem["type"]) {
  switch (type) {
    case "product":
      return { color: "#fe8340", bg: "#fff4ed" };
    case "certificate":
      return { color: "#00512f", bg: "#e8f5e9" };
    case "location":
      return { color: "#2196f3", bg: "#e3f2fd" };
    default:
      return { color: "#637381", bg: "#f4f6f8" };
  }
}

export function ProducerNews() {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_0px_2px_0px_#d7d7d7] p-[20px] md:p-[24px] flex flex-col gap-[20px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] md:text-[20px] text-[#161c24]">
          Noticias de Productores
        </h2>
        <button className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#fe8340] hover:text-[#e67537] transition-colors">
          Ver todas
        </button>
      </div>

      {/* News Feed */}
      <div className="flex flex-col gap-[16px]">
        {newsData.map((news, index) => {
          const Icon = getIcon(news.type);
          const colors = getIconColor(news.type);
          
          return (
            <div 
              key={news.id}
              className={`flex items-start gap-[12px] md:gap-[16px] pb-[16px] ${
                index !== newsData.length - 1 ? "border-b border-[#dfe3e8]" : ""
              }`}
            >
              {/* Icon */}
              <div 
                className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.bg }}
              >
                <Icon className="w-[20px] h-[20px]" style={{ color: colors.color }} />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-[4px]">
                <div className="flex items-start justify-between gap-[8px]">
                  <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[15px] text-[#161c24] leading-[1.5]">
                    <span className="font-['Poppins:Medium',sans-serif]">{news.producerName}</span>
                    {" "}
                    <span className="text-[#637381]">{news.message}</span>
                  </p>
                </div>
                <div className="flex items-center gap-[8px] flex-wrap">
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[13px] text-[#919EAB]">
                    {news.producerFarm}
                  </p>
                  <span className="text-[#dfe3e8]">•</span>
                  <div className="flex items-center gap-[4px]">
                    <Clock className="w-[12px] h-[12px] text-[#919EAB]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] md:text-[13px] text-[#919EAB]">
                      {news.timeAgo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
