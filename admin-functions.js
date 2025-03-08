function updateTexts() {
    const textContent = document.getElementById('text-content').value;
    // Here you would add code to send the textContent to your server or update it on the page
    console.log('Text content updated:', textContent);
}

function uploadPhoto() {
    const photoUpload = document.getElementById('photo-upload').files[0];
    // Here you would add code to upload the photo to your server or update it on the page
    console.log('Photo uploaded:', photoUpload.name);
}
