// alert("wow");
// for the sign up page
const signup_page=document.getElementById('sign_up1');

    signup_page.addEventListener('submit', (e)=>{
    e.preventDefault();
    let email1, username1, password1;
    email1=document.getElementById('email').value;
    username1=document.getElementById('username').value;
    password1=document.getElementById('password').value;

        if(email1==""||username1==""||password1==""){
            return;
        }else{
            // window.location.href="resetpassword2.html";
            window.location.href="expenseentry.html";
        }
   // console.log(email1, username1, password1);

    let signup_data={
        email: email1,
        username: username1,
        password: password1
    }
    localStorage.setItem('signup_data', JSON.stringify(signup_data));

    // let newarray = new Array();
    // newarray = localStorage.setItem('signup_date', JSON.stringify(signup_data));
});

let viewbutton = document.querySelector('.viewbotton');

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


// for the resetpassword page ends
    