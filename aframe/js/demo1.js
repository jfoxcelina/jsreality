function sceneSetup() {
    console.log('sceneSetup');
    addCylinder({x: -1.5, y: 1, z: -3.5}, '#EE335F');
    addCylinder({x: 1.5, y: 1, z: -4}, '#00BBDD');
}

function addCylinder(position, color) {
    var cylinder = document.createElement('a-cylinder');

    cylinder.setAttribute('color', color);
    cylinder.setAttribute('height', '2');
    cylinder.setAttribute('radius', '0.75');
    cylinder.setAttribute('position', position);

    SCENE.appendChild(cylinder);
}
