//创建蛇节
;(function (window) {
    var self;
    // var timer ;    
    function Snake(options) {
        self = this;        
        Common.call(self,options);
        self.direction = 'right';
        // self.interval=1000;
        // 把创建元素div写在数组内而不是forEach循环内，是为了move移动时获取这个div
        self.body = [{x: 3, y: 1, color: 'purple', element: document.createElement('div')},
            {x: 2, y: 1, color: 'rgb(62, 96, 245)', element: document.createElement('div')},
            {x: 1, y: 1, color: 'rgb(62, 96, 245)', element: document.createElement('div')}];
        self.init();
    }

    Snake.prototype = {
        constructor: Snake,
        init: function () {
            self.body.forEach(function (item) {               
                var div = item.element;
                div.style.width = self.width + "px";
                div.style.height = self.height + "px";
                div.style.position = 'absolute';
                div.style.left = item.x * self.width + 'px';
                div.style.top = item.y * self.height + 'px';
                div.style.backgroundColor = item.color;
                self.map.element.appendChild(item.element);
            })
        },
        move: function (food) {            
            var timer = window.setInterval(function () {

                var head = self.body[0];
                var map = self.map.element;
                //碰壁检测
                if (self.direction === 'left' && (head.x - 1) * self.width < 0) {
                    alert('GAME OVER');
                    return window.clearInterval(timer);//不再往下执行
                } else if (self.direction === 'right' && (head.x + 1) * self.width >= map.offsetWidth) {
                    alert('GAME OVER');
                    return window.clearInterval(timer);
                } else if (self.direction === 'up' && (head.y - 1) * self.width < 0) {
                    alert('GAME OVER');
                    return window.clearInterval(timer);
                } else if (self.direction === 'down' && (head.y + 1) * self.width >= map.offsetHeight) {
                    alert('GAME OVER');
                    return window.clearInterval(timer);
                }
                //身体部分的每一节往前移动到上一节的位置
                //正向遍历的话 i=1 i<self.body.length 此时i=2时 i=1的位置已经变成i=0的位置，这样会重叠
                for (var i = self.body.length - 1; i > 0; i--) {
                    var item = self.body[i];
                    item.x = self.body[i - 1].x;
                    item.y = self.body[i - 1].y;
                    item.element.style.left = item.x * self.width + 'px';
                    item.element.style.top = item.y * self.height + 'px';
                }

                //头部根据按键方向移动
                switch (self.direction) {
                    case 'right':
                        head.x += 1;
                        head.element.style.left = head.x * self.width + "px";
                        break;
                    case 'left':
                        head.x -= 1;
                        head.element.style.left = head.x * self.width + "px";
                        break;
                    case 'up':
                        head.y -= 1;
                        head.element.style.top = head.y * self.height + 'px';
                        break;
                    case 'down':
                        head.y += 1;
                        head.element.style.top = head.y * self.height + 'px';
                        break;
                }
                //当头部的位置等于食物的位置时，身体尾部长一节，同时随机产生一个食物
                if (head.x * self.width === food.x && head.y * self.height === food.y) {

                    var last = self.body[self.body.length - 1];

                    var element = document.createElement('div');//提取出来而不直接饮用last.element是为了map追加和设置元素的样式
                    self.body.push({
                        x: last.x,
                        y: last.y,
                        color: last.color,
                        element: element

                    });
                    element.style.width = self.width + "px";
                    element.style.height = self.height + "px";
                    element.style.backgroundColor = 'rgb(10, 196, 245)';
                    element.style.position = 'absolute';
                    element.style.left = last.x * self.width + "px";
                    element.style.top = last.y * self.width + "px";
                    self.map.element.appendChild(element);
                    food.render();
                }
            }, 200);
            
        }
    };
    window.Snake = Snake;
    window.timer;
})(window);
