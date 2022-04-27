import React from 'react';
import $ from 'jquery'
import styled from 'styled-components'


const styledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const contactForm = () => {
    return(
        //add the form style

        <form id="gform" name="gform" enctype="text/plain" target="hidden_iframe" onSubmit={(e) => {
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
            <input name="entry.2005620554" id="entry.2005620554" class="input-field" type="text" placeholder="Your Name..."></input>
            <br></br>
            <br></br>

            <label style={{fontSize: '19px'}}>Email: </label>
            <input name="entry.1045781291" id="entry.1045781291" class="input-field" type="text" placeholder="Your Email..."></input>
            <br></br>
            <br></br>

            <label style={{fontSize: '19px'}}>Subject: </label>
            <input name="entry.1065046570" id="entry.1065046570" class="input-field" type="text" placeholder="The Subject..."></input>
            <br></br>

            <label style={{fontSize: '19px'}}>Message: </label>
            <br></br>
            <textarea Style="width: 90%" name="entry.839337160" id="entry.839337160" class="input-field" placeholder="Message..."></textarea>

            <input Style="width: 100%;" id="submit-btn" type="submit" value="Send ✈"></input>
        </form>
    )
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default contactForm;