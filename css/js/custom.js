document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan tahun saat ini
    function getYear() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var displayYearElement = document.getElementById("displayYear");
        if (displayYearElement) {
            displayYearElement.innerHTML = currentYear;
        } else {
            console.warn("Elemen #displayYear tidak ditemukan.");
        }
    }
    getYear();

    // Owl Carousel untuk service section
    $(".service_owl-carousel").owlCarousel({
        autoplay: true,
        center: true,
        nav: true,
        loop: true,
        margin: 0,
        responsive: {
            0: { items: 1 },
            768: { items: 3 },
            991: { items: 3 }
        }
    });

    // Owl Carousel untuk portfolio section
    var owl = $('.portfolio_carousel').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        center: true,
        autoplay: true,
        navText: [
            '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ],
        autoplayHoverPause: true,
        responsive: {
            0: { center: false, items: 1, margin: 0 },
            576: { items: 2 },
            991: { center: true, items: 3 }
        }
    });

    // Filter untuk owl carousel
    $('.owl-filter-bar').on('click', '.item', function (e) {
        var $items = $('.owl-filter-bar a');
        var $item = $(this);
        var filter = $item.data('owl-filter');
        $items.removeClass("active");
        $item.addClass("active");
        owl.owlcarousel2_filter(filter);
        e.preventDefault();
    });

    // Google Map
    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(40.712775, -74.005973),
            zoom: 18,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    // Nice Select
    $('select').niceSelect();
});