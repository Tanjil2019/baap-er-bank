// step : 1 add event handler of js
document.getElementById('btn-submit').addEventListener('click', function(){
     // step : 2 get the email address inside the email input filed
     // always remember to use .value to get text from input filed
     const userEmail = document.getElementById('user-email');
     const email = userEmail.value;
    

     // step : 3 get password 
     // 3.a : set id on html element 
     // 3.b : get the element
     // 3.c : get the value from the element  
     const userPassword = document.getElementById('user-password');
     const password = userPassword.value;

// console.log(email, password);


     // DANGER : DO NOT VERIFY email password on the client side
     // step : 4 verify email and password and check whether valid user or not
     if(email === 'sontan@baap.com' && password === 'secret'){
          window.location.href = 'bank.html'
     }
     else{
          alert('Error, email or password');
     }
})