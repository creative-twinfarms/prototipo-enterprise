import { DollarSign, Map, Package, Users } from "lucide-react";
import { CertificationStats } from "../components/dashboard/CertificationStats";
import { DeforestationAlert } from "../components/dashboard/DeforestationAlert";
import { DeforestationStats } from "../components/dashboard/DeforestationStats";
import { MetricCard } from "../components/dashboard/MetricCard";
import { ProducerNews } from "../components/dashboard/ProducerNews";
import { dashboardMetrics } from "../data/productoresData";

export default function DashboardPage() {
  const {
    totalProductores,
    totalHectareas,
    comprasMes,
    toneladasCacao,
    hectareasDeforestacion,
  } = dashboardMetrics;

  const porcentajeDeforestacion = (hectareasDeforestacion / totalHectareas) * 100;

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
          subtitle="Productores activos"
          icon={Users}
          iconColor="#00512f"
          iconBgColor="#e8f5e9"
          trend={{ value: "+18 este mes", isPositive: true }}
        />

        <MetricCard
          title="Hectareas Sembradas"
          value={`${totalHectareas} ha`}
          subtitle="Area total cultivada"
          icon={Map}
          iconColor="#2196f3"
          iconBgColor="#e3f2fd"
          trend={{ value: "+31.4 ha", isPositive: true }}
        />

        <MetricCard
          title="Toneladas de Cacao"
          value={`${toneladasCacao} t`}
          subtitle="Produccion total"
          icon={Package}
          iconColor="#fe8340"
          iconBgColor="#fff4ed"
          trend={{ value: "+8.3 t", isPositive: true }}
        />

        <MetricCard
          title="Compras del Mes"
          value={`$${comprasMes.toLocaleString()}`}
          subtitle="Marzo 2026"
          icon={DollarSign}
          iconColor="#9c27b0"
          iconBgColor="#f3e5f5"
          trend={{ value: "+18%", isPositive: true }}
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

      <ProducerNews />
    </div>
  );
}
