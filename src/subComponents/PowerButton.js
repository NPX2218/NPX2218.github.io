////////////////////////////////////
//IMPORTING LIBRARIES
////////////////////////////////////

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

////////////////////////////////////
// IMPORTING COMPONENTS
////////////////////////////////////

import { PowerBtn } from '../components/AllSvgs'

////////////////////////////////////
// POWER BUTTON CSS
////////////////////////////////////

const powerAnimation = keyframes`
    to{
        box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.28);
    }
`


const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background-color: #FCF6F4;
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items:center;
    z-index:3;

    cursor: pointer;
    transition: all 0.5s ease-in-out;

    animation: ${powerAnimation} 0.5s ease-in-out infinite;
    &:hover{
        background-color: grey;
        //rgba(0,255,0,0.4); rgba(0,255,0,0.2)
        box-shadow: 0 0 8px 6px grey;
    }

    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }
`

////////////////////////////////////
// POWER BUTTON VALUE 
////////////////////////////////////

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <PowerBtn width={30} height={25} fill='currentColor' />
            </NavLink>
        </Power>
    )
}
    
////////////////////////////////////
// EXPORTING POWER BUTTON
////////////////////////////////////

export default PowerButton