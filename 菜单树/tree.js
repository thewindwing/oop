;(function(window){
  var self;
  function Tree(selector,data){
    self=this;
    this.container=document.getElementById(selector);
    this.data=data;
    this.init(this.data,this.container);    
  }
  (function(){
    this.init=function(children,node){
      for(var i=0;i<children.length;i++){
        var item=children[i];
        var li=document.createElement('li');
      //为li添加一个子元素div来阻止冒泡。
      var div=document.createElement('div');
      div.innerText=item.name;
      div.toggle=true;//为div添加一个属性用来记录兄弟元素ul的display显示状态
      li.appendChild(div);
      node.appendChild(li);
      //data数组中的元素中若有children属性时值是数组，创建一个ul，再创建多个li来显示每个children的元素的属性值
      if(item.children&&item.children.length){
        //children不为 空
        //遍历时，为每个li添加一个span
        var span=document.createElement('span');
        span.innerHTML='[-]';
        div.appendChild(span);
        var ul=document.createElement('ul');
        li.appendChild(ul);
       //如果有子节点，为对应的li中的div添加点击事件
       div.onclick=this.toggle;
       div.style.cursor='pointer';          
       this.init(item.children,ul)
     }else{
      //没有children时，双击div时添加子元素span内容为[-]
      //为其父元素li添加一个ul，同时为ul添加一个元素li+
      div.ondblclick=this.changeType;     
    }     
  } 
   //在每次for循环后即每个ul后面添加一个元素li+  
   var lastLi=document.createElement('li');
   lastLi.innerHTML='+';
   node.appendChild(lastLi);
      //点击+时添加一个上一个兄弟元素
      lastLi.onclick=this.addChild;
    };
    this.toggle=function(){  
  //显示隐藏兄弟元素ul
  this.nextElementSibling.style.display=this.toggle?'block':'none';
  //当显示时span为[-],隐藏时span为[+]
  this.firstElementChild.innerHTML=this.toggle?'[-]':'[+]';
  this.toggle=!this.toggle;
};
 //改变节点类型的方法
 this.changeType=function(){
   var span=document.createElement('span');
   span.innerHTML='[-]';
   this.appendChild(span);
   var ul=document.createElement('ul');
   var li=document.createElement('li');
   ul.appendChild(li);
   li.innerHTML='+';
   this.parentNode.appendChild(ul);
  //双击节点变为目录节点之后需添加切换事件
  this.onclick=self.toggle;
  //解绑点击事件，以防创建多个span和ul  
  this.ondblclick=null;
  //点击li的+时添加上一个兄弟元素
  li.onclick=self.addChild;
};
// 点击li的+时添加上一个兄弟元素的方法
this.addChild=function(){
  //找到父元素ul，在li之前添加一个li，li添加一个子元素div以便再次点击，内容为new stuff
  var ul=this.parentNode;
  var li=document.createElement('li');
  var div=document.createElement('div');
  ul.insertBefore(li,this);
  li.appendChild(div);
  div.innerHTML='new stuff';
  div.toggle=true;
};

}).call(Tree.prototype)  
  window.Tree=Tree;
})(window)
