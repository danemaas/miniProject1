// ===== SHOPPING BAG SIDEBAR =====
const bagIcon = document.querySelector('#nav_shop');
const bag = document.querySelector('.bag');
const closeIcon = document.querySelector('.close_btn');

bagIcon.onclick = () => {
    bag.classList.add('active');
}

closeIcon.onclick = () => {
    bag.classList.remove('active');
}

// ===== CARD HOVER EFFECT =====
const cards = document.querySelectorAll('.product-box');

[...cards].forEach( (card) => {
    card.addEventListener('mouseover', function() {
        card.classList.add('is-hover');
    })

    card.addEventListener('mouseleave', function() {
        card.classList.remove('is-hover');
    })
})

// ===== FILTER BUTTON =====
const allFilterItems = document.querySelectorAll('.filter_prod');
const allFilterBtns = document.querySelectorAll('.tag');

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)) {
            resetActiveBtn();
            btn.classList.add('active_btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active_btn');
    })
}