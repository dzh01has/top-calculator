let numberA = "";
let numberB = "";
let operator = "";


function calculate(numberA, operator, numberB)
{
    switch (operator)
    {
        case "+":
        {
        return numberA + numberB;
        };
        break;

        case "-":
        {
            return numberA - numberB;
        }
        break;

        case "*":
            {
                return numberA * numberB;
            }
        break;   
            
        case "/":
            {
                return numberA / numberB;
            }
        break;

        default:
        console.log("Wrong input!");    
    };
};
