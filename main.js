// To validate the password.


let form = document.getElementById("form");


function validateUserDetails(e) {

    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password-confirm").value;
    let error1 = document.getElementById("error-message1");
    let error2 = document.getElementById("error-message2");
    let error3 = document.getElementById("error-message3");
    // let success = document.getElementById("success-message");
   
    if (password.length < 6) {
        e.preventDefault()
        error1.style.display = "block"
        error2.style.display = "none"
        error3.style.display = "none"
    } else if (password.toLowerCase() == "password") {
        e.preventDefault()
        error2.style.display = "block"
        error1.style.display = "none"
        error3.style.display = "none"
    } else if (passwordConfirm !== password){
        e.preventDefault()
        error3.style.display = "block"
        error1.style.display = "none"
        error2.style.display = "none"
     } //else {
    //     error2.style.display = "none"
    //     success.style.display = "block"
    // }
    
}

form.addEventListener("submit", validateUserDetails)




// let form = document.getElementById("form");

// function validateUserDetails(e) {
//     let userPassword = document.getElementById("password").value;
//     let userPasswordConfirm = document.getElementById("password-confirm").value;
//     console.log(userPassword)
//     console.log(userPasswordConfirm);

//     if (userPassword.length < 6) {
//         e.preventDefault()
//         alert("your password must be greater than 6 characters")
//      } else if (userPassword !== userPasswordConfirm){
//         e.preventDefault()
//         alert("please enter the same password as above")
//     }

   
//  }
//  form.addEventListener("submit", validateUserDetails)
