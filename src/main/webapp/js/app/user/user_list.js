//每个项目模块使用define定义一个模块以供该模块下多个页面使用，
//而具体的每个页面只需要使用require调用该模块
require(["app/user/user"], function (user) {
    var userModule = user.module_user;
    userModule.getType();
    console.log("user_list");

    //经过测试，即使页面引入了该js，页面还是无法调用这里的function，
    //只能在require内部执行，完美解决命名冲突污染问题
    function listUser() {
        console.log("list: user1 user2 user3");
    }
})