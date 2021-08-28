const path = require('path')
const { ipcRenderer } = require ('electron')

document.querySelector('.set-model-path').addEventListener('drop', e => {
    e.preventDefault()
    e.stopPropagation()

    for (const file of e.dataTransfer.files) {
        console.log(file.path);
    }
})

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

// Get models path from local settings file
ipcRenderer.on('settings:get', (e, settings) =>{
	// loadGLTFModel(settings.models[0])
})

console.log('scene');