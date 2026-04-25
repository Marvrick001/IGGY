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