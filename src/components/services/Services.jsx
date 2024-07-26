import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Focusing on your web Layout
          <br /> and SEO friendly content
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Design & Inspirations</h2>
          <p>
            <img className="brand-img" src="https://crocoblock.com/wp-content/uploads/2022/05/Looking-for-Web-Design-Inspiration.png" alt="" srcset="" />
          </p>
      
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Stories & connections </h2>
          <p>
            <img className="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5-Yo0rLXHZEJc6cHyJVUm5FIgUaPlC8f2g&s" alt="" srcset="" />
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Layouts & grids</h2>
          <p>
           <img className="brand-img" src="https://htmlburger.com/blog/wp-content/uploads/2021/08/website-layout-ideas.png" alt="" />
          </p>
      
        </motion.div>
       
      
      </motion.div>
    </motion.div>
  );
};

export default Services;
