﻿var SysMenu=cc.Layer.extend({
ctor:function(){
    this._super();
    cc.associateWithNative(this, cc.Layer); 
    this.ps=[];
    this.cs=[];
},
init:function() {
    if ( !this._super() )
    {
        return false;
    }

    this.setTouchEnabled(true);
    this.pencolor=cc.c4f(0,1,0,1);
    this.penWidth=5;

    this.drawnode = cc.DrawNode.create();
    this.addChild(this.drawnode, 10);
    this.testeditbox();
    this.testcp();
},
testcp:function(){
    this.colourPicker=cc.ControlColourPicker.create();
    this.addChild(this.colourPicker);
    var me=this.colourPicker.getContentSize();
    this.colourPicker.setPosition(me.width/2,global_h-me.height/2);   
    this.colourPicker.addTargetWithActionForControlEvents(this,this.colourValueChanged,  cc.CONTROL_EVENT_VALUECHANGED);
 
},
    colourValueChanged:function (sender, controlEvent) {
        // Change value of label.
        //this.edit2.setText(cc.convertColor3BtoHexString(sender.getColor()).toUpperCase());
        var c=sender.getColor();
        //this.edit2.setText(""+c.red);
        this.pencolor=cc.c4FFromccc3B(c);
    },
testbutton:function(){
    var label=cc.LabelTTF.create("button1");
    label.setColor(cc.c3b(0,0,255));
    this.button1=cc.ControlButton.create(label,cc.Sprite.create("res/extension/green_edit.png"));
    this.addChild(this.button1);
    this.button1.setPosition(cc.p(100,200));
    this.button1.addTargetWithActionForControlEvents(this, this.button1click, cc.CONTROL_EVENT_TOUCH_DOWN);

},
    editBoxEditingDidBegin: function (editBox) {
        cc.log("editBox  DidBegin !");
    },

    editBoxEditingDidEnd: function (editBox) {
        cc.log("editBox  DidEnd !");
    },

    editBoxTextChanged: function (editBox, text) {
        cc.log("editBox  TextChanged, text: " + text);
    },

    editBoxReturn: function (editBox) {
        cc.log("editBox  was returned !");
        this.penWidth=parseInt(this.edit1.getText());
    },
testeditbox:function() {
    var left=global_w/2;
    var wdLabel=cc.LabelTTF.create("width:");
    wdLabel.setAnchorPoint(0,0);
    this.addChild(wdLabel);
    wdLabel.setPosition(left,global_h-50);

    this.edit1 = cc.EditBox.create(cc.size(50, 50), cc.Scale9Sprite.create("res/extensions/green_edit.png"), cc.Scale9Sprite.create("res/extensions/orange_edit.png"));
    this.edit1.setAnchorPoint(cc.p(0,0));
    this.edit1.setPosition(left+60,global_h-50);//
    this.edit1.setFontColor(cc.c3b(251, 250, 0));
    this.edit1.setDelegate(this);
    this.addChild(this.edit1);
    this.edit1.setText(""+this.penWidth);
},
edit1click:function(){
    cc.log("edit1 click");
},
button1click:function(){
    cc.log("button1 click");
},
    onTouchesBegan:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            this.pointDown(pos);
            break;
        }
    },
    onTouchesMoved:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            this.pointMove(pos);
            break;
        }
    },
    onTouchesEnded:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            this.pointUp(pos);
            break;
        }
    },
    onTouchesCancelled:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            this.pointUp(pos)
            break;
        }
    }, 
onMouseDown:function(event) {
    var pos = event.getLocation();
    var v=cc.EGLView.getInstance()
    var r=v.getViewPortRect()
    cc.log("onMouseUp at: " + pos.x + " " + pos.y );
    //this.lblLevel.setString(pos.x + "," + pos.y)
    var p0=r.origin
    pos.y=(pos.y-p0.y)/cc.EGLView.getInstance().getScaleY();
    pos.x=(pos.x-p0.x)/cc.EGLView.getInstance().getScaleX();
    this.pointDown(pos);
},
onMouseExited:function(event){
    this.onMouseUp(event);
},
onMouseUp:function(event) {
    var pos = event.getLocation();
    var v=cc.EGLView.getInstance()
    var r=v.getViewPortRect()
    cc.log("onMouseUp at: " + pos.x + " " + pos.y );
    //this.lblLevel.setString(pos.x + "," + pos.y)
    var p0=r.origin
    pos.y=(pos.y-p0.y)/cc.EGLView.getInstance().getScaleY();
    pos.x=(pos.x-p0.x)/cc.EGLView.getInstance().getScaleX();
    this.pointUp(pos);
},
onMouseDragged:function(event) {
    var pos = event.getLocation();
    var v=cc.EGLView.getInstance()
    var r=v.getViewPortRect()
    cc.log("onMouseUp at: " + pos.x + " " + pos.y );
    var p0=r.origin
    pos.y=(pos.y-p0.y)/cc.EGLView.getInstance().getScaleY();
    pos.x=(pos.x-p0.x)/cc.EGLView.getInstance().getScaleX();
    this.pointMove(pos);
},
pointDown:function(pos){
    this.ps=[]
    this.ps.push([pos,this.pencolor,this.penWidth]);
    this.drawnode.drawDot(pos,this.penWidth,cc.c4f(1,0,0,1));
},
pointUp:function(pos){
    this.ps.push([pos,this.pencolor,this.penWidth]);
    this.cs.push(this.ps);
    this.mydrawPoints(this.ps);
    this.ps=[]
},
pointMove:function(pos){
    this.ps.push([pos,this.pencolor,this.penWidth]);
    this.drawnode.drawDot(pos,this.penWidth,cc.c4f(1,0,0,1));
},
mydrawPoints:function(ps)
{
    for(var i=0;i<ps.length-1;i++)
    {
        var pos=ps[i][0];
        var pos2=ps[i+1][0];
        var color=ps[i][1];
        var wd=ps[i][2];
        this.drawnode.drawSegment(pos,pos2,wd,color);
    }
},
update:function(dt) {
   
},
});
SysMenu.create=function(){
    var layer = new SysMenu();
    layer.init();
    return layer;
}
SysMenuScene=function(){
    var s=cc.Scene.create();
    var l=SysMenu.create();
    s.addChild(l);
    //var d=new Dialog();
    //d.init();
    //s.addChild(d);
    return s;
}
SysMenu.scene=function(){
    var s=cc.Scene.create();
    var l=SysMenu.create();
    s.addChild(l);
    //var d=new Dialog();
    //d.init();
    //s.addChild(d);
    return s;
}

