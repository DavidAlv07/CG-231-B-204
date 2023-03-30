var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//ESCENA, CAMARA, CONTROL
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);


var controls = new THREE.OrbitControls(camera, renderer.domElement);

//------------------------------
//fORMACION DE LOS CUBOS

var lado=4
var base=lado
var altura= lado

var dimen =[[lado,base,altura],[lado/2,base/2,altura/2],[lado/4,base/4,altura/4]]
var color=[0xFF8000, 0xFF0000, 0x0000FF]
var material=[new THREE.MeshBasicMaterial({ color: color[0] }), new THREE.MeshBasicMaterial({ color: color[1] }),new THREE.MeshBasicMaterial({ color: color[2] })]

//GEOMETRIA
var geometry=[]
for(let n=0;n<3;n++){
    geometry.push(new THREE.BoxGeometry(...dimen[n]));
}
 //lOS TRES CUBOS
var cube=[]
for(let n=0;n<3;n++){
    cube.push(new THREE.Mesh(geometry[n],material[n]));
}

cube[1].position.y=lado-lado/4;
cube[2].position.y=lado+lado/8;

for(let n=0;n<3;n++){
cube[n].position.x=0
}
for(let n=0;n<3;n++){
    scene.add(cube[n])
}

//LUZ  
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

//FLECHAS
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

//GRILLA
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}


render();