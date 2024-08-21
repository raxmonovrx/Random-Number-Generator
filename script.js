let lastGenerated = min; // Dastlabki qiymat 0

document.getElementById('btn').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const display = document.getElementById('Natija');

    if (isNaN(min) || isNaN(max) || min > max) {
        alert('Iltimos, to\'g\'ri qiymatlarni kiriting.');
        return;
    }

    const target = Math.floor(Math.random() * (max - min + 1)) + min;
    const range = max - min;
    
    // Tezlikni raqamlar oralig'iga qarab sozlash
    let speed;
    if (range <= 10) {
        speed = 80; // 1 dan 10 gacha oralig'i uchun sekinroq
    } else if (range <= 100) {
        speed = 15; // 11 dan 100 gacha oralig'i uchun o'rtacha tezlik
    } else {
        speed = 1; // 100 dan katta oralig'i uchun tezroq
    }

    let current = lastGenerated;
    const step = current < target ? 1 : -1;

    const intervalId = setInterval(() => {
        display.textContent = current;
        if (current === target) {
            clearInterval(intervalId);
            lastGenerated = target; // Keyingi generatsiya uchun so'nggi qiymatni saqlash
        } else {
            current += step;
        }
    }, speed);
});
