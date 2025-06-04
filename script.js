// @ts-nocheck
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const items = document.querySelectorAll('.list .item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.indicators .number');

let current = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    indicators.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
    number.textContent = (index + 1).toString().padStart(2, '0');
}

prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showSlide(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showSlide(current);
});

indicators.forEach((li, i) => {
    li.addEventListener('click', () => {
        current = i;
        showSlide(current);
    });
});

showSlide(current);