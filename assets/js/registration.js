// ===== REGISTRATION VALIDATION =====
const regForm = document.querySelector(".reg-form");
const registerBtn = document.querySelector('.register');
const resetBtn = document.querySelector('.reset');

const userData = {
    first_name: "",
    last_name: "",
    birthdate: "",
    email: "",
    password: "",
}

function checkUserData() {
    let errorCounter = 0;
    for (const key in userData) {
        if (userData[key] === "") {
            errorCounter++;
        }
    }
    window.location.href = '../index.html';
}


resetBtn.addEventListener('click', () => {
    regForm.reset();
    const regInputs = regForm.querySelectorAll("input");
    regInputs.forEach((input) => {
        const parent = input.parentElement;
        const errorMsg = parent.querySelector('.error-msg'); 
        if(errorMsg) {
            parent.removeChild(errorMsg);
        }
    });
});

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const regInputs = regForm.querySelectorAll("input");
    let counter = 0;
    
    regInputs.forEach((input) => {
        counter++;
        const inputGrp = input.parentElement; //get the parent of the input field
        validateInput(input, inputGrp, counter);
    });

    checkUserData();
});

function validateInput(input, parent, counter) {
    const data = input.value;
    const errorMsg = parent.querySelector('.error-msg');

    if(data === "") {
        if(!errorMsg) {
            let errorMsg = document.createElement('span');
            errorMsg.classList.add('error-msg');
            errorMsg.innerHTML = "Please enter your " + input.id;
            parent.appendChild(errorMsg);
        }
    } else {
        if(errorMsg) {
            //remove the error message if it exists
            parent.removeChild(errorMsg);
        }
        if(counter < 3) {
            userData[input.id] = data;
        }
        if(counter === 3) {
            validateAge(input, parent);
        }
        if(counter === 4) {
            validateEmail(input, parent);
        }
        if(counter === 5) {
            validatePassword(input, parent);
        }
        if(counter === 6) {
            matchConfirmPW(input, parent);
        }
    }
}

function validateAge(input, parent) {
    const birthdate = new Date(input.value);
    const currentDate = new Date();

    let ageInMilliseconds = currentDate - birthdate;
    let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    let ageInYears = ageInMilliseconds / millisecondsPerYear;
    
    const age = Math.floor(ageInYears);

    if(age < 18) {
        let errorMsg = document.createElement('span');
        errorMsg.classList.add('error-msg');
        errorMsg.innerHTML = `Age must be 18 and above`;
        parent.appendChild(errorMsg);
    } else {
        userData[input.id] = input.value;
    }
}

function validateEmail(input, parent) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailPattern.test(input.value)) {
        let errorMsg = document.createElement('span');
        errorMsg.classList.add('error-msg');
        errorMsg.innerHTML = `Invalid ${input.id}`;
        parent.appendChild(errorMsg);
    } else {
        userData[input.id] = input.value;
    }
}

function validatePassword(input, parent) {
    const passwordCheck = /^[a-zA-Z0-9]{8,}$/;

    if(!passwordCheck.test(input.value)) {
        let errorMsg = document.createElement('span');
        errorMsg.classList.add('error-msg');
        errorMsg.innerHTML = `Invalid ${input.id}. 8 char, no space and special char`;
        parent.appendChild(errorMsg);
    } else {
        userData[input.id] = input.value;
    }
}

function matchConfirmPW(input, parent) {
    if(input.value !== userData.password) {
        let errorMsg = document.createElement('span');
        errorMsg.classList.add('error-msg');
        errorMsg.innerHTML = `input did not match with the password`;
        parent.appendChild(errorMsg);
    }
}