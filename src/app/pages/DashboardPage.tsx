import { useState } from "react";
import { DollarSign, Map, Package, Users } from "lucide-react";
import { CertificationStats } from "../components/dashboard/CertificationStats";
import { DeforestationAlert } from "../components/dashboard/DeforestationAlert";
import { DeforestationStats } from "../components/dashboard/DeforestationStats";
import { MetricCard } from "../components/dashboard/MetricCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { dashboardMetrics } from "../data/productoresData";

const purchasePeriods = {
  "2026": {
    label: "Año 2026",
    value: "$23M",
    trend: "+18%",
    trendExplanation:
      "Representa el crecimiento acumulado de compras en 2026 frente al mismo periodo del año anterior.",
  },
  "2026-01": {
    label: "Enero 2026",
    value: "$7.2M",
    trend: "+5%",
    trendExplanation:
      "Compara las compras registradas en enero de 2026 contra enero del año anterior.",
  },
  "2026-02": {
    label: "Febrero 2026",
    value: "$7.6M",
    trend: "+6%",
    trendExplanation:
      "Compara las compras registradas en febrero de 2026 contra febrero del año anterior.",
  },
  "2026-03": {
    label: "Marzo 2026",
    value: "$8.2M",
    trend: "+7%",
    trendExplanation:
      "Compara las compras registradas en marzo de 2026 contra marzo del año anterior.",
  },
} as const;

type PurchasePeriodKey = keyof typeof purchasePeriods;

export default function DashboardPage() {
  const {
    totalProductores,
    totalHectareas,
    toneladasCacao,
    hectareasDeforestacion,
  } = dashboardMetrics;

  const [selectedPurchasePeriod, setSelectedPurchasePeriod] = useState<PurchasePeriodKey>("2026");

  const porcentajeDeforestacion = (hectareasDeforestacion / totalHectareas) * 100;
  const purchaseMetric = purchasePeriods[selectedPurchasePeriod];

  return (
    <div className="mx-auto flex w-full flex-col gap-[20px] p-[16px] md:gap-[24px] md:p-[24px]">
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-['Roboto:Regular',sans-serif] text-[24px] leading-[1.2] text-[#00512f] md:text-[32px]">
          Panel de Control
        </h1>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#637381] md:text-[16px]">
          Analisis general de todos tus productores
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[20px] lg:grid-cols-4">
        <MetricCard
          title="Total de Productores"
          value={totalProductores}
          icon={Users}
          iconColor="#00512f"
          iconBgColor="#e8f5e9"
          trend={{
            value: "+18 este mes",
            isPositive: true,
            explanation:
              "Indica que este mes se sumaron 18 productores activos frente al cierre del mes anterior.",
          }}
        />

        <MetricCard
          title="Hectareas Sembradas"
          value={`${totalHectareas} Ha`}
          icon={Map}
          iconColor="#2196f3"
          iconBgColor="#e3f2fd"
          trend={{
            value: "+31.4 Ha",
            isPositive: true,
            explanation:
              "Muestra el aumento de superficie sembrada respecto al periodo anterior medido en hectareas.",
          }}
        />

        <MetricCard
          title="Toneladas de Cacao"
          value={`${toneladasCacao} t`}
          icon={Package}
          iconColor="#fe8340"
          iconBgColor="#fff4ed"
          trend={{
            value: "+8.3 t",
            isPositive: true,
            explanation:
              "Corresponde al incremento de producción total de cacao frente al periodo inmediatamente anterior.",
          }}
        />

        <MetricCard
          title="Compras"
          value={purchaseMetric.value}
          icon={DollarSign}
          iconColor="#9c27b0"
          iconBgColor="#f3e5f5"
          trend={{
            value: purchaseMetric.trend,
            isPositive: true,
            explanation: purchaseMetric.trendExplanation,
          }}
          details={
            <div className="mt-[8px]">
              <Select
                value={selectedPurchasePeriod}
                onValueChange={(value) => setSelectedPurchasePeriod(value as PurchasePeriodKey)}
              >
                <SelectTrigger className="h-[36px] rounded-[8px] border-[#dfe3e8] bg-[#f8fafb] text-[13px] text-[#161c24]">
                  <SelectValue placeholder="Selecciona periodo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2026">Año 2026</SelectItem>
                  <SelectItem value="2026-01">Enero 2026</SelectItem>
                  <SelectItem value="2026-02">Febrero 2026</SelectItem>
                  <SelectItem value="2026-03">Marzo 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
          }
        />
      </div>

      <DeforestationAlert
        hectaresAffected={hectareasDeforestacion}
        totalHectares={totalHectareas}
        percentage={porcentajeDeforestacion}
      />

      <div className="grid grid-cols-1 gap-[20px] md:gap-[24px] lg:grid-cols-2">
        <CertificationStats />
        <DeforestationStats />
      </div>
    </div>
  );
}
