$(document).ready(function () {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $('.home').removeClass('vh-100');
        $('.navigation-mobile').removeClass('d-none');
    } else {
        $('.home').addClass('vh-100');
        $('.navigation-mobile').addClass('d-none');
    }

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 992) {
            $('.home').removeClass('vh-100');
            $('.navigation-mobile').removeClass('d-none');
        } else {
            $('.navigation-mobile').addClass('d-none');
            $('.home').addClass('vh-100');
        }
    });

    $("#contactModal li").hover(
        function () {
            $(this).addClass('shadow-lg rounded p-2')
        }, function () {
            $(this).removeClass('shadow-lg rounded p-2')
        }
    );

    $("#contactModal li").click(function (e) {
        var value = $(this).attr('data-value');

        if (value == 'wa') {
            window.open('https://wa.me/089648595948');
        } else if (value == 'email') {
            window.location.href = 'mailto:satrioadhipurbo?Subject=[Hiring Job] - Front-end Developer';
        } else {
            window.open('https://www.linkedin.com/in/satrio-adhi-purbo/');
        }
    })

    $(window).scroll(function () {
        const currentScroll = window.scrollY;

        if (currentScroll >= 100) {
            $('.header-container').addClass('scrolled sticky-top');
        } else {
            $('.header-container').removeClass('scrolled sticky-top');
        }

        if (currentScroll === 0) {
            $('.header-container').removeClass('scrolled sticky-top');
        }
    });
});