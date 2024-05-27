import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Socializze",
    desc: "Social Media Platform wher you can post, make friends and chat.",
    img: "/static/projects/social-media.png",
    github: "https://github.com/FaizanJavair/Socializze",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Django",
      "Django Rest-Framework",
      "Python",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: 1,
    title: "TickTrack",
    desc: "A 3-in-1 App where you can make todo list, track habits and check weather updates.",
    img: "/static/projects/ticktrack.png",
    link: "https://www.youtube.com/watch?v=03DLpGk_Rv4",
    github: "https://github.com/FaizanJavair/TickTrack",
    tags: [
      "React Native",
      "CSS",
      "Javascript",
      "Firebase",
      "JSON",
      "OpenWeather API",
    ],
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
    title: "Sentiment Analysis - IMDB Dataset",
    desc: "Training a model to conduct binary classification and analysing using average and precision values.",
    img: "/static/projects/sentiment-bc.png",
    link: "https://delightful-figolla-730cb6.netlify.app/",
    tags: [
      "Python",
      "Keras",
      "Matplotlib",
      "Jupyter Notebook",
      "Binary Classification",
    ],
  },
  {
    id: 4,
    title: "Wine Data Machine Learning - KNN",
    desc: "Implementing KNN and conducting Cross-Validation using KNN. Seeing the difference in Euclidean and Manhattan distance function and comparing average and folds.",
    img: "/static/projects/ml-knn.png",
    github: "",
    link: "https://comfy-mermaid-2e2392.netlify.app/",
    tags: ["Python", "SciKit Learn"],
  },
  {
    id: 5,
    title: "Kindle Review Sentiment Analysis",
    desc: "Using Amazon Kindle Reviews to use VADER and Roberta Model to compare differences in sentiment analysis of each model.",
    img: "/static/projects/kindle.png",
    github: "",
    link: "https://zesty-paletas-2bc009.netlify.app/",
    tags: ["Python", "VADER", "Roberta Model", "Transformers"],
  },
  {
    id: 6,
    title: "Battle Space",
    desc: "A top down 2D Shooter with rich features and amazing levels. [Group Project]",
    img: "/static/projects/battle.png",
    link: "https://faizanjavair.itch.io/battle-space",
    github: "https://github.com/neveensakr/games-development-t10",
    tags: ["Unity", "C#"],
  },
  {
    id: 7,
    title: "Astronaut Data Modeling",
    desc: "A simple website that does CRUD operation on astronaut modeled data.",
    img: "/static/projects/astronaut.png",
    github: "https://github.com/FaizanJavair/Blogging-website-template/",
    tags: [
      "HTML",
      "Bootstrap",
      "Javascript",
      "EJS",
      "MySQL",
      "Express",
      "NodeJS",
    ],
  },
  {
    id: 8,
    title: "OtoDecks DJ Application",
    desc: "A DJing application with two simultaneous tracks.",
    img: "/static/projects/dj.png",
    github: "https://github.com/FaizanJavair/juce-dj-app/",
    tags: ["C++", "JUCE"],
  },
  {
    id: 9,
    title: "Simple Blog Website",
    desc: "A simple website that displays blogs in cards with custom front-end styling.",
    img: "/static/projects/dailybugle.png",
    link: "https://mellow-madeleine-e74cc0.netlify.app/",
    github: "https://github.com/FaizanJavair/Blogging-website-template/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 10,
    title: "Pencil Man",
    desc: "Simple platformer game.",
    img: "/static/projects/pencilmangame.png",
    link: "https://wondrous-cocada-a557b0.netlify.app/",
    github: "https://github.com/FaizanJavair/pencilman/",
    tags: ["Javascript", "p5.js", "HTML"],
  },
  {
    id: 11,
    title: "Music Visualizer",
    desc: "Music Visualizer that shows different music propeties such as treble, high mids etc. [Use Spacebar to see Menu or select options from 1-5 to see the Visuals]",
    img: "/static/projects/music.png",
    link: "https://bejewelled-centaur-3e8397.netlify.app/",
    tags: ["Javascript", "p5.js", "HTML"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
