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

function cC( b, l) {
    
    var geometry = new THREE.ConeGeometry( b, b, r);
    var material = new THREE.MeshBasicMaterial();
    var cono = new THREE.Mesh(geometry, material);
    return cono;
    
}
//FACTORES DEL CONO
var b = 1; // BASE 
var r = 10;// RADIO DE LA BASE
var h = 3; // ALTURA DEL CONO

var cone = cC(b, r); //CREAR CONO

//TRANSFORMADAS AL CONO
cone.scale.y = h;
cone.rotation.z = 3*Math.PI/2; 
cone.rotation.x = Math.PI/2;
cone.rotation.y = -Math.PI/9.7;
cone.position.set((1.75 * b), (b/2.1), 0);

scene.add(cone)
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