// ドロワー
$(function() {
    $('.drawer').drawer();
})

// スムーススクロール
$('a[href^="#"]').click(function() {
    let header = $('#js-header').innerHeight()
    let speed = 300
    let id = $(this).attr('href')
    let target = $(id == '#' ? 'html' : id)
    let position = $(target).offset().top - header
    $('html, body').animate(
        {
            scrollTop: position
        },
        speed
    );
    return false
})

// スワイパー
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        767: {
            spaceBetween: 40,
        }
    }
})

// アコーディオン
$('.accordion-head').on('click', function() {
    $(this).next().slideToggle()
    $(this).children('.accordion-icon').toggleClass('is-open')
})

// 入力フォーム確認
let $submit = $('#js-submit')
$submit.prop('disabled', true)
$('#js-form select, #js-form input, #js-form textarea').on('change', function() {
    if(
        $('#js-form select').val() !== '' &&
        $('#js-form input[type="text"]').val() !== '' &&
        $('#js-form input[type="email"]').val() !== '' &&
        $('#js-form input[type="radio"]').val() !== '' &&
        $('#js-form textarea').val() !== '' &&
        $('#js-form input[type="checkbox"]').prop('checked') === true
    ) {
        // 全て入力されている時
        $submit.prop('disabled', false)
        $submit.addClass('-active')
    } else {
        // 全て入力されていない時
        $submit.prop('disabled', true)
        $submit.removeClass('-active')
    }
})

// ページトップリンク
const pageTopBtn = $('#totop')
pageTopBtn.hide()
$(window).scroll(function() {
    if ($(this).scrollTop() >= 80) {
        pageTopBtn.fadeIn(300)
    } else {
        pageTopBtn.fadeOut(300)
    }
})
pageTopBtn.click(function() {
    $('html, body').animate(
        { scrollTop: 0 },
        500
    )
})
