import { Users, Map, DollarSign, Package } from "lucide-react";
import { MetricCard } from "../components/dashboard/MetricCard";
import { DeforestationAlert } from "../components/dashboard/DeforestationAlert";
import { ProducerNews } from "../components/dashboard/ProducerNews";
import { CertificationStats } from "../components/dashboard/CertificationStats";
import { DeforestationStats } from "../components/dashboard/DeforestationStats";

export default function DashboardPage() {
  // Datos de ejemplo - En producción vendrían de una API
  const totalProductores = 13;
  const totalHectareas = 324.5;
  const comprasMes = 45280; // en dólares
  const toneladasCacao = 156.8; // toneladas
  const hectareasDeforestacion = 28.5;
  const porcentajeDeforestacion = (hectareasDeforestacion / totalHectareas) * 100;

  // Cambiar a valores más altos para activar la alerta crítica (>80%)
  // const hectareasDeforestacion = 265;
  // const porcentajeDeforestacion = (hectareasDeforestacion / totalHectareas) * 100;

  return (
    <div className="w-full mx-auto flex flex-col gap-[20px] md:gap-[24px] p-[16px] md:p-[24px]">
      {/* Header */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-['Roboto:Regular',sans-serif] text-[24px] md:text-[32px] text-[#00512f] leading-[1.2]">
          Panel de Control
        </h1>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-[#637381]">
          Análisis general de todos tus productores
        </p>
      </div>

      {/* Métricas Principales - Grid Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px]">
        <MetricCard
          title="Total de Productores"
          value={totalProductores}
          subtitle="Productores activos"
          icon={Users}
          iconColor="#00512f"
          iconBgColor="#e8f5e9"
          trend={{
            value: "+2 este mes",
            isPositive: true
          }}
        />
        
        <MetricCard
          title="Hectáreas Sembradas"
          value={`${totalHectareas} ha`}
          subtitle="Área total cultivada"
          icon={Map}
          iconColor="#2196f3"
          iconBgColor="#e3f2fd"
          trend={{
            value: "+12.5 ha",
            isPositive: true
          }}
        />
        
        <MetricCard
          title="Toneladas de Cacao"
          value={`${toneladasCacao} t`}
          subtitle="Producción total"
          icon={Package}
          iconColor="#fe8340"
          iconBgColor="#fff4ed"
          trend={{
            value: "+8.3 t",
            isPositive: true
          }}
        />

        <MetricCard
          title="Compras del Mes"
          value={`$${comprasMes.toLocaleString()}`}
          subtitle="Marzo 2025"
          icon={DollarSign}
          iconColor="#9c27b0"
          iconBgColor="#f3e5f5"
          trend={{
            value: "+18%",
            isPositive: true
          }}
        />
      </div>

      {/* Alerta de Deforestación */}
      <DeforestationAlert
        hectaresAffected={hectareasDeforestacion}
        totalHectares={totalHectareas}
        percentage={porcentajeDeforestacion}
      />

      {/* Grid: Certificaciones y Deforestación */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[24px]">
        <CertificationStats />
        <DeforestationStats />
      </div>

      {/* Noticias de Productores */}
      <ProducerNews />
    </div>
  );
}