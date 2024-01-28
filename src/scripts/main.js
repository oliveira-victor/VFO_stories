// welcome

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

// header

/* const header = document.getElementsByClassName('navbar'); */

window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY

    if (currentPosition < 60) {
        originalHeader();
    } else {
        activateHeader();
    }
})

function activateHeader() {
    const header = document.querySelector('header');
    header.classList.add('active');
}

function originalHeader() {
    const header = document.querySelector('header');
    header.classList.remove('active');
}