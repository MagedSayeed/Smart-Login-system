let incorrectMsg = document.querySelector('.incorrectMsg');
let emailInput = document.querySelector('.email');
let passInput = document.querySelector('.pass');
let nameInput = document.querySelector('.name');
let signupBtn = document.querySelector('.signup');

let allEmails = [];
if (localStorage.getItem('allEmails')) {
    allEmails = JSON.parse(localStorage.getItem('allEmails'));
}
signupBtn.addEventListener('click',function(){

    if(!emailInput.value.length || !nameInput.value.length || !passInput.value.length){
        incorrectMsg.innerHTML=`All inputs is required`;
        incorrectMsg.classList.add('text-danger');
    }
    else if(check()){
        incorrectMsg.innerHTML=`email already exists`;
        incorrectMsg.classList.add('text-danger');
    }
    else{
        incorrectMsg.innerHTML=`Success`;
        incorrectMsg.classList.remove('text-danger');
        add();
    }

});
function check(){
    let flag = 0;
    for (let i = 0; i < allEmails.length; i++) {
        if (allEmails[i].email == emailInput.value) {
            flag = 1;
            break;
        }
    }
    return flag;
}
function add(){
    let obj={
        name:nameInput.value,
        email:emailInput.value,
        pass:passInput.value
    }
    allEmails.push(obj);
    console.log(allEmails);
    localStorage.setItem('allEmails',JSON.stringify(allEmails));
}