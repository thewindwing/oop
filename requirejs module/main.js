define(['m1','m2','t','jquery'],function(m1,m2,t,$){
  // console.log(t);
  t();
  $('#test').css('backgroundColor','green');
  // console.log(m2);
  // 这里就是一个模块，拥有私有空间
  var flag = 1;
  var abc = 123456;
  // console.log(abc);

  var fn = function(){
    console.log('hello world');
  }

  var obj = {
    fn : fn,
    foo : function(){
      console.log('foo');
    }
  }

  // return abc;// 导出成员
  // return fn;
  return obj;
});