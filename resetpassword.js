// alert('wow');
let password = document.getElementById('resetpassword');

password.addEventListener('submit', (e) => {
    e.preventDefault();
    let rspemail = document.getElementById('rpwemail').value;

    let resetmail = JSON.parse(localStorage.getItem('signup_data'));
    let signup_email = resetmail.email;

    if(rspemail === signup_email){
        // console.log('change password');
        window.location.href="resetpassword2.html"
    }else{
        // console.log('incorrect password');
        alert('incorrect password');
    }



    // let signupdata = JSON.parse(localStorage.getItem('signup_data'));
    // let signupuser_name = signupdata.username;
    // console.log(sign_email);
})