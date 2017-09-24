(function(window){
    var unit={
        getRandom:function (max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    };    
    window.unit=unit;
})(window);