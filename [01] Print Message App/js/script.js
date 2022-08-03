
// get elements into variable
var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEl = document.getElementById("msg")

// Events

// buttonEle.onclick = function () {

//     // get value from input
//     var inputValue = inputEle.value;

//     if (inputValue != "") {
//         // put input Value into P
//         msgEl.innerHTML = inputValue

//         // empty input value
//         inputEle.value = ""
//     }
//     else{
//         msgEl.innerHTML = "PLZ Enter Text"
//     }

// } 


// Anthor Way

inputEle.addEventListener("change" , function () {

    // get value from input
    var inputValue = inputEle.value;

    if (inputValue != "") {
        // put input Value into P
        msgEl.innerHTML = inputValue

        // empty input value
        inputEle.value = ""
    }
    else{
        msgEl.innerHTML = "PLZ Enter Text"
    }

} )