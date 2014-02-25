﻿var Dialog=cc.Layer.extend({
ctor:function(){
    this._super();
    cc.associateWithNative(this, cc.Layer); 
},
init:function(){
	var winSize = cc.size(320,480);
    var sp1 = cc.Sprite.createWithSpriteFrameName("circle.png");
	sp1.setPosition(cc.p(winSize.width/2,winSize.height/2));
	this.addChild(sp1, 0, -1);
},
onEnter:function()
{
 cc.registerTargetedDelegate(-100, true, this);
 this._super();
},
onExit:function()
{
        cc.unregisterTouchDelegate(this);
        this._super();
},
onTouchBegan:function (touch, event) {
    cc.log("touch begin");
   return true;
},
});
