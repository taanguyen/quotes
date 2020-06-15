// user input is black
const userQuoteElem = document.getElementById("user-quote");
userQuoteElem.addEventListener("input", e =>{
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
    const quoteResponse = await inputResponse.json();
    // extract random quote for display
    const quoteForDisplay = quoteResponse.quote;
    userQuoteElem.value = "";
    document.getElementById("response-quote").scrollIntoView();    
    // display quote 
    document.getElementById("response-quote").textContent = quoteForDisplay;
});
