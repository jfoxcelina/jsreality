'use strict';

var SCENE

AFRAME.registerComponent('register-scene', {
    init: function() {
        SCENE = this.el;
        sceneSetup();
    }
});
