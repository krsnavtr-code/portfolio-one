const container = document.querySelector(".container");
      pwShowHide = document.querySelectorAll('.showHidePw'),
      pwFields = document.querySelectorAll('.password'),
      signUp = document.querySelector('.signup-link'),
      logIn = document.querySelector('.login-link'),
      

    //   Js code to show/Hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwFields =>{
                if(pwFields.type === "password"){
                    pwFields.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye")
                    })
                }else{
                    pwFields.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash")
                    })
                }
            })
        })
    })

    // Js code to appear signup and login form
    signUp.addEventListener('click', ()=>{
        container.classList.add("active");
    });
    logIn.addEventListener('click', ()=>{
        container.classList.remove("active");
    });