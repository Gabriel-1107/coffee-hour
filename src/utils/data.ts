import coffeehour1 from "../assets/images/coffeehour1.png";
import coffeehour4 from "../assets/images/coffeehour4.png";
import coffeehour5 from "../assets/images/coffeehour5.png";
import desayunoIngles from "../assets/images/desayuno-ingles.gif";
import tazaDeCafe from "../assets/images/taza-de-cafe.gif";
import magdalena from "../assets/images/magdalena.gif";
import conversacion from "../assets/images/conversacion.gif";

const services = [
  {
    title: "SERVICES1",
    features: ["SERVICES_1", "SERVICES__1", "SERVICES___1"],
    icon: desayunoIngles,
  },
  {
    title: "SERVICES2",
    features: ["SERVICES_2", "SERVICES__2", "SERVICES___2"],
    icon: tazaDeCafe,
  },
  {
    title: "SERVICES3",
    features: ["SERVICES_3", "SERVICES__3", "SERVICES___3"],
    icon: magdalena,
  },
  {
    title: "SERVICES4",
    features: ["SERVICES_4", "SERVICES__4", "SERVICES___4"],
    icon: conversacion,
  },
];

const solutions = [
  {
    title: "SOLUTIONS1",
    painPoint: "SOLUTIONS_1",
    agitatepainPoint: "SOLUTIONS__1",
    solution: "SOLUTIONS___1",
    img: coffeehour1, // Cambia esta imagen por una adecuada para la sección
  },
  {
    title: "SOLUTIONS2",
    painPoint: "SOLUTIONS_2",
    agitatepainPoint: "SOLUTIONS__2",
    solution: "SOLUTIONS___2",
    img: coffeehour4, // Cambia esta imagen por una relacionada con la calidad
  },
  {
    title: "SOLUTIONS3",
    painPoint: "SOLUTIONS_3",
    agitatepainPoint: "SOLUTIONS__3",
    solution: "SOLUTIONS___3",
    img: coffeehour5, // Cambia esta imagen por una del interior de la cafetería
  },
];

const faqs = [
  {
    question: "QUESTION1",
    answer: "ANSWER1",
  },
  {
    question: "QUESTION2",
    answer: "ANSWER2",
  },
  {
    question: "QUESTION3",
    answer: "ANSWER3",
  },
  {
    question: "QUESTION4",
    answer: "ANSWER4",
  },
];

export { services, solutions, faqs };
