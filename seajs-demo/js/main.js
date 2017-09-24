// 如果使用了 seajs 不要这样写代码
// console.log('main.js 文件代码被加载执行了')
// var foo = 'bar'

// 这里还是全局，也不要这样做
// ;(function () {
//   var foo = 'bar'
//   window.foo = foo
// })()

// 注意：如果使用了 seajs 
// 把所有代码运行到 define 的回调函数中
// seajs 在全局提供了一个 define 方法
// define 方法需要接收一个参数：function
// 该 function 加载的时候会自动执行
// define 的回调函数就是一个私有作用域
// 内部的成员外部也无法访问
// define 的回调函数参数可以接收三个参数：
//    require 用于加载模块
//    exports 用于导出接口
//    module  模块对象，也可以用于导出接口
define(function (require, exports, module) {
  var foo = 'bar'
  console.log('main.js 文件代码被加载执行了')

  // require 是一个函数
  // 该函数需要接收一个文件模块路径
  // 只要调用该函数，seajs 就会帮你加载该文件模块并执行里面的代码
  // 1. 加载并执行指定模块的代码
  // 2. 得到被加载模块的 module.exports 对象
  var aExports = require('./a.js')
  var bExports = require('./b.js')

  console.log(foo)
  console.log(aExports)

  var ret = aExports.add(aExports.x, aExports.y)
  console.log(ret)
  console.log(aExports.foo)
  console.log('bExports foo = ' + bExports.foo)
})

// 使用 seajs 的总结流程
// 将程序的文件都划分成多个模块
// seajs 专注于解决 JavaScript 模块
// 一个 JavaScript 文件就是一个模块
// 使用 seajs 可以通过 seajs.use() 去启动你的模块
// 然后每一个模块的代码都写到 define 函数的回调函数中
// 每一个模块都是私有作用域，完全封闭，默认只有在内部访问内部成员
// 外部无法访问模块内部成员，而模块也不会污染外部
// seajs 专门为模块提供了固定的通信规则：
//    define 函数的回调函数需要接收三个参数：
//      require 是一个函数，作用：用于加载模块
//        1. 加载并执行指定模块代码
//        2. 得到模块的导出接口对象 module.exports
//      exports
//      module 是一个对象，该对象中有一个成员叫做：exports
//        默认模块最后会 return module.exports
//      
//      综上所述，咱们在使用的是，只需要做到以下 4 点就可以了：
//        seajs.use() 启动模块系统
//        把所有的模块都写到 define 函数中
//        如果需要依赖项，则使用 require 进行加载
//        如果需要进行模块接口导出，则手动往 module.exports 上挂载成员即可
//        
