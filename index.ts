const display = document.getElementById("display") as HTMLInputElement;


function appendToDisplay(value: string) {
    display.value += value;
}

function calculate() {
    try {
        
        display.value = display.value.replace(/sin\(/g, 'Math.sin(');
        display.value = display.value.replace(/cos\(/g, 'Math.cos(');
        display.value = display.value.replace(/tan\(/g, 'Math.tan(');
        display.value = display.value.replace(/log\(/g, 'Math.log10(');
        display.value = display.value.replace(/√\(/g, 'Math.sqrt(');
        display.value = display.value.replace(/π/g, 'Math.PI');
        display.value = display.value.replace(/e/g, 'Math.E');
        display.value = display.value.replace(/\^/g, '**');
        display.value = display.value.replace(/²/g, '**2');
        display.value = display.value.replace(/³/g, '**3');


        let openBrackets = (display.value.match(/\(/g) || []).length;
        let closeBrackets = (display.value.match(/\)/g) || []).length;
        while (openBrackets > closeBrackets) {
            display.value += ')';
            closeBrackets++;
        }

        display.value = String(eval(display.value));
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

function toggleAdvanced() {
    const calculator = document.getElementById("Calculator");
    if (calculator) {
        calculator.classList.toggle("expanded");
    }
}

(window as any).appendToDisplay = appendToDisplay;
(window as any).calculate = calculate;
(window as any).clearDisplay = clearDisplay;
(window as any).DeleteFromDisplay = DeleteFromDisplay;
(window as any).toggleAdvanced = toggleAdvanced;