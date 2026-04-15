/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let calculatedCost = 0;
let dailyRate = 35
let numDaysSelected = 0

const dayButtons = document.getElementsByClassName("blue-hover");
const clearDaysButton = document.getElementById("clear-button");
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");
const calculatedCostDisplay = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


for(let button of dayButtons) {
    if(!button.classList.contains("small-button") && !button.classList.contains("fake-button")) {
        button.addEventListener("click", function () {
            if(!button.classList.contains("clicked")) {
                button.classList.toggle("clicked");
                numDaysSelected++;
                calculate();
            }
        });
    }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


clearDaysButton.addEventListener("click", function () {
    for(let button of dayButtons) {
        if(button.classList.contains("clicked") && !button.classList.contains("small-button")) {
            button.classList.toggle("clicked");
        }
    }
    numDaysSelected = 0;
    calculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


halfDayButton.addEventListener("click", function () {
    dailyRate = 20;
    if(!halfDayButton.classList.contains("clicked")) {
        halfDayButton.classList.toggle("clicked");
        fullDayButton.classList.toggle("clicked");
        calculate();
    }
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


fullDayButton.addEventListener("click", function () {
    dailyRate = 35;
    if(!fullDayButton.classList.contains("clicked")) {
        fullDayButton.classList.toggle("clicked");
        halfDayButton.classList.toggle("clicked");
        calculate();
    }
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate() {
    calculatedCost = dailyRate * numDaysSelected;
    calculatedCostDisplay.innerHTML = calculatedCost;
}
