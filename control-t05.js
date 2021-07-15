const validate1 = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (value.length > 0) {
        hideElement(msgId);
        alert("Tudo OK");
    } else {
        element.value = "";
        showElement(msgId);
    }
}

const validate2 = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (onlyLetters(value)) {
        hideElement(msgId);
        alert("Tudo OK");
    } else {
        element.value = "";
        showElement(msgId);
    }
}

const validate3 = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (onlyLetters(value) && value.length > 0 && value.length <= 10) {
        hideElement(msgId);
        alert("Tudo OK");
    } else {
        element.value = "";
        showElement(msgId);
    }
}

const validateNumber = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (onlyNumbers(value) && parseInt(value) > 0) {
        hideElement(msgId);
        alert("Tudo OK");
    } else {
        element.value = "";
        showElement(msgId);
    }
}

const validateOption = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (value > 0) {
        hideElement(msgId);
        if (value == 2) {
            alert("Calabresa é a melhor");
        } else {
            alert("Prefiro calabresa");
        }
    } else {
        element.value = 0;
        showElement(msgId);
    }
}


const validateCheckbox = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (element.checked) {
        hideElement(msgId);
        alert("Você tem bom gosto");
    } else {
        element.value = 0;
        showElement(msgId);
    }
}


const limparCombobox = (className) => {
    const elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        elements[i].checked = false;
    }
}
const validateCombobox = (className, msgId) => {
    const elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            hideElement(msgId);
            alert("Tudo OK");
            return;
        }
    }

    showElement(msgId);
}


const countCheckboxes = (className, msgId) => {
    const elements = document.getElementsByClassName(className);
    let count = 0;

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el.checked) {
            count = count + 1;
        }
    }

    if (count == 0) {
        showElement(msgId);
    } else if (count == 1) {
        alert(`Você marcou apenas 1 opção.`);
        hideElement(msgId);
    } else {
        alert(`Você marcou ${count} opções.`);
        hideElement(msgId);
    }
}



const showElement = (id) => {
    document.getElementById(id).classList.remove("d-none");
}

const hideElement = (id) => {
    document.getElementById(id).classList.add("d-none");
}

const cleanStr = (v) => {
    return v.replace(/\s/g, '');
}

const onlyLetters = (str) => {
    return str.match("^[A-Za-z0-9]+$");
}

const onlyNumbers = (str) => {
    return str.match(/^[0-9]+$/);
}





const validateNome = (id, msgId) => {
    const element = document.getElementById(id);
    const value = cleanStr(element.value);

    if (onlyLetters(value)) {
        hideElement(msgId);
        return true;
    } else {
        element.value = "";
        showElement(msgId);
        return false;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateLogin = (id, msgId) => {
    const element = document.getElementById(id);
    const value = element.value;

    if (validateEmail(value)) {
        hideElement(msgId);
        return true;
    } else {
        element.value = "";
        showElement(msgId);
        return false;
    }
}

const validatePassword = (id, msgId) => {
    const element = document.getElementById(id);
    const value = element.value;
    
    if (
        value.length >= 4
        && value.match(/[a-z]+/)
        && value.match(/[A-Z]+/)
        && value.match(/[0-9]/)
        && value.match(/W+/)
     ) {
        hideElement(msgId);
        return true;
    }
    showElement(msgId);
    return false;

}


const validateAll = () => {
    //Nome 
    let pass = true;
    if(!validateNome("nome", "msg-nome")) pass = false;
    if(!validateLogin("login", "msg-login")) pass = false;
    if(!validatePassword("senha", "msg-senha")) pass = false;

    if (pass) {
        alert("Tudo OK");
    }
}


$(".prevent-default").submit(function (e) {
    e.preventDefault();
});


