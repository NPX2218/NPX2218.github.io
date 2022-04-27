////////////////////////////////////
// IMPORTING LIBRARIES
////////////////////////////////////

import { createGlobalStyle } from "styled-components";

////////////////////////////////////
// GLOBAL CSS STYLES
////////////////////////////////////

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after,h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    h1,h2,h3,h4,h5,h6{
        display: inline-block;
    }


    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Source Sans Pro',sans-serif;
    }

    input,
    textarea{
        width: 90%;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        border-width: 0.1px 0.1px;

    }

    textarea{
        resize: none;
    }

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

////////////////////////////////////
// EXPORTING GLOBALSTYLE
////////////////////////////////////

export default GlobalStyle;