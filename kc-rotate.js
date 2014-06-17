/*KAISARCODE ROTATE ***************************************************
*                                                                         *
*   Copyright (C) 2012-2014  KaisarCode.com                               *
*                                                                         *
*   This program is free software: you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation, either version 3 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
*   This program is distributed in the hope that it will be useful,       *
*   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
*   GNU General Public License for more details.                          *
*                                                                         *
*   You should have received a copy of the GNU General Public License     *
*   along with this program.  If not, see <http://www.gnu.org/licenses/>. *
*                                                                         *
***************************************************************************/

/*
Tested on:
IE7, IE8, IE9
Firefox, Chrome, Safari... (nevermind)

Notes (IExplorer 8/9):
1-	This script was tested on the real Browsers, and it works!
	But, if you try to run it on a windows console, in other IE version... this will not work.
	But it's not a code bug... the CSS rotations (at least), doesn't works on this cases (For any library or implementation).
	No Problem, on the real IE9 and IE8 Will work as intended, Is just a compatibility mode bug.

2-	Make sure that the element to be rotated has the same width and height.
	Because IExplorer will rotate the rendered element inside a fixed box with that dimensions.
	If you rotate a rectangle, the element will get cutted off (like masked).
	
	To fix this, see notes at end of page.
	
*/

function kcRotate(elem,deg){
	var Dx;
        var Dy;
        var iecos;
        var iesin;
        var halfWidth;
        var halfHeight;
        var dummy;
        
        //degrees to radians
        var rad=deg*(Math.PI/180);
        
        //get sine and cosine of rotation angle
        iecos=Math.cos(rad);
        iesin=Math.sin(rad);
        
        //get element's size
        halfWidth=elem.offsetWidth/2;
        halfHeight=elem.offsetHeight/2;
        
        //calculating position correction values
        Dx=-halfWidth*iecos + halfHeight*iesin + halfWidth;
        Dy=-halfWidth*iesin - halfHeight*iecos + halfHeight;

        //applying CSS3 rotation
        elem.style.transform="rotate("+rad+"rad)";
        
        //vendor prefixed rotations
        elem.style.mozTransform="rotate("+rad+"rad)";
        elem.style.webkitTransform="rotate("+rad+"rad)";
        elem.style.OTransform="rotate("+rad+"rad)";
        elem.style.msTransform="rotate("+rad+"rad)";
        
        //rotation Matrix for IExplorer
        elem.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+iecos+", M12="+-iesin+", M21="+iesin+", M22="+iecos+", Dx="+Dx+", Dy="+Dy+", SizingMethod=auto expand)";
        elem.style.msFilter="progid:DXImageTransform.Microsoft.Matrix(M11="+iecos+", M12="+-iesin+", M21="+iesin+", M22="+iecos+", Dx="+Dx+", Dy="+Dy+", SizingMethod=auto expand)";

		//Fixing black box issue on IE9
		dummy=document.createElement("div");
        dummy.innerHTML='<!--[if gte IE 9]><br /><![endif]-->';
        if(dummy.getElementsByTagName("br").length==1) elem.style.filter="none";
		delete dummy;
}

/*
	Fixing rectangular elements issues:
	
	Use a container large enough to wrap the element across all its rotation.
	This would be like a canvas, with the visual parts in the exact middle of it.
	And apply the rotation to the container.
	In this case, You'll have to add the attribute unselectable="on" to the inner elements.
	
	Example 1:
	--------------------------------------------------------------------
	<style>
	#elem {
		width:350px;
		height:225px;
		background-color:orange;
		text-align:center;
		padding-top:125px;
	}
	</style>
	<div id="elem" style="">
		<img src="images/images.jpg" alt="" width="300" height="100" unselectable="on" />
	</div>
	--------------------------------------------------------------------
	
	Example 2:
	--------------------------------------------------------------------
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
			<span class="visual-elem" unselectable="on">Some Text Here</span>
		</div>
	</div>
	--------------------------------------------------------------------
	
	If you use text as content, it is better to give to the container a background color.
	This way you'll prevent messed border transparencies (Proper from IExplorer).
	
*/
