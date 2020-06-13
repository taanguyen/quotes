// user input is black
const userQuoteElem = document.getElementById("user-quote");
//const userQuote = document.createTextNode("");
userQuoteElem.addEventListener("input", e =>{
    //console.log("you entered: " + e.target.value);
    userQuoteElem.style.color = "black";
});
// scroll when user hits submit
const formElement = document.querySelector("form");
const submit = formElement.elements.submit;
submit.addEventListener("click", async event =>{
    event.preventDefault();
    // initiate a POST request to write to db 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: userQuoteElem.value
    }
    const inputResponse = await fetch('/', options);
    const quoteResponse = await inputResponse.text();
    console.log(quoteResponse);
    document.getElementById("response-quote").scrollIntoView();    
});
