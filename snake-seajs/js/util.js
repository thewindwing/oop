define(function(require,exports,module){
  exports.getRandom=function (max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
})
