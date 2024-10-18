let useName = document.getElementById('username');
let mail = document.getElementById('mail');
let pwd = document.getElementById('password');
let cfpwd = document.getElementById('confirmPassword');

let pwdError = document.getElementById('errorPara');

let arr = [useName,mail,pwd,cfpwd];

useName.addEventListener('focus',(e)=>{
    mail.style.visibility = 'hidden';
    pwd.style.visibility = 'hidden';
    cfpwd.style.visibility = 'hidden';
})
mail.addEventListener('focus',(e)=>{
    useName.style.visibility = 'hidden';
    pwd.style.visibility = 'hidden';
    cfpwd.style.visibility = 'hidden';
})
pwd.addEventListener('focus',(e)=>{
    mail.style.visibility = 'hidden';
    useName.style.visibility = 'hidden';
    cfpwd.style.visibility = 'hidden';
})
cfpwd.addEventListener('focus',(e)=>{
    mail.style.visibility = 'hidden';
    pwd.style.visibility = 'hidden';
    useName.style.visibility = 'hidden';
})

function random(){
    let num = Math.floor(Math.random() *4);

    return num;
}

useName.addEventListener('keyup',(e)=>{
    useName.style.visibility = 'hidden';
    let next = arr[random()];
    console.log(next);
    next.style.visibility = 'visible';
    next.focus();
})
mail.addEventListener('keyup',(e)=>{
    mail.style.visibility = 'hidden';
    let next = arr[random()];
    next.style.visibility = 'visible';
    next.focus();
    console.log(next);
})
pwd.addEventListener('keyup',(e)=>{
    pwd.style.visibility = 'hidden';
    let next = arr[random()];
    next.style.visibility = 'visible';
    next.focus();
    console.log(next);
})
cfpwd.addEventListener('keyup',(e)=>{
    cfpwd.style.visibility = 'hidden';
    let next = arr[random()];
    next.style.visibility = 'visible';
    next.focus();
    console.log(next);
})

let button = document.getElementById('button');
let pressText = document.getElementById('pressFive');

let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;

async function checkPwd(){
    if(pwd.value != cfpwd.value){
        pwdError.style.display = 'block';
        cfpwd.value = '';
        cfpwd.focus();
        disData();
    } else {
        console.log("Congratulations you have signed up");
        console.log(`Username : ${useName}\n Email : ${mail}\n password : ${pwd}`);
    }
}

function disData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pwdError.style.display = 'none';
            resolve('Success');
        },3000)
    })
}

button.addEventListener('click',(e)=>{
    checkPwd();
})

let reset = document.getElementById('reset');

reset.addEventListener('click',(e)=>{
    history.go(0);
    useName.value = '';
    mail.value = '';
})