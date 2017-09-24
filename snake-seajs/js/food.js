//创建食物对象
define(function(require,exports,module){
    var unit=require('./util');
    var Common=require('./common');
    var self;
    function Food(options) {
        self = this;
        Common.call(self,options);
        self.color = options.color || 'red';
        self.div = document.createElement('div');
        //把食物的left和top提取出来是为了蛇吃食物时获取食物的位置
        self.x = 0;
        self.y = 0;
        // console.log(options);
        self.init();

    }

    Food.prototype = {
        constructor: Food,
        init: function () {
            var div = self.div;
            div.style.width = self.width + "px";
            div.style.height = self.height + "px";
            div.style.backgroundColor = self.color;
            div.style.position = 'absolute';
            self.render();
            self.scene.element.appendChild(div);

        },
        render: function () {
            self.x = unit.getRandom(self.scene.element.offsetWidth / self.width, 0) * self.width;
            self.y = unit.getRandom(self.scene.element.offsetHeight / self.height, 0) * self.height;
            self.div.style.left = self.x + "px";
            self.div.style.top = self.y + "px";
            self.div.style.backgroundColor = 'rgb(' + unit.getRandom(256, 0) + ',' + unit.getRandom(256, 0) + ',' + unit.getRandom(256, 0) + ')';
        }
    };
    module.exports=Food;
})

