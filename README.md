##Overview##
KaisarCode Rotate is a library that allows the real rotation of any block and inline-block element in a Crossbrowser way.
It was tested on major desktop, mobile, game console, and TV browsers... but should work in other devices too, if that exists.
Here, we present different flavours:
* A simple one, in which we can rotate an element to a fixed angle
* A dynamic one, that we can grab with the cursor or touch, and slide its rotation as if it was a Dial wheel.

##Implementation##
Just add this library inside the *<head>* of your HTML document, and (when your target element is loaded) execute
it just by passing the DOM element, and the rotation degrees as parameter.

```javascript
//KaisarCode Rotate
var elem=document.getElementById("my-elem");
kcRotate(elem, 63);

//KaisarCode Rotate Dial
var elem=document.getElementById("my-elem");
kcRotateDial(elem);
```
And Voilá.

####KC Dial goodies####
Aside from allow the element to be rotated by hand, KC Dial has several properties to make it more useful.
Once we've initialized the rotational proces, we can retrieve data from it.
Here is an example:

```javascript
var elem=document.getElementById("my-elem");
var rotated=kcRotateDial(elem);

rotated.onchange=function(){//->fires every time we move the element

	var deg=rotated.deg; //->returns angle in degrees
	var rad=rotated.rad; //->returns angle in radians
	var per=rotated.per; //->returns angle in percentage
	var fullRad=rotated.fullRad; //->returns absolute angle in radians (unlimited spins)
	var fullDeg=rotated.fullDeg; //->returns absolute angle in degrees (unlimited spins)
	var fullPer=rotated.fullPer; //->returns absolute angle in percentage (unlimited spins)
	var spins=rotated.spin; //-> Amount of spins
	var clockwise=rotated.clock; //-> Am I going clockwise?
	
	console.log(deg);
}
```


##Tested on##
IE7 and higher, Firefox, Chrome, Safari, Opera, on Desktop, Mobile, Game Consoles, Smart TVs, and even on a potato...

##Notes (IExplorer 8/9)##
1. This script was tested on the real Browsers, and it works! But, if you try to run it on a windows console, in other IE version... this will not work. And it's not a code bug... the CSS rotations (at least), doesn't works on this cases (For any library or implementation). No Problem, on the real IE9 and IE8 Will work as intended, Is just a compatibility mode bug.
2. Make sure that the element to be rotated has the same width and height, because IExplorer will rotate the rendered element inside a fixed box with that dimensions. If you rotate a rectangle, the element will get cutted off (like masked).
3. **(Just for Dial)**: Be careful to not reposition the rotated element directly, always put it into a container, and move the container. Because if not, IE will keep thinking that the element's center point is on its natural place, and trust me, we don't want that.

###Fixing rectangular elements' issues###
	
Use a container large enough to wrap the element across all its rotational area.
This would be sort of a canvas, with the visual parts in the exact middle of it.
And apply the rotation to the container.
In this case, You'll have to add the attribute ```unselectable="on"``` to the inner elements.

#####Example 1#####
```html
<style>
#elem {
	width:350px;
	height:225px;
	background-color:orange;
	text-align:center;
	padding-top:125px;
}
</style>
<div id="elem">
	<img src="rect.png" alt="" width="300" height="100" unselectable="on" />
</div>
```
	
#####Example 2#####
Hey, with a table-styled element it's better
```html
<style>
	#elem{
		display:table;
		border:none;
		background-color:orange;
		width:300px;
		height:300px;
	}
	#elem .elem-cell{
		display:table-cell;
		vertical-align:middle;
		text-align:center;
	}
</style>
<div id="elem">
	<div class="elem-cell" unselectable="on">
		<span class="visual-elem" unselectable="on">They see me Rollin'...</span>
	</div>
</div>
```
If you use text as content, it is better to give to the container a background color. This way you'll prevent messed border transparencies (Proper from IExplorer).
