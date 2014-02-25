var CP=cc.Layer.extend({
ctor:function(){
    this._super();
    cc.associateWithNative(this, cc.Layer); 
},
init:function(){
	var winSize = cc.size(320,480);
    var sp1 = cc.Sprite.createWithSpriteFrameName("circle.png");
	sp1.setPosition(cc.p(winSize.width/2,winSize.height/2));
	//sp1.setAnchorPoint(cocos2d::CCPointZero);
	this.addChild(sp1, 0, -1);
},
onEnter:function()
{
    var d=cc.Director.getInstance();//getDelegate
    for( var i in d)
    {
        var one="" + d[i];
        nm=one.split(" ")[1]
        //if(nm.substr(0,3)=="sha")
        //{
            cc.log(nm);
        //}
    }
	//cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, -100, true);
    this._super();
},
onExit:function()
{
	//cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
    this._super();
	//CCNode::onExit();
},
onTouchBegan:function (touch, event) {
   return true;
},
});
