'use strict';

var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete"
        ? callback()
        : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    setup();
});

function setup() {

    var model = document.getElementById('model');

    model.addEventListener('gamepadbuttondown', function(e) {
        buttonHandler(model, e.detail.index);
    });

}

function buttonHandler(model, button) {    
    switch (button) {

        case(0):
            model.emit('spinDown');
            break;

        case(1):
            model.emit('spinRight');
            break;

        case(2):
            model.emit('spinLeft');
            break;

        case(3):
            model.emit('spinUp');
            break;
    }
}
