
document.addEventListener('DOMContentLoaded', () => {
    const photos = [
        '웹화면구현_2171040_장현수/Image/image1.webp',
        '웹화면구현_2171040_장현수/Image/image2.webp',
        '웹화면구현_2171040_장현수/Image/image3.jpg',
        '웹화면구현_2171040_장현수/Image/image4.avif',
        '웹화면구현_2171040_장현수/Image/ManchesterUnited.webp',
        '웹화면구현_2171040_장현수/Image/image6.jpg',
        '웹화면구현_2171040_장현수/Image/image7.jpg',
        '웹화면구현_2171040_장현수/Image/image8.jpg',
        '웹화면구현_2171040_장현수/Image/image9.webp',
        '웹화면구현_2171040_장현수/Image/image10.jpg',
        '웹화면구현_2171040_장현수/Image/image11.jpg',
        '웹화면구현_2171040_장현수/Image/image12.jpg',
        '웹화면구현_2171040_장현수/Image/image13.jpg'
    ];

    const collageContainer = document.getElementById('collage-container');

    function getRandomSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    photos.forEach(src => {
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo-container');

        // 랜덤 크기 설정
        const width = getRandomSize(3, 5);
        const height = getRandomSize(1, 2); 

        photoContainer.style.gridColumnEnd = `span ${width}`;
        photoContainer.style.gridRowEnd = `span ${height}`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Photo';

        photoContainer.appendChild(img);
        collageContainer.appendChild(photoContainer);
    });
});



