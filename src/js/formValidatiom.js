var btnSubmit = document.getElementById("btnSubmit");
//btnSubmit.classList.add("disabled");
//btnSubmit.setAttribute("disabled", "disabled");

var namef = document.getElementById("name");
var nameHelpBlock = document.getElementById("nameHelpBlock");
var surnamef = document.getElementById("surname");
var surnameHelpBlock = document.getElementById("surnameHelpBlock");
var emailf = document.getElementById("email");
var emailHelpBlock = document.getElementById("emailHelpBlock");
var phonef = document.getElementById("phone");
var phoneHelpBlock = document.getElementById("phoneHelpBlock");
var passwordf = document.getElementById("password");
var passwordHelpBlock = document.getElementById("passwordHelpBlock");

function validateForm(e) {
    var name = document.getElementById('name').value;
    var nameRGEX = /[a-z,A-Z]\D/;
    var nameResult = nameRGEX.test(name);

    var surname = document.getElementById('surname').value;
    var surnameRGEX = /[a-z,A-Z]\D/;
    var surnameResult = surnameRGEX.test(surname);

    var email = document.getElementById('email').value;
    var emailRGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var emailResult = emailRGEX.test(email);

    var phone = document.getElementById('phone').value;
    var phoneRGEX = /^[\+\d]+(?:[\d-.\s()]*)$/ // /^(?=.*[0-9])[- +()0-9]+$/;
    var phoneResult = phoneRGEX.test(phone);

    var password = document.getElementById('password').value;
    var passwordRGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,25}$/;
    var passwordResult = passwordRGEX.test(password);


    if (nameResult && surnameResult && emailResult && phoneResult && passwordResult) {

        btnSubmit.classList.remove("disabled");
        btnSubmit.removeAttribute("disabled");
    } else if (name.length == 0 || surname.length == 0 || email.length == 0 || phone.length == 0 || password.length == 0) {

        btnSubmit.classList.add("disabled");
        btnSubmit.setAttribute("disabled", "disabled");
    }

}

function validateNameField() {
    //console.log(0)
    if (namef.value == '') {
        console.log(1)
        namef.style.borderColor = 'red';
        nameHelpBlock.style.display = 'block';

    } else {
        namef.style.borderColor = '#ced4da';
        nameHelpBlock.style.display = 'none';

    }
}
function validateSurnameField() {
    if (surnamef.value == '') {
        surnamef.style.borderColor = 'red';
        surnameHelpBlock.style.display = 'block';
    } else {
        surnamef.style.borderColor = '#ced4da';
        surnameHelpBlock.style.display = 'none';
    }
}
function validateEmailField() {
    var email = document.getElementById('email').value;
    var emailRGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var emailResult = emailRGEX.test(email);
    if (!emailResult) {
        emailf.style.borderColor = 'red';
        emailHelpBlock.style.display = 'block';
    } else {
        emailf.style.borderColor = '#ced4da';
        emailHelpBlock.style.display = 'none';
    }

}
function validatePhoneField() {
    var phone = document.getElementById('phone').value;
    var phoneRGEX = /^[\+\d]+(?:[\d-.\s()]*)$/
    var phoneResult = phoneRGEX.test(phone);
    if (!phoneResult) {
        phonef.style.borderColor = 'red';
        phoneHelpBlock.style.display = 'block';
    } else {
        phonef.style.borderColor = '#ced4da';
        phoneHelpBlock.style.display = 'none';
    }
}
function validatePasswordField() {
    var password = document.getElementById('password').value;
    var passwordRGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,25}$/;
    var passwordResult = passwordRGEX.test(password);

    if (!passwordResult) {
        passwordf.style.borderColor = 'red';
        passwordHelpBlock.style.display = 'block';
    } else {
        passwordf.style.borderColor = '#ced4da';
        passwordHelpBlock.style.display = 'none';
    }
}

function resetForm() {
    namef.value = '';
    surnamef.value = '';
    emailf.value = '';
    phonef.value = '';
    passwordf.value = '';
}

function formSubmit() {
    resetForm();
    window.location.href = 'http://localhost:8080/app/thankyou.html';
}

window.onload = function () {
    btnSubmit.classList.add("disabled");
    btnSubmit.setAttribute("disabled", "disabled");

};