function openModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
    var searchInput = document.getElementById('search-input');
    searchInput.value = '';
}

window.addEventListener('click', function (event) {
    var modal = document.querySelector('.modal');
    if (event.target === modal) {
        closeModal();
    }
});