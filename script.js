// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create geometry
const geometry = new THREE.PlaneGeometry(2, 2, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Handle window resizing
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Handle mouse movement
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Render loop
const animate = () => {
    requestAnimationFrame(animate);

    // Update the mesh based on mouse position
    mesh.rotation.x += 0.005 * mouse.y;
    mesh.rotation.y += 0.005 * mouse.x;

    renderer.render(scene, camera);
};

// Start the animation loop
animate();
