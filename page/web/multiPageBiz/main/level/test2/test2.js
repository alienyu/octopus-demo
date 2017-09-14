require("./test2.less");
var fuc = {
    init() {
        $.ajax({
            type: "get",
            url: "/c/d",
            data: {
                a:1
            },
            success: function(data) {
                console.log(JSON.stringify(data))
            }
        })
    }
};

fuc.init();