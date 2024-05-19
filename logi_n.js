// alert("wow");
const login_page=document.getElementById('log_in1');

login_page.addEventListener('submit', (e)=>{
    e.preventDefault();
    let username2, password2;
    // email1=document.getElementById('email').value;
    username2=document.getElementById('username2').value;
    password2=document.getElementById('password2').value;

    let signupdata = JSON.parse(localStorage.getItem('signup_data'));
    let signupuser_name = signupdata.username;
    let signupuser_password = signupdata.password;

    if(username2 === signupuser_name && password2 === signupuser_password){
      // console.log('login successful');
      window.location.href="expenseentry.html"
    }else{
      alert('login fail "please check your emial or password"');
      return;
    }
})

// for the view password
let state = false;
let viewpassword = document.querySelector('.viewpassword');
function toggle(){
    if(state){
        viewpassword.setAttribute('type', 'password');
        state=false;
    }else{
        viewpassword.setAttribute('type', 'text');
        state=true;
    }
}
// for the viewpassword ends