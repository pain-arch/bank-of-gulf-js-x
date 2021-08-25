document.getElementById('user-button').addEventListener('click',function(){
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value ;

    if(userEmail == 'admin@gmail.com' && userPassword == 'himu123' ){
        
        window.location.href = 'bank.html';
    }

});
