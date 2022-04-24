import React, { useEffect, useContext } from 'react'
import './cube.scss';
import { motion } from 'framer-motion';
import { pageVariants } from '../App';
import { Context } from '../Context/Store';

const loadingVariants = {
  initial: {
    opacity: 0,
    translateY: 300, 
  },
  in: {
    opacity: 1,
    translateY: 0, 
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
  out: {
    opacity: 0,
    translateY: 300, 
  },
}

const CubeText = ({text}) => {
    return <motion.span
    initial={{ opacity: 0, y: 220 }}
    animate={{ opacity: 1, y: 220 }}
    transition={{ delay: 1, type: 'spring', stiffness: 50, damping: 20 }}
    className="cube-text"
    >{text}</motion.span>
}

const loadTime = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
 
function BuildingDependencies() {
  const loadingStatement = "Building Dependencies";
  const {state, dispatch} = useContext(Context);
  useEffect(() => {
    loadTime(3500).then(() => dispatch({...state, loading: false}))
  }, [/* run only on first mount */])
  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit="out"
    variants={loadingVariants}
    className="container">
      <div className="cube">
        <div className="sides">
          <div className="top"></div>
          <div className="right"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      {loadingStatement === "Building Dependencies" && <CubeText text={loadingStatement} />}
    </motion.div>
  );
}

export default BuildingDependencies