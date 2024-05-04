// login
const accountName = document.querySelector("#accountName")
const passwordText = document.querySelector("#passwordText")
const saveForm = document.querySelector("#saveForm")
const loginEnter = document.querySelector("#loginEnter")
const hide = document.querySelector("#hide")
const loginInput = document.querySelector("#loginInput")
const passwordInput = document.querySelector("#passwordInput")

// ---------- hide/fade --------------------
console.log(passwordText.type)
hide.addEventListener("click", function () {
    if(passwordText.type=="password") {
        passwordText.type="text"
        hide.src="./assets/visibility.png"
    } else {
        passwordText.type="password"
        hide.src="./assets/visibility_lock.png"
    }
})


// --------------------------- login account --------------------------------------

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const numberRegex = /^[0-9]{9,9}$/
const passwordRegex = /^[A-Za-z0-9]{9,30}$/
const login = {}

loginEnter.addEventListener("click", function () {
    
    // accountName test
    if (emailRegex.test(accountName.value)) {
        login.accountName=accountName.value
        accountName.style.backgroundColor="#fff"
    }   
    else if (numberRegex.test(accountName.value)) {
        login.number=accountName.value
        accountName.style.backgroundColor="#fff"
    }
    else {
        accountName.style.backgroundColor="#f9cec9"
        loginInput.nextElementSibling.innerHTML="Elektron poçt və ya nömrə düzgün deyil"
    }
    // password test
    if (passwordRegex.test(passwordText.value)) {
        login.password=passwordText.value
        passwordText.style.backgroundColor="#fff"
    }   
    else {
        console.log("no")
        passwordText.style.backgroundColor="#f9cec9"
        passwordInput.nextElementSibling.innerHTML="Şifrə minimum 9 simvoldan ibarət olmalidir."
        return
    }
    // saved
    if (saveForm.checked) {
        login.saveForm=true
    }   
    else {
        login.saveForm=false
    }
    //---------------- get login data ---------------
    accountName.value=""
    passwordText.value=""
    passwordInput.nextElementSibling.innerHTML=""
    loginInput.nextElementSibling.innerHTML=""
    console.log(login)
})



//------------------------- reset ------------------------------
accountName.addEventListener("click", function () {
    accountName.style.backgroundColor="unset"
    loginInput.nextElementSibling.innerHTML=""
})
passwordText.addEventListener("click", function () {
    passwordText.style.backgroundColor="unset"
    passwordInput.nextElementSibling.innerHTML=""
})

