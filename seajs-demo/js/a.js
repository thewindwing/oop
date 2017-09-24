define(function (require, exports, module) {
  // module 是一个对象
  // module 对象有一个成员 export
  // var module = {
  //   exports: {}
  // }
  var foo = 'baz'
  console.log('a.js 文件代码被加载执行了')
  var add = function (x, y) {
    return x + y
  }

  console.log(module.exports)
  module.exports.x = 10
  module.exports.y = 20
  console.log(module.exports)

  module.exports.add = add
  module.exports.foo = foo
  // 在函数执行的结尾的地方会有这么一句代码
  // return module.exports
  // 谁来 require 我，谁就得到内部的 module.exports 接口对象
  // 你要做的：把希望被外部访问的成员挂载到 module.exports 上就可以了
})
