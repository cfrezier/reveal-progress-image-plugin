const RevealProgressImage = ((Reveal) => {
    return {
        id: 'progressImage',
        init: (reveal) => {
            let config = Object.assign({ iconSize: [30, 30], bottom: 5, moveTransition: 'left .8s cubic-bezier(.26,.86,.44,.985)', imageSrc: './images/progress.webp', imageAnimation: [
                    { transform: 'rotateY(0deg)' },
                    { transform: 'rotateY(360deg)' }
                ] }, reveal.getConfig().progressImage);
            const progressImage = document.createElement('img');
            progressImage.style.position = 'absolute';
            progressImage.style.maxHeight = config.iconSize[0] + 'px';
            progressImage.style.maxWidth = config.iconSize[1] + 'px';
            progressImage.style.bottom = config.bottom + 'px';
            progressImage.style.transition = config.moveTransition;
            progressImage.src = config.imageSrc;
            if (config.imageAnimation) {
                progressImage.animate(config.imageAnimation, {
                    duration: 1000,
                    iterations: Infinity
                });
            }
            document.body.appendChild(progressImage);
            Reveal.on('slidechanged', () => {
                progressImage.style.left = (Reveal.getProgress() * 100) + '%';
            });
        }
    };
});
export default RevealProgressImage;
