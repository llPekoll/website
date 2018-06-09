// Three.js

var container = document.getElementById('three');
var mouse = new THREE.Vector2();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

var loader = new THREE.ObjectLoader();
var material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(tex) } );

loader.load(peko,
    function ( obj ) {
        scene.add( obj );
        obj.scale.set(10,10,10);
        obj.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) 
        {
            child.material = material;
        }
        } );
    },
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function ( err ) {
        console.error( 'An error happened' );
    }
);

camera.position.set(1, 1, 5);
renderer.setSize( window.innerWidth,  window.innerHeight );

document.body.appendChild( container );
document.addEventListener('mousemove', onMouseMove, false);
container.appendChild( renderer.domElement );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    }
function onMouseMove(event) {
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
    camera.position.x += (mouseX - camera.position.x) * 0.0003;
    camera.position.y += (mouseY - camera.position.y) * 0.0003;
    if (camera.position.x < -2) {
        camera.position.x = -2
    }
    if (camera.position.x > 2 ) {
        camera.position.x = 2
    }
    if (camera.position.y < -1) {
        camera.position.y = -1
    }
    if (camera.position.y > 1 ) {
        camera.position.y = 1
    }
    camera.lookAt(scene.position);
};    
animate();