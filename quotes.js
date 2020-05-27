// user input is black
const userQuoteElem = document.getElementById("user-quote");
const userQuote = document.createTextNode("");
userQuoteElem.addEventListener("input", e =>{
    //console.log("you entered: " + e.target.value);
    userQuoteElem.style.color = "black";
});
// scroll when user hits submit
const formElement = document.querySelector("form");
const submit = formElement.elements.submit;
submit.addEventListener("click", e =>{
    e.preventDefault();
    document.getElementById("response-quote").scrollIntoView();    
})
