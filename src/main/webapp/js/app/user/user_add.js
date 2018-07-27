/**
 * user_add
 */
require(["app/user/user"], function (user) {
    var userModule = user.module_user;
    userModule.getType();
    console.log("user_add");

    //经过测试，即使页面引入了该js，页面还是无法调用这里的function，
    //只能在require内部执行，完美解决命名冲突污染问题
    function addUser(user) {
        console.log("user " + user.name + " add success!");
    }
})