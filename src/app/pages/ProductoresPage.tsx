import { Download, Grid3X3, List, Search, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { productoresList } from "../data/productoresData";

type FarmRowProps = {
  id: number;
  producerName: string;
  farmName: string;
  location: string;
  product: string;
  hectares: number;
  profilePhoto: string;
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
  onClick: () => void;
};

function FarmRow({
  id,
  producerName,
  farmName,
  location,
  product,
  hectares,
  profilePhoto,
  isSelected,
  onToggleSelect,
  onClick,
}: FarmRowProps) {
  return (
    <div
      className={`w-full border-b border-[#f0f4f0] transition-colors duration-200 ${
        isSelected ? "bg-[#e8f5e9]" : "hover:bg-[#f8fbf8]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-[12px] p-[14px] md:p-[16px]">
        <div className="shrink-0" onClick={(event) => event.stopPropagation()}>
          <label className="relative flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleSelect(id)}
              className="peer sr-only"
            />
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border-2 border-[#919EAB] bg-white transition-all duration-200 peer-checked:border-[#00512f] peer-checked:bg-[#00512f]">
              {isSelected && (
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <path
                    d="M1 5.5L5 9.5L13 1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </label>
        </div>

        <ImageWithFallback
          src={profilePhoto}
          alt={`Foto de ${producerName}`}
          className="h-[40px] w-[40px] shrink-0 rounded-full border-2 border-[#e0e0e0] object-cover"
        />

        <div className="min-w-0 flex-1 md:max-w-[280px]">
          <p className="truncate font-['Poppins:Medium',sans-serif] text-[14px] text-[#161c24] md:text-[15px]">
            {producerName}
          </p>
          <p className="truncate font-['Poppins:Regular',sans-serif] text-[12px] text-[#637381]">
            {location}
          </p>
        </div>

        <div className="hidden w-[180px] shrink-0 md:block">
          <span className="truncate font-['Poppins:Regular',sans-serif] text-[14px] text-[#161c24]">
            {farmName}
          </span>
        </div>

        <div className="hidden w-[120px] shrink-0 justify-center md:flex">
          <span className="rounded-[6px] bg-[#f4f0ec] px-[12px] py-[6px] font-['Poppins:Medium',sans-serif] text-[13px] text-[#8B4513]">
            {product}
          </span>
        </div>

        <div className="shrink-0">
          <span className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#00512f] md:text-[14px]">
            {hectares} Ha
          </span>
        </div>
      </div>
    </div>
  );
}

type FarmCardProps = {
  id: number;
  producerName: string;
  farmName: string;
  location: string;
  product: string;
  hectares: number;
  imageUrl: string;
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
  onClick: () => void;
};

function FarmCard({
  id,
  producerName,
  farmName,
  location,
  product,
  hectares,
  imageUrl,
  isSelected,
  onToggleSelect,
  onClick,
}: FarmCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-[12px] shadow-md transition-all duration-200 ${
        isSelected ? "ring-2 ring-[#00512f]" : "hover:scale-[1.01] hover:shadow-lg"
      }`}
      onClick={onClick}
    >
      <div className="relative h-[180px] w-full overflow-hidden">
        <ImageWithFallback src={imageUrl} alt={`Granja de ${producerName}`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute left-[12px] top-[12px]" onClick={(event) => event.stopPropagation()}>
          <label className="relative flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleSelect(id)}
              className="peer sr-only"
            />
            <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] border-2 border-white bg-white/90 transition-all duration-200 peer-checked:border-[#00512f] peer-checked:bg-[#00512f]">
              {isSelected && (
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <path
                    d="M1 5.5L5 9.5L13 1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </label>
        </div>
      </div>

      <div className={`flex flex-col gap-[12px] p-[18px] ${isSelected ? "bg-[#e8f5e9]" : "bg-white"}`}>
        <div className="flex flex-col gap-[4px]">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#161c24]">{producerName}</h3>
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#00512f]">{farmName}</p>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381]">{location}</p>
        </div>

        <div className="flex items-center justify-between border-t border-[#f0f4f0] pt-[10px]">
          <div>
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] uppercase tracking-[0.5px] text-[#919EAB]">
              Producto
            </p>
            <span className="inline-block rounded-[6px] bg-[#f4f0ec] px-[12px] py-[6px] font-['Poppins:Medium',sans-serif] text-[13px] text-[#8B4513]">
              {product}
            </span>
          </div>
          <div className="text-right">
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] uppercase tracking-[0.5px] text-[#919EAB]">
              Hectareas
            </p>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#00512f]">{hectares} Ha</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductoresPage() {
  const navigate = useNavigate();
  const [selectedFarms, setSelectedFarms] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const farms = productoresList;

  const filteredFarms = useMemo(
    () =>
      farms.filter((farm) => farm.producerName.toLowerCase().includes(searchTerm.toLowerCase())),
    [farms, searchTerm],
  );

  const totalPages = Math.ceil(filteredFarms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFarms = filteredFarms.slice(startIndex, endIndex);
  const pageWindowStart = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  const visiblePages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, index) => pageWindowStart + index,
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleToggleSelect = (id: number) => {
    setSelectedFarms((prev) =>
      prev.includes(id) ? prev.filter((farmId) => farmId !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (selectedFarms.length === filteredFarms.length && filteredFarms.length > 0) {
      setSelectedFarms([]);
      return;
    }

    setSelectedFarms(filteredFarms.map((farm) => farm.id));
  };

  const handleDownloadSelected = () => {
    if (selectedFarms.length === 0) {
      alert("Por favor selecciona al menos un productor para descargar");
      return;
    }

    const selectedFarmNames = farms
      .filter((farm) => selectedFarms.includes(farm.id))
      .slice(0, 8)
      .map((farm) => farm.producerName)
      .join(", ");
    const hiddenCount = selectedFarms.length > 8 ? ` y ${selectedFarms.length - 8} mas` : "";
    alert(`Descargando PDF de: ${selectedFarmNames}${hiddenCount}`);
  };

  const handleDownloadAll = () => {
    alert(`Descargando PDF de los ${farms.length} productores`);
  };

  return (
    <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-[16px] overflow-hidden rounded-[12px] bg-white p-[16px] shadow-[0px_0px_2px_2px_#d7d7d7] md:gap-[20px] md:p-[24px]">
      <div className="flex w-full flex-col gap-[16px] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-[12px]">
          <div>
            <p className="font-['Roboto:Regular',sans-serif] text-[24px] leading-[32px] text-[#00512f] md:text-[28px] md:leading-[36px]">
              Productores
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381] md:text-[14px]">
              Directorio demo con {farms.length} productores para la presentacion
            </p>
          </div>
          {selectedFarms.length > 0 && (
            <span className="rounded-full bg-[#00512f] px-[12px] py-[4px] font-['Poppins:Medium',sans-serif] text-[12px] text-white md:text-[14px]">
              {selectedFarms.length} seleccionado{selectedFarms.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="flex items-center gap-[8px] overflow-x-auto">
          <button
            onClick={handleDownloadAll}
            className="flex shrink-0 items-center gap-[8px] rounded-[8px] bg-[#f0f4f0] px-[14px] py-[8px] font-['Poppins:Medium',sans-serif] text-[13px] text-[#0F7A4D] transition-colors duration-200 hover:bg-[#e8f5e9]"
          >
            <Download className="h-[16px] w-[16px]" />
            Descargar todos
          </button>

          {selectedFarms.length > 0 && (
            <button
              onClick={handleDownloadSelected}
              className="flex shrink-0 items-center gap-[8px] rounded-[8px] bg-[#fe8340] px-[14px] py-[8px] font-['Poppins:Medium',sans-serif] text-[13px] text-white transition-colors duration-200 hover:bg-[#ff9560]"
            >
              <Download className="h-[16px] w-[16px]" />
              Descargar seleccionados
            </button>
          )}

          <button
            onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}
            className="hidden h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#f0f4f0] transition-colors duration-200 hover:bg-[#e8f5e9] md:flex"
            title={viewMode === "list" ? "Vista de tarjetas" : "Vista de lista"}
          >
            {viewMode === "list" ? (
              <Grid3X3 className="h-[22px] w-[22px] text-[#0F7A4D]" />
            ) : (
              <List className="h-[22px] w-[22px] text-[#0F7A4D]" />
            )}
          </button>

          <button
            onClick={() => navigate("/agregar-productor")}
            className="flex shrink-0 items-center gap-[8px] rounded-[8px] bg-[#00512f] px-[14px] py-[8px] font-['Poppins:Medium',sans-serif] text-[13px] text-white transition-colors duration-200 hover:bg-[#0a6a42]"
          >
            <UserPlus className="h-[16px] w-[16px]" />
            Agregar productor
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[420px]">
        <div className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2">
          <Search className="h-[20px] w-[20px] text-[#637381]" />
        </div>
        <input
          type="text"
          placeholder="Buscar productor por nombre..."
          value={searchTerm}
          onChange={(event) => handleSearchChange(event.target.value)}
          className="w-full rounded-[8px] border-2 border-[#dfe3e8] py-[10px] pl-[44px] pr-[16px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#161c24] outline-none transition-all duration-200 placeholder:text-[#919EAB] focus:border-[#00512f] focus:ring-2 focus:ring-[#00512f]/20"
        />
      </div>

      {searchTerm && (
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#637381]">
          {filteredFarms.length === 0
            ? `No se encontraron productores con "${searchTerm}"`
            : `Se encontraron ${filteredFarms.length} productor${filteredFarms.length !== 1 ? "es" : ""} con "${searchTerm}"`}
        </p>
      )}

      <div className="flex w-full items-center gap-[12px] border-b-2 border-[#dfe3e8] pb-[12px] pt-[4px]">
        <label className="relative flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={selectedFarms.length === filteredFarms.length && filteredFarms.length > 0}
            onChange={handleSelectAll}
            className="peer sr-only"
          />
          <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border-2 border-[#919EAB] bg-white transition-all duration-200 peer-checked:border-[#00512f] peer-checked:bg-[#00512f]">
            {selectedFarms.length === filteredFarms.length && filteredFarms.length > 0 && (
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path
                  d="M1 5.5L5 9.5L13 1.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </label>
        <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#637381]">
          Seleccionar todos los productores visibles
        </p>
      </div>

      <div className="w-full">
        {viewMode === "list" ? (
          <div className="w-full">
            {currentFarms.map((farm) => (
              <FarmRow
                key={farm.id}
                id={farm.id}
                producerName={farm.producerName}
                farmName={farm.farmName}
                location={farm.location}
                product={farm.product}
                hectares={farm.hectares}
                profilePhoto={farm.profilePhoto}
                isSelected={selectedFarms.includes(farm.id)}
                onToggleSelect={handleToggleSelect}
                onClick={() => navigate(`/productores/${farm.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
            {currentFarms.map((farm) => (
              <FarmCard
                key={farm.id}
                id={farm.id}
                producerName={farm.producerName}
                farmName={farm.farmName}
                location={farm.location}
                product={farm.product}
                hectares={farm.hectares}
                imageUrl={farm.imageUrl}
                isSelected={selectedFarms.includes(farm.id)}
                onToggleSelect={handleToggleSelect}
                onClick={() => navigate(`/productores/${farm.id}`)}
              />
            ))}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-[16px] flex w-full flex-col gap-[12px] border-t border-[#dfe3e8] pt-[16px] md:flex-row md:items-center md:justify-between">
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381] md:text-[14px]">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredFarms.length)} de {filteredFarms.length} productores
          </p>

          <div className="flex items-center gap-[8px]">
            <button
              onClick={() => setCurrentPage(1)}
              className="rounded-[6px] bg-[#f0f4f0] px-[10px] py-[6px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#0F7A4D] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={currentPage === 1}
              title="Primera pagina"
            >
              {"<<"}
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="rounded-[6px] bg-[#f0f4f0] px-[12px] py-[6px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#0F7A4D] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={currentPage === 1}
            >
              {"<"}
            </button>

            <div className="flex items-center gap-[4px]">
              {pageWindowStart > 1 && (
                <span className="px-[4px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#919EAB]">...</span>
              )}
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`min-w-[36px] rounded-[6px] px-[10px] py-[6px] font-['Poppins:Medium',sans-serif] text-[14px] transition-all duration-200 ${
                    currentPage === page
                      ? "bg-[#00512f] text-white shadow-md"
                      : "bg-[#f0f4f0] text-[#637381] hover:bg-[#e8f5e9]"
                  }`}
                >
                  {page}
                </button>
              ))}
              {visiblePages[visiblePages.length - 1] < totalPages && (
                <span className="px-[4px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#919EAB]">...</span>
              )}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="rounded-[6px] bg-[#f0f4f0] px-[12px] py-[6px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#0F7A4D] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="rounded-[6px] bg-[#f0f4f0] px-[10px] py-[6px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#0F7A4D] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={currentPage === totalPages}
              title="Ultima pagina"
            >
              {">>"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
