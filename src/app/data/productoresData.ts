export type Producto = {
  nombre: string;
  tipo: string;
  imagen: string;
};

export type ProductorData = {
  name: string;
  location: string;
  avatar: string;
  carouselImages: string[];
  productosOrganicos: Producto[];
  productosConvencionales: Producto[];
};

export type ProducerListItem = {
  id: number;
  producerName: string;
  farmName: string;
  location: string;
  product: string;
  hectares: number;
  profilePhoto: string;
  imageUrl: string;
};

const sharedImages = {
  cacaoPods:
    "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  cacaoBeans:
    "https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  cocoaLandscape:
    "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  tropicalFarm:
    "https://images.unsplash.com/photo-1765052293482-654d98e11e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  agriculturalFields:
    "https://images.unsplash.com/photo-1642504917866-f48ec5eb3b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  coffeeAerial:
    "https://images.unsplash.com/photo-1599565103151-694e8f2745e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  greenLandscape:
    "https://images.unsplash.com/photo-1765570265263-edda751afcd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  malePortrait1:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  femalePortrait1:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  malePortrait2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  femalePortrait2:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  malePortrait3:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  malePortrait4:
    "https://images.unsplash.com/photo-1601442243230-f0c3bb61402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  femalePortrait3:
    "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  malePortrait5:
    "https://images.unsplash.com/photo-1627829380497-49c37b769ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  malePortrait6:
    "https://images.unsplash.com/photo-1654727317152-b8178b6083ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const genericAvatars = [
  sharedImages.malePortrait3,
  sharedImages.femalePortrait3,
  sharedImages.malePortrait4,
  sharedImages.malePortrait5,
  sharedImages.femalePortrait1,
  sharedImages.malePortrait6,
];

const genericFarmImages = [
  sharedImages.cocoaLandscape,
  sharedImages.agriculturalFields,
  sharedImages.tropicalFarm,
  sharedImages.coffeeAerial,
  sharedImages.greenLandscape,
];

const genericCarouselImages = [
  sharedImages.cocoaLandscape,
  sharedImages.cacaoPods,
  sharedImages.agriculturalFields,
  sharedImages.greenLandscape,
  sharedImages.tropicalFarm,
];

const organicProductTemplates: Producto[] = [
  { nombre: "Cacao Organico", tipo: "Mazorca", imagen: sharedImages.cacaoPods },
  { nombre: "Granos de Cacao", tipo: "Fermentado", imagen: sharedImages.cacaoBeans },
  { nombre: "Nibs de Cacao", tipo: "Procesado", imagen: sharedImages.cacaoBeans },
];

const conventionalProductTemplates: Producto[] = [
  { nombre: "Banano", tipo: "Fruta", imagen: sharedImages.greenLandscape },
  { nombre: "Cafe", tipo: "Grano", imagen: sharedImages.coffeeAerial },
  { nombre: "Yuca", tipo: "Tuberculo", imagen: sharedImages.agriculturalFields },
];

const firstNames = [
  "Diego", "Luisa", "Fernando", "Carmen", "Miguel", "Patricia", "Alejandro", "Sofia",
  "Daniel", "Valeria", "Andres", "Camila", "Javier", "Paula", "Ricardo", "Elena",
  "Martin", "Gabriela", "Rafael", "Laura", "Nicolas", "Teresa", "Hector", "Juliana",
  "Mauricio", "Adriana", "Oscar", "Natalia", "Felipe", "Claudia", "Esteban", "Monica",
  "Victor", "Andrea", "Pablo", "Daniela", "Sebastian", "Veronica", "Tomas", "Lorena",
];

const lastNames = [
  "Fernandez", "Torres", "Lopez", "Ruiz", "Castro", "Vargas", "Campos", "Mendez",
  "Suarez", "Navarro", "Rojas", "Herrera", "Medina", "Guerrero", "Paredes", "Acosta",
  "Salazar", "Benitez", "Ortega", "Fuentes", "Molina", "Delgado", "Vega", "Santos",
  "Peña", "Bermudez", "Rosales", "Quintero", "Carrasco", "Ayala", "Mora", "Ibarra",
  "Valdez", "Cabrera", "Mejia", "Cortes", "Luna", "Serrano", "Bravo", "Palacios",
];

const farmPrefixes = [
  "Finca", "Hacienda", "Rancho", "Reserva", "Villa", "Plantacion", "Estancia", "Granja",
];

const farmSuffixes = [
  "La Esperanza", "Los Cedros", "Santa Rosa", "San Miguel", "Las Brisas", "El Dorado",
  "Valle Verde", "Los Robles", "El Encanto", "Monte Claro", "El Paraiso", "Las Palmas",
  "Buenavista", "La Colina", "Nueva Aurora", "Rio Verde",
];

const locations = [
  "Santo Domingo, Ecuador",
  "Arequipa, Peru",
  "Patzcuaro, Mexico",
  "Antioquia, Colombia",
  "Cusco, Peru",
  "Chiapas, Mexico",
  "Quito, Ecuador",
  "Lima, Peru",
  "Cartago, Costa Rica",
  "Santander, Colombia",
  "Guatemala City, Guatemala",
  "Oaxaca, Mexico",
  "Managua, Nicaragua",
  "San Pedro Sula, Honduras",
  "Tarapoto, Peru",
  "Esmeraldas, Ecuador",
];

const richProducerList: ProducerListItem[] = [
  {
    id: 1,
    producerName: "Carlos Mendoza",
    farmName: "Finca La Esperanza",
    location: "Santo Domingo, Ecuador",
    product: "Cacao",
    hectares: 2.5,
    profilePhoto: sharedImages.malePortrait1,
    imageUrl: sharedImages.cocoaLandscape,
  },
  {
    id: 2,
    producerName: "Maria Garcia",
    farmName: "Hacienda San Jose",
    location: "Arequipa, Peru",
    product: "Cacao",
    hectares: 1.8,
    profilePhoto: sharedImages.femalePortrait1,
    imageUrl: sharedImages.agriculturalFields,
  },
  {
    id: 3,
    producerName: "Jose Ramirez",
    farmName: "Rancho Verde",
    location: "Patzcuaro, Mexico",
    product: "Cacao",
    hectares: 3,
    profilePhoto: sharedImages.malePortrait2,
    imageUrl: sharedImages.tropicalFarm,
  },
  {
    id: 4,
    producerName: "Ana Morales",
    farmName: "Finca La Paz",
    location: "Antioquia, Colombia",
    product: "Cacao",
    hectares: 1.5,
    profilePhoto: sharedImages.femalePortrait2,
    imageUrl: sharedImages.coffeeAerial,
  },
];

function buildGenericProducer(index: number): ProducerListItem {
  const id = index + 5;
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[Math.floor(index / firstNames.length) % lastNames.length];
  const farmPrefix = farmPrefixes[index % farmPrefixes.length];
  const farmSuffix = farmSuffixes[(index * 3) % farmSuffixes.length];
  const location = locations[index % locations.length];
  const hectares = Number((1.2 + ((index * 0.37) % 3.9)).toFixed(1));

  return {
    id,
    producerName: `${firstName} ${lastName}`,
    farmName: `${farmPrefix} ${farmSuffix}`,
    location,
    product: "Cacao",
    hectares,
    profilePhoto: genericAvatars[index % genericAvatars.length],
    imageUrl: genericFarmImages[index % genericFarmImages.length],
  };
}

export const TOTAL_PRODUCTORES = 123;

export const productoresList: ProducerListItem[] = [
  ...richProducerList,
  ...Array.from({ length: TOTAL_PRODUCTORES - richProducerList.length }, (_, index) =>
    buildGenericProducer(index),
  ),
];

const richProductoresData: Record<string, ProductorData> = {
  "1": {
    name: "Carlos Mendoza",
    location: "Santo Domingo, Ecuador",
    avatar: sharedImages.malePortrait1,
    carouselImages: [
      sharedImages.cocoaLandscape,
      sharedImages.cacaoPods,
      sharedImages.agriculturalFields,
    ],
    productosOrganicos: [
      { nombre: "Cacao Fino de Aroma", tipo: "Mazorca", imagen: sharedImages.cacaoPods },
      { nombre: "Granos Fermentados", tipo: "Cacao", imagen: sharedImages.cacaoBeans },
      { nombre: "Nibs Premium", tipo: "Procesado", imagen: sharedImages.cacaoBeans },
    ],
    productosConvencionales: [
      { nombre: "Cafe Arabica", tipo: "Grano", imagen: sharedImages.coffeeAerial },
      { nombre: "Platano Harton", tipo: "Fruta", imagen: sharedImages.greenLandscape },
      { nombre: "Yuca", tipo: "Tuberculo", imagen: sharedImages.agriculturalFields },
    ],
  },
  "2": {
    name: "Maria Garcia",
    location: "Arequipa, Peru",
    avatar: sharedImages.femalePortrait1,
    carouselImages: [
      sharedImages.agriculturalFields,
      sharedImages.cacaoPods,
      sharedImages.cocoaLandscape,
    ],
    productosOrganicos: [
      { nombre: "Cacao CCN-51", tipo: "Mazorca", imagen: sharedImages.cacaoPods },
      { nombre: "Granos Secos", tipo: "Cacao", imagen: sharedImages.cacaoBeans },
    ],
    productosConvencionales: [
      { nombre: "Maiz Amarillo", tipo: "Grano", imagen: sharedImages.agriculturalFields },
      { nombre: "Frijol", tipo: "Leguminosa", imagen: sharedImages.greenLandscape },
      { nombre: "Aguacate Hass", tipo: "Fruta", imagen: sharedImages.greenLandscape },
      { nombre: "Papaya", tipo: "Fruta", imagen: sharedImages.tropicalFarm },
    ],
  },
  "3": {
    name: "Jose Ramirez",
    location: "Patzcuaro, Mexico",
    avatar: sharedImages.malePortrait2,
    carouselImages: [
      sharedImages.tropicalFarm,
      sharedImages.cacaoPods,
      sharedImages.cocoaLandscape,
    ],
    productosOrganicos: [
      { nombre: "Cacao Criollo", tipo: "Mazorca", imagen: sharedImages.cacaoPods },
      { nombre: "Granos Tostados", tipo: "Cacao", imagen: sharedImages.cacaoBeans },
      { nombre: "Licor de Cacao", tipo: "Procesado", imagen: sharedImages.cacaoBeans },
    ],
    productosConvencionales: [
      { nombre: "Vainilla", tipo: "Especia", imagen: sharedImages.greenLandscape },
      { nombre: "Chile Jalapeno", tipo: "Hortaliza", imagen: sharedImages.agriculturalFields },
      { nombre: "Tomate", tipo: "Hortaliza", imagen: sharedImages.tropicalFarm },
    ],
  },
  "4": {
    name: "Ana Morales",
    location: "Antioquia, Colombia",
    avatar: sharedImages.femalePortrait2,
    carouselImages: [
      sharedImages.coffeeAerial,
      sharedImages.cacaoPods,
      sharedImages.cocoaLandscape,
    ],
    productosOrganicos: [
      { nombre: "Cacao Trinitario", tipo: "Mazorca", imagen: sharedImages.cacaoPods },
      { nombre: "Granos Premium", tipo: "Cacao", imagen: sharedImages.cacaoBeans },
    ],
    productosConvencionales: [
      { nombre: "Cafe Colombia", tipo: "Grano", imagen: sharedImages.coffeeAerial },
      { nombre: "Banano", tipo: "Fruta", imagen: sharedImages.greenLandscape },
      { nombre: "Naranja", tipo: "Fruta", imagen: sharedImages.tropicalFarm },
      { nombre: "Arroz", tipo: "Grano", imagen: sharedImages.agriculturalFields },
      { nombre: "Limon", tipo: "Fruta", imagen: sharedImages.greenLandscape },
    ],
  },
};

function buildGenericProfile(listItem: ProducerListItem): ProductorData {
  return {
    name: listItem.producerName,
    location: listItem.location,
    avatar: listItem.profilePhoto,
    carouselImages: [
      listItem.imageUrl,
      genericCarouselImages[listItem.id % genericCarouselImages.length],
      genericCarouselImages[(listItem.id + 2) % genericCarouselImages.length],
    ],
    productosOrganicos: organicProductTemplates.slice(0, 2 + (listItem.id % 2)),
    productosConvencionales: conventionalProductTemplates.slice(0, 1 + (listItem.id % 3)),
  };
}

export const productoresData: Record<string, ProductorData> = Object.fromEntries(
  productoresList.map((producer) => [
    String(producer.id),
    richProductoresData[String(producer.id)] ?? buildGenericProfile(producer),
  ]),
);

export const dashboardMetrics = {
  totalProductores: TOTAL_PRODUCTORES,
  totalHectareas: Number(
    productoresList.reduce((sum, producer) => sum + producer.hectares, 0).toFixed(1),
  ),
  comprasMes: 45280,
  toneladasCacao: 156.8,
  hectareasDeforestacion: 28.5,
  productoresLibresDeforestacion: 96,
  productoresConDeforestacion: 27,
  certificacionesOrganicas: 84,
  certificacionesUsdaRainforest: 97,
  buenasPracticasAgricolas: 109,
};
