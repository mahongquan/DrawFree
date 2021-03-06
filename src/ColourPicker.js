var ColourPicker=cc.Sprite.extend({
ctor:function(){
    cc.associateWithNative(this, cc.Sprite); 
	this._super();
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
init:function() {
    if (this._super())
     {
        // // Init default color
	    this.m_hsv={h:0,s:0,v:0};
        // // Add image
        this.initWithSpriteFrameName("menuColourPanelBackground.png");//,
//        this.bg=cc.Sprite.createWithSpriteFrameName("huePickerBackground.png");
//        var s=this.getContentSize();
//        this.bg.setPosition(cc.p(s.width/2,s.height/2));
//	    this.addChild(this.bg);
        this.addChild(cc.Sprite.createWithSpriteFrameName("colourPicker.png"));
        // CC_SAFE_RETAIN(m_background);
        
        var  backgroundPointZero = cc.pSub(m_background->getPosition(), ccp (m_background->getContentSize().width / 2, m_background->getContentSize().height / 2));
        
        // // Setup panels
        // float hueShift                = 8;
        // float colourShift             = 28;
        
        // m_huePicker = new CCControlHuePicker();
        // m_huePicker->initWithTargetAndPos(spriteSheet, ccp(backgroundPointZero.x + hueShift, backgroundPointZero.y + hueShift));
        // m_colourPicker = new CCControlSaturationBrightnessPicker();
        // m_colourPicker->initWithTargetAndPos(spriteSheet, ccp(backgroundPointZero.x + colourShift, backgroundPointZero.y + colourShift));
        
        // // Setup events
        // m_huePicker->addTargetWithActionForControlEvents(this, cccontrol_selector(CCControlColourPicker::hueSliderValueChanged), CCControlEventValueChanged);
        // m_colourPicker->addTargetWithActionForControlEvents(this, cccontrol_selector(CCControlColourPicker::colourSliderValueChanged), CCControlEventValueChanged);
       
        // // Set defaults
        // updateHueAndControlPicker();
        // addChild(m_huePicker);
        // addChild(m_colourPicker);

        // // Set content size
        // setContentSize(m_background->getContentSize());
         return true;
    }
    else
         return false;
},

// CCControlColourPicker* CCControlColourPicker::create()
// {
    // CCControlColourPicker *pRet = new CCControlColourPicker();
    // pRet->init();
    // pRet->autorelease();
    // return pRet;
// }


// void CCControlColourPicker::setColor(const ccColor3B& color)
// {
    // // XXX fixed me if not correct
    // CCControl::setColor(color);
    
    // RGBA rgba;
    // rgba.r      = color.r / 255.0f;
    // rgba.g      = color.g / 255.0f;
    // rgba.b      = color.b / 255.0f;
    // rgba.a      = 1.0f;
    
    // m_hsv=CCControlUtils::HSVfromRGB(rgba);
    // updateHueAndControlPicker();
// }

// void CCControlColourPicker::setEnabled(bool enabled)
// {
    // CCControl::setEnabled(enabled);
    // if (m_huePicker != NULL)
    // {
        // m_huePicker->setEnabled(enabled);
    // }
    // if (m_colourPicker)
    // {
        // m_colourPicker->setEnabled(enabled);
    // } 
// }


// //need two events to prevent an infinite loop! (can't update huePicker when the huePicker triggers the callback due to CCControlEventValueChanged)
// void CCControlColourPicker::updateControlPicker()
// {
    // m_huePicker->setHue(m_hsv.h);
    // m_colourPicker->updateWithHSV(m_hsv);
// }

// void CCControlColourPicker::updateHueAndControlPicker()
// {
    // m_huePicker->setHue(m_hsv.h);
    // m_colourPicker->updateWithHSV(m_hsv);
    // m_colourPicker->updateDraggerWithHSV(m_hsv);
// }


// void CCControlColourPicker::hueSliderValueChanged(CCObject * sender, CCControlEvent controlEvent)
// {
    // m_hsv.h      = ((CCControlHuePicker*)sender)->getHue();

    // // Update the value
    // RGBA rgb    = CCControlUtils::RGBfromHSV(m_hsv);
    // // XXX fixed me if not correct
    // CCControl::setColor(ccc3((GLubyte)(rgb.r * 255.0f), (GLubyte)(rgb.g * 255.0f), (GLubyte)(rgb.b * 255.0f)));
    
    // // Send CCControl callback
    // sendActionsForControlEvents(CCControlEventValueChanged);
    // updateControlPicker();
// }

// void CCControlColourPicker::colourSliderValueChanged(CCObject * sender, CCControlEvent controlEvent)
// {
    // m_hsv.s=((CCControlSaturationBrightnessPicker*)sender)->getSaturation();
    // m_hsv.v=((CCControlSaturationBrightnessPicker*)sender)->getBrightness();


     // // Update the value
    // RGBA rgb    = CCControlUtils::RGBfromHSV(m_hsv);
    // // XXX fixed me if not correct
    // CCControl::setColor(ccc3((GLubyte)(rgb.r * 255.0f), (GLubyte)(rgb.g * 255.0f), (GLubyte)(rgb.b * 255.0f)));
    
    // // Send CCControl callback
    // sendActionsForControlEvents(CCControlEventValueChanged);
// }

// //ignore all touches, handled by children
// bool CCControlColourPicker::ccTouchBegan(CCTouch* touch, CCEvent* pEvent)
// {
    // return false;
// }

});
ColourPicker.create=function(){
	var c=new ColourPicker();
	c.init();
	return c;
}
