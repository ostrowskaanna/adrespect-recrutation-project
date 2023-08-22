function showMorePhotos() {
    const showMoreButton = document.querySelector('#show-more-button');
    const hideMoreButton = document.querySelector('#hide-more-button');
    const galleryContainer = document.querySelector('.gallery');
    const galleryCover = document.querySelector('.gallery-cover');
    galleryContainer.style.maxHeight = 'none'; 
    galleryCover.style.height = '0vh';
    showMoreButton.style.display = 'none';
    hideMoreButton.style.display = 'flex';
};

function hideMorePhotos() {
    const showMoreButton = document.querySelector('#show-more-button');
    const hideMoreButton = document.querySelector('#hide-more-button');
    const galleryContainer = document.querySelector('.gallery');
    const galleryCover = document.querySelector('.gallery-cover');
    galleryContainer.style.maxHeight = '150vh'; 
    galleryCover.style.height = '150vh';
    showMoreButton.style.display = 'flex';
    hideMoreButton.style.display = 'none';
}
