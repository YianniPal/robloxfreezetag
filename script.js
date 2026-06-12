/* ==================================
   ROBLOX FREEZE TAG
   BIGGEST REVAMP COUNTDOWN
================================== */

// ==================================
// RELEASE DATE
// ==================================

// CHANGE THIS LATER IF NEEDED
// Current test countdown: 30 seconds

const releaseDate = new Date(
    Date.now() + 30000
);

// ==================================
// ELEMENTS
// ==================================

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const releaseMessage =
    document.getElementById("release-message");

// ==================================
// COUNTDOWN
// ==================================

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        releaseDate.getTime() - now;

    if (distance <= 0) {

        clearInterval(timer);

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        releaseMessage.innerHTML =
            "🎉 THE BIGGEST REVAMP IS LIVE! 🎉";

        startConfetti();

        startTitleAnimation();

        return;
    }

    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
            (1000 * 60))
            /
            1000
        );

    daysEl.textContent =
        String(days).padStart(2, "0");

    hoursEl.textContent =
        String(hours).padStart(2, "0");

    minutesEl.textContent =
        String(minutes).padStart(2, "0");

    secondsEl.textContent =
        String(seconds).padStart(2, "0");
}

// ==================================
// CONFETTI
// ==================================

function startConfetti() {

    const duration = 20000;

    const animationEnd =
        Date.now() + duration;

    const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 100,
        zIndex: 9999
    };

    function randomInRange(min, max) {
        return Math.random() *
            (max - min) + min;
    }

    const interval = setInterval(() => {

        const timeLeft =
            animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount =
            50 * (timeLeft / duration);

        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2
            }
        });

        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2
            }
        });

    }, 250);

}

// ==================================
// TAB TITLE FLASH
// ==================================

function startTitleAnimation() {

    let toggle = false;

    setInterval(() => {

        document.title = toggle
            ? "🎉 UPDATE IS LIVE!"
            : "❄️ Roblox Freeze Tag";

        toggle = !toggle;

    }, 1000);

}

// ==================================
// INITIALIZE
// ==================================

updateCountdown();

const timer =
    setInterval(updateCountdown, 1000);
