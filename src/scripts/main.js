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

        document.getElementById('loading').style.display = 'none'
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

function closeStory() {
    modal.classList.remove('isVisible');
    stopAudio()
}

function openStory() {
    modal.classList.add('isVisible');
}

// Audio handler

let isPlaying = false;

const audioPlayer = document.querySelector('audio');
const volumeBtn = document.getElementById('volume');

const slider = document.querySelector('.slider');
const currentTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration');

let trackIndex = 0;
let updateTimer;

function stopAudio() {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.innerHTML = '<img class="sound-icon" src="./dist/images/music-play.png" alt="Play audio icon" title="Play">';
}

function playAudio() {
    updateTimer = setInterval(setUpdate, 1000);
    audioPlayer.play();
    isPlaying = true;
    playBtn.innerHTML = '<img class="sound-icon" src="./dist/images/music-pause.png" alt="Pause audio icon" title="Pause">';
}

const playBtn = document.getElementById('play');

playBtn.addEventListener('click', function () {
    isPlaying ? stopAudio() : playAudio()
})

function seekTo() {
    let seekTo = audioPlayer.duration * (slider.value / 100);
    audioPlayer.currentTime = seekTo;
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(audioPlayer.duration)) {
        seekPosition = audioPlayer.currentTime * (100 / audioPlayer.duration);
        slider.value = seekPosition;

        let currentMinutes = Math.floor(audioPlayer.currentTime / 60);
        let currentSeconds = Math.floor(audioPlayer.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(audioPlayer.duration / 60);
        let durationSeconds = Math.floor(audioPlayer.duration - durationMinutes * 60);

        if (currentSeconds < 10) {currentSeconds = '0' + currentSeconds}
        if (durationSeconds < 10) {durationSeconds = '0' + durationSeconds}
        if (currentMinutes < 10) {currentMinutes = '0' +  currentMinutes}
        if (durationMinutes < 10) {durationMinutes = '0' + durationMinutes}

        currentTime.textContent = currentMinutes + ':' + currentSeconds;
        totalDuration.textContent = currentMinutes + ':' + durationSeconds;
    }
}