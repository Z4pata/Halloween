document.getElementById('mysteryButton').addEventListener('click', function() {
    const misterio = document.getElementById('misterio');
    const sonidoHalloween = document.getElementById('halloween-sound');
    
    // Mostrar el misterio
    misterio.classList.toggle('hidden');
    
    // Reproducir sonido de Halloween si no está sonando
    if (sonidoHalloween.paused) {
        sonidoHalloween.play();
    } else {
        sonidoHalloween.pause();
    }
});
