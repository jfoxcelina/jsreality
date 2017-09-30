'use strict';

var SCENE;

var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete"
        ? callback()
        : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    console.log('domReady');
    setup();
    addCylinder({
        x: -1.5,
        y: 1,
        z: -3.5
    }, '#EE335F');
    addCylinder({
        x: 1.5,
        y: 1,
        z: -4
    }, '#00BBDD');
});

function setup() {
    SCENE = document.querySelector('a-scene');
}

function addCylinder(position, color) {
    var cylinder = document.createElement('a-cylinder');

    cylinder.setAttribute('color', color);
    cylinder.setAttribute('height', '2');
    cylinder.setAttribute('radius', '0.75');
    cylinder.setAttribute('position', position);

    SCENE.appendChild(cylinder);
}
