//每个项目模块使用define定义一个模块以供该模块下多个页面使用，
//而具体的每个页面只需要使用require调用该模块
define(["jquery"], function () {
    var module_user = {};

    module_user.getType = function () {
        var type = "user";
        console.log(type);
    }

    return {
        module_user: module_user
    }
});