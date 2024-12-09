setTimeout(function() {
    const splash = document.getElementById('splash-screen');
    splash.classList.add('fade-out');
    
    setTimeout(function() {
        splash.style.display = 'none';
    }, 5000);
}, 1000);