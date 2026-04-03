// Optional: Add a custom cursor or simple interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully.");
    
    // Add slightly dynamic interactive tilt to avatar based on mouse movement
    const avatar = document.querySelector('.hero-visual');
    const hero = document.querySelector('.hero');
    
    if (avatar && hero) {
        hero.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            avatar.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
        
        hero.addEventListener('mouseleave', () => {
            avatar.style.transform = `rotateY(0deg) rotateX(0deg)`;
            avatar.style.transition = 'transform 0.5s ease-out';
        });
        
        hero.addEventListener('mouseenter', () => {
            avatar.style.transition = 'none';
        });
    }
});
