
function showError(field, message){
    field.nextSibling.nextSibling.children[0].innerHTML = message;
    setTimeout(() => {
        field.nextSibling.nextSibling.children[0].innerHTML = "";
    }, 4000)
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return true;
    }
    return false;
}

function validate(e){
    const form = document.querySelector('#form-container');
    const fields = [form.firstName, form.lastName, form.password, form.confirmPassword]
    flag = false;
    fields.forEach(field => {
        if (!field.value){
            flag = true;
            field.nextSibling.nextSibling.children[0].innerHTML = "Please don't leave field empty!";
            setTimeout(() => {
                field.nextSibling.nextSibling.children[0].innerHTML = "";
            }, 4000)
        }
    });

    // UserID validation
    if (!form.UserId.value){
        flag = true;
        showError(form.UserId, "Please don't leave field empty!");
    }
    else if (isNaN(form.UserId.value)){
        flag = true;
        showError(form.UserId, "Only numbers are accepted");
    }

    // Email validation
    if (!form.Email.value){
        flag = true;
        showError(form.Email, "Please don't leave field empty!");
    } else if(!ValidateEmail(form.Email.value)){
        flag = true;
        showError(form.Email, "Invalid email, please enter again");
    }

    // Password Validation
    if (form.password.value && form.password.value !== form.confirmPassword.value){
        flag = true;
        showError(form.confirmPassword, "Confirm password does not match with password");
    }

    // Only execute when the flag is False
    if (!flag){
        let modal =document.querySelector('#modal');
        modal.style.top = '3%';
        setTimeout(() => {
            modal.style.top = '-100%';
        }, 3000);
    }

}

function animateField(e){
    e.previousElementSibling.style.transform = 'scale(1,1)';
}

function disableAnimation(e){
    e.previousElementSibling.style.transform = 'scale(0,1)';
}

function reset(){
    const fields = [form.firstName, form.lastName, form.password, form.confirmPassword, form.Email, form.UserId]
    fields.forEach(field => {
        if (!field.value){
            field.value = "";
        }
    });
}

