// script.js - Autoplay Music Handler
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 1.0; // Set comfortable volume (0.0 - 1.0)
    
    // Unmute and start playing
    audio.muted = false;
    audio.play().catch(error => {
        console.log('Autoplay blocked. Waiting for user interaction...');
        
        // One-time interaction listener
        const startAudio = function() {
            audio.muted = false;
            audio.play().then(() => {
                console.log('Music started successfully');
                // Clean up listeners
                document.removeEventListener('click', startAudio);
                document.removeEventListener('touchstart', startAudio);
                document.removeEventListener('keydown', startAudio);
            }).catch(e => console.log('Still blocked:', e));
        };
        
        // Add interaction listeners
        document.addEventListener('click', startAudio);
        document.addEventListener('touchstart', startAudio);
        document.addEventListener('keydown', startAudio);
    });
});