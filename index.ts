const display = document.getElementById("display") as HTMLInputElement;


function appendToDisplay(value: string) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
function clearDisplay() {
    try {
        display.value = "";
    } catch (e) {
        display.value = "Error";
    }
}
function DeleteFromDisplay() {
    display.value = display.value.slice(0, -1);
}


(window as any).appendToDisplay = appendToDisplay;
(window as any).calculate = calculate;
(window as any).clearDisplay = clearDisplay;
(window as any).DeleteFromDisplay = DeleteFromDisplay;