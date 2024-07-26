import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yamini Singh
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/yamini-singh-98972b25a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" />
          </a>
          <a href="https://github.com/yamisingh99">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhg-eM9fZX7D8Jf3bdcBwV91f6RCGM7FJ5npKy3XHMKcf3ZV_0vOU5qpQUibyh3nfXLWo&usqp=CAU" alt="" srcset="" />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
