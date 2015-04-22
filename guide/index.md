## 综述

EffectSidepull。

## 初始化组件

    S.use('kg/effect-sidepull/1.0.1/index', function (S, EffectSidepull) {
        var effect-sidepull = new EffectSidepull();

        effect-sidepull.on('showStart',function(){
          console.log('showStart');
        });

        effect-sidepull.on('showEnd',function(){
          console.log('showEnd');
        });

        effect-sidepull.on('hideStart',function(){
          console.log('hideStart');
        });

        effect-sidepull.on('hideEnd',function(){
          console.log('hideEnd');
        });
    })

## API说明
