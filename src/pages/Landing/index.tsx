import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="c">
        <motion.div 
          className="logo-container"
          initial={{ 
            opacity: 0,
            skew: 20,
            skewY: 20,

           }}
          animate={{ 
            opacity: 1,
            skew: 0,
            skewY: 0
           }}
          transition={{ 
            duration: 2
           }}
        >
          <img 
            src={logoImg} 
            alt="Proffy"
          />
          <h2>Sua plataforma de estudos online.</h2>
        </motion.div>
        
        <motion.img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
          initial={{ 
            opacity: 0,
            y: 200,
            scale: 0
           }}
          animate={{ 
            opacity: 1,
            y: 0,
            scale: 1
           }}
          transition={{ 
            duration: 1
           }}
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <motion.img 
              src={studyIcon} 
              alt="Estudar"
              initial={{
                x: -2000
               }}
              animate={{ 
                x: 0
               }}
              transition={{ 
                duration: 1,
                delay: 2
               }}
            />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <motion.img 
              src={giveClassesIcon} 
              alt="Dar aulas"
              initial={{
                x: 2000
               }}
              animate={{ 
                x: 0
               }}
              transition={{ 
                duration: 1,
                delay: 2
               }}
            />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas<img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;