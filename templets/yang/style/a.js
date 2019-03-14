function dy(code)
{
// 50x50
(function($){$.fn.VMiddleImg=function(options){var defaults={"width":null,"height":null};var opts=$.extend({},defaults,options);return $(this).each(function(){var $this=$(this);var objHeight=$this.height();var objWidth=$this.width();var parentHeight=opts.height||$this.parent().height();var parentWidth=opts.width||$this.parent().width();var ratio=objHeight/objWidth;if(objHeight>parentHeight&&objWidth>parentWidth){if(objHeight>objWidth){$this.width(parentWidth);$this.height(parentWidth*ratio);}else{$this.height(parentHeight);$this.width(parentHeight/ratio);}
objHeight=$this.height();objWidth=$this.width();if(objHeight>objWidth){$this.css("top",(parentHeight-objHeight)/2);}else{$this.css("left");}}
else{if(objWidth>parentWidth){$this.css("left",(parentWidth-objWidth)/2);}
$this.css("top",(parentHeight-objHeight)/2);}});};})(jQuery);$(".f").VMiddleImg();
}
// tx
function getByid(id) {
	if (document.getElementById) {
		return document.getElementById(id);
	} else if (document.all) {
		return document.all[id];
	} else if (document.layers) {
		return document.layers[id];
	} else {
		return null;
	}
}
function creatID(DivID){
var objs=getByid(DivID).getElementsByTagName('textarea');
var inps=getByid(DivID).getElementsByTagName('input');
var buts=getByid(DivID).getElementsByTagName('button');
var labs=getByid(DivID).getElementsByTagName('label');
	for (i=0; i<objs.length; i++) {
		objs[i].id="runcode"+i;
		inps[i].id=i
		buts[i].id=i
		labs[i].id=i
	}
}
function runCode(obj){
	  var code=getByid("runcode"+obj).value;
	  var newwin=window.open('','','');
	  newwin.opener = null;
	  newwin.document.write(code); 
	  newwin.document.close();
}