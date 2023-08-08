import bcrImg from "../assets/projects-img/bcr.png";
import nextJs from "../assets/projects-img/nextjs.png";
import pituChat from "../assets/projects-img/pituChat.png";
import secondhand from "../assets/projects-img/secondhand.png";

const dummyData = [
  {
    name: "secondhand",
    description:
      "82% of Indonesians possess approximately 200 million unused items. Our platform aims to help them convert these items into money through the advantage of bargaining. We stand out from competitors like Carousell and E-bay. Our frontend uses React.js, and the backend relies on Node.js with PostgreSQL as the database.",
    link: "https://deploy-fe-1.vercel.app/",
    img_link: secondhand,
  },
  {
    name: "car rental",
    description:
      "this is one of my first website that I created. It only use static HTML with pre-loaded JSON data of cars (you could see it in my github repository). This website use Express.js for the server and Bootstrap 5 for the styling",
    link: "https://static-rental-car.vercel.app/",
    img_link: bcrImg,
  },
  {
    name: "pitu chat",
    description:
      "Pituchat is a website where people could chat and integrate their e-commerce accounts. Currently there’s no backend for the website. This website uses ReactJS as it’s framework and Tailwind CSS for the CSS framework. This is my test assignment when i'm applying for Paragon.",
    link: "https://pituchat-paragon.vercel.app/",
    img_link: pituChat,
  },
  {
    name: "nextjs training",
    description:
      "This website has two features, Title Transformer and User Fetcher. User Fetcher use API from randomuser.me. It fetch a data one at a time and show it. Title Transformer could title and change it’s colour every second. This website use Next.js as the framework, and ChakraUI for the styling.",
    link: "https://nextjs-training-kevin.vercel.app/",
    img_link: nextJs,
  },
];

export default dummyData;
