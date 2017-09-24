(function (window, document, Food, Snake,Map) {
    var self;
    function Game(){
        self=this;
        self.map=new Map();
        self.food = new Food({
            map:self.map//一些公用的数据放到构造函数中
        });
        self.snake = new Snake({
            map:self.map
        });
        self.init();       
    }
    var count=0;
    Game.prototype={
        init:function(){
            document.querySelector('#btn').addEventListener('click',self.start);
            document.addEventListener('keydown',self.checkKeyCode );
            document.addEventListener('keyup',self.cancelSpeedUp)
        },
    //开始游戏
        start:function(){
            self.snake.move(self.food);
        },//用户按键
        checkKeyCode:function(e){
           /* if(++count===2){
                clearInterval(timer);
                self.snake.inteval=100;
                self.snake.move(self.food);
                console.log(timer);
            }else if(count>2){

            }else if(count===0){
                clearInterval(timer);
                self.snake.interval=1000;
                self.snake.move(self.food);
            }*/
                var snake=self.snake;

                switch (e.keyCode) {
                    case 37:
                        //当前方向是向左时，用户按下右键 则不起作用
                        (snake.direction !== 'right') && (snake.direction = 'left');
                        break;
                    case 38:
                        (snake.direction !== 'down') && (snake.direction = 'up');
                        break;
                    case 39:
                        (snake.direction !== 'left') && (snake.direction = 'right');
                        break;
                    case 40:
                        (snake.direction !== 'up') && (snake.direction = 'down');
                        break;
                }
        },
        cancelSpeedUp:function(){count=0}
    };
    window.Game=Game;
})(window, document, Food, Snake,Map);
