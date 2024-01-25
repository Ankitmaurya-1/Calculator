const displayInput = document.querySelector(".displayInput");
const buttons = document.querySelectorAll(".btn");

let string = "";
let arr = Array.from(buttons);


arr.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        if (e.target.innerText === "=") {
            calc();
            displayInput.value = string;
        } else if (e.target.innerText === "C") {
            clearDisplay();
            displayInput.value = string;
        } else if (e.target.innerText === "DEL") {
            string = string.substring(0, string.length - 1);
            displayInput.value = string;
        }

        else {
            string += e.target.innerText;
            displayInput.value = string;

        }

    });
});

const clearDisplay = () => {
    string = "";
};

const calc = () => {
    string = eval(string);
};

