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
