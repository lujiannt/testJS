//测试引用其他模块
//require 和 define的区别:require是引入js无返回值，define是定义一个模块可以有返回值
require(["funs", "app/main"], function (funs, mod1) { //这里方法中的参数都是前面依赖js的返回值
    //测试shim 中的 exports设置的返回值对象是否有效
    funs.test1();
    test5();

    //测试引用其他模块
    var mod = require("app/main");
    var module = mod.module1;
    module.getColor()

    var module1 = mod1.module1;
    module1.getColor()
});
