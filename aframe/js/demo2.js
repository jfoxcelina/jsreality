function sceneSetup() {
    console.log('sceneSetup');
    addSpheres();
}

function cameraSetup() {
    console.log('cameraSetup');
    positionCamera();
}

function positionCamera(){
    CAMERA.setAttribute('position', {
        x: 0,
        y: 3.5,
        z: 5.5
    });
}

function addSpheres() {
    sphereData.forEach(function(sphereData) {
        addSphere(sphereData)
    });
}

function addSphere(sphereData) {
    var sphere = document.createElement('a-sphere');
    sphere.setAttribute('id', sphereData.id);
    sphere.setAttribute('color', sphereData.color);
    sphere.setAttribute('radius', sphereData.radius);
    sphere.setAttribute('position', sphereData.position);
    SCENE.appendChild(sphere);
}

var sphereData = [
    {
        id: 0,
        color: '#c11717',
        position: {
            x: -1,
            y: 1,
            z: -1
        },
        radius: '.45'
    }, {
        id: 1,
        color: '#068428',
        position: {
            x: 0,
            y: 1,
            z: -1
        },
        radius: '.45'
    }, {
        id: 2,
        color: '#4168f4',
        position: {
            x: 1,
            y: 1,
            z: -1
        },
        radius: '.45'
    }, {
        id: 3,
        color: '#c11717',
        position: {
            x: -1,
            y: 1,
            z: 0
        },
        radius: '.45'
    }, {
        id: 4,
        color: '#068428',
        position: {
            x: 0,
            y: 1,
            z: 0
        },
        radius: '.45'
    }, {
        id: 5,
        color: '#4168f4',
        position: {
            x: 1,
            y: 1,
            z: 0
        },
        radius: '.45'
    }, {
        id: 6,
        color: '#c11717',
        position: {
            x: -1,
            y: 1,
            z: 1
        },
        radius: '.45'
    }, {
        id: 7,
        color: '#068428',
        position: {
            x: 0,
            y: 1,
            z: 1
        },
        radius: '.45'
    }, {
        id: 8,
        color: '#4168f4',
        position: {
            x: 1,
            y: 1,
            z: 1
        },
        radius: '.45'
    }
];
