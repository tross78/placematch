var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var results_1 = require('../results/results');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: './components/app/app.html',
            styleUrls: ['./components/app/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.HomeCmp, as: 'Home' },
            { path: '/results', component: results_1.ResultsCmp, as: 'Results' },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
