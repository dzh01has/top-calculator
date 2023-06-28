let numberA = "";
let numberB = "";
let operator = "";
let result = "";
const resultPanel = document.querySelector("#resultPanel");
const numberButtons = document.getElementsByClassName("numberButtons");
const operatorButtons = document.getElementsByClassName("operatorButtons");
const extraButtons = document.getElementsByClassName("extraButtons");
const buttonOne = document.getElementById("numberOne");
const buttonTwo = document.getElementById("numberTwo");
const buttonThree = document.getElementById("numberThree");
const buttonFour = document.getElementById("numberFour");
const buttonFive = document.getElementById("numberFive");
const buttonSix = document.getElementById("numberSix");
const buttonSeven = document.getElementById("numberSeven");
const buttonEight = document.getElementById("numberEight");
const buttonNine = document.getElementById("numberNine");
const buttonZero = document.getElementById("numberZero");
const operatorDivide = document.getElementById("divide");
const operatorMultiply = document.getElementById("multiply");
const operatorSubstract = document.getElementById("substract");
const operatorAdd = document.getElementById("add");
const operatorEqual = document.getElementById("equal");
const allClear = document.getElementById("allClear");
//const clear = document.getElementById("clear");
let operatorClicked = false;
let equalClicked = false;
let tempResult = "";


function calculate()
{

    switch (operator)
    {
        case "+":
        {
            result = +numberA + +numberB;
        };
        break;

        case "-":
        {
            result = numberA - numberB;
        }
        break;

        case "*":
            {
                result = numberA * numberB;
            }
        break;   
            
        case "/":
            {
                result = numberA / numberB;
            }
        break;

        default:
        console.log("Wrong input!");    
        };
};


/** INPUT BLOCK */

buttonOne.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 1;
        resultPanel.textContent += "1";
    }
    else if (operatorClicked == true)
    {
        numberB += 1;
        resultPanel.textContent += "1";
    }


});

buttonTwo.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 2;
        resultPanel.textContent += "2";
    }
    else if (operatorClicked == true)
    {
        numberB += 2;
        resultPanel.textContent += "2";
    }
});

buttonThree.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 3;
        resultPanel.textContent += "3";
    }
    else if (operatorClicked == true)
    {
        numberB += 3;
        resultPanel.textContent += "3";
    }
});

buttonFour.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 4;
        resultPanel.textContent += "4";
    }
    else if (operatorClicked == true)
    {
        numberB += 4;
        resultPanel.textContent += "4";
    }
});

buttonFive.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 5;
        resultPanel.textContent += "5";
    }
    else if (operatorClicked == true)
    {
        numberB += 5;
        resultPanel.textContent += "5";
    }
});

buttonSix.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 6;
        resultPanel.textContent += "6";
    }
    else if (operatorClicked == true)
    {
        numberB += 6;
        resultPanel.textContent += "6";
    }
});

buttonSeven.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 7;
        resultPanel.textContent += "7";
    }
    else if (operatorClicked == true)
    {
        numberB += 7;
        resultPanel.textContent += "7";
    }
});

buttonEight.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 8;
        resultPanel.textContent += "8";
    }
    else if (operatorClicked == true)
    {
        numberB += 8;
        resultPanel.textContent += "8";
    }
});

buttonNine.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 9;
        resultPanel.textContent += "9";
    }
    else if (operatorClicked == true)
    {
        numberB += 9;
        resultPanel.textContent += "9";
    }
});

buttonZero.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 0;
        resultPanel.textContent += "0";
    }
    else if (operatorClicked == true)
    {
        numberB += 0;
        resultPanel.textContent += "0";
    }
});

operatorDivide.addEventListener("click", function()
{
    if(resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("/") == true || 
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("*") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("+") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("-") == true)
    {
        return;
    }

    else if(operatorClicked == false)
    {
        operator = "/";
        operatorClicked = true;
        resultPanel.textContent += "/";
    }
    else
    {
        calculate();
        tempResult = result;
        numberA = tempResult;
        console.log(numberA);
        numberB = "";
        operatorClicked = true;
        operator = "/";
        resultPanel.textContent += "/";
    }
});

operatorMultiply.addEventListener("click", function()
{
    if(resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("/") == true || 
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("*") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("+") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("-") == true)
    {
        return;
    }

    else if(operatorClicked == false)
    {
        operator = "*";
        operatorClicked = true;
        resultPanel.textContent += "*";
    }
    else
    {
        calculate();
        tempResult = result;
        numberA = tempResult;
        console.log(numberA);
        numberB = "";
        operatorClicked = true;
        operator = "*";
        resultPanel.textContent += "*";
    }
});

operatorSubstract.addEventListener("click", function()
{
    if(resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("/") == true || 
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("*") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("+") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("-") == true)
    {
        return;
    }

    else if(operatorClicked == false)
    {
        operator = "-";
        operatorClicked = true;
        resultPanel.textContent += "-";
    }
    else
    {
        calculate();
        tempResult = result;
        numberA = tempResult;
        console.log(numberA);
        numberB = "";
        operatorClicked = true;
        operator = "-";
        resultPanel.textContent += "-";
    }
});

operatorAdd.addEventListener("click", function()
{
    if(resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("/") == true || 
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("*") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("+") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("-") == true)
    {
        return;
    }

    else if(operatorClicked == false)
    {
        operator = "+";
        operatorClicked = true;
        resultPanel.textContent += "+";
    }
    else
    {
        calculate();
        tempResult = result;
        console.log(tempResult);
        numberA = tempResult;
        console.log(numberA);
        numberB = "";
        operatorClicked = true;
        operator = "+";
        resultPanel.textContent += "+";
    }
});

operatorEqual.addEventListener("click", function()
{
    if(numberB == "0" && operator == '/')
    {   
        alert("Crashed the universe!");
        numberA = "";
        numberB = "";
        result = "";
        operator = "";
        operatorClicked = false;
        equalClicked = false;
    }
    /*else if(resultPanel.textContent.endsWith("+") == true || resultPanel.textContent.endsWith("-") == true 
         || resultPanel.textContent.endsWith("*") == true || resultPanel.textContent.endsWith("/") == true)
    {
        alert("Input ending with an operator isn't allowed");
        numberA = "";
        numberB = "";
        result = "";
        operator = "";
        operatorClicked = false;
        equalClicked = false;
        stringOperators = false;
        resultPanel.textContent = "";
    }*/

    else if (resultPanel.textContent == "+" || resultPanel.textContent == "-" || resultPanel.textContent == "*" || resultPanel.textContent == "/")
    {
        alert("You can't calculate with just an operator!");
        numberA = "";
        numberB = "";
        result = "";
        operator = "";
        operatorClicked = false;
        equalClicked = false;
    }

    else if(numberA != "" && resultPanel.textContent.endsWith("+") == true || resultPanel.textContent.endsWith("-") == true 
                                           || resultPanel.textContent.endsWith("*") == true || resultPanel.textContent.endsWith("/") == true)
    {
        equalClicked = true;
        resultPanel.textContent = tempResult; 
    } 

    else if(numberA != "" && numberB != "")
    {
        calculate();
        equalClicked = true;
        resultPanel.textContent = result;
    }
});

allClear.addEventListener("click", function()
{
    numberA = "";
    numberB = "";
    result = "";
    operator = "";
    operatorClicked = false;
    equalClicked = false;
    stringOperators = false;
    resultPanel.textContent = "";
});

/*clear.addEventListener("click", function()
{

    resultPanel.textContent = resultPanel.textContent.substring(0, resultPanel.textContent.length -1);
})*/



/*$(":button").click(function()
{   
    if(equalClicked == false)
    {
        resultPanel.textContent = numberA + operator + numberB;
    }
    else if(equalClicked == true)
    {
        resultPanel.textContent = result;
    }  
});*/



