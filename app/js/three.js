const width = 320
const height = 240
const container = document.querySelector('.three-canvas')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize( width, height );
container.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

camera.position.z = 5;

function testModel() {
	const geometry = new THREE.BoxGeometry()
	const material = new THREE.MeshBasicMaterial({color: 0xff00ff})
	const cube = new THREE.Mesh(geometry, material)
	scene.add(cube)
}

function loadFBXModel(){
	const loader = new THREE.FBXLoader()

	// var modelPath = path.join(__dirname, 'assets', 'models', 'fbx', 'girl', 'sketchfab_v002.fbx')

	var modelPath = __dirname + '/assets/models/fbx/girl/sketchfab_v002.fbx'

	console.log(modelPath)
	
	loader.load(modelPath, function (fbx) {
	
		fbx.scale.setScalar(.02)
		fbx.traverse(child => {
			child.castShadow = true
		})

		// const animationLoader = new THREE.FBXLoader()
		// animationLoader.load(modelPath, anim => {
		// 	const mixer = new THREE.AnimationMixer(fbx)
		// 	const idle = mixer.clipAction(anim.animations[0])
		// 	idle.play()
		// })
		scene.add(fbx);
	});
}

function loadGLTFModel(model){
	// var modelPath = path.join(__dirname, 'assets', 'models', 'gltf', 'girl', 'scene.gltf')

	// var modelPath = __dirname + '/assets/models/gltf/skull/scene.gltf'

	// console.log(modelPath);

	// const loader = new THREE.GLTFLoader()
	// loader.load(modelPath, gltf => {

	// 	console.log(gltf)

	// 	// gltf.scale.setScalar(.02)
	// 	// gltf.traverse(child => {
	// 	// 	child.castShadow = true
	// 	// })
	// 	scene.add(gltf.scene);
	// },
	// xhr => {
	// 	// console.log(xhr);
	// }, err => {
	// 	console.log(err);
	// })
}

var light

function addLight(){
    var ambient = new THREE.HemisphereLight(0xffffbb, 0x080820)
    scene.add(ambient)

    light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(1, 10, 6)
    scene.add(light)
}

function animate() {
	requestAnimationFrame( animate );
	
	controls.update();

	if (light)
		light.position.copy(camera.position)
	
	renderer.render( scene, camera );
}

loadGLTFModel()

// loadFBXModel()

addLight()
// testModel()
animate();