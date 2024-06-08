const range = document.querySelector('.slider');
const glowText = document.getElementById('glow');

range.addEventListener('input', handleSlider);

function handleSlider(e) {
    let value = e.target.value;

    const newColor = `hsl(${value}, 100%, 50%)`;
    const newShadow = `
        0 0 10px white, 
        0 0 70px hsl(${value}, 100%, 50%), 
        0 0 80px hsl(${value}, 100%, 50%), 
        0 0 100px hsl(${value}, 100%, 50%), 
        0 0 150px hsl(${value}, 100%, 50%)`;
    const newTransform = `perspective(500px) rotateY(${value * 2}deg)`;

    glowText.style.setProperty('color', newColor);
    glowText.style.setProperty('text-shadow', newShadow);
    glowText.style.setProperty('transform', newTransform);
}
