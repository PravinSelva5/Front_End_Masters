const popmotion = require("popmotion");
require("./useless");
const { styler, spring, listen, pointer, value } = popmotion;

/* 
The above is called de-structuring. It is the same as the following:

const spring = window.popmotion.spring;
const styler = window.popmotion.styler;
const listen = window.popmotion.listen;
const pointer = window.popmotion.pointer;
const value = window.popmotion.value;
*/

const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(ballXY);
    });