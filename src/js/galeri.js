import {data} from "../assets/data/data.js";

export const galeri = () => {
    const galeriElement = document.querySelector('.galeri');
    const showAllContainer = galeriElement.querySelector('div:nth-of-type(2)');

    const [_, figureElement, paginationElement, prevButton, nextButton, showAllButton] = galeriElement.children[0].children;
    const [__, showAllBox, closeButton] = showAllContainer.children;

    const initializeGallery = () => {
        const initialImage = data.preview[0];
        // First image loads immediately (eager) - width 100%, height 560px (35rem)
        figureElement.innerHTML = `<img src="${initialImage.image}" alt="preview image" id="${initialImage.id}" width="800" height="560" loading="eager">`;

        data.galeri.forEach((item, index) => {
            paginationElement.innerHTML += `<li data-id="${item.id}" ${index === 0 ? 'class="active"' : ''}></li>`;
        });

        updateNavigationButtons(initialImage.id);
    };

    const updateGalleryImage = (id) => {
        const selectedImage = data.preview.find(item => item.id === id);

        if (selectedImage) {
            // Currently displayed image should load immediately
            figureElement.innerHTML = `<img src="${selectedImage.image}" alt="preview image" id="${selectedImage.id}" width="800" height="560" loading="eager">`;

            paginationElement.querySelectorAll('li').forEach((li) => {
                li.classList.toggle('active', parseInt(li.dataset.id) === id);
            });
        }
    };

    const updateNavigationButtons = (id) => {
        nextButton.dataset.id = `${id}`;
        prevButton.dataset.id = `${id}`;
    };

    const autoPlayGallery = () => {
        let id = parseInt(nextButton.dataset.id);
        id = (id < data.galeri.length) ? id + 1 : 1;
        updateNavigationButtons(id);
        updateGalleryImage(id);
    };

    nextButton.addEventListener('click', () => {
        let id = parseInt(nextButton.dataset.id);
        if (id < data.galeri.length) {
            id++;
            updateNavigationButtons(id);
            updateGalleryImage(id);
        }
    });

    prevButton.addEventListener('click', () => {
        let id = parseInt(prevButton.dataset.id);
        if (id > 1) {
            id--;
            updateNavigationButtons(id);
            updateGalleryImage(id);
        }
    });

    showAllButton.addEventListener('click', () => {
        // Gallery grid images - min 320px width, lazy load since they're in modal
        showAllBox.innerHTML = data.galeri.map((item, index) => 
            `<img src="${item.image}" alt="image galeri" width="320" height="240" loading="lazy" data-id="${item.id}" data-index="${index}" class="gallery-thumbnail">`
        ).join('');
        showAllContainer.classList.add('active');
        
        // Add click handlers to gallery thumbnails
        showAllBox.querySelectorAll('.gallery-thumbnail').forEach(img => {
            img.addEventListener('click', (e) => {
                const imageId = parseInt(e.target.dataset.id);
                openFullscreen(imageId);
            });
        });
    });

    closeButton.addEventListener('click', () => {
        showAllBox.innerHTML = '';
        showAllContainer.classList.remove('active');
    });

    // Fullscreen modal functionality
    const fullscreenModal = galeriElement.querySelector('.fullscreen-modal');
    const fullscreenImage = fullscreenModal.querySelector('.fullscreen-image');
    const fullscreenClose = fullscreenModal.querySelector('.fullscreen-close');
    const fullscreenPrev = fullscreenModal.querySelector('.fullscreen-prev');
    const fullscreenNext = fullscreenModal.querySelector('.fullscreen-next');
    
    let currentFullscreenIndex = 0;

    const openFullscreen = (imageId) => {
        const imageIndex = data.galeri.findIndex(item => item.id === imageId);
        if (imageIndex !== -1) {
            currentFullscreenIndex = imageIndex;
            fullscreenImage.src = data.galeri[imageIndex].image;
            fullscreenModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateFullscreenNavigation();
        }
    };

    const closeFullscreen = () => {
        fullscreenModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const updateFullscreenNavigation = () => {
        fullscreenPrev.style.display = currentFullscreenIndex > 0 ? 'flex' : 'none';
        fullscreenNext.style.display = currentFullscreenIndex < data.galeri.length - 1 ? 'flex' : 'none';
    };

    const navigateFullscreen = (direction) => {
        if (direction === 'next' && currentFullscreenIndex < data.galeri.length - 1) {
            currentFullscreenIndex++;
        } else if (direction === 'prev' && currentFullscreenIndex > 0) {
            currentFullscreenIndex--;
        }
        fullscreenImage.src = data.galeri[currentFullscreenIndex].image;
        updateFullscreenNavigation();
    };

    fullscreenClose.addEventListener('click', closeFullscreen);
    fullscreenPrev.addEventListener('click', () => navigateFullscreen('prev'));
    fullscreenNext.addEventListener('click', () => navigateFullscreen('next'));

    // Close on background click
    fullscreenModal.addEventListener('click', (e) => {
        if (e.target === fullscreenModal) {
            closeFullscreen();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (fullscreenModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeFullscreen();
            } else if (e.key === 'ArrowLeft') {
                navigateFullscreen('prev');
            } else if (e.key === 'ArrowRight') {
                navigateFullscreen('next');
            }
        }
    });

    initializeGallery();
    setInterval(autoPlayGallery, 3000);

    paginationElement.querySelectorAll('li').forEach((pagination) => {
        pagination.addEventListener('click', (e) => {
            const id = +e.target.dataset.id;
            updateGalleryImage(id);
        })
    })
};
