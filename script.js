const gallery = document.getElementById('gallery');

const images = [
    {
        src: 'img/1.jpg',
        large: 'img/1.1.jpg',
        title: 'Magical Ocean',
        description: 'Full of color, life, and animals that seem from another planet. Lucky are the divers who can enjoy this wonder of a landscape.'
    },
    {
        src: 'img/2.jpg',
        large: 'img/2.1.jpg',
        title: 'River in the Green',
        description: 'Like magic, a waterfall comes from the middle of the green mountain, painting the jungle with movement and life.'
    },
    {
        src: 'img/3.jpg',
        large: 'img/3.1.jpg',
        title: 'Orange Sand Waves',
        description: 'A brilliant orange desert contrasting with the blue sky. Perfectly symmetrical.'
    },
    {
        src: 'img/4.jpg',
        large: 'img/4.1.jpg',
        title: 'Starry Sky',
        description: 'Between mountains, you can see thousands of tiny starlight sparks, and if you pay attention, you can make a wish.'
    },
    {
        src: 'img/5.jpg',
        large: 'img/5.1.jpg',
        title: 'Hidden Pearl',
        description: 'In the middle of nowhere, between large mountains, a small beach— a paradise for the lucky ones who find it.'
    },
    {
        src: 'img/6.jpg',
        large: 'img/6.1.jpg',
        title: 'Reflection of a Path in the Forest',
        description: 'Pure water reflecting the beautiful mountain forest around it.'
    },
    {
        src: 'img/7.jpg',
        large: 'img/7.1.jpg',
        title: 'Between Rocky Mountain and Pine',
        description: 'A crystal-clear blue river flows between tall mountains that touch the sky and are kissed by the clouds.'
    },
    {
        src: 'img/8.jpg',
        large: 'img/8.1.jpg',
        title: 'Path Between Mountain and Pink Sea',
        description: 'Like a fairy tale dream, a beautiful landscape at sunset that paints the sea and sky in pink.'
    },
    {
        src: 'img/9.jpg',
        large: 'img/9.1.jpg',
        title: 'Sun Kiss on the Snow',
        description: 'White mountains covered with snow, where you can see the reflection of the sun gently touching them.'
    },
    {
        src: 'img/10.jpg',
        large: 'img/10.1.jpg',
        title: 'Brushstrokes of Clouds',
        description: 'The sky is painted with color, textured by the clouds and the reflection of the sun.'
    },
    {
        src: 'img/11.jpg',
        large: 'img/11.1.jpg',
        title: 'Wet Rock',
        description: 'Smooth, crystal-clear water sliding over rocks. A landscape that emerges from the green jungle.'
    },
    {
        src: 'img/12.jpg',
        large: 'img/12.1.jpg',
        title: 'Gradient of the Sky Reflecting the Sea',
        description: 'From turquoise blue to bright orange, a sunset that fades into the sea.'
    }
];

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.dataset.large = image.large;
    imgElement.dataset.title = image.title;
    imgElement.dataset.description = image.description;
    gallery.appendChild(imgElement);
});

const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalTitle = modal.querySelector('.description h2');
const modalDescription = modal.querySelector('.description p');

gallery.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        modalImg.src = event.target.dataset.large;
        modalTitle.textContent = event.target.dataset.title;
        modalDescription.textContent = event.target.dataset.description;
        modal.classList.add('show');
    }
});

modal.addEventListener('click', function() {
    modal.classList.remove('show');
});
