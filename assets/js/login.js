// ===== LOGIN VALIDATION =====
const loginForm = document.querySelector("form");
const loginBtn = document.querySelector('#loginBtn');

//once login button is clicked do the validation
loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const loginInputs = loginForm.querySelectorAll("input");
    let counter = 0;

    loginInputs.forEach((input) => {
        counter++;
        const inputGrp = input.parentElement; //get the parent of the input field
        validateLoginDetails(input, inputGrp, counter);
    });
});

// this will only check if the input values are empty
function validateLoginDetails(input, inputGrp, counter) {
    const inputData = input.value;
    const errorMsg = inputGrp.querySelector('.error-msg');

    if (inputData === "") {
        if (!errorMsg) {
            let errorMsg = document.createElement('p');
            errorMsg.classList.add('error-msg');
            errorMsg.innerHTML = "Please enter your " + input.id;
            inputGrp.appendChild(errorMsg);
        }
    } else {
        if (errorMsg) {
            //remove the error message if it exists
            inputGrp.removeChild(errorMsg);
        }
        if(counter === 1) {
            validateEmail(input, inputGrp);
        } else {
            return;
        }
    }
}

//validate if email input is correct base on the regular experession
//display error message if invalid
function validateEmail(input, inputGrp) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errorMsg = inputGrp.querySelector('.error-msg');

    if(!emailPattern.test(input.value)) {
        let errorMsg = document.createElement('p');
        errorMsg.classList.add('error-msg');
        errorMsg.innerHTML = "Invalid " + input.id;
        inputGrp.appendChild(errorMsg);

    } else {
        if (errorMsg) {
            //remove the error message if it exists
            inputGrp.removeChild(errorMsg);
        }
    }
    return;
}