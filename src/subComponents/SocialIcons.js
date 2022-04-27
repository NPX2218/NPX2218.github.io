import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, Instagram } from '../components/AllSvgs'
import {DarkTheme} from '../components/Themes'


const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    transform-origin: 50% 50%;
  
    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:3;
    animation: pulse 5s infinite; 
    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }
        
        100% {
            transform: scale(1);
        }
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`

const SocialIcons = (props) => {
    return (
        <Icons>

            {/* Github Social Icons */}
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1}}>

                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/NPX2218"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>

            {/* Twitter Social Icons */} 
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.2}}>
                
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://twitter.com/"}}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            
            {/* Facebook Social Icons */}
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.4}}>

                <NavLink style={{color:'inherit'}}  target="_blank" to={{pathname:"https://www.facebook.com/profile.php?id=100074526084996"}}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>

            {/* Instagram Social Icons */}
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.6}}>

                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.instagram.com/_neel_bansal_/"}}>
                    <Instagram width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>

            {/* Line on the left side */}
            <Line color={props.theme}

    initial={
        {
            height:0
        }
    }
    animate={{
        height: '8rem'
    }}
    transition={{
        type:'spring', duration:1, delay:0.8
    }}
        />
            </Icons>
        )
    }

export default SocialIcons
