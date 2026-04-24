function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = false;


// TOGGLE MUSIC
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const iconImg = document.getElementById("music-icon-img");

    if (music.paused) {
        music.play();
        iconImg.src = "images/on-sound.png"; // PNG for when music is playing
    } else {
        music.pause();
        iconImg.src = "images/off-sounds.png"; // PNG for when music is muted
    }
}

const clickSound = document.getElementById("click-sound");
const bgMusic = document.getElementById('bg-music');

// Set volume to 10% (0.1) or 20% (0.2)
bgMusic.volume = 0.4;

function playClickSound() {
    clickSound.currentTime = 0; // restart sound if clicked fast
    clickSound.play();
}

// TOP TO BOTTOM
const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// HOVER SOUND
const hoverAudio = document.getElementById("hover-sound");

function playHoverSound() {
    if (hoverAudio) {
        hoverAudio.loop = false; // Ensure looping is OFF
        hoverAudio.currentTime = 0; // Reset to start so it plays every time you hover
        hoverAudio.play();
    }
}

function playMeow() {
    const sound = document.getElementById("meowSound");
    const catImg = document.querySelector(".contact-illustration");

    if (sound) {
        sound.currentTime = 0; // Starts sound from the beginning
        sound.play();
    }
}

function stopMeow() {
    const sound = document.getElementById("meowSound");
    const catImg = document.querySelector(".contact-illustration");

    if (sound) {
        sound.pause(); // Pauses the sound immediately
        sound.currentTime = 0; // Resets it to the start so it's ready for next hover
    }
}

