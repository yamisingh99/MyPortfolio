import React, { useRef } from "react";
import "./portfolio.scss";
import newsAppImage from "./news-app.png"; // Import the image
import wordAppImg from "./pink.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Youtube UI",
    img: "https://i0.wp.com/pureinfotech.com/wp-content/uploads/2023/05/windows-11-install-youtube-app-hero.webp?fit=1673%2C1064&quality=78&strip=all&ssl=1",
    desc: "I just created a youtube clone project using youtube data v3 API having functionality of searching and showing recommended videos from the buffer using react-redux state management and props.",
    link: "https://yt-demo99.netlify.app/"
  },
  {
    id: 2,
    title: "News Hub",
    img: newsAppImage, // Use the imported image variable
    desc: " News Hub is a React-based news application that delivers real-time global news updates. It features a user-friendly interface with category filtering and a responsive design for all devices. The app utilizes efficient API handling to fetch and display the latest articles seamlessly",
    link: "https://global-news99.netlify.app/"
  },
  {
    id: 3,
    title: "Word-Counter",
    img: wordAppImg,
    desc: "Word-Counter is a React-based text utility app that simplifies text manipulation tasks. It features functionalities like converting text to uppercase, lowercase, and counting words and characters. With its straightforward interface, users can efficiently transform and analyze text in real-time",
    link: "https://word-counter99.netlify.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    window.open(item.link, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        {/* <h1>Featured Works</h1> */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
