import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import Tilt from "react-parallax-tilt";

const Box = styled(motion.div)`

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);


  width: 65vw;
  height:55vh;
  display: flex;


  background: linear-gradient(
      to right,
      ${props => props.theme.body} 50%,
      ${props => props.theme.text} 50%) bottom,

      linear-gradient(
      to right,
      ${props => props.theme.body} 50%,
      ${props => props.theme.text} 50%) 
      
      top;
      background-repeat: no-repeat;
  
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};

  z-index:1;

`


const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic{
      position: absolute;
      bottom: 0;
      left: 40%;
      transform: translate(-50%,0%);
      width: 70%;
      height: auto;
      bottom: 10%
  }

  @media screen and (max-width: 920px){
    .pic{
      left: 30%;
    }
  }

  @media screen and (max-width: 640px){
    .pic{
      left: 25%;
    }
  }

  @media screen and (max-width: 480px){
    .pic{
      left: 20%;
    }
  }

`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &>*:last-child{
      color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
      font-size: calc(0.5rem + 1.5vw);
      font-weight:300;

  }

  /*Creating the Typewriter animation*/

    `
const Typewriter = styled.h3`
  display: inline-block;
  position: relative;
  text-align: left;
  margin: 0;
//width: max-content;

  &>*:before,
  &>*:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation-delay: 1s;
  }

  &>*:before {
    transition-delay: 3s;
    background: ${props => props.theme.text};
    animation: fadeBetween 1s,
    typewriter 3s steps(19) 1s forwards;
  }

  &>*:after {
    width: 0.125em;
    background: white;
    animation: typewriter 3s steps(19) 1s forwards,
      typewriterBlink 750ms steps(19) infinite;
  }

  @media only screen and (max-width: 1120) {
    display: none;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes typewriterBlink {
    to {
      background: transparent;
    }
  }

  @keyframes fadeBetween {
      0% {opacity: 0;}
      10% {opacity: 0;}
      15% {opacity: 0;}
      55% {
        opacity: 1;
        background ${props => props.theme.text}; 
        font-family: "Roboto Mono", monospace;
        position: relative;
        width: max-content;
        text-align: center;
        margin: 0 auto;
      }
      
  }


` 

const Paragraph = styled.p`
        font-family: "Roboto Mono", monospace;
        display: inline-block;
        @media only screen and (max-width: 930px) {
                width: 200px;
          }
        @media only screen and (max-width: 700px) {
                width: 150px;
          } 
        @media only screen and (max-width: 500px) {
                width: 100px;
          }
        @media only screen and (max-width: 400px) {
                width: 80px;
          }
        @media only screen and (max-width: 350px) {
                width: 70px;  
          }
`

const Intro = () => {
    return (
        <Box
          initial={{height:0}}
          animate={{height: '55vh'}}
          transition={{ type: 'spring', duration:2, delay:1 }}
        >        
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <Typewriter><h3>I'm Neel Bansal.</h3></Typewriter>
                    <Paragraph><h6 style={{}}>I am currently studying in school, and learning a few programming languages.</h6></Paragraph>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:1, delay: 2 }}
                >
             <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 'calc(30vh + 209px)', width: 'calc(30vw + 209px)'}} >
                <img className="pic" src={Me} alt="Profile Pic"/>
              </Tilt>
                </motion.div>
            </SubBox>
        </Box>
    )
}

const alertDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      alert("Tablet Mobile User, " + "For the best experience, please use a desktop computer. This website is a work in progress for mobile devices.")
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      alert("Welcome Mobile User, " + "For the best experience, please use a desktop computer. This website is a work in progress for mobile devices.")
    }
    return "desktop";
};
alertDeviceType();



export default Intro
