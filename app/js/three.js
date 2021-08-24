const THREE = require('three');
const path = require('path')
var FBXLoader = require('three-fbx-loader');

const width = 320
const height = 240
const container = document.querySelector('.three-canvas')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( width, height );
container.appendChild( renderer.domElement );

const loader = new FBXLoader();

var modelPath = path.join(__dirname, 'assets', 'models', 'char', 'Anime_character.fbx')

console.log(modelPath)

loader.load(modelPath, function (object3d) {
    scene.add(object3d);
});

// console.log(loader);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}
animate();