document.addEventListener('DOMContentLoaded', () => {
    const trailContainer = document.getElementById('cursor-trail');
    const trail = [];
    const maxLines = 25;
    let lastX = 0;
    let lastY = 0;

    document.addEventListener('mousemove', (e) => {
        const currentX = e.clientX;
        const currentY = e.clientY;

        // Создаем линию между предыдущей и текущей позицией
        if (lastX && lastY) {
            const line = document.createElement('div');
            line.className = 'trail-line';

            // Вычисляем угол и длину линии
            const dx = currentX - lastX;
            const dy = currentY - lastY;
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            const length = Math.sqrt(dx * dx + dy * dy);

            // Применяем стили
            line.style.left = lastX + 'px';
            line.style.top = lastY + 'px';
            line.style.width = length + 'px';
            line.style.transform = `rotate(${angle}deg)`;

            trailContainer.appendChild(line);
            trail.push(line);

            // Обновляем прозрачность всех линий
            trail.forEach((line, index) => {
                const opacity = 1 - (index / maxLines);
                line.style.opacity = opacity;
            });

            // Удаляем старые линии
            if (trail.length > maxLines) {
                const oldLine = trail.shift();
                oldLine.remove();
            }
        }

        lastX = currentX;
        lastY = currentY;
    });
});