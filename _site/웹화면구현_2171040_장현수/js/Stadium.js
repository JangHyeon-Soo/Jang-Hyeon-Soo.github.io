
document.addEventListener('DOMContentLoaded', () => {
    const OT_Photos = [
        '웹화면구현_2171040_장현수/Image/OT1.webp',
        '웹화면구현_2171040_장현수/Image/OT2.webp',
        '웹화면구현_2171040_장현수/Image/OT3.webp',
        '웹화면구현_2171040_장현수/Image/OT4.webp'
    ];

    const collageContainer = document.getElementById('stadiumImgCont');

    function getRandomSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    OT_Photos.forEach(src => {
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo-container');

        // 랜덤 크기 설정
        const width = getRandomSize(3, 5);
        const height = getRandomSize(1, 1); 

        photoContainer.style.gridColumnEnd = `span ${width}`;
        photoContainer.style.gridRowEnd = `span ${height}`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Photo';

        photoContainer.appendChild(img);
        collageContainer.appendChild(photoContainer);
    });
});



