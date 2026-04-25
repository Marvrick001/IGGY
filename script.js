const roadmapItems = document.querySelectorAll('.timeline-item');

const roadmapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, { threshold: 0.5 });

roadmapItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transition = "all 0.8s ease-in-out";
    // Slide in from left or right
    if(item.classList.contains('left')) {
        item.style.transform = "translateX(-50px)";
    } else {
        item.style.transform = "translateX(50px)";
    }
    roadmapObserver.observe(item);
});

const memeContainer = document.getElementById('iggy-meme-container');
const totalMemes = 20; // Set this to however many images you have

for (let i = 1; i <= totalMemes; i++) {
    // Create the card
    const memeCard = document.createElement('div');
    memeCard.className = 'meme-card';

    // Set the image path (assumes images are named meme1.jpg, meme2.jpg, etc.)
    const imgPath = `memes/meme${i}.jpg`; 

    memeCard.innerHTML = `
        <img src="${imgPath}" alt="IGGY Meme ${i}" loading="lazy">
        <div class="meme-overlay">
            <a href="${imgPath}" download="IGGY_Meme_${i}.jpg" class="download-btn">Download 💾</a>
        </div>
    `;

    memeContainer.appendChild(memeCard);
}