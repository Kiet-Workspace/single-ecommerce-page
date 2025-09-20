$(document).ready(function(){
    $('.product-carousel').slick({
        arrows: false,
        variableWidth: false,
        speed: 250,
});
  });

$('.prev-btn').click(() => {
    $('.product-carousel').slick('slickPrev');
});

$('.next-btn').click(() => {
    $('.product-carousel').slick('slickNext');
});


// Navigation mobile 

const openMenu = document.querySelector(".icon-menu");
const closeMenu = document.querySelector(".icon-close");
const bgrNav = document.querySelector(".bgr-nav");
const navMain = document.querySelector(".nav-main");

function openBgr() {
    bgrNav.classList.add('bgr-show');
}

function closeBgr() {
    bgrNav.classList.remove('bgr-show');
}

function openNav() {
    navMain.classList.add('nav-show');
    setTimeout(openBgr, 200);
}

function closeNav() {
    navMain.classList.remove('nav-show');
    closeBgr();
}

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);
bgrNav.addEventListener('click', function() {
    closeNav();
})
// Purchase

const numberPurchase = document.querySelector('.num-of-purchase');
const plusPurchase = document.querySelector('.purchase-btn-plus');
const minusPurchase = document.querySelector('.purchase-btn-minus');
const orderCart = document.querySelector('.number-order');
const totalPrice = document.querySelector('.total-price');
const emptyCart = document.querySelector('.empty-cart');
const userOrder = document.querySelector('.user-order');
const btnCheckout = document.querySelector('.btn-checkout');
const addToCart = document.querySelector('.add-to-cart');
const cartNumber = document.querySelector('.cart-icon-number');
const deleteIcon = document.querySelector('.icon-delete');

let numbInCart = 0;

let numbOfPurchase = 0;
function changeNumber() {
    numberPurchase.innerText = numbOfPurchase;
}

function changeCart(nOfP) {
    orderCart.innerText = `$125.00 x ${nOfP}`;
    totalPrice.innerText = `$${nOfP*125}.00`;
    cartNumber.innerText = `${nOfP}`;
    if (nOfP === 0) {
        emptyCart.style.display = 'block';
        userOrder.style.display = 'none';
        btnCheckout.style.display = 'none';
        cartNumber.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        userOrder.style.display = 'flex';
        btnCheckout.style.display = 'block';
        cartNumber.style.display = 'block';
    }
}

deleteIcon.addEventListener('click', function() {
    numbOfPurchase = 0;
    numbInCart = 0;
    changeCart(numbInCart);
    changeNumber();
})

plusPurchase.addEventListener('click', function() {
    numbOfPurchase += 1;
    changeNumber();
});

minusPurchase.addEventListener('click', function() {
    if (numbOfPurchase > 0 ) {
        numbOfPurchase -= 1;
        changeNumber();
    } else {
        numberPurchase = 0;
    }    
})

addToCart.addEventListener('click', function() {
    numbInCart = numbInCart + numbOfPurchase;
    changeCart(numbInCart);
    numbOfPurchase = 0;
    changeNumber()
    
});


// Cart

const cartIcon = document.querySelector('.cart');
const userCart = document.querySelector('.user-cart');

cartIcon.addEventListener('click', function() {
    userCart.classList.toggle('cart-show');
});

userCart.addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    if (userCart.classList.contains('cart-show') && !cartIcon.contains(event.target)) {
        userCart.classList.remove('cart-show');
    }
});

// Desktop thumbnail
const mainPicShow = document.querySelector('.main-pic-show');
const thumbPic1 = document.querySelector('.thumb-pic-1');
const thumbPic2 = document.querySelector('.thumb-pic-2');
const thumbPic3 = document.querySelector('.thumb-pic-3');
const thumbPic4 = document.querySelector('.thumb-pic-4');
const thumbPic = [thumbPic1, thumbPic2, thumbPic3, thumbPic4];

thumbPic1.style.opacity = '50%';
for (let i = 0; i < thumbPic.length; i++) {
    
    thumbPic[i].addEventListener('click', function() {
        thumbPic.forEach( thumb => {
            thumb.style.opacity = '100%';
        });
        a = i + 1;// Đặt a ngoài sự kiện click a sẽ luôn mang giá trị cuối khi kết thúc vòng lặp
        mainPicShow.setAttribute('src', './assets/images/image-product-'+ a +'.jpg');
        console.log(mainPicShow.getAttribute('src'));
        thumbPic[i].style.opacity = '50%';
        console.log(a);
    });
};

// Desktop open pic show 
const closeCarousel = document.querySelector('.close-icon-dk');
const productImage = document.querySelector('.product-image');
const productBgr = document.querySelector('.product-image-bgr');
let thumbnailCarousel = [];
for (let i = 1; i < 5; i++) {
    thumbnailCarousel.push(document.querySelector('.thumb-open-'+ i));
}



for (let i = 0; i < thumbnailCarousel.length; i++) {
    thumbnailCarousel[i].addEventListener('click', function() {
        let a = i + 1;
        $('.product-carousel').slick('slickGoTo', a, false);
    }) 
    
    
}

    // Close open pic show
    function closeCarouselDk() {
        productImage.style.display = 'none';
    };

    function openCarouselMb() {
        productImage.style.display = 'block';
    };

    closeCarousel.addEventListener('click', function() {
        closeCarouselDk();
    });
    productBgr.addEventListener('click', function() {
        closeCarouselDk();
    });
    mainPicShow.addEventListener('click', function() {
        openCarouselMb();
        $('.product-carousel').slick('slickGoTo', 0, true);
    });

