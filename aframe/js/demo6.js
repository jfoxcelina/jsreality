function sceneSetup() {
    var pumpkin = document.getElementById('pumpkin');
    doLeap(pumpkin);
}

function doLeap(el) {

    var position = el.getAttribute('position');

    Leap.loop({
        hand: function(hand) {
            position.x = Math.round(hand.stabilizedPalmPosition[0]) / 10;
            position.y = (Math.round(hand.stabilizedPalmPosition[1]) / 30) - 3;
            el.setAttribute('position', position);
        }
    });
}
