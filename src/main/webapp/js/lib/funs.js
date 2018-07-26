var funTest = {};

funTest.test1 = function () {
    console.log("test1");
}

funTest.test2 = function () {
    console.log("test1");
}

funTest.test3 = function () {
    console.log("test1");
}

$.fn.test4 = function () {
    return this.append('<p>test4!</p>');
};

function test5() {
    console.log("test5");
}