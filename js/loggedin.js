let username = localStorage.getItem('username');
document.querySelector('.asmo').innerHTML = username;

document.querySelector('.loggoutBtn').addEventListener('click', function () {
    localStorage.removeItem('username');
});





