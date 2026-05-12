// Scroll To Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show Top Button
window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
};

// Skip Intro
function skipIntro() {
    document
        .getElementById('introOverlay')
        .classList
        .add('hidden');
    document
        .getElementById('welcomeSound')
        .pause();
}

// Welcome Audio
document.addEventListener('click', () => {
    const audio = document.getElementById('welcomeSound');
    if (
        audio.src &&
        audio.src !== window.location.href + '#'
    ) {
        audio.volume = 0.7;
        audio.play().catch(e =>
            console.log('Audio play prevented')
        );
    }
}, { once: true });

// Auto Skip Intro
setTimeout(() => {
    skipIntro();
}, 6000);

// Intro Once
if (localStorage.getItem('introSeen')) {
    document.getElementById('introOverlay').style.display = 'none';
} else {
    localStorage.setItem('introSeen', 'true');
}
