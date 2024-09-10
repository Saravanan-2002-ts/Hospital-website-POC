function filterHospitals() {
    const countryFilter = document.getElementById('countryFilter').value;
    const regionFilter = document.getElementById('regionFilter').value;
    const cards = document.querySelectorAll('.hospital-card');

    cards.forEach(card => {
        const cardCountry = card.getAttribute('data-country');
        const cardRegion = card.getAttribute('data-region');

        if ((countryFilter === 'All' || cardCountry === countryFilter) &&
            (regionFilter === 'All' || cardRegion === regionFilter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function getDirection() {
    alert("Get Direction functionality not implemented.");
}

function visitWebsite() {
    alert("Visit Website functionality not implemented.");
}
