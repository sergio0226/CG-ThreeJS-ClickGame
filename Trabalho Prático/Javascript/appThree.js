import Stats from 'Stats';
import { OBJLoader } from "OBJLoader";
import { OrbitControls } from 'OrbitControls';
import { MTLLoader } from 'MTLLoader';


var clock;
var holder;
var SkyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
var materialsArray = [];


var texture_r1 = new THREE.TextureLoader().load('./Images/bkg/red/bkg1_right1.png');
var texture_l2 = new THREE.TextureLoader().load('./Images/bkg/red/bkg1_left2.png');
var texture_t3 = new THREE.TextureLoader().load('./Images/bkg/red/bkg1_bottom4.png');
var texture_b4 = new THREE.TextureLoader().load('./Images/bkg/red/bkg1_top3.png');
var texture_f5 = new THREE.TextureLoader().load('./Images/bkg/red/bkg1_front5.png');
var texture_b6 = new THREE.TextureLoader().load('./Images/bkg/red/bkg1_back6.png');

materialsArray.push(new THREE.MeshBasicMaterial({ map: texture_r1, side: THREE.DoubleSide }));
materialsArray.push(new THREE.MeshBasicMaterial({ map: texture_l2, side: THREE.DoubleSide }));
materialsArray.push(new THREE.MeshBasicMaterial({ map: texture_b4, side: THREE.DoubleSide }));
materialsArray.push(new THREE.MeshBasicMaterial({ map: texture_t3, side: THREE.DoubleSide }));
materialsArray.push(new THREE.MeshBasicMaterial({ map: texture_f5, side: THREE.DoubleSide }));
materialsArray.push(new THREE.MeshBasicMaterial({ map: texture_b6, side: THREE.DoubleSide }));

const skybox = new THREE.Mesh(SkyboxGeometry, materialsArray);
var intersects;
var particles = [];
var level = 1;
var totalLevels = 4;
var score = 0;
var totalTargets = 3;
var speed = 0.01;
var complete = false;
var comments = ["Fácil", "Médio", "Avançado", "Difícil"];
var myLevel = document.getElementById("level");
var myScore = document.getElementById("score");

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let stats, controls;
let camera, scene, renderer;
let cameraPerspective, cameraOrtho;
const dlight = new THREE.DirectionalLight(0xffffff, 2);
const alight = new THREE.AmbientLight(0xffffff, 0.7);
const slight = new THREE.PointLight(0xffffff, 1);
slight.position.set(0, 0, 0);

stats = new Stats();
document.getElementById("webgl-container").appendChild(stats.domElement);

function myScene() {
	scene = new THREE.Scene();

	var width = window.innerWidth;
	var height = window.innerHeight;
	camera = new THREE.PerspectiveCamera(75, aspect, 0.2, 10000);
	camera.position.set(20, -10, 20);
	var center = new THREE.Vector3(0, 0, 0);
	camera.lookAt(center);

	cameraPerspective = new THREE.PerspectiveCamera(75, aspect, 0.2, 10000);
	cameraPerspective.position.set(20, -10, 20);
	cameraPerspective.lookAt(center)

	cameraOrtho = new THREE.OrthographicCamera(-50, 50, 50, -50, 0.5, 1000);

	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

	document.getElementById("webgl-container").appendChild(renderer.domElement);

	clock = new THREE.Clock();
	var helper = new THREE.AxesHelper(10);


	controls = new OrbitControls(camera, renderer.domElement);



	scene.add(dlight);
	scene.add(alight);
	scene.add(slight);

	scene.add(helper);
	scene.add(skybox);
}

function onKeyDown(event) {

	switch (event.keyCode) {

		case 65: 
			alight.visible = !alight.visible;
			console.log(alight.visible);
			break;

		case 68: 
			dlight.visible = !dlight.visible;
			console.log(dlight.visible);
			break;

		case 79: 

			camera = cameraOrtho;

			break;

		case 80: 

			camera = cameraPerspective;

			break;

		case 83: 
			slight.visible = !slight.visible;
			console.log(slight.visible);
			break;

	}

}


function addHolder() {
	holder = new THREE.Object3D();
	holder.name = "holder"
	
	for (var i = 0; i < totalTargets; i++) {
		var ranCol = new THREE.Color();
		ranCol.setRGB(Math.random(), Math.random(), Math.random());
		var CenterSphereGeo = new THREE.SphereGeometry(2);
		var CenterSphereMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(255, 255, 0) })
		var sphere = new THREE.Mesh(CenterSphereGeo, CenterSphereMaterial);

		var geometry = new THREE.SphereGeometry(1.5);
		var material = new THREE.MeshLambertMaterial({ color: ranCol });
		var cube = new THREE.Mesh(geometry, material);
		cube.position.x = i + 1 * 5;
		cube.name = "cubeName" + i;



		const mtlLoader = new MTLLoader()
		mtlLoader.load(
			'models/Asteroids.mtl',
			(materials) => {
				materials.preload()
				console.log(materials)
				const objLoader = new OBJLoader()
				objLoader.setMaterials(materials)
				objLoader.load(
					'models/Asteroids.obj',
					(object) => {
						const positions = [
							{ x: 10, y: 10, z: 10 },
							{ x: 20, y: 20, z: 20 },
							{ x: 30, y: 30, z: 30 },
							{ x: 20, y: 30, z: 30 },
							{ x: -10, y: 10, z: 10 },
							{ x: 20, y: -20, z: 30 },
							{ x: 20, y: -10, z: 20 },
							{ x: -10, y: -20, z: -10 },
							{ x: -20, y: -20, z: -10 },
							{ x: -30, y: -30, z: -10 },
							{ x: -10, y: -20, z: 10 },
							{ x: -10, y: -20, z: 20 },
							{ x: 0, y: -20, z: -10 },
							{ x: 0, y: 0, z: -20 },
							{ x: 0, y: -10, z: -30 },
							{ x: 10, y: 0, z: -20 },
							{ x: 10, y: 0, z: 20 },
							{ x: -20, y: 0, z: 0 },
							{ x: 20, y: 0, z: 0 },
							{ x: -30, y: -30, z: -30 },
							{ x: -40, y: -20, z: -40 },
							{ x: -40, y: -20, z: -40 },
							{ x: -40, y: -40, z: -40 },
							{ x: -40, y: 0, z: 0 },
							{ x: -40, y: 0, z: -40 },
							{ x: -40, y: -40, z: 0 },
						];
						positions.forEach((position) => {
							const clonedObject = object.clone();
							clonedObject.position.set(position.x, position.y, position.z);
							scene.add(clonedObject);
						  });
					},
					(xhr) => {
						console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
					},
					(error) => {
						console.log('An error happened')
					}
				)
			},
			(xhr) => {
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
			},
			(error) => {
				console.log('An error happened')
			}
		)

		
		var spinner = new THREE.Object3D();
		spinner.rotation.x = i * 2.5 * Math.PI;
		spinner.name = "spinnerName" + i;

		spinner.add(cube);
		holder.add(spinner);
		scene.add(sphere);
	};
	scene.add(holder);
}

function addExplosion(point) {
	var timeNow = clock.getElapsedTime();

	for (var i = 0; i < 4; i++) {
		var geometry = new THREE.SphereGeometry(1);
		var material = new THREE.MeshBasicMaterial({ color: 0x999999 });
		var part = new THREE.Mesh(geometry, material);
		part.position.x = point.x;
		part.position.y = point.y;
		part.position.z = point.z;
		part.name = "part" + i;
		part.birthDay = timeNow;
		scene.add(part);
		particles.push(part);
	};
}

function animate() {
	requestAnimationFrame(animate);
	render();
	stats.update();
	controls.update();

}

function render() {

	holder.children.forEach(function (elem, index, array) {
		elem.rotation.y += (speed * (6 - index));
		elem.children[0].rotation.x += 0.01;
		elem.children[0].rotation.y += 0.01;
	});

	if (particles.length > 0) {
		particles.forEach(function (elem, index, array) {
			switch (elem.name) {
				case "part0":
					elem.position.x += 1;
					break;
				case "part1":
					elem.position.x -= 1;
					break;
				case "part2":
					elem.position.y += 1;
					break;
				case "part3":
					elem.position.y -= 1;
					break;
				default:
					break;
			}

			if (elem.birthDay - clock.getElapsedTime() < -1) {
				scene.remove(elem);
				particles.splice(index, 1);
			}
		})

	};

	renderer.render(scene, camera);
}

function onDocumentMouseDown(event) {
	event.preventDefault();

	if (complete) {
		complete = false;
		score = 0;
		restartScene();
		return;
	}


	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;


	raycaster.setFromCamera(mouse, camera);

	if (score < totalTargets) {
		holder.children.forEach(function (elem, index, array) {
			intersects = raycaster.intersectObjects(elem.children);
			if (intersects.length > 0 && intersects[0].object.visible) {
				intersects[0].object.visible = false;

				addExplosion(intersects[0].point);
				score += 1;

				if (score < totalTargets) {
					myScore.innerHTML = "<span class='hit'>Acertou!</span> Score: " + score + "/" + totalTargets;
				} else {
					complete = true;

					if (level < totalLevels) {
						myScore.innerHTML = "<strong>Destruiu todos os cubos!</strong> Clique para avançar de nível " + (level + 1) + ".";
					} else {
						myScore.innerHTML = "<strong>Você ganhou!</strong> Clique para jogar novamente.";
					}
				};
			}
		});
	}
}

function restartScene() {
	myScore.innerHTML = "";

	if (level < totalLevels) {
		speed += 0.005;
		totalTargets += 1;
		level += 1;
	} else {
		speed = 0.01;
		totalTargets = 3;
		level = 1;
	}

	myLevel.innerText = comments[level - 1] + ": Nível " + level + " de " + totalLevels;
	scene.remove(holder);

	addHolder();
}

document.getElementById("webgl-container").addEventListener('mousedown', onDocumentMouseDown, false);

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

	render();
}

window.onload = function () {
	myLevel.innerText = comments[level - 1] + ": Nível " + level + " de " + totalLevels;
	myScene();
	addHolder();
	animate();

	window.addEventListener('resize', onWindowResize, false);
	document.addEventListener('keydown', onKeyDown);
};