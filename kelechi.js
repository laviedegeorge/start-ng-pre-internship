
const name = document.getElementById("name");
const title = document.getElementById("title");



const clearField = () => {
    const erFeilds = document.querySelectorAll(".red");
    erFeilds.forEach(e => {
        e.style.display = "none";
    })
}

const validateEmail = (event) => {
    const email = document.getElementById("e_mail");
    let er = email.nextElementSibling;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let tested = re.test(String(email.value).toLowerCase());

    if(!tested) {
        event.preventDefault();
        er.style.display = "block";
        er.innerHTML = "Invalid email address";
    } else {
        er.style.display = "none";
    }
}




const validateNameTitle = (id, event) => {

    if (id.value.length >= 4) {
        return true;
    } else {
        event.preventDefault();
        let er = id.nextElementSibling;
        er.style.display = "block";
        er.innerHTML = "input less than 4 characters";
    }
}

const validateMsg = (event) => {
    const msg = document.getElementById("message");
    let er = msg.nextElementSibling;
    if (msg.value.length >= 20) {
        return true;
    } else {
        event.preventDefault();
        er.style.display = "block";
        er.innerHTML = "input less than 4 characters";
    }
}



const validateForm = (event) => {
    clearField();
    validateNameTitle(name, event);
    validateNameTitle(title, event);
    validateEmail(event);
    validateMsg(event);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", validateForm);