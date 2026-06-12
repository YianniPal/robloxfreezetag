/* ==================================
   ROBLOX FREEZE TAG
   BIGGEST REVAMP COUNTDOWN
================================== */

// REAL RELEASE COUNTDOWN
// Hidden from players

const releaseDate = new Date(
    "June 26, 2026 00:00:00"
);

// ELEMENTS
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const releaseMessage =
    document.getElementById("release-message");

// UPDATE COUNTDOWN
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
            "🎉 THE BIGGEST REVAMP IS NOW LIVE! 🎉";

        startConfetti();
        startTitleAnimation();

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance %
            (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
            (1000 * 60)) /
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

// CONFETTI
function startConfetti() {

    const duration = 30000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();
}

// TITLE FLASHING
function startTitleAnimation() {

    let toggle = false;

    setInterval(() => {

        document.title = toggle
            ? "🎉 UPDATE IS LIVE!"
            : "❄️ Roblox Freeze Tag";

        toggle = !toggle;

    }, 1000);
}

// START
updateCountdown();
const timer = setInterval(
    updateCountdown,
    1000
);
