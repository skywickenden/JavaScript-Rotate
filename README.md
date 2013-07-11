At least... A CSS Rotate
======

A tool for CSS rotations using JavaScript.
It can rotate any HTML Element, even in Internet Explorer. Say goodbye to the crappy Canvas and Flash workarounds or the 4 position bullshit of IE. Finally, the right and simplest solution.

Not matters if it's an image, a div, a text or whatever, just let it roll!...


kc-rotate.js
======
Add this script at the header of your document. Then you can rotate any block or inline-block HTML Element using the function:

kcRotate(elem,deg);

Where "elem" is the element you want to rotate, and "deg" are the degrees.


kc-rotate-dial.js
======
This class is based on the original kc-rotate function. It allows you to rotate any block or inline-block HTML element by dragging it. It reproduces a sort of Dial Effect (Like on the old radios).
Just add the script in the header of your document and you can use it using the following constructor:

var myDial=kcRotateDial(elem);

Where "elem" is the element you want to apply the Dial effect.
With this, your element will work automagically.

But... there's more!

As you initialize the rotation class, you have the event "onChange" available, where you can apply your own callbacks each time the element moves.

myDial.onChange=function(){
    //your script
}

And... what you can do?
Well, in each rotation "change" you'll have available different values to calculate the spin and direction:

myDial.rad //-> rotation in radians    (0 to 6.283185307179586)
myDial.deg //-> rotation in degrees    (0 to 360)
myDial.per //-> rotation in percentage (0 to 100)

myDial.fullRad //-> full rotation in radians    (without limits)
myDial.fullDeg //-> full rotation in degrees    (without limits)
myDial.fullPer //-> full rotation in percentage (without limits)

myDial.spin //-> Amount of spins (negative or possitive)

myDial.clock //-> If the current change was made clockwise (true or false)
