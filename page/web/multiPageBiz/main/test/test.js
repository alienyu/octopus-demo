require("./test.less");
var fuc = {
    init() {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                type: "get",
                url: "/a/b/c",
                data: {
                    a:1
                },
                success: function(data) {
                    resolve(data);
                }
            })
        });
        promise.then(function(data) {
            console.log(JSON.stringify(data))
        });
    }
};

fuc.init();