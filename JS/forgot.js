// ------------------------------------ forgot -------------------------------------
const forgotAccountName = document.querySelector("#ForgotAccountName")
const forgotAccountNameInput = document.querySelector("#forgotAccountNameInput")
const forgotEnter = document.querySelector("#forgotEnter")



const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const numberRegex = /^[0-9]{9,9}$/
const passwordRegex = /^[A-Za-z0-9]{9,30}$/

const forgotData = {}

forgotEnter.addEventListener("click", function () {
    
    // accountName test
    if (emailRegex.test(forgotAccountName.value)) {
        forgotData.accountName=forgotAccountName.value
        forgotAccountName.style.backgroundColor="#fff"
    }   
    else if (numberRegex.test(forgotAccountName.value)) {
        forgotData.number=forgotAccountName.value
        forgotAccountName.style.backgroundColor="#fff"
    }
    else {
        forgotAccountName.style.backgroundColor="#f9cec9"
        forgotAccountNameInput.nextElementSibling.innerHTML="Elektron poçt və ya nömrə düzgün deyil"
        return
    }
    forgotAccountName.value=""
    forgotAccountNameInput.nextElementSibling.innerHTML=""
    console.log(forgotData)
})

// reset------------------
forgotAccountName.addEventListener("click", function () {
    forgotAccountName.style.backgroundColor="unset"
    forgotAccountNameInput.nextElementSibling.innerHTML=""
})