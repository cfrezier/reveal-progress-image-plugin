# reveal-progress-image-plugin
Add an image in your reveal.js progress bar

## Use plugin

````js
Reveal.initialize({
    hash: true,
    progress: true,
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealProgressImage(Reveal)],
    });
````

## Default Configuration

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
You can overload this configuration like this:
````js
Reveal.initialize({
    hash: true,
    progress: true,

    progressImage: {
        imageSrc: './my-image.png'
    },
    
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealProgressImage(Reveal)],
});
````

