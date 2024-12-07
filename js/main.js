let loginBtn = document.querySelector('.loginBtn');
let incorrectMsg = document.querySelector('.incorrectMsg');
let emailInput = document.querySelector('.email');
let passInput = document.querySelector('.pass');

let allEmails = [];
console.log(localStorage.getItem('allEmails'));
if (localStorage.getItem('allEmails')) {
    allEmails = JSON.parse(localStorage.getItem('allEmails'));
}
loginBtn.addEventListener('click', function () {
    if(!emailInput.value.length || !passInput.value.length){
        incorrectMsg.innerHTML=`All inputs is required`;
        return;
    }
    let c=check();
    if(c!=-1){
        open('./LoggedIn.html','_self');
        localStorage.setItem('username',allEmails[c].name);
    }
    else{
        incorrectMsg.innerHTML=`incorrect email or password`;
    }
});
function check() {
    let flag = -1;
    for (let i = 0; i < allEmails.length; i++) {
        if (allEmails[i].email == emailInput.value && allEmails[i].pass == passInput.value) {
            flag = i;
            break;
        }
    }
    return flag;
}
