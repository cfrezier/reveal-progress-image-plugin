# reveal-progress-image-plugin
Add an image in your reveal.js progress bar

## Configution

By defaut configuration is set to:
````js
    iconSize: [30, 30],
    bottom: 5,
    moveTransition: 'left .8s cubic-bezier(.26,.86,.44,.985)',
    imageSrc: './images/progress.webp',
    imageAnimation: [
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(360deg)' }
    ]
````

Please make sure to include a file at ./images/progress.web or change the parameter