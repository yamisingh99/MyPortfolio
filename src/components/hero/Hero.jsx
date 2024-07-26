import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="imageContainer">
          <img className="yami" src="/image1.png" alt="Yamini Singh" />
        </div>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>YAMINI SINGH</motion.h1>
          <motion.h2 variants={textVariants}>Web developer and UI designer</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={scrollToPortfolio}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={scrollToContact}>
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer & web designer
      </motion.div>
    </div>
  );
};

export default Hero;
