//生成游戏场地的构造函数
;(function (window,document) {
    var self;
    function Map(options) {
        self = this;
        options = options || {};
        self.width = options.width || 800;
        self.height = options.height || 600;
        self.color=options.color||'#ccc';
        //方便调用
        self.element=document.createElement('div');
        self.init();
    }
    Map.prototype.init=function(){
        var div=self.element;
        div.style.width=self.width+'px';
        div.style.height=self.height+'px';
        div.style.backgroundColor=self.color;
        div.style.position='relative';
        document.body.appendChild(div);
    };
    window.Map=Map;
})(window,document);