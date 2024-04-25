import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Socializze",
    desc: "Social Media Platform wher you can post, make friends and chat.",
    img: "/static/projects/yei-learn.png",
    github: "https://github.com/FaizanJavair/Socializze",
    tags: ["HTML", "CSS", "Bootstrap", "Django", "Django Rest-Framework", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: 1,
    title: "TickTrack",
    desc: "A 3-in-1 App where you can make todo list, track habits and check weather updates.",
    img: "/static/projects/ticktrack.png",
    link: "https://www.youtube.com/watch?v=03DLpGk_Rv4",
    github:"https://github.com/FaizanJavair/TickTrack",
    tags: ["React Native", "CSS", "Javascript", "Firebase", "JSON", "OpenWeather API"],
  },
  {
    id: 2,
    title: "Weatherly",
    desc: "An intuitive mobile app that shows hourly, daily and current weather according to location.",
    img: "/static/projects/weatherly.png",
    link: "https://youtu.be/iN6SQHM4M9k",
    github: "https://github.com/FaizanJavair/Weatherly_Weather-App",
    tags: ["React Native", "Javascript", "CSS", "JSON", "OpenWeather API"],
  },
  {
    id: 3,
    title: "Battle Space",
    desc: "A top down 2D Shooter with rich features and amazing levels.",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["Unity", "C#"],
  },
  {
    id: 4,
    title: "Astronaut Data Modeling",
    desc: "A simple website that does CRUD operation on astronaut modeled data.",
    img: "/static/projects/astronaut.png",
    github: "https://github.com/FaizanJavair/Blogging-website-template/",
    tags: ["HTML","Bootstrap", "Javascript", "EJS", "MySQL", "Express", "NodeJS"],
  },
  {
    id: 5,
    title: "Wine Data Machine Learning - KNN",
    desc: "Implementing KNN and conducting Cross-Validation using KNN. Seeing the difference in Euclidean and Manhattan distance function and comparing average and folds.",
    img: "/static/projects/ml-knn.png",
    github: "",
    link:"https://comfy-mermaid-2e2392.netlify.app/",
    tags: ["Python", "SciKit Learn"],
  },
  {
    id: 6,
    title: "OtoDecks DJ Application",
    desc: "A DJing application with two simultaneous tracks.",
    img: "/static/projects/dj.png",
    link: "https://github.com/FaizanJavair/juce-dj-app/",
    tags: ["C++", "JUCE"],
  },
  {
    id: 7,
    title: "Ideal Smart Home",
    desc: "Simple Application that allows to manage and control the smart devices.",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/FaizanJavair/ideal-smart-home",
    tags: ["HTML","Bootstrap", "Javascript", "EJS", "MySQL", "Express", "NodeJS"],
  },
  {
    id: 8,
    title: "Simple Blog Website",
    desc: "A simple website that displays blogs in cards with custom front-end styling.",
    img: "/static/projects/dailybugle.png",
    link: "https://mellow-madeleine-e74cc0.netlify.app/",
    github: "https://github.com/FaizanJavair/Blogging-website-template/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 9,
    title: "Pencil Man",
    desc: "Simple platformer game.",
    img: "/static/projects/pencilmangame.png",
    link: "https://wondrous-cocada-a557b0.netlify.app/",
    github:"https://github.com/FaizanJavair/pencilman/",
    tags: ["Javascript", "p5.js", "HTML"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
