;(function(window){
    var self;
    function Common(options){
        self=this;
        options = options|| {};//不能颠倒顺序 {}是true不是false
        self.width = options.width || 20;
        self.height = options.height || 20;
        self.map=options.map;
    }
    window.Common=Common;
})(window);