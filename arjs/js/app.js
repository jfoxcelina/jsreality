var domReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
  setup();
  // addCylinder();
});

function setup() {
  var el = document.getElementById('sphere');
  el.addEventListener('gamepadbuttondown', function (e) {
    handleButtons(e.detail.index);
  });
}

function handleButtons(buttonNumber){
  //console.log(buttonNumber);

  var sphere = document.getElementById('sphere');

  switch(buttonNumber){
    case(4):
    // sphere.setAttribute('color', 'blue');
    console.log(sphere.getAttribute('position'));
    sphere.emit('bounce');
    // sphere.emit('down');
    break;
    case(6):
    // sphere.setAttribute('color', 'red');
    break;
  }

}

function addCylinder() {
  var scene = document.querySelector('a-scene');
  var cylinder = document.createElement('a-cylinder');
  cylinder.setAttribute('color', '#FF9500');
  cylinder.setAttribute('height', '2');
  cylinder.setAttribute('radius', '0.75');
  cylinder.setAttribute('position', '1 1.25 -5');
  scene.appendChild(cylinder);
  console.log('done');
}
