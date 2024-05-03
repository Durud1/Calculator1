document.addEventListener("DOMContentLoaded", function() {
    // Selecting the result input field
    const resultField = document.getElementById("result");

    // Selecting all buttons
    const buttons = document.querySelectorAll(".btn");

    // Adding click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.value;

            // Handling different button clicks
            switch (buttonText) {
                case "C":
                    resultField.value = "";
                    break;
                case "+/-":
                    // Implement changing sign functionality if needed
                    break;
                case "%":
                    // Implement percentage functionality if needed
                    break;
                case "DEL":
                    // Implement delete functionality if needed
                    break;
                case "=":
                    try {
                        // Evaluate the expression in the result field
                        resultField.value = eval(resultField.value);
                    } catch (error) {
                        // Handle error if expression is invalid
                        resultField.value = "Error";
                    }
                    break;
                default:
                    // Append the clicked button's value to the result field
                    resultField.value += buttonText;
            }
        });
    });
});
