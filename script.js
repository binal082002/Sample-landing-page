// Load Lottie Animation
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-bg'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/tech-background.json' // Add your Lottie JSON file here
  });
  
  // Smooth Scroll on Button Click
 // Smooth Scroll on Button Click
document.getElementById('cta-btn').addEventListener('click', () => {
    const target = document.getElementById('next-section');
    target.scrollIntoView({ behavior: 'smooth' });
  });

  
  