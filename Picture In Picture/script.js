const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media strem to pass in video element

const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Whooopsss! Error Here', error);
    }
}

// Event Listeners
button.addEventListener('click', async () => {
    // Diable the button when click on it
    button.disable = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disable = false;
})


// On Load
selectMediaStream();