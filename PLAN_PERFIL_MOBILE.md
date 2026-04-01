# Plan Responsive Mobile - Página de Perfil Twin Farms

## 📋 Análisis de Componentes Actuales

### Componentes Identificados:
1. **Hero Carousel** (240px altura desktop)
   - 4 imágenes rotativas
   - Botones de navegación izquierda/derecha
   - Dots indicator en la parte inferior
   - Overlay gradient en la parte inferior

2. **Avatar + Nombre** (Superpuesto al hero)
   - Avatar circular: 126px x 126px
   - Nombre: "Twins Farm" (24px, bold)
   - Badge: "Enterprise" (naranja)
   - Subtítulo: "Santiago Jaramillo" (16px)
   - Posición: absolute bottom, translateY 50%

3. **Tabs de Navegación** (4 tabs)
   - Productos (con icono ShoppingBasket)
   - Información (con icono Info)
   - Certificados (con icono Award)
   - Deforestación (con icono Trees)

4. **Contenido de Tabs**
   - Grid de productos (131px x 99px cada card)
   - Organizado en categorías: ORGANICO, CONVENCIONAL, UPCYCLED

---

## 🎯 Plan de Implementación Mobile

### **FASE 1: Hero Carousel Mobile** 
**Objetivo:** Adaptar el carousel para pantallas pequeñas manteniendo la funcionalidad

#### Cambios:
- ✅ Reducir altura del hero: `240px` → `180px` en mobile
- ✅ Hacer las flechas de navegación más pequeñas y menos invasivas
  - Desktop: `p-2` (32px botón)
  - Mobile: `p-1.5` (28px botón)
  - Posición: más hacia los bordes
- ✅ Reducir tamaño de dots indicator
  - Desktop: `12px x 12px`
  - Mobile: `8px x 8px`
- ✅ Optimizar imagen para mobile (object-fit cover)
- ✅ Swipe gesture para cambiar imagen (touch-friendly)
  - Implementar con touch events o librería de gestos

#### Código:
```tsx
<div className="relative h-[180px] md:h-[240px] w-full rounded-[12px] md:rounded-[16px] overflow-hidden">
  {/* Carousel content */}
  
  {/* Flechas más pequeñas en mobile */}
  <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 
    bg-white/90 rounded-full p-1.5 md:p-2 active:scale-95">
    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-[#00512f]" />
  </button>
  
  {/* Dots más pequeños en mobile */}
  <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex gap-[8px] md:gap-[12px]">
    {/* Dots con tamaño responsive */}
  </div>
</div>
```

---

### **FASE 2: Avatar + Nombre Mobile**
**Objetivo:** Reorganizar el perfil para que sea legible en mobile

#### Opción A: Mantener Superposición (Recomendado)
- ✅ Reducir tamaño del avatar
  - Desktop: `126px x 126px`
  - Mobile: `80px x 80px`
- ✅ Ajustar posicionamiento
  - Mantener en left pero con menos padding: `left-[8px]` en mobile
- ✅ Reducir tamaño de fuentes
  - Nombre: `24px` → `18px`
  - Badge: `11px` → `9px`
  - Subtítulo: `16px` → `13px`
- ✅ Reducir espaciado después del hero
  - Desktop: `h-[63px]`
  - Mobile: `h-[40px]`

#### Código:
```tsx
{/* Avatar y Nombre - Responsive */}
<div className="absolute bottom-0 left-[8px] md:left-[10px] right-0 
  flex items-end gap-[12px] md:gap-[16px] transform translate-y-1/2">
  
  {/* Avatar */}
  <div className="relative rounded-full size-[80px] md:size-[126px] flex-shrink-0 z-10">
    <img alt="Twin Farms Logo" 
      className="w-full h-full object-cover rounded-full" 
      src={imgAvatar} />
    <div className="absolute border-white border-[2px] md:border-[2.625px] 
      inset-0 rounded-full" />
  </div>
  
  {/* Nombre */}
  <div className="flex flex-col items-start pb-[6px] md:pb-[8px]">
    <div className="flex items-center gap-[6px] md:gap-[8px]">
      <p className="font-['Poppins:Bold',sans-serif] 
        text-[18px] md:text-[24px] text-[#00512f] leading-tight">
        Twins Farm
      </p>
      <span className="bg-[#fe8340] text-white 
        text-[9px] md:text-[11px] px-[8px] md:px-[10px] py-[2px] md:py-[3px] 
        rounded-[4px] uppercase tracking-wider">
        Enterprise
      </span>
    </div>
    <p className="font-['Poppins:Regular',sans-serif] 
      text-[13px] md:text-[16px] text-[#242424]">
      Santiago Jaramillo
    </p>
  </div>
</div>

{/* Espaciado responsive */}
<div className="h-[40px] md:h-[63px]"></div>
```

#### Opción B: Centrar en Mobile (Alternativa)
- Avatar centrado debajo del carousel
- Nombre centrado
- Más espacio para el contenido
- Menos elegante pero más espacio eficiente

---

### **FASE 3: Tabs Mobile**
**Objetivo:** Hacer las tabs navegables y legibles en mobile

#### Opción A: Scroll Horizontal (Recomendado)
- ✅ Mantener todas las tabs visibles
- ✅ Permitir scroll horizontal si no caben
- ✅ Reducir padding y tamaño de iconos
- ✅ Ocultar labels en mobile, mostrar solo iconos

#### Código:
```tsx
<div className="flex items-center w-full py-[8px] border-b border-[#dfe3e8] 
  overflow-x-auto scrollbar-hide gap-[4px] md:gap-0">
  
  {/* Cada tab más compacto en mobile */}
  <TabButton
    isActive={activeTab === "productos"}
    icon={<ShoppingBasket className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />}
    label="Productos"
    onClick={() => setActiveTab("productos")}
    // Agregar prop para ocultar label en mobile
    hideLabel={true} // en mobile
  />
  
  {/* Resto de tabs... */}
</div>
```

#### Modificar TabButton Component:
```tsx
// src/app/components/TabButton.tsx
type TabButtonProps = {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  hideLabel?: boolean; // Nueva prop
};

export function TabButton({ isActive, icon, label, onClick, hideLabel }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[8px] px-[12px] md:px-[16px] py-[8px] 
        rounded-[8px] transition-all duration-200 ${
        isActive 
          ? 'bg-[#e8f5e9] text-[#00512f]' 
          : 'text-[#637381] hover:bg-[#f4f6f8]'
      }`}
    >
      <div className={isActive ? 'text-[#00512f]' : 'text-[#637381]'}>
        {icon}
      </div>
      {!hideLabel && (
        <span className="hidden md:inline font-['Poppins:Medium',sans-serif] 
          text-[14px] whitespace-nowrap">
          {label}
        </span>
      )}
      
      {/* Mostrar label en tooltip en mobile */}
      <span className="md:hidden sr-only">{label}</span>
    </button>
  );
}
```

#### Opción B: Dropdown en Mobile (Alternativa)
- Mostrar solo la tab activa
- Click para abrir dropdown con las demás
- Más espacio pero menos intuitivo

---

### **FASE 4: Grid de Productos Mobile**
**Objetivo:** Optimizar la visualización de productos en pantallas pequeñas

#### Cambios:
- ✅ Cambiar de flex-wrap a grid responsive
- ✅ Reducir tamaño de cards de producto
  - Desktop: `131px x 99px`
  - Mobile: `calc(50vw - 32px)` width, aspect-ratio 4/3
- ✅ 2 columnas en mobile, 4-6 en desktop
- ✅ Reducir gap entre items
- ✅ Reducir tamaño de fuentes en labels

#### Código:
```tsx
{/* Grid de productos responsive */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
  gap-[12px] md:gap-[16px] w-full">
  
  {/* Card de producto */}
  <div className="flex flex-col gap-[4px] items-start">
    <div className="aspect-[4/3] rounded-[12px] md:rounded-[16.5px] w-full 
      overflow-hidden">
      <img alt="" 
        className="w-full h-full object-cover" 
        src={productImages.lettuce} />
    </div>
    
    {/* Labels más pequeños en mobile */}
    <div className="flex flex-col w-full">
      <p className="text-[10px] md:text-[12px] text-[#00512f] 
        font-['Poppins:Regular',sans-serif] leading-tight truncate">
        Lechuga de Hoja
      </p>
      <p className="text-[9px] md:text-[10px] text-[#242424] 
        font-['Poppins:Regular',sans-serif]">
        Hortaliza
      </p>
    </div>
  </div>
</div>
```

---

### **FASE 5: Card Container Mobile**
**Objetivo:** Optimizar el contenedor principal

#### Cambios:
- ✅ Reducir padding en mobile
  - Desktop: `px-[24px] pb-[16px]`
  - Mobile: `px-[16px] pb-[16px]`
- ✅ Reducir border radius
  - Desktop: `rounded-[12px]`
  - Mobile: `rounded-[8px]`
- ✅ Reducir gap entre secciones
  - Desktop: `gap-[24px]`
  - Mobile: `gap-[16px]`

#### Código:
```tsx
<div className="bg-white flex flex-col gap-[16px] md:gap-[24px] items-start 
  overflow-clip pb-[16px] px-[16px] md:px-[24px] 
  rounded-[8px] md:rounded-[12px] shadow-[0px_0px_2px_2px_#d7d7d7] w-full">
  {/* Contenido */}
</div>
```

---

## 🎨 Consideraciones de UX Mobile

### Touch Targets:
- ✅ Mínimo 44px x 44px para botones táctiles
- ✅ Swipe gestures para el carousel
- ✅ Tabs con suficiente área de toque

### Performance:
- ✅ Lazy loading de imágenes de productos
- ✅ Optimizar imágenes del carousel para mobile
- ✅ Usar IntersectionObserver para productos

### Accesibilidad:
- ✅ Labels ocultos pero accesibles con sr-only
- ✅ ARIA labels para botones de carousel
- ✅ Navegación por teclado funcional

---

## 📱 Breakpoints Sugeridos

```css
/* Mobile First */
- Base: 0px - 639px (mobile)
- sm: 640px+ (tablet pequeña)
- md: 768px+ (tablet / desktop pequeño)
- lg: 1024px+ (desktop)
- xl: 1280px+ (desktop grande)
```

---

## ✅ Checklist de Implementación

### Fase 1: Hero Carousel
- [ ] Reducir altura en mobile (180px)
- [ ] Botones de navegación más pequeños
- [ ] Dots indicator más pequeños
- [ ] Implementar swipe gestures
- [ ] Optimizar imágenes

### Fase 2: Avatar + Nombre
- [ ] Reducir tamaño avatar (80px mobile)
- [ ] Ajustar tamaños de fuente
- [ ] Reducir espaciado
- [ ] Ajustar posicionamiento

### Fase 3: Tabs
- [ ] Hacer scroll horizontal
- [ ] Reducir tamaño de iconos
- [ ] Ocultar labels en mobile
- [ ] Modificar TabButton component

### Fase 4: Grid Productos
- [ ] Implementar grid responsive (2 cols mobile)
- [ ] Reducir tamaño de cards
- [ ] Ajustar gaps
- [ ] Reducir fuentes en labels

### Fase 5: Container
- [ ] Reducir padding mobile
- [ ] Ajustar border radius
- [ ] Reducir gaps internos

### Testing
- [ ] Probar en iPhone (375px, 390px, 428px)
- [ ] Probar en Android (360px, 412px)
- [ ] Probar gestures táctiles
- [ ] Validar accesibilidad
- [ ] Verificar performance

---

## 🎯 Resultado Esperado

Una página de perfil completamente responsive que:
- ✅ Se adapta perfectamente a pantallas móviles
- ✅ Mantiene toda la funcionalidad del desktop
- ✅ Proporciona una excelente UX táctil
- ✅ Carga rápido en conexiones móviles
- ✅ Es accesible y navegable por teclado
- ✅ Usa gestures nativos móviles (swipe)

---

## 🔄 Orden de Implementación Recomendado

1. **Fase 5** (Container) - Base responsive
2. **Fase 2** (Avatar + Nombre) - Elemento visual principal
3. **Fase 1** (Carousel) - Hero section
4. **Fase 3** (Tabs) - Navegación
5. **Fase 4** (Grid Productos) - Contenido principal

Este orden permite ver cambios incrementales y probar cada fase independientemente.
