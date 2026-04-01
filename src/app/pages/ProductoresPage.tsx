import { Grid3X3, Download, UserPlus, List, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-gz01y6317n";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Squares() {
  return (
    <div className="absolute inset-[20.37%]" data-name="squares">
      <div className="absolute inset-[-4.22%_-4.23%_-4.22%_-4.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7037 25.7037">
          <g id="squares">
            <path d={svgPaths.p2a920180} id="Rectangle" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
            <path d={svgPaths.p36593f00} id="Rectangle_2" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
            <path d={svgPaths.p3e76c480} id="Rectangle_3" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
            <path d={svgPaths.p37cc900} id="Rectangle_4" stroke="var(--stroke-0, #0F7A4D)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8052 20">
        <g id="Icon">
          <path d={svgPaths.p21547000} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p28284400} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p356b2200} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function IconEdit() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Icon/Edit">
      <Icon />
    </div>
  );
}

function Symbols1() {
  return (
    <div className="absolute contents inset-[8.33%_9.15%_8.33%_8.33%]" data-name="Symbols">
      <IconEdit />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.32%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.087">
        <g id="Group">
          <path d={svgPaths.p282c6580} fill="var(--fill-0, #FE8340)" id="Shape" />
          <path d={svgPaths.p182735c0} fill="var(--fill-0, #FE8340)" id="Path" />
          <path d={svgPaths.p241d4480} fill="var(--fill-0, #FE8340)" id="Path_2" />
          <path d={svgPaths.p2343ccc0} fill="var(--fill-0, #FE8340)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function ManageList() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Manage-list">
      <Group />
    </div>
  );
}

function Symbols2() {
  return (
    <div className="absolute contents inset-[12.32%_16.67%]" data-name="Symbols">
      <ManageList />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:scale-110 transition-transform" data-name="Icon/edit 2">
        <Symbols1 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:scale-110 transition-transform" data-name="Icon/delate">
        <Symbols2 />
      </div>
    </div>
  );
}

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
  onClick: (id: number) => void;
};

function FarmRow({ id, producerName, farmName, location, product, hectares, profilePhoto, isSelected, onToggleSelect, onClick }: FarmRowProps) {
  return (
    <div 
      className={`relative shrink-0 w-full transition-all duration-200 border-b border-[#f0f4f0] cursor-pointer ${isSelected ? 'bg-[#c2eedc]' : 'hover:bg-[#f4f6f8]'}`} 
      data-name="Container"
      onClick={() => onClick(id)}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] md:p-[16px] relative w-full gap-[8px] md:gap-[24px]">
          {/* Checkbox + Profile Photo + Producer Info */}
          <div className="flex items-center gap-[8px] md:gap-[12px] flex-1 md:flex-none md:w-[280px] min-w-0">
            {/* Checkbox */}
            <div className="flex items-center justify-center shrink-0" onClick={(e) => e.stopPropagation()}>
              <label className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggleSelect(id)}
                  className="peer sr-only"
                />
                <div className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] border-2 border-[#919EAB] rounded-[4px] bg-white peer-checked:bg-[#00512f] peer-checked:border-[#00512f] transition-all duration-200 flex items-center justify-center peer-hover:border-[#00512f]">
                  {isSelected && (
                    <svg width="12" height="10" viewBox="0 0 14 11" fill="none" className="md:w-[14px] md:h-[11px]">
                      <path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </label>
            </div>

            {/* Profile Photo */}
            <div className="shrink-0">
              <ImageWithFallback
                src={profilePhoto}
                alt={`Foto de ${producerName}`}
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full object-cover border-2 border-[#e0e0e0]"
              />
            </div>
            
            {/* Producer Info */}
            <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative flex-1 tracking-[0.15px] min-w-0">
              <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#161c24] text-[14px] md:text-[15px] w-full">
                <p className="leading-[1.5] truncate">{producerName}</p>
              </div>
              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#637381] text-[11px] md:text-[12px] w-full">
                <p className="leading-[1.6] truncate">{location}</p>
              </div>
            </div>
          </div>

          {/* Farm Name - Nueva columna */}
          <div className="hidden md:flex items-center w-[180px] shrink-0">
            <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#161c24] truncate">
              {farmName}
            </span>
          </div>
          
          {/* Product - Oculto en mobile */}
          <div className="hidden md:flex items-center justify-center w-[140px] shrink-0">
            <span className="bg-[#f4f0ec] text-[#8B4513] font-['Poppins:Medium',sans-serif] text-[13px] px-[12px] py-[6px] rounded-[6px]">
              {product}
            </span>
          </div>
          
          {/* Hectares */}
          <div className="flex items-center justify-center w-auto md:w-[100px] shrink-0">
            <span className="font-['Poppins:SemiBold',sans-serif] text-[12px] md:text-[14px] text-[#00512f]">
              {hectares} Ha
            </span>
          </div>
          
          {/* Action Buttons - Oculto en mobile, mostrar solo en hover */}
          <div className="hidden md:block">
            <ActionButtons />
          </div>
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
  onClick: (id: number) => void;
};

function FarmCard({ id, producerName, farmName, location, product, hectares, imageUrl, isSelected, onToggleSelect, onClick }: FarmCardProps) {
  return (
    <div 
      className={`relative rounded-[12px] shadow-md transition-all duration-200 overflow-hidden cursor-pointer ${
        isSelected ? 'ring-2 ring-[#00512f]' : 'hover:shadow-lg hover:scale-[1.02]'
      }`}
      onClick={() => onClick(id)}
    >
      {/* Imagen de la granja */}
      <div className="relative w-full h-[180px] overflow-hidden">
        <ImageWithFallback 
          src={imageUrl}
          alt={`Granja de ${producerName}`}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Checkbox y Acciones sobre la imagen */}
        <div className="absolute top-[12px] left-[12px] right-[12px] flex items-start justify-between z-10" onClick={(e) => e.stopPropagation()}>
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleSelect(id)}
              className="peer sr-only"
            />
            <div className="w-[24px] h-[24px] border-2 border-white bg-white/90 peer-checked:bg-[#00512f] peer-checked:border-[#00512f] transition-all duration-200 flex items-center justify-center peer-hover:border-[#00512f] rounded-[6px] shadow-lg">
              {isSelected && (
                <svg width="16" height="13" viewBox="0 0 14 11" fill="none">
                  <path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </label>
          
          <div className="bg-white/90 rounded-[6px] p-[6px] flex gap-[6px] shadow-lg">
            <ActionButtons />
          </div>
        </div>
      </div>
      
      {/* Contenido de la card */}
      <div className={`p-[20px] flex flex-col gap-[12px] ${isSelected ? 'bg-[#c2eedc]' : 'bg-white'}`}>
        {/* Producer Info */}
        <div className="flex flex-col gap-[4px]">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#161c24] leading-[1.4]">
            {producerName}
          </h3>
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#00512f] leading-[1.4]">
            {farmName}
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#637381] leading-[1.5]">
            {location}
          </p>
        </div>
        
        {/* Product & Hectares */}
        <div className="flex items-center justify-between gap-[12px] pt-[8px] border-t border-[#f0f4f0]">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#919EAB] uppercase tracking-[0.5px]">
              Producto
            </p>
            <span className="bg-[#f4f0ec] text-[#8B4513] font-['Poppins:Medium',sans-serif] text-[13px] px-[12px] py-[6px] rounded-[6px] inline-block">
              {product}
            </span>
          </div>
          
          <div className="flex flex-col gap-[4px] items-end">
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#919EAB] uppercase tracking-[0.5px]">
              Hectáreas
            </p>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#00512f]">
              {hectares} Ha
            </span>
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
  
  const farms = [
    { id: 1, producerName: "Carlos Mendoza", farmName: "Finca La Esperanza", location: "Santo Domingo, Ecuador", product: "Cacao", hectares: 2.5, profilePhoto: "https://images.unsplash.com/photo-1563198804-2309e2b129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwbWFsZSUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDg0MjYzMnww&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, producerName: "María García", farmName: "Hacienda San José", location: "Arequipa, Perú", product: "Cacao", hectares: 1.8, profilePhoto: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBmZW1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1642504917866-f48ec5eb3b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, producerName: "José Ramírez", farmName: "Rancho Verde", location: "Pátzcuaro, México", product: "Cacao", hectares: 3, profilePhoto: "https://images.unsplash.com/photo-1750981082017-bd588a09c6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwbWFsZSUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDg0MjYzM3ww&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1765052293482-654d98e11e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZhcm0lMjBwbGFudGF0aW9ufGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, producerName: "Ana Morales", farmName: "Finca La Paz", location: "Antioquia, Colombia", product: "Cacao", hectares: 1.5, profilePhoto: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBmZW1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1599565103151-694e8f2745e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzQ3MjE4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 5, producerName: "Diego Fernández", farmName: "Plantación Cusco", location: "Cusco, Perú", product: "Cacao", hectares: 2, profilePhoto: "https://images.unsplash.com/photo-1601442243230-f0c3bb61402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJ1dmlhbiUyMG1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1765570265263-edda751afcd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGdyZWVuJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NDcyMTg0NXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 6, producerName: "Roberto Silva", farmName: "Finca El Paraíso", location: "Chiapas, México", product: "Cacao", hectares: 2.8, profilePhoto: "https://images.unsplash.com/photo-1750981082017-bd588a09c6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMG1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 7, producerName: "Luisa Torres", farmName: "Hacienda Los Cedros", location: "Quito, Ecuador", product: "Cacao", hectares: 3.2, profilePhoto: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBmZW1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1642504917866-f48ec5eb3b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 8, producerName: "Fernando López", farmName: "Finca Santa Rosa", location: "Lima, Perú", product: "Cacao", hectares: 1.9, profilePhoto: "https://images.unsplash.com/photo-1601442243230-f0c3bb61402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY3VhZG9yaWFuJTIwZmFybWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODQyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1765052293482-654d98e11e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZhcm0lMjBwbGFudGF0aW9ufGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 9, producerName: "Carmen Ruiz", farmName: "Rancho San Miguel", location: "Cartago, Costa Rica", product: "Cacao", hectares: 2.3, profilePhoto: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBmZW1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1599565103151-694e8f2745e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzQ3MjE4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 10, producerName: "Miguel Ángel Castro", farmName: "Finca Las Brisas", location: "Santander, Colombia", product: "Cacao", hectares: 2.7, profilePhoto: "https://images.unsplash.com/photo-1627829380497-49c37b769ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1765570265263-edda751afcd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGdyZWVuJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NDcyMTg0NXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 11, producerName: "Patricia Vargas", farmName: "Plantación El Dorado", location: "Guatemala City, Guatemala", product: "Cacao", hectares: 3.5, profilePhoto: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBmZW1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 12, producerName: "Alejandro Campos", farmName: "Hacienda Valle Verde", location: "Oaxaca, México", product: "Cacao", hectares: 1.6, profilePhoto: "https://images.unsplash.com/photo-1654727317152-b8178b6083ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF0ZW1hbGFuJTIwZmFybWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODQyOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1642504917866-f48ec5eb3b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 13, producerName: "Sofía Mendez", farmName: "Finca Los Robles", location: "Managua, Nicaragua", product: "Cacao", hectares: 2.1, profilePhoto: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBmZW1hbGUlMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NDI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080", imageUrl: "https://images.unsplash.com/photo-1765052293482-654d98e11e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZhcm0lMjBwbGFudGF0aW9ufGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  // Filtrar granjas según el término de búsqueda
  const filteredFarms = farms.filter(farm => 
    farm.producerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular paginación
  const totalPages = Math.ceil(filteredFarms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFarms = filteredFarms.slice(startIndex, endIndex);

  // Reset page when search changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleToggleSelect = (id: number) => {
    setSelectedFarms(prev => 
      prev.includes(id) 
        ? prev.filter(farmId => farmId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedFarms.length === farms.length) {
      setSelectedFarms([]);
    } else {
      setSelectedFarms(farms.map(f => f.id));
    }
  };

  const handleDownloadSelected = () => {
    if (selectedFarms.length === 0) {
      alert("Por favor selecciona al menos un productor para descargar");
      return;
    }
    const selectedFarmNames = farms
      .filter(f => selectedFarms.includes(f.id))
      .map(f => f.producerName)
      .join(", ");
    alert(`Descargando PDF de: ${selectedFarmNames}`);
    // Aquí iría la lógica real de descarga de PDF
  };

  const handleDownloadAll = () => {
    alert("Descargando PDF de todos los productores");
    // Aquí iría la lógica real de descarga de PDF de todos
  };

  const handleAddProducer = () => {
    navigate('/agregar-productor');
    // Aquí iría la lógica para abrir un modal o navegar a un formulario
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto bg-white flex flex-col gap-[16px] md:gap-[20px] items-start overflow-clip p-[16px] md:p-[24px] rounded-[8px] md:rounded-[12px] shadow-[0px_0px_2px_2px_#d7d7d7]">
      {/* Header con título y botones */}
      <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] md:gap-0 relative shrink-0 w-full">
        <div className="flex items-center gap-[12px] md:gap-[16px] w-full md:w-auto">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00512f] text-[24px] md:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[32px] md:leading-[36px]">Productores</p>
          </div>
          {selectedFarms.length > 0 && (
            <span className="bg-[#00512f] text-white px-[10px] md:px-[12px] py-[4px] rounded-full text-[12px] md:text-[14px] font-['Poppins:Medium',sans-serif]">
              {selectedFarms.length} seleccionado{selectedFarms.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-[8px] md:gap-[12px] w-full md:w-auto overflow-x-auto scrollbar-hide">
          {/* Botón Descargar Seleccionados */}
          {selectedFarms.length > 0 && (
            <button
              onClick={handleDownloadSelected}
              className="bg-[#fe8340] hover:bg-[#ff9560] text-white font-['Poppins:Medium',sans-serif] text-[12px] md:text-[14px] px-[12px] md:px-[16px] py-[6px] md:py-[8px] rounded-[6px] md:rounded-[8px] transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-[6px] md:gap-[8px] whitespace-nowrap shrink-0"
            >
              <Download className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" />
              <span>Descargar</span>
            </button>
          )}
          
          {/* Toggle vista Grid/Lista - Solo desktop */}
          <button
            onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}
            className="hidden md:flex overflow-clip relative shrink-0 size-[40px] cursor-pointer hover:bg-[#e8f5e9] bg-[#f0f4f0] rounded-[8px] transition-all duration-200 items-center justify-center"
            data-name="Icon/view toggle"
            title={viewMode === "list" ? "Vista de tarjetas" : "Vista de lista"}
          >
            {viewMode === "list" ? (
              <Grid3X3 className="w-[24px] h-[24px] text-[#0F7A4D]" />
            ) : (
              <List className="w-[24px] h-[24px] text-[#0F7A4D]" />
            )}
          </button>
        </div>
      </div>
      
      {/* Buscador */}
      <div className="relative w-full max-w-[400px]">
        <div className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
          <Search className="w-[20px] h-[20px] text-[#637381]" />
        </div>
        <input
          type="text"
          placeholder="Buscar productor por nombre..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-[44px] pr-[16px] py-[10px] border-2 border-[#dfe3e8] rounded-[8px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#161c24] placeholder:text-[#919EAB] focus:outline-none focus:border-[#00512f] focus:ring-2 focus:ring-[#00512f]/20 transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#637381] hover:text-[#00512f] transition-colors duration-200"
            aria-label="Limpiar búsqueda"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {/* Resultados de búsqueda */}
      {searchTerm && (
        <div className="w-full">
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#637381]">
            {filteredFarms.length === 0 
              ? `No se encontraron productores con "${searchTerm}"`
              : `Se encontraron ${filteredFarms.length} productor${filteredFarms.length !== 1 ? 'es' : ''} con "${searchTerm}"`
            }
          </p>
        </div>
      )}
      
      {/* Checkbox "Seleccionar todo" */}
      <div className="content-stretch flex items-center gap-[12px] pb-[12px] pt-[4px] border-b-2 border-[#dfe3e8] w-full">
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selectedFarms.length === farms.length && farms.length > 0}
            onChange={handleSelectAll}
            className="peer sr-only"
          />
          <div className="w-[20px] h-[20px] border-2 border-[#919EAB] rounded-[4px] bg-white peer-checked:bg-[#00512f] peer-checked:border-[#00512f] transition-all duration-200 flex items-center justify-center peer-hover:border-[#00512f]">
            {selectedFarms.length === farms.length && farms.length > 0 && (
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </label>
        <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#637381]">
          Seleccionar todos los productores
        </p>
      </div>
      
      {/* Tabla de Productores */}
      <div className="flex flex-col items-start w-full">
        {viewMode === "list" && (
          currentFarms.map((farm) => (
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
          ))
        )}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
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
      
      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-[12px] mt-[16px] pt-[16px] border-t border-[#dfe3e8]">
          {/* Info de resultados */}
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] md:text-[14px] text-[#637381]">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredFarms.length)} de {filteredFarms.length} productores
          </p>
          
          {/* Controles de paginación */}
          <div className="flex items-center gap-[8px]">
            {/* Botón Primera Página */}
            <button
              onClick={() => setCurrentPage(1)}
              className="bg-[#f0f4f0] hover:bg-[#e8f5e9] text-[#0F7A4D] px-[10px] py-[6px] rounded-[6px] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed font-['Poppins:Medium',sans-serif] text-[14px]"
              disabled={currentPage === 1}
              title="Primera página"
            >
              «
            </button>
            
            {/* Botón Anterior */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="bg-[#f0f4f0] hover:bg-[#e8f5e9] text-[#0F7A4D] px-[12px] py-[6px] rounded-[6px] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed font-['Poppins:Medium',sans-serif] text-[14px]"
              disabled={currentPage === 1}
            >
              ‹
            </button>
            
            {/* Números de página */}
            <div className="flex items-center gap-[4px]">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`min-w-[36px] px-[10px] py-[6px] rounded-[6px] transition-all duration-200 font-['Poppins:Medium',sans-serif] text-[14px] ${
                    currentPage === page
                      ? 'bg-[#00512f] text-white shadow-md'
                      : 'bg-[#f0f4f0] hover:bg-[#e8f5e9] text-[#637381]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            {/* Botón Siguiente */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="bg-[#f0f4f0] hover:bg-[#e8f5e9] text-[#0F7A4D] px-[12px] py-[6px] rounded-[6px] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed font-['Poppins:Medium',sans-serif] text-[14px]"
              disabled={currentPage === totalPages}
            >
              ›
            </button>
            
            {/* Botón Última Página */}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="bg-[#f0f4f0] hover:bg-[#e8f5e9] text-[#0F7A4D] px-[10px] py-[6px] rounded-[6px] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed font-['Poppins:Medium',sans-serif] text-[14px]"
              disabled={currentPage === totalPages}
              title="Última página"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}