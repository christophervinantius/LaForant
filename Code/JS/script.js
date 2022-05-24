let submission = document.getElementById("submission");

function emailValidation(email){
    if(!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com") && !email.endsWith("@hotmail.com")){
        return false;
    }
    return true;
}

function dateValidation(date){
    if(date === ""){
        return false;
    }else{
        return true;
    }
}

function nationalityValidation(nationality){
    if(nationality === "blank"){
        return false;
    }else{
        return true;
    }
}

function usernameValidation(username){
    if(username.length < 4){
        return false;
    }else{
        return true;
    }
}

function passwordFirstValidation(password){
    if(password.length < 6){
        return false;
    }else{
        return true;
    }
}

function passwordSecondValidation(password, confirmation_password){
    if(password !== confirmation_password){
        return false;
    }else{
        return true;
    }
}

function submit(e){
    e.preventDefault();
    let input_email = document.getElementById("email").value;
    if(!emailValidation(input_email)){
        alert("Email must end with @gmail.com, @yahoo.com, or @hotmail.com!");
        return;
    }
    let input_date = document.getElementById("dob").value;
    if(!dateValidation(input_date)){
        alert("Date must be filled!");
        return;
    }
    let input_nationality = document.getElementById("nationality").value;
    if(!nationalityValidation(input_nationality)){
        alert("Nationality must be chosen!");
        return;
    }
    let input_username = document.getElementById("username").value;
    if(!usernameValidation(input_username)){
        alert("Username must be more than 3 characters!");
        return;
    }
    let input_password = document.getElementById("password").value;
    if(!passwordFirstValidation(input_password)){
        alert("Password must be more than 5 characters!");
        return;
    }
    let input_confirmation_password = document.getElementById("password-confirmation").value;
    if(!passwordSecondValidation(input_password, input_confirmation_password)){
        alert("Password confirmation must match the password!");
        return;
    }
    let input_agreement = document.getElementById("agreement");
    if(!input_agreement.checked){
        alert("You must accept the Terms and Conditions to continue!");
        return;
    }
    let confirmation = confirm("Confirm registration?");
    if(confirmation == false){
        return;
    }else{
        alert("Registration success!");
        window.location.href = 'homepage.html'; 
    }
}

submission.addEventListener("click", submit);