import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme} from './Themes';
import $ from 'jquery'

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
//import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
//import FluidAnimation from 'react-fluid-animation'
//import contactForm from '../subComponents/contactForm';
import Fade from 'react-reveal/Fade';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height:100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index:3;
    line-height: 1.5;
    cursor: pointer;

    font-family: 'Ubuntu Mono',monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
        color:${props => props.theme.body};
    }

    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    ul,p{
        margin-left: 2rem;
    }
`

const ContactPage = () =>{
    return(
        <ThemeProvider theme={lightTheme}>
            <contactForm/>  
                <Box>
                    <LogoComponent theme='light'/>
                        <SocialIcons theme='light'/>
                            <PowerButton />
                            <Fade>
                                <Main>
                                    <form style={{padding: '15px'}} id="gform" name="gform" enctype="text/plain" target="hidden_iframe" onSubmit={(e) => {
                                        e.preventDefault()
                                        if(validateEmail(document.getElementById('entry.1045781291').value) === false){
                                            //If the email is not valid, then we display an error message
                                            alert("Please enter a valid email address");
                                        }else if(document.getElementById('entry.2005620554').value && document.getElementById('entry.1045781291').value && document.getElementById('entry.1065046570').value && document.getElementById('entry.839337160').value){
                                            //If it satisfies the requirements then it is submitted
                                            $('#gform *').fadeOut();
                                            $('#gform').prepend('Your submission has been processed...').css("font-family", "monospace").css('color', 'black').css('text-align','center');
                                        }else{
                                            //This function denies to submit the form if any of the fields are empty
                                            alert("Please fill in all the fields!"); 
                                            };}}

                                        action="https://docs.google.com/forms/d/e/1FAIpQLSeSoz9ga8LoC04tM_6bv1-Wzx5t0iMgmU5XjCm4FTzTeNXZRA/formResponse?">

                                        <label style={{fontSize: '19px'}}>Name: </label>
                                        <br></br>
                                        <input name="entry.2005620554" id="entry.2005620554" class="input-field" type="text" placeholder="Your Name..."></input>
                                        <br></br>

                                        <label style={{fontSize: '19px', lineHeight: '2em'}}>Email: </label>
                                        <br></br>
                                        <input name="entry.1045781291" id="entry.1045781291" class="input-field" type="text" placeholder="Your Email..."></input>
                                        <br></br>

                                        <label style={{fontSize: '19px', lineHeight: '2em'}}>Subject: </label>
                                        <br></br>
                                        <input name="entry.1065046570" id="entry.1065046570" class="input-field" type="text" placeholder="The Subject..."></input>
                                        <br></br>

                                        <label style={{fontSize: '19px', lineHeight: '2em'}}>Message: </label>
                                        <br></br>
                                        <textarea style={{minHeight: '20px', fontSize: '14px'}} name="entry.839337160" id="entry.839337160" class="input-field" placeholder="Message..."></textarea>

                                        <input Style="width: 100%;" id="submit-btn" type="submit" value="Send ✈"></input>
                                    </form>
                                    <Description>
                        </Description>
                    </Main>   
                </Fade> 
                <BigTitle text="CONTACT" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default ContactPage;