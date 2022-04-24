import React from 'react'
import NavBar from '../NavBar/NavBar'
import './styles/index.scss';
import { motion } from 'framer-motion';
import { pageVariants } from '../App';
const Index = () => {
  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    className='home-page'>
        
    </motion.div>
  )
}

export default Index