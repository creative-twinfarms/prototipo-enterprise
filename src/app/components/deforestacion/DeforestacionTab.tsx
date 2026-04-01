import { useState } from "react";
import { DonutChartCard } from "./DonutChartCard";
import { StackedBarChart } from "./StackedBarChart";
import { DeforestacionHeader } from "./DeforestacionHeader";
import { MapView } from "./MapView";
import { ViewSelector } from "./ViewSelector";
import { FarmFilters } from "./FarmFilters";

type DeforestacionTabProps = {
  farmName?: string;
};

export function DeforestacionTab({ farmName = "Twin Farms" }: DeforestacionTabProps) {
  const [selectedView, setSelectedView] = useState("individual");
  const [selectedYear, setSelectedYear] = useState(2026);
  const [timeRange, setTimeRange] = useState<"months" | "years">("months");
  const [selectedFarm, setSelectedFarm] = useState("Finca 1");
  const [selectedFilter, setSelectedFilter] = useState("Zona");

  return (
    <div className="flex flex-col gap-[16px] md:gap-[24px] w-full">
      {/* Farm Filters - Sticky en la parte superior */}
      <div className="sticky top-0 z-20 bg-white pb-[4px] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.08)]">
        <FarmFilters 
          selectedFarm={selectedFarm}
          selectedFilter={selectedFilter}
          onFarmChange={setSelectedFarm}
          onFilterChange={setSelectedFilter}
        />
      </div>

      {/* Layout de Dos Columnas - Desktop / Stack en Mobile */}
      <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] w-full md:h-[600px]">
        {/* Columna Izquierda - Mapa (Desktop) */}
        <div className="hidden md:flex md:w-[40%] flex-shrink-0">
          <MapView collapsible={false} />
        </div>

        {/* Columna Derecha - Datos con Scroll (Desktop) / Stack completo (Mobile) */}
        <div className="flex-1 flex flex-col gap-[16px] md:overflow-y-auto md:pr-[8px] md:pb-[16px] scrollbar-hide md:shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.05)] md:rounded-[8px]">
          {/* Header con filtros y acciones */}
          <DeforestacionHeader farmName={farmName} />

          {/* Selector de Vista */}
          <ViewSelector value={selectedView} onChange={setSelectedView} />

          {/* Donut Chart - Porcentaje Actual */}
          <DonutChartCard />

          {/* Stacked Bar Chart - Deforestación en el Tiempo */}
          <StackedBarChart
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
          />

          {/* Mobile: Mapa abajo (collapsible) */}
          <div className="md:hidden">
            <MapView collapsible={true} />
          </div>
        </div>
      </div>
    </div>
  );
}