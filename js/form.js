var form = document.getElementById('form331078264');
var messageContainer = document.querySelector('.message-container');
var message = document.getElementById('message');
var button = document.getElementById('submit-btn');

function processFormData(e) {

    e.preventDefault();

    button.classList.add("button--loading");

    setTimeout(() => {
        button.classList.remove("button--loading");
    }, 5000);

    setTimeout(function () {
        message.textContent = 'Ваше сообщение отправлено.';
        message.style.color = 'black';
    }, 5000);

    setTimeout(function () {
        form.reset();
        message.textContent = ''
    }, 10000);

}

form.addEventListener('submit', processFormData);
