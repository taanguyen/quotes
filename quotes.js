const userQuoteElem = document.getElementById("user-quote");
const userQuote = document.createTextNode("");
userQuoteElem.addEventListener("input", e =>{
    console.log("you entered: " + e.target.value);
    userQuoteElem.style.color = "black";
});
