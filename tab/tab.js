// 需要共享的数据初始化到对象实例上
// 公用的方法初始化到 prototype 原型对象上
function Tab(selector, options) {
  console.log(this);
  var tabContainer = document.querySelector(selector)
  options = options || {}
  this.btnElements = tabContainer.querySelectorAll('button')
  this.divElements = tabContainer.querySelectorAll('.body>div')
  this.options = {
    autoPlay: options.autoPlay || false,
    interval: options.interval || 1000
  }
  // 实例化 tab 对象之后，直接 init 调用实现基础功能
  this.init()
}

Tab.prototype = {
  constructor: Tab,
  init: function () {
    var that = this // 在这里将 this 进行备份，因为 forEach 循环内部的 this 指向的是 window
    this.btnElements.forEach(function (btn, index) {
      // 事件处理函数中的 this 是事件源 DOM 对象
      btn.addEventListener('click', function () {
        that.btnElements.forEach(function (btn, index) {
          btn.classList.remove('active')
          that.divElements[index].classList.add('hide')
        })
        this.classList.add('active')
        that.divElements[index].classList.remove('hide')
      })
    })
    this.options.autoPlay && this.autoPlay()
  },
  autoPlay: function () {
    var start = 0
    var that = this
    window.setInterval(function () {
      that.btnElements.forEach(function (btn, index) {
        btn.classList.remove('active')
        that.divElements[index].classList.add('hide')
      })

      that.btnElements[start].classList.add('active')
      that.divElements[start].classList.remove('hide')

      start++

      // 这里把 start 收住，不能超出索引大小
      if (start === that.btnElements.length) {
        start = 0
      }
    }, this.options.interval)
  }
}
