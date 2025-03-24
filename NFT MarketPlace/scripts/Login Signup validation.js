// Password Visibility
const passcodes = document.querySelectorAll('.js-passwords');

passcodes.forEach((code)=>{
    const eye = code.querySelector('#js-eye');
    eye.addEventListener('click',function(){
        const passowrd = code.querySelector('.password');
        const attribute = passowrd.getAttribute('type');
        let newAttribute = attribute==='password'?'text':'password'

        passowrd.setAttribute('type',newAttribute)

        if (this.classList.contains('fa-eye-slash')){
            this.classList.add('fa-eye');
            this.classList.remove('fa-eye-slash')
        }else{ 
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash')
        }
    })


    
})

// Confirm Password

const form = document.querySelector('form');
form.addEventListener('submit',function (event){
    const confirmPassword = this.querySelector('#passcode');
    const password = this.querySelector('#password');
    const errorDisplay = this.querySelector('.js-confirm-password-error');
    if ((confirmPassword.value != password.value)){
        
        event.preventDefault();   
    }else {
        // 
    }
})


const confirmPassword = document.querySelector('#passcode');
confirmPassword.addEventListener('input',function (event){
    const passwordValue = document.querySelector('#password').value;
    
    const errorDisplay = document.querySelector('.js-confirm-password-error');
    if (passwordValue===this.value){
        document.querySelector('.js-confirm-password').style.border='2px solid green'
        errorDisplay.style.display='none';
    }else{
        document.querySelector('.js-confirm-password').style.border='2px solid red';
        errorDisplay.style.display='block';
    }
})

confirmPassword.addEventListener('paste',(event)=>{
    event.preventDefault()
})

const password = document.querySelector('#password');
password.addEventListener('input',function (event){
    
    const errorDisplay = document.querySelector('.js-password-error');
    
    if (!(/[a-z]/.test(this.value))){
        errorDisplay.innerText ='Password must have atleast one lowercase letter'
        errorDisplay.style.display='block';
            document.querySelector('.js-password').style.border='2px solid red';
    } else if (!(/[A-Z]/.test(this.value))){
        errorDisplay.innerText ='Password must have atleast one UPPERCASE letter'
        errorDisplay.style.display='block';
        document.querySelector('.js-password').style.border='2px solid red';
    } else if (!(/^(?=.*\d)/.test(this.value))){
        errorDisplay.innerText ='Password must have atleast one number'
        errorDisplay.style.display='block';
        document.querySelector('.js-password').style.border='2px solid red';
    } else if (!(this.value.length>8)){
        errorDisplay.innerText ='Password must be atleast 8 charcters'
        errorDisplay.style.display='block';
        document.querySelector('.js-password').style.border='2px solid red';
    }else{
        errorDisplay.style.display='none';
        document.querySelector('.js-password').style.border='2px solid green';
    }


})


