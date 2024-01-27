const welcome = document.querySelector('.welcome');

window.addEventListener('load', function() {
    setTimeout(() => {
        welcome.style.display = "block";

        setTimeout(() => {
            welcome.classList.add('fadeOut');

            setTimeout(() => {
                welcome.style.display = "none";
            }, 2000)
        }, 5000);
    }, 1000);
})