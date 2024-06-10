/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */
"use strict";

/**
 * Light and Dark Mode
*/

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
    $HTML.dataset.theme = $HTML.dataset.theme === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);


/*
 * TAB
 */

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function() {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");
        
        const /** {NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

        $tabContent.classList.add("active");
        this.classList.add("active");
        
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});



document.addEventListener('DOMContentLoaded', function () {
        // Create a scene
        var scene = new THREE.Scene();

        // Create a camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(300, 200); // Set the size of the renderer
        document.querySelector('.model-viewer-container').appendChild(renderer.domElement);

        // Load the 3D model (replace 'path/to/your/model.gltf' with the actual path)
        var loader = new THREE.GLTFLoader();
        loader.load('path/to/your/model.gltf', function (gltf) {
            scene.add(gltf.scene);
        });

        // Animation/rendering loop
        function animate() {
            requestAnimationFrame(animate);
            // Add any animations or updates here
            renderer.render(scene, camera);
        }

        animate(); // Start the animation loop
    });

