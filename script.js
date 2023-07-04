let numberA = "";
let numberB = "";
let operator = "";
let result = "";
const resultPanel = document.querySelector("#resultPanel");
const operatorButtons = document.getElementsByClassName("operatorButtons");
const extraButtons = document.getElementsByClassName("extraButtons");
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

        case "x":
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
    const audioFile = document.querySelector("#audiofile");  

    audioFile.volume = 0.1;
    audioFile.pause();
    audioFile.currentTime = 0;
    audioFile.play();
}

//NUMBER INPUT

document.querySelectorAll('.numberButtons').forEach(function(btn) 
{
    btn.addEventListener('click', function() 
    {
      playAudio();
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

 //OPERATOR INPUT 

document.querySelectorAll('.basicOperator').forEach(function(btn) 
{
    btn.addEventListener('click', function() 
    {
      playAudio();
      const operatorValue = btn.getAttribute('data-operator').trim();
  
      if(resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("/") == true || 
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("*") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("+") == true ||
       resultPanel.textContent.substring(0, resultPanel.textContent.length).endsWith("-") == true)
    {
        return;
    }

    else if(operatorClicked == false)
    {
        operator = operatorValue;
        operatorClicked = true;
        resultPanel.textContent += operatorValue;
    }
    else
    {
        calculate();
        tempResult = result;
        numberA = tempResult;
        numberB = "";
        operatorClicked = true;
        operator = operatorValue;
        resultPanel.textContent += operatorValue;
    }
    })
  });

//Equal

operatorEqual.addEventListener("click", function()
{
    playAudio();
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

//AC buttons

allClear.addEventListener("click", function()
{
    playAudio();
    numberA = "";
    numberB = "";
    result = "";
    operator = "";
    operatorClicked = false;
    equalClicked = false;
    stringOperators = false;
    resultPanel.textContent = "";
});



