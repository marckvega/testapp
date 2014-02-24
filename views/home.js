/*Application1.home = function (params) {

    var viewModel = {
        //  Put the binding properties here
        message: ko.observable('Welcome!'),


    };

    return viewModel;
};*/
Application1.home = function () {
    var viewModel = {
        message: ko.observable('Welcome!'),
        name: ko.observable(''),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
         greet: function () {
    Application1.app.navigate("greeting/" + this.name());
}
    };
    return viewModel;
};