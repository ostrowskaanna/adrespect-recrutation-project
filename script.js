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

loadHTML('sections/navbar/navbar.html', 'navbar-content-placeholder', function() {
    loadHTML('sections/intro/intro.html', 'intro-content-placeholder', function() {
        loadHTML('sections/offer/offer.html', 'offer-content-placeholder', function() {
            loadHTML('sections/company/company.html', 'company-content-placeholder', function() {
                loadHTML('sections/realizations/realizations.html', 'realizations-content-placeholder', function() {
                    loadHTML('sections/instagram/instagram.html', 'instagram-content-placeholder', function() {
                        loadHTML('sections/footer/footer.html', 'footer-content-placeholder');
                    });
                });
            });
        });
    });
});

function goToRealizations() {
    var realizationSection = document.getElementById('realizations');
    realizationSection.scrollIntoView({ behavior: 'smooth' });
}
