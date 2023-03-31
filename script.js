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
let operatorClicked = false;
let equalClicked = false;


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
    }
    else if (operatorClicked == true)
    {
        numberB += 1;
    }
});

buttonTwo.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 2;
    }
    else if (operatorClicked == true)
    {
        numberB += 2;
    }
});

buttonThree.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 3;
    }
    else if (operatorClicked == true)
    {
        numberB += 3;
    }
});

buttonFour.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 4;
    }
    else if (operatorClicked == true)
    {
        numberB += 4;
    }
});

buttonFive.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 5;
    }
    else if (operatorClicked == true)
    {
        numberB += 5;
    }
});

buttonSix.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 6;
    }
    else if (operatorClicked == true)
    {
        numberB += 6;
    }
});

buttonSeven.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 7;
    }
    else if (operatorClicked == true)
    {
        numberB += 7;
    }
});

buttonEight.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 8;
    }
    else if (operatorClicked == true)
    {
        numberB += 8;
    }
});

buttonNine.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 9;
    }
    else if (operatorClicked == true)
    {
        numberB += 9;
    }
});

buttonZero.addEventListener("click", function()
{
    if (operatorClicked == false)
    {
        numberA += 0;
    }
    else if (operatorClicked == true)
    {
        numberB += 0;
    }
});

operatorDivide.addEventListener("click", function()
{
    operator = "/";
    operatorClicked = true;
});

operatorMultiply.addEventListener("click", function()
{
    operator = "*";
    operatorClicked = true;
});

operatorSubstract.addEventListener("click", function()
{
    operator = "-";
    operatorClicked = true;
});

operatorAdd.addEventListener("click", function()
{
    operator = "+";
    operatorClicked = true;
});

operatorEqual.addEventListener("click", function()
{
    if(numberB == 0 && operator == '/')
    {   
        alert("Crashed the universe!")
        numberA = "";
        numberB = "";
        result = "";
        operator = "";
        operatorClicked = false;
        equalClicked = false;
    }
    else if(numberB != "")
    {
        calculate();
        equalClicked = true;
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
});

$(":button").click(function()
{   
    if(equalClicked == false)
    {
        resultPanel.textContent = numberA + operator + numberB;
    }
    else if(equalClicked == true)
    {
        resultPanel.textContent = result;
    }  
});



