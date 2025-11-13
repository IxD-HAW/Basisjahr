const button = document.getElementById('surpriseBtn');

button.addEventListener('click', () => {
    let posY = window.innerHeight / 2; // Start in der Mitte
    let velocity = 0;
    const gravity = 0.8; // Beschleunigung nach unten
    const bounceFactor = 0.6; // Energieverlust beim Aufprall
    const ground = window.innerHeight - button.offsetHeight; // Unterer Rand
    let animation;

    function fall() {
        velocity += gravity;
        posY += velocity;

        if (posY >= ground) {
            posY = ground;
            velocity = -velocity * bounceFactor; // Rückstoß
            if (Math.abs(velocity) < 1) {
                cancelAnimationFrame(animation);
                return; // Stoppen, wenn kaum Bewegung
            }
        }

        button.style.top = posY + 'px';
        animation = requestAnimationFrame(fall);
    }

    fall();
});