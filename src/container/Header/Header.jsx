import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const { isDark } = useSelector((state) => state.theme);

  useEffect(() => {
    const home = document.getElementById("home");

    if (isDark) {
      home.style.background = 'url("../../assets/bgIMG_dark.png")';
    } else {
      home.style.background = 'url("../../assets/bgIMG.png")';
    }
  }, [isDark]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>👋</span> */}
            <img src={images.wave} alt="wave" />
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>

              {/* <h1 className="head--text">Huseyin</h1> */}
              <TypeAnimation
                sequence={["Huseyin", 2000, "Huseyin"]}
                wrapper="h1"
                speed={300}
                repeat={1}
                className="head--text header--text"
              />
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">IT Enthusiast</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.django, images.react, images.redux].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
