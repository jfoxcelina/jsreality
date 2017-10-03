AFRAME.registerComponent('box-cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
        animateBox(this);
    });
  }
});

function animateBox(el){
    el.emit('spin');
}
