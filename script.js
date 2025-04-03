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
};

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

/* POPUP */
const gameIcons = {
    "Idle Food Fest!" : "images/appicon/IdleFoodFest.png",
    "Prism Puzzle" : "images/appicon/PrismPuzzle.png",
    "My Snack Empire" : "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f0/0a/3b/f00a3b55-9986-39ec-7c07-9523defa156e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
    "My Pastry Shop" : "https://play-lh.googleusercontent.com/CUIirznC2xmgk-KsRMtm2VSRh2DiACviaI8YgdE5c05lAD_c8BuHRioIB6bueAcZYQ=w240-h480",
    "My Snack Kingdom" : "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4d/c5/ef/4dc5effb-beaf-3805-8030-b081f9c6704b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
    "My Tasty Empire" : "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6a/7c/dd/6a7cddf1-3145-8eb9-ab42-190006df12bd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
    "Gun Plus Fever!" : "images/appicon/GunPlusFever.png",
    "Spray Runner" : "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/11/19/4d/11194dc2-601b-022f-e506-342b731d7aa6/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
    "Hike Up!" : "images/appicon/HikeUp.png",
    "Rope Your Path" : "images/appicon/RopeYourPath.png",
    "Twist It Off" : "images/appicon/TwistItAll_Icon.png",
    "Punch Up Run" : "images/appicon/punchGuyicon.png",
    "DragN Repair" : "images/appicon/DragNRepair.png",
    "Buckethead Shooter" : "images/appicon/BucketHead%20Runner.png",
    "Mining Runner" : "images/appicon/Mining-Runner.png",
    "Sword Forger Hero" : "images/appicon/SwordIcon.png",
    "Voxel Crusher Run" : "images/appicon/VoxelCrusherRun.png",
    "Money Heist Runner" : "images/appicon/Money_HeistIcon.png",
    "Rubberball Runner" : "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/20/52/d3/2052d3e1-0d5a-dc75-125a-af186f51e079/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
    "Forkdrift Master" : "images/appicon/ForkDrift_Icon.png",
    "Crusher Idle" : "images/appicon/CrushIdleIcon.png",
    "Money Arrow" : "images/appicon/MoneyArrowIcon.png",
    "Women on Throne" : "images/appicon/WomenOnThrone%20-Icon.png",
    "Marble Cars" : "images/appicon/MarbleCar-Icon.png",
    "Home Craft Master" : "images/appicon/HomeCraftMaster.png",
    "DIY Bag" : "images/appicon/DIY-Bag-Icon.png",
    "Touchdown Trio" : "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/c2/bc/3b/c2bc3bbf-ed88-11ac-db97-f1ea9291432e/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
    "Repair and Drag" : "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b1/61/4c/b1614cb2-27b6-2526-b1c8-a4ed5b2cd6e4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
    "Junkyard Spinner" : "images/appicon/Car-Destroyer-Icon.png",
    "Build It Up" : "images/appicon/BIUp-AppIcon.png",
    "Target Ball" : "images/appicon/TargetBall.jpg",
    "Car Repair Shooter" : "images/appicon/defaul_icon.png",
    "Fish Clonner" : "images/appicon/defaul_icon.png",
    "Juggling Master" : "images/appicon/defaul_icon.png",
    "Marble Gun Runner" : "https://play-lh.googleusercontent.com/OTDAVZ-1e7250VonZ_D39Tc_N5Iem7P11_2ZaxbmjNeRxBKZH_M6RmYTYkIX6ILDFUE=s256",
    "Bus Shelters Manager" : "https://play-lh.googleusercontent.com/6Sw4D5upsYNpdreA35QfoN-uRzDEWZr8xG1jQrNVC0QurJlAH1RR1izO_lVexbVISGV1=w240-h480",
    "Military Idle" : "https://play-lh.googleusercontent.com/S-F-4lRWw9Plkn1svstE5T52PfSBDvWs8pjHbSa7uXylVTjH6R29jht4LdVj5I7E5oM=w240-h480"
};


const gameLinks = {
    "Idle Food Fest!": {
        apple: "https://apps.apple.com/us/app/idle-food-fest/id6680151213"
    },
    "Prism Puzzle": {
        apple: "https://apps.apple.com/us/app/prism-puzzle/id6692616475"
    },
    "My Snack Empire": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.MySnackEmpire&hl=en",
        apple: "https://apps.apple.com/tr/app/my-snack-empire/id6736908202?l=tr",
        behance: "",
        sketchfab: "",
        artstation: "" 
    },
    "My Pastry Shop": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.MyPastryShop&hl=en",
        apple: "https://apps.apple.com/tr/app/my-pastry-shop/id6698867522?l=tr"
    },
    "My Snack Kingdom": {
    },
    "My Tasty Empire": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.MyTastyEmpire",
        apple: "https://apps.apple.com/tr/app/my-tasty-empire/id6502766369?l=tr"
    },
    "Gun Plus Fever!": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.GunPlusFever",
        apple: "https://apps.apple.com/tr/app/gun-plus-fever/id6449928628?l=tr"
    },
    "Spray Runner": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.SprayRunner",
        apple: "https://apps.apple.com/tr/app/spray-runner/id6450445044?l=tr"
    },
    "Hike Up!": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.HikeUp",
        apple: "https://apps.apple.com/tr/app/hike-up/id6451484725?l=tr"
    },
    "Rope Your Path": {
        apple: "https://apps.apple.com/tr/app/rope-your-path/id1666282747?l=tr"
    },
    "Twist It Off": {
        apple: "https://apps.apple.com/tr/app/twist-it-off/id1620164495?l=tr"
    },
    "Punch Up Run": {
        apple: "https://apps.apple.com/tr/app/punch-up-run/id1638728772?l=tr"
    },
    "DragN Repair": {
    },
    "Buckethead Shooter": {
    },
    "Mining Runner": {
        apple: "https://apps.apple.com/tr/app/mining-runner/id1638728138?l=tr"
    },
    "Sword Forger Hero": {
        apple: "https://apps.apple.com/tr/app/sword-forger-hero/id1635702524?l=tr"
    },
    "Voxel Crusher Run": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.VoxelCrusherRun",
        apple: "https://apps.apple.com/tr/app/voxel-crusher-run/id6447962131?l=tr"
    },
    "Money Heist Runner": {
        apple: "https://apps.apple.com/tr/app/money-heist-runner/id1642276088?l=tr"
    },
    "Rubberball Runner": {
    },
    "Forkdrift Master": {
        apple: "https://apps.apple.com/tr/app/forkdrift-master/id1638728632?l=tr"
    },
    "Crusher Idle": {
        apple: "https://apps.apple.com/tr/app/crusher-idle/id1633604277?l=tr"
    },
    "Money Arrow": {
        apple: "https://apps.apple.com/tr/app/money-arrow/id1631730552?l=tr"
    },
    "Women on Throne": {
        apple: "https://apps.apple.com/tr/app/women-on-throne/id1625311161?l=tr"
    },
    "Marble Cars": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.MarbleCars"
    },
    "Home Craft Master": {
        apple: "https://apps.apple.com/tr/app/home-craft-master/id1618259651?l=tr"
    },
    "DIY Bag": {
        apple: "https://apps.apple.com/tr/app/diy-bag/id1626437583?l=tr"
    },
    "Touchdown Trio": {
        apple: "https://apps.apple.com/tr/app/touchdown-trio/id1621285853?l=tr"
    },
    "Repair and Drag": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.RepairAndDrag",
        apple: "https://apps.apple.com/tr/app/repair-and-drag/id6462086203?l=tr"
    },
    "Junkyard Spinner": {
        apple: "https://apps.apple.com/tr/app/junkyard-spinner/id6443771558?l=tr"
    },
    "Build It Up": {
    },
    "Car Repair Shooter": {
    },
    "Target Ball": {
    },
    "Fish Clonner": {
    },
    "Juggling Master": {
    },
    "Marble Gun Runner": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.MarbleGunRunner"
    },
    "Bus Shelters Manager": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.BusSheltersManager",
        apple: "https://apps.apple.com/us/app/bus-shelter-manager/id1624674703"
    },
    "Military Idle": {
        google: "https://play.google.com/store/apps/details?id=com.BoomCodes.MilitaryIdle",
        apple: "https://apps.apple.com/us/app/military-idle/id6636485345",
    },
};

function openPopup(gameName) {
    const iconUrl = gameIcons[gameName];
    const links = gameLinks[gameName];

    document.getElementById("gameTitle").innerText = gameName;
    document.getElementById("gameIcon").src = iconUrl;
    document.querySelector(".gameGoogle").href = links.google;
    document.querySelector(".gameApple").href = links.apple;
    document.querySelector(".gameBehance").href = links.behance;
    document.querySelector(".gameSketchfab").href = links.sketchfab;
    document.querySelector(".gameArtStation").href = links.artstation;
    document.getElementById("gamePopup").style.display = "block";
}


    

function closePopup() {
    document.getElementById("gamePopup").style.display = "none";
}
   
window.onclick = function(event) {
    var popup = document.getElementById("gamePopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

function openPopup(gameName) {
    const links = gameLinks[gameName];
    const iconUrl = gameIcons[gameName];

    if (!links) {
        console.error("Game not found:", gameName);
        return;
    }

    document.getElementById("gameTitle").innerText = gameName;
    document.getElementById("gameIcon").src = iconUrl;

    const googleButton = document.querySelector(".gameGoogle");
    if (links.google) {
        googleButton.href = links.google;
        googleButton.style.position = "relative";
        googleButton.style.opacity = "1";
    } else {
        googleButton.style.position = "absolute";
        googleButton.style.opacity = "0";
    }

    const appleButton = document.querySelector(".gameApple");
    if (links.apple) {
        appleButton.href = links.apple;
        appleButton.style.position = "relative";
        appleButton.style.opacity = "1";
    } else {
        appleButton.style.position = "absolute";
        appleButton.style.opacity = "0";
    }

    const behanceButton = document.querySelector(".gameBehance");
    if (links.behance) {
        behanceButton.href = links.behance;
        behanceButton.style.position = "relative";
        behanceButton.style.opacity = "1";
    } else {
        behanceButton.style.position = "absolute";
        behanceButton.style.opacity = "0";
    }

    const artstationButton = document.querySelector(".gameArtStation");
    if (links.behance) {
        artstationButton.href = links.behance;
        artstationButton.style.position = "relative";
        artstationButton.style.opacity = "1";
    } else {
        artstationButton.style.position = "absolute";
        artstationButton.style.opacity = "0";
    }

    const sketchfabButton = document.querySelector(".gameSketchfab");
    if (links.behance) {
        sketchfabButton.href = links.behance;
        sketchfabButton.style.position = "relative";
        sketchfabButton.style.opacity = "1";
    } else {
        sketchfabButton.style.position = "absolute";
        sketchfabButton.style.opacity = "0";
    }

    document.getElementById("gamePopup").style.display = "block";
}

/*
window.addEventListener("scroll", function () {
    let logo = document.querySelector(".logo");
    if (!logo) return;

    let scrollY = window.scrollY;
    let rotateAngle = Math.min(scrollY / 10, 30); //

    logo.style.transform = `rotate(${rotateAngle}deg)`;
});

*/ 