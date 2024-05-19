// alert('wow');
let reset_password = document.getElementById('resetpassword2');
reset_password.addEventListener('submit', (e) => {
    e.preventDefault();
    let reset_password1, reset_password2;
    reset_password1 = document.getElementById('password11').value;
    reset_password2 = document.getElementById('password22').value;

    let resetpassword = JSON.parse(localStorage.getItem('signup_data'));
    let signup_password = resetpassword.password;

    if(reset_password1 === reset_password2){
        // signup_password.replaec();
        signup_password.replace(reset_password1);
        console.log("great")
    }else{
        console.log("password don't match")
        // e.preventDefault();
    }

    // console.log(reset_password1+reset_password2);
})

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

// let viewpassword1 = document.querySelector('.viewpassword1');
// function toggle(){
//     if(state){
//         viewpassword1.setAttribute('type', 'password');
//         state=false;
//     }else{
//         viewpassword1.setAttribute('type', 'text');
//         state=true;
//     }
// }

