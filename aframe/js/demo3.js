'use strict';

AFRAME.registerComponent('box-cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
        animateBox(this);
    });
  }
});

function main(){
    console.log('main');
}

function animateBox(el){
    el.emit('spin');
}
