// welcome

const welcome = document.querySelector('.welcome');
const author = document.querySelector('.author');

window.addEventListener('load', function () {
    setTimeout(() => {
        welcome.style.display = "block";

        setTimeout(() => {
            welcome.classList.add('fadeOut');

            setTimeout(() => {
                welcome.style.display = "none";
                author.style.display = "block"
            }, 2000)
        }, 5000);
    }, 1000);
})

// header

window.addEventListener('scroll', function () {
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

// API

function displayCards(stories) {
    const storyListElement = document.querySelector('.cards-container')

    stories.forEach(story => {

        const cardStructure = `
            <li class="card" style="background-image: url('${story.image}');">
                <div class="card-content">
                    <h3 id="cardTitle">${story.title}</h3>
                    <div class="short">
                        ${createSummary()}
                        <span class="read-more">read more</span>
                    </div>
                    <div class="long">
                        <p id="cardText">
                            ${story.text}
                        </p>
                        <button class="card-btn" onclick="openStory()">Open</button>
                    </div>
                </div>
            </li>
        `

        function createSummary() {
            return story.text.slice(0, 90) + '...'
        }

        storyListElement.insertAdjacentHTML('beforeend', cardStructure)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api-storage-stories.vercel.app/stories")
        .then(res => res.json())
        .then(data => {
            displayCards(data)
        })
        .catch(error => console.error('Error fetching the stories', error));
});

// Modal

const modal = document.querySelector('.modal');

/* closeBtn.addEventListener('click', function() {
    modal.classList.remove('isVisible')
}) */

function closeStory() {
    modal.classList.remove('isVisible');
    stopAudio()
}

function openStory() {
    modal.classList.add('isVisible');
}

// Audio handler

const audioPlayer = document.querySelector('audio');

function stopAudio() {
    audioPlayer.pause();
}
