let numberA = "";
let numberB = "";
let operator = "";
let result = "";
const audioFile = document.querySelector("#audiofile");
const resultPanel = document.querySelector("#resultPanel");
//const numberButtons = document.getElementsByClassName("numberButtons");
const operatorButtons = document.getElementsByClassName("operatorButtons");
const extraButtons = document.getElementsByClassName("extraButtons");
/*const buttonOne = document.getElementById("numberOne");
const buttonTwo = document.getElementById("numberTwo");
const buttonThree = document.getElementById("numberThree");
const buttonFour = document.getElementById("numberFour");
const buttonFive = document.getElementById("numberFive");
const buttonSix = document.getElementById("numberSix");
const buttonSeven = document.getElementById("numberSeven");
const buttonEight = document.getElementById("numberEight");
const buttonNine = document.getElementById("numberNine");
const buttonZero = document.getElementById("numberZero");*/
const operatorDivide = document.getElementById("divide");
const operatorMultiply = document.getElementById("multiply");
const operatorSubstract = document.getElementById("substract");
const operatorAdd = document.getElementById("add");
const operatorEqual = document.getElementById("equal");
const allClear = document.getElementById("allClear");
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

function playAudio()
{
    audioFile.play();
}

//NUMBER INPUT BLOCK 

document.querySelectorAll('.numberButtons').forEach(function(btn) 
{
    btn.addEventListener('click', function() 
    {
      const value = btn.textContent.trim();
  
      if (operatorClicked == false) {
        numberA += value;
        resultPanel.textContent += value
      } else if (operatorClicked == true) {
        numberB += value;
        resultPanel.textContent += value;
      }
    })
  });


//OPEERATOR INPUT BLOCK
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
        resultPanel.textContent += "x";
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
        resultPanel.textContent += "x";
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
        numberA = tempResult;
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

    else if (resultPanel.textContent == "+" || resultPanel.textContent == "-" || 
             resultPanel.textContent == "*" || resultPanel.textContent == "/")
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
        if(result.toString().length > 10)
        {
        resultPanel.textContent = (Math.round(tempResult*100)/100).toExponential(3);
        }
        else
        resultPanel.textContent = Math.round(tempResult*100)/100;
    } 

    else if(numberA != "" && numberB != "")
    {
        calculate();
        equalClicked = true;
        if(result.toString().length > 10)
        {
        resultPanel.textContent = (Math.round(result*100)/100).toExponential(3);
        }
        else
        resultPanel.textContent = Math.round(result*100)/100;
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



