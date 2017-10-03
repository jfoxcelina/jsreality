var SCENE


AFRAME.registerComponent('main', {
    init: function() {
        var sceneEl = this.el;
        SCENE = this.el;
        main(sceneEl);
    }
});
