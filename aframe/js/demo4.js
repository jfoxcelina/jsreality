function main() {
    var picklerick = document.getElementById('picklerick');
    var prsound = document.getElementById('prsound');

    picklerick.addEventListener('keyup:KeyO', function() {
        rotate(picklerick, 'left');
    });

    picklerick.addEventListener('keyup:KeyP', function() {
        rotate(picklerick, 'right');
    });

    picklerick.addEventListener('keyup:KeyL', function() {
        prsound.components.sound.playSound();
    });
}

function rotate(el, direction) {
    var rotationAttribute = el.getAttribute('rotation');

    switch (direction) {
        case 'left':
            rotationAttribute.y = rotationAttribute.y - 30;
            el.setAttribute('rotation', rotationAttribute);
            break;

        case 'right':
            rotationAttribute.y = rotationAttribute.y + 30;
            el.setAttribute('rotation', rotationAttribute);
            break;
    }
}
