import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Logo = styled.h1`
  animation: pulse 5s infinite; 

  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico',cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index:3;

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

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          NB
        </Logo>
    )
}

export default LogoComponent
