import coffeehour1 from "../assets/images/coffeehour1.png";
import coffeehour4 from "../assets/images/coffeehour4.png";
import coffeehour5 from "../assets/images/coffeehour5.png";

const services = [
  {
    title: "Desayunos Deliciosos",
    features: [
      "Variedad de platillos frescos",
      "Ingredientes de alta calidad",
      "Opciones saludables y personalizadas",
    ],
    icon: `<img src="../../src/assets/images/desayuno-ingles.gif" alt="Icono de desayuno" class="w-12 h-12 rounded-full border-4 border-gray-300"/>`,
  },
  {
    title: "Café de Especialidad",
    features: [
      "Granos 100% seleccionados",
      "Métodos de extracción artesanales",
      "Aromas y sabores inigualables",
    ],
    icon: `<img src="../../src/assets/images/taza-de-cafe.gif" alt="Icono de desayuno" class="w-12 h-12 rounded-full border-4 border-gray-300"/>`,
  },
  {
    title: "Postres y Bocadillos",
    features: [
      "Repostería artesanal",
      "Ingredientes frescos y naturales",
      "Variedad para todos los gustos",
    ],
    icon: `<img src="../../src/assets/images/magdalena.gif" alt="Icono de desayuno" class="w-12 h-12 rounded-full border-4 border-gray-300"/>`,
  },
  {
    title: "Ambiente Acogedor",
    features: [
      "Espacios cómodos y modernos",
      "Wi-Fi gratuito",
      "Ideal para trabajar o relajarse",
    ],
    icon: `<img src="../../src/assets/images/conversacion.gif" alt="Icono de desayuno" class="w-12 h-12 rounded-full border-4 border-gray-300"/>`,
  },
];

const solutions = [
  {
    title: "Sobre Nosotros",
    painPoint:
      "A veces, encontrar un lugar acogedor para disfrutar un café auténtico puede ser un desafío.",
    agitatepainPoint:
      "Es frustrante cuando buscas un lugar con buen café, pero terminas en un sitio sin carácter ni calidez.",
    solution:
      "En Coffee Hour, creemos que cada taza cuenta una historia. Desde nuestros inicios en Chapala, nos hemos dedicado a ofrecer café de especialidad con granos seleccionados y un ambiente acogedor que invita a quedarse.",
    img: coffeehour1, // Cambia esta imagen por una adecuada para la sección
  },
  {
    title: "Calidad Artesanal",
    painPoint:
      "No siempre es fácil encontrar un café preparado con pasión y granos de calidad.",
    agitatepainPoint:
      "Es decepcionante cuando el sabor del café no está a la altura de tus expectativas, dejándote con una experiencia poco memorable.",
    solution:
      "En Coffee Hour, trabajamos con productores locales para garantizar la frescura y el sabor en cada taza. Nuestros baristas cuidan cada detalle para que disfrutes una experiencia auténtica.",
    img: coffeehour4, // Cambia esta imagen por una relacionada con la calidad
  },
  {
    title: "Experiencia Única",
    painPoint:
      "Muchas cafeterías carecen de un ambiente acogedor que invite a quedarse.",
    agitatepainPoint:
      "Es desalentador cuando el espacio no ofrece comodidad o encanto, haciendo que la visita sea breve e impersonal.",
    solution:
      "En Coffee Hour, hemos diseñado un espacio cálido y acogedor, perfecto para trabajar, leer o compartir momentos especiales. Queremos que cada visita sea parte de tu día perfecto en Chapala.",
    img: coffeehour5, // Cambia esta imagen por una del interior de la cafetería
  },
];

const faqs = [
  {
    question: "¿Qué tipos de café ofrecen en Coffee Hour?",
    answer:
      "En Coffee Hour ofrecemos una variedad de cafés de especialidad, incluyendo espresso, americano, capuchino, latte y opciones de café filtrado como prensa francesa y Chemex. También contamos con opciones de leche vegetal.",
  },
  {
    question: "¿Ofrecen servicio para llevar o a domicilio?",
    answer:
      "Sí, puedes pedir para llevar o disfrutar de nuestro servicio a domicilio. También aceptamos pedidos por teléfono.",
  },
  {
    question: "¿Se pueden reservar mesas para grupos o eventos?",
    answer:
      "¡Claro! Ofrecemos reservaciones para grupos grandes o eventos especiales. Contáctanos con anticipación para asegurar la disponibilidad y personalizar tu experiencia.",
  },
  {
    question: "¿Tienen conexión WiFi disponible?",
    answer:
      "Sí, en Coffee Hour contamos con WiFi gratuito para que puedas trabajar, estudiar o simplemente disfrutar mientras te relajas con una buena taza de café.",
  },
];

export { services, solutions, faqs };
