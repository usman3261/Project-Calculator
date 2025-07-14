function sum(num1 ,num2 ){
    return num1 + num2;
}
function sub(num1 ,num2 ){
    return num1 - num2;
}
function prod(num1 ,num2 ){
    return num1 * num2;
}
function div(num1 ,num2 ){
    return num1 / num2;
}

let num1=0;
let num2=0;
let operator="";
let resultShown = false;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const val = button.textContent;

   
        if (!isNaN(val)) {
            if (resultShown) {
                num1 = "";
                resultShown = false;
            }

            if (operator === "") {
                num1 += val;
                display.textContent = num1;
            } else {
                num2 += val;
                display.textContent = num2;
            }
        }

        else if (["+", "-", "*", "/"].includes(val)) {
            if (num1 !== "") {
                operator = val;
                display.textContent = "";
            }
        }
    });
});

document.querySelector(".btneq").addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operator !== "") {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        const result = operate(operator, a, b);
        display.textContent = result;

        
        num1 = result.toString();
        num2 = "";
        operator = "";
        resultShown = true;
    }
});
document.querySelector(".btnC").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "";
});





 function operate(operator,num1,num2){
    if(operator=="+")
       return sum(num1,num2);
    if(operator=="-")
       return sub(num1,num2);
    if(operator=="*")
       return prod(num1,num2);
    if(operator=="/")
       return div(num1,num2);
    else
        return "Invalid Operation";

}



