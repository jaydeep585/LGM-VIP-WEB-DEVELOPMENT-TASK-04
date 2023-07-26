const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonText = event.target.innerText;

        if (buttonText === "AC") {

            inputBox.value = "";
        } else if (buttonText === "DEL") {

            inputBox.value = inputBox.value.slice(0, -1);
        } else if (buttonText === "=") {

            try {
                const result = eval(inputBox.value);
                inputBox.value = result;
            } catch (error) {

                inputBox.value = "Error";
            }
        } else {

            inputBox.value += buttonText;
        }
    });
});
