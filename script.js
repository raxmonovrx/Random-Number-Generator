let lastGenerated = 0; // Dastlabki qiymat 0

document.getElementById('btn').addEventListener('click', function() {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const display = document.getElementById('Natija');

    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    // Xato xabarlarni tozalash
    display.classList.remove('error');

    // Kirish qiymatlarini tekshirish
    if (isNaN(min) || isNaN(max)) {
        display.textContent = 'Iltimos, raqam kiriting!';
        display.classList.add('error');
        return;
    }

    // Agar min katta bo'lsa, qiymatlarni almashtirish
    if (min > max) {
        [min, max] = [max, min]; // Min va Max qiymatlarini almashtirish
        minInput.value = min;
        maxInput.value = max;
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
        speed = 0.0001; // 100 dan katta oralig'i uchun tezroq
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
