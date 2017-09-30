'use strict';

var CAMERA,
    SCENE;

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

var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete"
        ? callback()
        : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    setup();
    addSpheres();
});

function setup() {
    SCENE = document.querySelector('a-scene');
    CAMERA = document.getElementById('camera');
    CAMERA.setAttribute('position', {
        x: 0,
        y: 3.5,
        z: 5.5
    });
}

function addSphere(props) {
    var sphere = document.createElement('a-sphere');
    sphere.setAttribute('id', props.id);
    sphere.setAttribute('color', props.color);
    sphere.setAttribute('radius', props.radius);
    sphere.setAttribute('position', props.position);
    SCENE.appendChild(sphere);
}

function addSpheres() {
    sphereData.forEach(function(sphere) {
        addSphere(sphere)
    });
}
