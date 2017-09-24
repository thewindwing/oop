define(function(require,exports,module){
  var self;
    function Common(options){
        self=this;
        options = options|| {};//不能颠倒顺序 {}是true不是false
        self.width = options.width || 20;
        self.height = options.height || 20;
        self.scene=options.scene;
    }
    module.exports=Common;
})
