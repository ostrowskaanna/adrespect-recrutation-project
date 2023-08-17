function loadHTML(url, elementId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
            if (callback) {
                callback();
            }
        }
    };
    xhr.send();
}

loadHTML('sections/intro/intro.html', 'intro-content-placeholder', function() {
    loadHTML('sections/offer/offer.html', 'offer-content-placeholder', function() {
        loadHTML('sections/company/company.html', 'company-content-placeholder');
    });
});

// Pobierz element karuzeli
var imageCarousel = document.getElementById('imageCarousel');

// Inicjalizuj karuzelę za pomocą Bootstrap
var carousel = new bootstrap.Carousel(imageCarousel, {
    interval: 5000, // Czas między zmianami slajdów (w milisekundach)
    pause: 'hover' // Pauzowanie karuzeli po najechaniu myszą
});