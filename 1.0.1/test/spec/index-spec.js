KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('effect-sidepull', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/effect-sidepull/1.0.1/']});