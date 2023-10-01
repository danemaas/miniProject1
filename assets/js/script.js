
//===== REMOVE ACTIVE FUNCTIONS ======
const navToggle = document.querySelector('#nav_toggle');
const userIcon = document.querySelector('#navUser');

userIcon.addEventListener('click', () => {
    if(document.querySelector('#nav_menu').classList.contains('show')) {
        document.querySelector('#nav_menu').classList.remove('show');
    }
});

navToggle.addEventListener('click', () => {
    if(document.getElementById('userLogin').classList.contains('show')) {
        document.getElementById('userLogin').classList.remove('show');
    }
});

// ===== CARD HOVER EFFECT =====
const cards = document.querySelectorAll('.product-box');

//loop through the array of product cards
[...cards].forEach( (card) => {
    //event listener.. if mouse is over the product card
    card.addEventListener('mouseover', function() {
        card.classList.add('is-hover'); //show the buttons hidden in the product cards
    })

    //event listener.. if mouse leaves the product card
    card.addEventListener('mouseleave', function() {
        card.classList.remove('is-hover'); //hide the buttons in the product cards
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

// ===== SHOPPING BAG SIDEBAR =====
const bagIcon = document.querySelector('#nav_shop');
const bag = document.querySelector('.bag');
const closeIcon = document.querySelector('.close_btn');

bagIcon.onclick = () => {
    if(document.querySelector('#nav_menu').classList.contains('show')) {
        document.querySelector('#nav_menu').classList.remove('show');
    }
    if(document.getElementById('userLogin').classList.contains('show')) {
        document.getElementById('userLogin').classList.remove('show');
    }
    bag.classList.add('active');
};

closeIcon.onclick = () => {
    bag.classList.remove('active');
};

// ===== USER-LOGIN BOX =====
const userLogin = document.getElementById('userLogin');
const navUser = document.getElementById('navUser');

if(navUser) {
    navUser.addEventListener('click', () => {
        userLogin.classList.toggle('show');
    });
}