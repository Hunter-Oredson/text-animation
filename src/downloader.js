import html2canvas from 'html2canvas'


export async function generateDownloadable(durationInSec) {
    const divToRecord = document.getElementById('previewElement');
    const duration = durationInSec > 2 ? durationInSec : 2;
    const interval = 50;
    const numFrames = duration * 1000 / interval;

    var imageArray = []
    let frameCount = 0;

    function captureFrame() {
        return new Promise((resolve, reject) => {
            const captureInterval = setInterval(() => {
                frameCount++;
                html2canvas(divToRecord).then(canvas => {
                    canvas.toBlob(function (blob) {
                        // Create a new image object
                        const img = new Image();

                        // Set the source of the image to the blob URL
                        img.src = URL.createObjectURL(blob);

                        // Add the image to an array
                        // console.log('capturing', img)

                        imageArray.push(img);
                    });
                })
                if (frameCount === numFrames) {
                    clearInterval(captureInterval)
                    resolve()
                }
            }, interval);
        })
    }
    await captureFrame()

    await makeGif(imageArray)
}

function makeGif (imgs) {
    return new Promise ((resolve, reject) => {
        const gif = new GIF({
            workers: 2,
            quality: 10,
        });
        
        // Add each Image object to the GIF
        imgs.forEach((image) => {
            gif.addFrame(image, { delay: 0 });
        });
        gif.on('finished', function (blob) {
            const downloadLink = document.getElementById('download-btn');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'animation.gif';
            resolve()
        });
        gif.on('error', (error) => {
            console.error(error);
            reject()
        });
    
        gif.render()
    })
}
