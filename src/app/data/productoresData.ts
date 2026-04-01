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

export const productoresData: Record<string, ProductorData> = {
  // Carlos Mendoza - Productor principal de Cacao Fino de Aroma
  "1": {
    name: "Carlos Mendoza",
    location: "Santo Domingo, Ecuador",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYXJtZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4MjE4OTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    carouselImages: [
      "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1642504917866-f48ec5eb3b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    productosOrganicos: [
      {
        nombre: "Cacao Fino de Aroma",
        tipo: "Mazorca",
        imagen:
          "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Granos Fermentados",
        tipo: "Cacao",
        imagen:
          "https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwZmVybWVudGVkJTIwZHJ5aW5nfGVufDF8fHx8MTc3NDgyMTg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Nibs Premium",
        tipo: "Procesado",
        imagen:
          "https://images.unsplash.com/photo-1772986238545-ee975ad77780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2hvY29sYXRlJTIwY2FjYW8lMjBuaWJzfGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    productosConvencionales: [
      {
        nombre: "Café Arábica",
        tipo: "Grano",
        imagen:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGZyZXNofGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Plátano Hartón",
        tipo: "Fruta",
        imagen:
          "https://images.unsplash.com/photo-1603833665858-e61d17a86224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0YW5vJTIwYmFuYW5hJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0ODIxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Yuca",
        tipo: "Tubérculo",
        imagen:
          "https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dWNhJTIwY2Fzc2F2YSUyMHJvb3R8ZW58MXx8fHwxNzc0ODIxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },

  // María García - Especialista en Cacao CCN-51 y cultivos mixtos
  "2": {
    name: "María García",
    location: "Arequipa, Perú",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgyMTg5N3ww&ixlib=rb-4.1.0&q=80&w=400",
    carouselImages: [
      "https://images.unsplash.com/photo-1642504917866-f48ec5eb3b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    productosOrganicos: [
      {
        nombre: "Cacao CCN-51",
        tipo: "Mazorca",
        imagen:
          "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Granos Secos",
        tipo: "Cacao",
        imagen:
          "https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwZmVybWVudGVkJTIwZHJ5aW5nfGVufDF8fHx8MTc3NDgyMTg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    productosConvencionales: [
      {
        nombre: "Maíz Amarillo",
        tipo: "Grano",
        imagen:
          "https://images.unsplash.com/photo-1603006905003-be475563bc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwbWFpemUlMjB5ZWxsb3d8ZW58MXx8fHwxNzc0ODIxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Frijol",
        tipo: "Leguminosa",
        imagen:
          "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGZyZXNoJTIwZHJ5fGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Aguacate Hass",
        tipo: "Fruta",
        imagen:
          "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwaGFzcyUyMGZyZXNofGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Papaya",
        tipo: "Fruta",
        imagen:
          "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjBmcnVpdCUyMHRyb3BpY2FsfGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },

  // José Ramírez - Experto en cultivos tradicionales mexicanos
  "3": {
    name: "José Ramírez",
    location: "Pátzcuaro, México",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxlfGVufDF8fHx8MTc3NDgyMTg5OHww&ixlib=rb-4.1.0&q=80&w=400",
    carouselImages: [
      "https://images.unsplash.com/photo-1765052293482-654d98e11e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZhcm0lMjBwbGFudGF0aW9ufGVufDF8fHx8MTc3NDcyMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    productosOrganicos: [
      {
        nombre: "Cacao Criollo",
        tipo: "Mazorca",
        imagen:
          "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Granos Tostados",
        tipo: "Cacao",
        imagen:
          "https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwZmVybWVudGVkJTIwZHJ5aW5nfGVufDF8fHx8MTc3NDgyMTg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Licor de Cacao",
        tipo: "Procesado",
        imagen:
          "https://images.unsplash.com/photo-1772986238545-ee975ad77780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2hvY29sYXRlJTIwY2FjYW8lMjBuaWJzfGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    productosConvencionales: [
      {
        nombre: "Vainilla",
        tipo: "Especia",
        imagen:
          "https://images.unsplash.com/photo-1592788174877-3f99727fd23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwYmVhbnMlMjBwb2RzfGVufDF8fHx8MTc3NDk5OTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      {
        nombre: "Chile Jalapeño",
        tipo: "Hortaliza",
        imagen:
          "https://images.unsplash.com/photo-1627770246352-35d53657538f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWxhcGVubyUyMHBlcHBlcnMlMjBmcmVzaCUyMGdyZWVufGVufDF8fHx8MTc3NDk5OTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      {
        nombre: "Tomate",
        tipo: "Hortaliza",
        imagen:
          "https://images.unsplash.com/photo-1443131612988-32b6d97cc5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0b21hdG9lcyUyMGZyZXNofGVufDF8fHx8MTc3NDk1MjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
    ],
  },

  // Ana Morales - Productora diversificada con enfoque en café y cacao
  "4": {
    name: "Ana Morales",
    location: "Antioquia, Colombia",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzc0ODIxODk5fDA&ixlib=rb-4.1.0&q=80&w=400",
    carouselImages: [
      "https://images.unsplash.com/photo-1599565103151-694e8f2745e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzQ3MjE4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    productosOrganicos: [
      {
        nombre: "Cacao Trinitario",
        tipo: "Mazorca",
        imagen:
          "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Granos Premium",
        tipo: "Cacao",
        imagen:
          "https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwZmVybWVudGVkJTIwZHJ5aW5nfGVufDF8fHx8MTc3NDgyMTg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    productosConvencionales: [
      {
        nombre: "Café Colombia",
        tipo: "Grano",
        imagen:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGZyZXNofGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Banano",
        tipo: "Fruta",
        imagen:
          "https://images.unsplash.com/photo-1603833665858-e61d17a86224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0YW5vJTIwYmFuYW5hJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0ODIxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Naranja",
        tipo: "Fruta",
        imagen:
          "https://images.unsplash.com/photo-1547514701-42782101795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBmcnVpdCUyMGZyZXNofGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Arroz",
        tipo: "Grano",
        imagen:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW4lMjB3aGl0ZXxlbnwxfHx8fDE3NzQ4MjE4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Limón",
        tipo: "Fruta",
        imagen:
          "https://images.unsplash.com/photo-1590502593747-42a996133562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGZydWl0JTIwZnJlc2h8ZW58MXx8fHwxNzc0ODIxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },

  // Resto de productores - Genéricos
  "5": {
    name: "Diego Fernández",
    location: "Cusco, Perú",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3NzQ4MjE5MDB8MA&ixlib=rb-4.1.0&q=80&w=400",
    carouselImages: [
      "https://images.unsplash.com/photo-1765570265263-edda751afcd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGdyZWVuJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NDcyMTg0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1763241841248-11aa17ab625a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzIxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    productosOrganicos: [
      {
        nombre: "Cacao Orgánico",
        tipo: "Mazorca",
        imagen:
          "https://images.unsplash.com/photo-1578269830911-6159f1aee3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWNhbyUyMHBvZHMlMjB0cmVlJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NzQ4MjE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Granos de Cacao",
        tipo: "Fermentado",
        imagen:
          "https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwZmVybWVudGVkJTIwZHJ5aW5nfGVufDF8fHx8MTc3NDgyMTg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        nombre: "Nibs de Cacao",
        tipo: "Procesado",
        imagen:
          "https://images.unsplash.com/photo-1772986238545-ee975ad77780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2hvY29sYXRlJTIwY2FjYW8lMjBuaWJzfGVufDF8fHx8MTc3NDgyMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    productosConvencionales: [],
  },
};