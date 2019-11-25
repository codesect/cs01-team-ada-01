var firstName = document.getElementById("first-name").value;
var lastName = document.getElementById("last-name").value;
var email = document.getElementById("email").value;
var compName = document.getElementById("company-name").value;
var compUrl = document.getElementById("url").value;
var phone = document.getElementById("phone").value;
var message = document.getElementById("comment").value;
var errorText = document.getElementById("error-msg");
var text;

errorText.style.padding = "10px";

firstName.addEventListener("blur", fstNameVerify, true);
lastName.addEventListener("blur", lstNameVerify, true);
email.addEventListener("blur", emailVerify, true);
compName.addEventListener("blur", compNameVerify, true);
compUrl.addEventListener("blur", compUrlVerify, true);
phone.addEventListener("blur", phoneVerify, true);
message.addEventListener("blur", messageVerify, true);

function validateForm() {
    if (firstName.value == "" || firstName.length < 3) {
        firstName.style.border = "1px solid red";
        text = "Please Enter A Valid First Name";
        errorText.innerHTML = text;
        firstName.focus();
        return false;
    } else {
        return true;
    }

    if (lastName.value == "" || lastName.length < 3) {
        lastName.style.border = "1px solid red";
        text = "Please Enter A Valid Last Name";
        errorText.innerHTML = text;
        lastName.focus();
        return false;
    } else {
        return true;
    }

    function emailValidate(email) {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (email.value == "" || atpos < 1 || (dotpos - atpos < 2)) {
            email.style.border = "1px solid red";
            text = "Please Enter A Valid Email Address Using The Example Format";
            errorText.innerHTML = text;
            email.focus();
            return false;
        } else {
            return true;
        }
    }


    if (compName.value == "" || compName.length < 6) {
        compName.style.border = "1px solid red";
        text = "Please Enter A Valid Company Name";
        errorText.innerHTML = text;
        compName.focus();
        return false;
    } else {
        return true;
    }

    function validURL(compUrl) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
            '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); //fragment locater
        if (!pattern.test(compUrl)) {
            compName.style.border = "1px solid red";
            text = "Please Enter A Valid Company Name";
            errorText.innerHTML = text;
            compName.focus();
            return false;
        } else {
            return true;
        }
    }
    document.write(validURL("http://qries.com"));


    function phonenumber(phone) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phone.value.match(phoneno)) {
            return true;
        } else {
            phone.style.border = "1px solid red";
            text = "Please Enter A Valid Phone Number Using The Correct Format";
            errorText.innerHTML = text;
            phone.focus();
            return false;
        }
    }

    if (message.value == "" || message.length < 140) {
        message.style.border = "1px solid red";
        text = "Please Enter A Valid First Name";
        errorText.innerHTML = text;
        message.focus();
        return false;
    }
}

function clickSubmitButton() {
    var thankYou = "Thanks for your message, we will be in touch soon. ";
    document.getElementById("submit-btn").innerHTML = showThankYouMsg(thankYou);
}

function showThankYouMsg() {
    
}