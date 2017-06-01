var camera, canvas, cube, geometry, light, material, renderer, scene, t;

canvas = document.getElementById('webglcanvas');

t = THREE;

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

renderer = new t.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

renderer.setSize(canvas.width, canvas.height);

scene = new t.Scene;

camera = new t.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000);

scene.add(camera);

material = new t.MeshPhongMaterial({
  color: 0xcccccc
});

geometry = new t.CubeGeometry(2, 2, 2);

cube = new t.Mesh(geometry, material);

cube.position.z = -8;

cube.rotation.x = Math.PI / 5;

cube.rotation.y = Math.PI / 5;

scene.add(cube);

light = new t.DirectionalLight(0xffffff, 1.5);

light.position.set(1, 2, 10);

scene.add(light);

var newTime, lastTime = Date.now();
var render = function () {
	requestAnimationFrame( render );
	newTime = Date.now();
	var dt = newTime - lastTime;
	cube.rotation.x += 0.001*dt;
	cube.rotation.y += 0.001*dt;
	lastTime = newTime;
	renderer.render(scene, camera);
};

render();