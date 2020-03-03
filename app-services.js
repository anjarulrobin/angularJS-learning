myApp.service('Calculation', function () {
    this.addition = function (a,b) {
        return a+b;
    }
    this.substraction = function (a,b) {
        return a-b;
    }
    this.multiplication = function (a,b) {
        return a*b;
    }
    this.division = function (a,b) {
        return a/b;
    }
    var obj = {
        name: 'abcd',
        address: 'dhaka'
    };

    this.object = function(){
        return obj;
    }
})