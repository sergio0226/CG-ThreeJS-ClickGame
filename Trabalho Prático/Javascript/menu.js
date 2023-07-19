var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
const trans = 10;
var camera;
const size = 7;
const thiccness = -(size / 2);
var cylinder_texture = new THREE.TextureLoader().load('./Images/patternLetters.png');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var Alight = new THREE.AmbientLight("#ffffff", 0.2);
var Dlight = new THREE.DirectionalLight("#ffffff", 3);
Dlight.position.set(15, 30, -15);
Dlight.castShadow = true;

var cameraP = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cameraO = new THREE.OrthographicCamera(2000, 2000, 2000, 0.1, 1000);

cameraP.position.set(0, 20, 300);
cameraP.lookAt(0, 0, 0);

cameraO.position.set(250, 10, 200);
cameraO.lookAt(0, 0, 0);

camera = cameraP;

var GroundPlaneG = new THREE.PlaneGeometry(500 * size, 500 * size);
var GroudPlaneM = new THREE.MeshPhongMaterial({ color: "#331b63" });
var GroundPlane = new THREE.Mesh(GroundPlaneG, GroudPlaneM);
GroundPlane.receiveShadow = true;

var mainObject = new THREE.Group();
var pivot = new THREE.Group();

var cubeG = new THREE.BoxGeometry(size, size, size);
cubeG.center();
var cubeM = new THREE.MeshPhongMaterial({ color: "#ff0000" });


var letterC_object = new THREE.Object3D();
letterC_object.name = "C";
var column = new THREE.Object3D();
var upperRow = new THREE.Object3D();
var lowerRow = new THREE.Object3D();

for (let index = 0; index < size; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size + (index * size), 0, 0);
    cube2.position.set(size + (index * size), 0, thiccness);
    cube.name = `Lcubo${index}`;
    lowerRow.add(cube);
    lowerRow.add(cube2);
}

for (let index = 0; index < size; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size + (index * size), (size * 2) + size * (size - 1), 0);
    cube2.position.set(size + (index * size), (size * 2) + size * (size - 1), thiccness);
    cube.name = `Ucubo${index}`;
    upperRow.add(cube);
    upperRow.add(cube2);
}

for (let index = 0; index < size; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(0, size + (index * size), 0);
    cube2.position.set(0, size + (index * size), thiccness);
    cube.name = `Ccubo${index}`;
    column.add(cube);
    column.add(cube2);
}

letterC_object.add(upperRow);
letterC_object.add(column);
letterC_object.add(lowerRow);


var sizet = size + 1;
var cubeG = new THREE.BoxGeometry(sizet, sizet, sizet);
var cubeM = new THREE.MeshStandardMaterial({ color: "#ff0000" });
var letterU_object = new THREE.Object3D();
letterU_object.name = "U";
var Rcolumn = new THREE.Object3D();
var Lcolumn = new THREE.Object3D();
var lowerRow = new THREE.Object3D();

for (let index = 0; index < sizet - 2; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size + (index * sizet), 0, 0);
    cube2.position.set(size + (index * sizet), 0, thiccness);
    cube.name = `Lcubo${index}`;
    lowerRow.add(cube);
    lowerRow.add(cube2);
}

for (let index = 0; index < sizet - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(0, size + (index * sizet), 0);
    cube2.position.set(0, size + (index * sizet), thiccness);
    cube.name = `Ccubo${index}`;
    Lcolumn.add(cube);
    Lcolumn.add(cube2);
}

for (let index = 0; index < sizet - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(sizet * (sizet - 1), sizet + (index * sizet), 0);
    cube2.position.set(sizet * (sizet - 1), sizet + (index * sizet), thiccness);
    cube.name = `Ccubo${index}`;
    Rcolumn.add(cube);
    Rcolumn.add(cube2);
}

letterU_object.add(Rcolumn);
letterU_object.add(Lcolumn);
letterU_object.add(lowerRow);


var midRow = new THREE.Object3D();
var lowerRow = new THREE.Object3D();
var upperRow = new THREE.Object3D();
var LeftColumn = new THREE.Object3D();
var lowerRColumn = new THREE.Object3D();
var upperRColumn = new THREE.Object3D();
var letterB_object = new THREE.Object3D()
letterB_object.name = "B";
var cube = new THREE.Mesh(cubeG, cubeM);

for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size * index, 0, 0);
    cube2.position.set(size * index, 0, thiccness);
    cube.name = `Lcubo${index}`;
    lowerRow.add(cube2);
    lowerRow.add(cube);
}
for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size * index, size * size + size, 0);
    cube2.position.set(size * index, size * size + size, thiccness);
    cube.name = `Ucubo${index}`;
    upperRow.add(cube);
    upperRow.add(cube2);
}
for (let index = 0; index < size - 2; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size + size * index, (size * size) - (2 * size), 0);
    cube2.position.set(size + size * index, (size * size) - (2 * size), thiccness);
    cube.name = `mcubo${index}`;
    midRow.add(cube);
    midRow.add(cube2);
}
for (let index = 0; index < size; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.position.set(0, size + size * index, 0);
    cube2.position.set(0, size + size * index, thiccness);
    cube.name = `lCcubo${index}`;
    LeftColumn.add(cube);
    LeftColumn.add(cube2);
}
for (let index = 0; index < size - 3; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.position.set(size * size - size, size + size * index, 0);
    cube2.position.set(size * size - size, size + size * index, thiccness);
    cube.name = `LRCcubo${index}`;
    lowerRColumn.add(cube);
    lowerRColumn.add(cube2);
}
for (let index = 0; index <= (size - (size - 1)); index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.position.set(size * size - size, size * size - size + size * index, 0);
    cube2.position.set(size * size - size, size * size - size + size * index, thiccness);
    cube.name = `URCcubo${index}`;
    upperRColumn.add(cube);
    upperRColumn.add(cube2)
}

letterB_object.add(LeftColumn);
letterB_object.add(lowerRow);
letterB_object.add(upperRow);
letterB_object.add(midRow);
letterB_object.add(lowerRColumn);
letterB_object.add(upperRColumn);



var letterE_object = new THREE.Object3D()
var cube = new THREE.Mesh(cubeG, cubeM);
var Leftcolumn = new THREE.Object3D();
var midRow = new THREE.Object3D();
var lowerRow = new THREE.Object3D();
var upperRow = new THREE.Object3D();
var mainObject = new THREE.Object3D()
var cube = new THREE.Mesh(cubeG, cubeM);

for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.castShadow = true;
    cube2.position.set(size + size * index, 0, thiccness);
    cube.position.set(size + size * index, 0, 0);
    cube.name = `Lcubo${index}`;
    lowerRow.add(cube2);
    lowerRow.add(cube);
}
for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.position.set(size + size * index, size * size + size, thiccness);
    cube.position.set(size + size * index, size * size + size, 0);
    cube.name = `Ucubo${index}`;
    upperRow.add(cube);
    upperRow.add(cube2);
}
for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size + size * index, (size * size) / 2 + (size / 2), 0);
    cube2.position.set(size + size * index, (size * size) / 2 + (size / 2), thiccness);
    cube.name = `mcubo${index}`;
    midRow.add(cube);
    midRow.add(cube2);
}
for (let index = 0; index < size; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube2.position.set(0, size + size * index, thiccness);
    cube.position.set(0, size + size * index, 0);
    cube.name = `lCcubo${index}`;
    Leftcolumn.add(cube);
    Leftcolumn.add(cube2);
}

letterE_object.add(Leftcolumn);
letterE_object.add(lowerRow);
letterE_object.add(upperRow);
letterE_object.add(midRow);



var letterJ_object = new THREE.Object3D();
var middleColumn = new THREE.Object3D();
var upperRow = new THREE.Object3D();
var lowerRow = new THREE.Object3D();
var tip = new THREE.Object3D();
for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.position.set(size + size * index, size * size + size, thiccness);
    cube.position.set(size + size * index, size * size + size, 0);
    cube.name = `Ucubo${index}`;
    upperRow.add(cube);
    upperRow.add(cube2);
}

for (let index = 0; index < size; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube2.position.set((size / 2) + size * 2, size + size * index, thiccness);
    cube.position.set((size / 2) + size * 2, size + size * index, 0);
    cube.name = `lCcubo${index}`;
    middleColumn.add(cube);
    middleColumn.add(cube2);
}
for (let index = 0; index < size - 4; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.position.set(4 * size - (size / 2) + size * index, 0, thiccness);
    cube.position.set(4 * size - (size / 2) + size * index, 0, 0);
    cube.name = `Ucubo${index}`;
    upperRow.add(cube);
    upperRow.add(cube2);
}
for (let index = 0; index < size - (size - 1); index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.position.set((size / 2) + (size - 1) * size + (size * index), size, thiccness);
    cube.position.set((size / 2) + (size - 1) * size + (size * index), size, 0);
    cube.name = `Ucubo${index}`;
    tip.add(cube);
    tip.add(cube2);
}

letterJ_object.add(middleColumn);
letterJ_object.add(tip);
letterJ_object.add(upperRow);
letterJ_object.add(lowerRow);




var letterS_object = new THREE.Object3D()
var cube = new THREE.Mesh(cubeG, cubeM);
var leftupperColumn = new THREE.Object3D();
var rightlowerColumn = new THREE.Object3D();
var midRow = new THREE.Object3D();
var lowerRow = new THREE.Object3D();
var upperRow = new THREE.Object3D();
var mainObject = new THREE.Object3D()
var cube = new THREE.Mesh(cubeG, cubeM);

for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.castShadow = true;
    cube2.position.set(size + size * index, 0, thiccness);
    cube.position.set(size + size * index, 0, 0);
    cube.name = `Lcubo${index}`;
    lowerRow.add(cube2);
    lowerRow.add(cube);
}
for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube2.position.set(size + size * index, size * size + size, thiccness);
    cube.position.set(size + size * index, size * size + size, 0);
    cube.name = `Ucubo${index}`;
    upperRow.add(cube);
    upperRow.add(cube2);
}
for (let index = 0; index < size - 1; index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.castShadow = true;
    cube.position.set(size + size * index, (size * size) - (4 * size), 0);
    cube2.position.set(size + size * index, (size * size) - (4 * size), thiccness);
    cube.name = `mcubo${index}`;
    midRow.add(cube);
    midRow.add(cube2);
}
for (let index = 0; index < size - (size - 4); index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.position.set(size, size * (size - 4) + size * index + size / 2, 0);
    cube2.position.set(size, size * (size - 4) + size * index + size / 2, thiccness);
    cube.name = `LRCcubo${index}`;
    leftupperColumn.add(cube);
    leftupperColumn.add(cube2);
}
for (let index = 0; index <= (size - 4); index++) {
    var cube = new THREE.Mesh(cubeG, cubeM);
    var cube2 = new THREE.Mesh(cubeG, cubeM);
    cube.position.set(size * size - size, size * index, 0);
    cube2.position.set(size * size - size, size * index, thiccness);
    cube.name = `URCcubo${index}`;
    rightlowerColumn.add(cube);
    rightlowerColumn.add(cube2)
}

letterS_object.add(leftupperColumn);
letterS_object.add(rightlowerColumn);
letterS_object.add(lowerRow);
letterS_object.add(upperRow);
letterS_object.add(midRow);



var mainObjectArray = [];
var counter = 0;
mainObjectArray.push(letterC_object);
mainObjectArray.push(letterU_object);
mainObjectArray.push(letterB_object);
mainObjectArray.push(letterE_object);
mainObjectArray.push(letterJ_object);
mainObjectArray.push(letterS_object);

mainObjectArray.forEach(element => {
    let aux = counter * (size * 4 + size * size * (size / (size)))
    console.log(aux);
    element.position.set(aux, 0, 0);

    mainObject.add(element);
    counter += 1;
    console.log(counter);
    console.log(element.name);
});

mainObject.position.set(0, 400, 0);
const box = new THREE.BoxHelper(mainObject, 0xffff00);
scene.add(box);

scene.background = new THREE.Color("#331b63");
scene.add(GroundPlane)
scene.add(Alight);
scene.add(Dlight);

GroundPlane.rotation.x = -Math.PI / 2;
GroundPlane.position.set(0, -30, 0);


pivot.add(mainObject);
scene.add(pivot);
pivot.position.set(0, 0, 0);
var check = 0;

function animate() {
    requestAnimationFrame(animate);
    var mainObjectChildrens = mainObject.children;
    var angle = (Math.PI / 1000);
    var angle_max = 0;
    var cycle = 0;



    mainObject.position.set(-250, 0, 0);

    mainObjectChildrens.forEach(element => {
        element.rotation.y += 0.01;

    });
    renderer.render(scene, camera);
}
animate();

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
}

