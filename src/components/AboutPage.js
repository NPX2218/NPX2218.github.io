import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import aboutmeimage from '../assets/Images/aboutmeimage.png'
import Fade from 'react-reveal/Fade';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height:100vh;
    position: relative;
    overflow: hidden;
`
const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
    
`

const AboutImage = styled.div`
    position: absolute;
    top: 50%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;
    img{
        width: 100%;
        height: auto;
    }
`

const Main =  styled.div`
    border: 2px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    padding: 2rem;
    width: 60vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);
  
    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                    <SocialIcons theme='dark'/>
                        <PowerButton />
                            <ParticleComponent theme='dark' />
                                <AboutImage>
                                    <img src={aboutmeimage} alt="aboutmeimage" />
                                </AboutImage>
                                    <Fade>
                                        <Main>
                                        Hello, My name is Neel Bansal, and I am a Programmer.
                                        <br/> <br/>
                                            I am currently studying in school, and learning a few programming languages.
                                        <br /> <br/>
                                        I enjoy taking on new projects that will challenge me, as well as acquiring new skills and broadening my programming expertise.
                                        </Main>
                                    </Fade>
                        <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
