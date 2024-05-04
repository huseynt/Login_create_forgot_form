// create
const createAccountName = document.querySelector("#createAccountName")
const createLoginInput = document.querySelector("#createLoginInput")

const createMail = document.querySelector("#createMail")
const createMailInput = document.querySelector("#createMailInput")

const createAgree = document.querySelector("#createAgree")
const createAgreeMessage = document.querySelector("#createAgreeMessage")

const createEnter = document.querySelector("#createEnter")

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const numberRegex = /^[0-9]{9,9}$/
const passwordRegex = /^[A-Za-z0-9]{9,30}$/



// ---------------------- create account ------------------------------------
const createData = {}

createEnter.addEventListener("click", function () {
    // Number test
    if (numberRegex.test(createAccountName.value)) {
        createData.number=createAccountName.value
        createAccountName.style.backgroundColor="#fff"
    }
    else {
        createAccountName.style.backgroundColor="#f9cec9"
        createLoginInput.nextElementSibling.innerHTML="Nömrə düzgün deyil"
    }
    // password test
    if (emailRegex.test(createMail.value)) {
        createData.password=createMail.value
        createMail.style.backgroundColor="#fff"
    }   
    else {
        console.log("no")
        createMail.style.backgroundColor="#f9cec9"
        createMailInput.nextElementSibling.innerHTML="Elektron poçt düzgün deyil"
        return
    }
    // agree
    if (createAgree.checked) {
        createAgreeMessage.style.backgroundColor="#fff"
    } else {
        createAgreeMessage.style.backgroundColor="#f9cec9"
        console.log("not")
        return
    }
    // ---------------- get login data ---------------
    createAccountName.value=""
    createMail.value=""
    createLoginInput.nextElementSibling.innerHTML=""
    createMailInput.nextElementSibling.innerHTML=""
    console.log(createData)
})

//------------------------- reset ------------------------------
createAccountName.addEventListener("click", function () {
    createAccountName.style.backgroundColor="unset"
    createLoginInput.nextElementSibling.innerHTML=""
})
createMail.addEventListener("click", function () {
    createMail.style.backgroundColor="unset"
    createMailInput.nextElementSibling.innerHTML=""
})
createAgree.addEventListener("click", function () {
    createAgreeMessage.style.backgroundColor="transparent"
})

