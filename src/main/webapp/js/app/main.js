//require 和 define的区别:require是引入js无返回值，define是定义一个模块可以有返回值
define(["jquery", "jquery.alpha", "jquery.beta", "map"], function () {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function () {
        //test 1 测试引用非AMD标准JS
        var map = new Map();
        var obj = {"name": "zhangsan"}
        map.put("1", obj);
        var mapObj = map.get("1");
        console.log(mapObj.name);

        //test 2 测试引用非AMD标准JS
        $('body').alpha().beta();
    });

    //test 3 测试模块相互引用
    var module1 = {};

    module1.getColor = function () {
        var color = "green";
        console.log(color);
    }

    return {
        module1: module1
    }
});