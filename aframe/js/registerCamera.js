var CAMERA

AFRAME.registerComponent('register-camera', {
    init: function() {
        CAMERA = this.el;
        cameraSetup();
    }
});
