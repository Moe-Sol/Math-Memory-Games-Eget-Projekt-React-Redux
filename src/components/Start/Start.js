import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import styles from "./start.module.scss";
import infoIcon from "../../businessman.svg";
import Info from "../Info/Info";
import audioClick from "../../sounds/click1.mp3";
import { motion, useAnimationControls } from "framer-motion";
import { useWindowDimensions } from "../../components/utilities/utilities";

function Start() {
  const history = useHistory();
  const [toggleInfo, setToggleInfo] = useState("");
  const [audio] = useState(new Audio(audioClick));
  const { height, width } = useWindowDimensions();
  const constraintsRef = useRef(null);

  console.log(height, width);
  const [start, setStart] = useState(true);

  function plus() {}

  function minus() {}

  function multiplication() {
    history.push("/multiplication");
  }

  function division() {}

  function toggleInfoFun() {
    audio.play();
    setToggleInfo(true);
  }

  return (
    <div className={styles.startContainer}>
      {/* <header>
				<div onClick={toggleInfoFun}>
					<img src={infoIcon}></img>
				</div>
				<h1> Math Memory Game For Kids</h1>

			</header> */}
      {toggleInfo ? (
        <Info toggle={setToggleInfo} />
      ) : (
        <main>
          <section>
            <motion.div
              className={styles.rowOne}
              ref={constraintsRef}
              transition={{
                when: "afterChildren",
              }}
            >
              <motion.div
                drag
                dragConstraints={constraintsRef}
                style={{ width: width / 6, height: width / 13 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.colud1}
                transition={{
                  scale: {
                    // repeat: Infinity,
                    // repeatType: "mirror",
                    // repeat: 50,
                    duration: 0.3,
                    // delay: 0.5,
                  },
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
              />

              <motion.div
                drag
                dragConstraints={constraintsRef}
                style={{ width: width / 6, height: width / 13 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.colud2}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                transition={{
                  // repeat: Infinity,
                  // repeatType: "mirror",
                  duration: 0.3,
                }}
              />

              <motion.div
                drag
                dragConstraints={constraintsRef}
                style={{ width: width / 6, height: width / 13 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.colud3}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                transition={{
                  // repeat: 50,
                  duration: 0.3,
                  //  ease: [0, 0.71, 0.2, 1.01]
                }}
              />

              <motion.div
                drag
                dragConstraints={constraintsRef}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                style={{ width: width / 6, height: width / 13 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.colud2}
                transition={{
                  // repeat: 50,
                  duration: 0.3,

                  //  ease: [0, 0.71, 0.2, 1.01]
                }}
              ></motion.div>

              <motion.div
                drag
                dragConstraints={constraintsRef}
                style={{ width: width / 6, height: width / 13 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.colud1}
                transition={{
                  scale: {
                    // repeat: Infinity,
                    // repeatType: "mirror",
                    // repeat: 50,
                    duration: 0.3,
                    // delay: 0.5,
                  },
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
              ></motion.div>
            </motion.div>

            <div className={styles.rowTwo}>
              {/* */}

              <motion.div
                onClick={multiplication}
                style={{ width: width / 6, height: width / 13 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.gamesName}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              ></motion.div>
            </div>

       <div className={styles.rowThree}>
              <motion.div
                style={{ width: width / 6, height: width / 13 }}
                initial={{ opacity: 1, scale: 1, x: 0 - width / 6 }}
                animate={{ opacity: 1, scale: 1, x: width }}
                className={styles.colud2}
                transition={{
                  repeat: 50,
                  duration: 200,
                  delay: 0.8,
                  //  ease: [0, 0.71, 0.2, 1.01]
                }}
              ></motion.div>

              <motion.div
                style={{ width: width / 3.5, height: width / 8.5 }}
                initial={{ opacity: 1, scale: 1, x: width }}
                animate={{ opacity: 1, scale: 1, x: 0 - width / 3.5 }}
                className={styles.colud5}
                transition={{
                  repeat: 50,
                  duration: 160,
                  delay: 0.8,
                }}
              ></motion.div>
              <motion.div
                style={{ width: width / 6, height: width / 13 }}
                initial={{ opacity: 1, x: 0 - width / 6 }}
                animate={{ opacity: 1, x: width }}
                className={styles.colud1}
                transition={{
                  repeat: 50,
                  duration: 120,
                  delay: 0.5,
                  //  ease: [0, 0.71, 0.2, 1.01]
                }}
              ></motion.div>
              <motion.div
                style={{ width: width / 6, height: width / 13 }}
                initial={{ opacity: 1, scale: 1, x: width }}
                animate={{ opacity: 1, scale: 1, x: 0 - width / 6 }}
                className={styles.colud3}
                transition={{
                  repeat: 50,
                  duration: 160,
                  delay: 0.8,
                  //  ease: [0, 0.71, 0.2, 1.01]
                }}
              ></motion.div>
            </div> 

            {/* <div className={styles.one}>
							<motion.div
								style={{ width: (width / 6), height: (width / 13) }}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1, }}
								className={styles.colud4}
								transition={{

									duration: 1,
									delay: 0.5,
									ease: [0, 0.71, 0.2, 1.01]
								}}>

							</motion.div> </div>
						<div className={styles.one}>
							<motion.div
								style={{ width: (width / 6), height: (width / 13) }}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1, }}
								className={styles.colud4}
								transition={{

									duration: 1,
									delay: 0.5,
									ease: [0, 0.71, 0.2, 1.01]
								}}>

							</motion.div> </div>

						<div className={styles.one}>
							<motion.div
								style={{ width: (width / 6), height: (width / 13) }}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1, }}
								className={styles.colud4}
								transition={{

									duration: 1,
									delay: 0.5,
									ease: [0, 0.71, 0.2, 1.01]
								}}>

							</motion.div> </div> */}
            {/* <div className={styles.plusSignContainer} onClick={plus}>
							<h4>  &#43; </h4>
						</div>
						<div className={styles.minusSignContainer} onClick={minus}>
							<h4> &#8722; </h4>
						</div>
						<div className={styles.multiplicationSignContainer} onClick={multiplication}>
							<h4> &#215; </h4>
						</div>
						<div className={styles.divisionSignContainer} onClick={division}>
							<h4> &#247; </h4>
						</div>

						<div className={styles.colud1}></div>

						<div className={styles.colud2}></div> */}
          </section>
        </main>
      )}
    </div>
  );
}

export default Start;
