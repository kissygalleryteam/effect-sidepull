var $ = require('node').all;
var Base = require('base');

var Event = require('event');

require('./index.css');

var baseConf = {
}

function EffectSidepull(conf){
    this.init(S.merge(baseConf,conf));
}

S.augment(EffectSidepull, Event.Target, {

    init: function(conf){
        var self = this;

        conf.animationTimer = null;

        $(".J_KG_Item").on("mouseenter", function(e){
            var $e = $(e.currentTarget);
            var $list = $e.one('.J_KG_Item_Content');
            self._show(conf, self, $e, $list);
        });
        $(".J_KG_Item").on('mouseleave', function(e){
            var $e = $(e.currentTarget);
            var $list = $e.one('.J_KG_Item_Content');
            self._hide(conf, self, $e, $list);
        });
    },
    _show: function(conf, self, $e, $list){
        self.fire('showStart');

        if(S.Features.isTransitionSupported()){
            $list.css('display','inline-block');
            $list.removeClass('bounceOut').addClass('bounceIn');
            setTimeout(function(){
                $list.css('width','265px');
                self.fire('showEnd');
            },500);
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            $list.css('display','inline-block');
            conf.animationTimer = $list.animate({
                width : 265
            },{
                duration : 0.5,
                easing : 'backOut',
                complete : function(){
                    self.fire('hideEnd');
                }
            });
        }
    },
    _hide: function(conf, self, $e, $list){
        self.fire('hideStart');
        if(S.Features.isTransitionSupported()){
            $list.removeClass('bounceIn').addClass('bounceOut');
            setTimeout(function(){
                $list.css({
                    width : 0,
                    display : 'none'
                });
                self.fire('hideEnd');
            },300);
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            conf.animationTimer = $list.animate({
                width : 0
            },{
                duration : 0.3,
                easing : 'backIn',
                complete : function(){
                    list$.css('display','none');
                    self.fire('hideEnd');
                }
            });
        }
    }
});

module.exports = EffectSidepull;