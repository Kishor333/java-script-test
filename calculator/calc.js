
// let maxiCalc = document.querySelector('.display-indicate');
// let result = document.querySelector(".display-main");

// let operations = document.querySelector(".display-operations");

// operations.addEventListener()

// let ac = document.querySelector(".ac");
// let ce = document.querySelector(".ce");

// let divider = document.querySelector(".div");
// let multiply = document.querySelector(".mult");
// let add = document.querySelector(".plus");
// let subtract = document.querySelector(".minus");

// let seven = document.querySelector(".seven");
// let eight = document.querySelector(".eight");
// let nine = document.querySelector(".nine");
// let dot = document.querySelector(".dot");

// let four = document.querySelector(".four");
// let five = document.querySelector(".five");
// let six = document.querySelector(".six");

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");

// let zero = document.querySelector(".zero");

// let eq = document.querySelector(".eq");


var vars = {

    maxiCalc : document.querySelector('.display-indicate'),
 result : document.querySelector(".display-main"),

 operations : document.querySelector(".display-operations"),

 ac : document.querySelector(".ac"),
 ce : document.querySelector(".ce"),

 divider : document.querySelector(".div"),
 multiply : document.querySelector(".mult"),
 add : document.querySelector(".plus"),
 subtract : document.querySelector(".minus"),

 seven : document.querySelector(".seven"),
 eight : document.querySelector(".eight"),
 nine : document.querySelector(".nine"),
 dot : document.querySelector(".dot"),

 four : document.querySelector(".four"),
 five : document.querySelector(".five"),
 six : document.querySelector(".six"),

 one : document.querySelector(".one"),
 two : document.querySelector(".two"),
 three : document.querySelector(".three"),

 zero : document.querySelector(".zero"),

 eq : document.querySelector(".eq"),
}

let firstArg = '';
let secondArg = '';
let operatore = '';
let  calculate;
let allArg = '';
let gotSecondary = false;

for (item in vars) {
  

    vars[item].addEventListener("click", (e) => {
        var clickedButton = e.target;

        let clickedValue = +clickedButton.innerText;

        allArg = allArg + clickedButton.innerText;
    
        if (clickedButton.innerText != '=') {
            if(isNaN(clickedValue) && clickedButton.innerText != '.') {
                operatore = clickedButton.innerText;
                console.log(operatore, 'hello');
                gotSecondary = true;

            }
    
            if (!operatore) {
                firstArg = firstArg + clickedButton.innerText;
            }
    
            if (gotSecondary) {
                if(clickedButton.innerText == '.') {
                    secondArg = secondArg + clickedButton.innerText;
                }
                secondArg = secondArg + clickedButton.innerText;
                console.log(secondArg,'seconde Argument')
            }
        }

        // console.log('first:', firstArg);
        // console.log('operat:', operatore);
        // console.log('second1:', secondArg);
        // console.log('second:', secondArg.substring(1));

        if (secondArg.substring(1)) {
            calculate = doCalculate(firstArg, operatore, secondArg.substring(1));
        //    console.log('calculated:', calculate);
           firstArg = calculate;
           operatore = '';
           secondArg = '';
           updateFinalValue(calculate);
        }
        // console.log(firstArg,operatore,secondArg, 'this is the final first arg')
        // console.log('all',allArg)
        
        updateComputation(allArg);

        if(clickedButton.innerText == '=') {
            allArg = firstArg;
            updateComputation(allArg)
        }
        
        if(clickedButton.innerText == 'AC' || clickedButton.innerText == 'CE') {
         firstArg = '';
         secondArg = '';
         operatore = '';
         allArg = '';
         updateComputation(0);
         updateFinalValue(0)

        }
    });
};

function doCalculate(fir, ope, sec) {
    let finalValue = '';

    switch(ope) {
        case '−':
            finalValue = fir - sec;
            console.log(typeof fir)
            break;

        case '+':
            finalValue = +fir + +sec;
            break;

        case '%':
            finalValue = +fir / +sec;
            break;

        case 'x':
            finalValue = +fir * +sec;
            break;

        default:
            finalValue = fir;
            break;
    }

    return finalValue;

}

function updateComputation(allValue) {
    this.vars.operations.innerText =allValue;
}

function updateFinalValue(result) {
    this.vars.result.innerText = result;
}

// function