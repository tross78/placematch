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
var angular2_2 = require('angular2/angular2');
var HomeCmp = (function () {
    function HomeCmp() {
        this.seek_age_range_list = ["20 and under", "20 to 35", "35 to 50", "50 to 80", "80 plus"];
    }
    HomeCmp.prototype.onagerangechange = function (event) {
    };
    HomeCmp.prototype.searchSubmit = function (event) {
        this.location.go('/results');
    };
    HomeCmp = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            directives: [angular2_2.NgFor],
            templateUrl: "./components/home/home.html"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;
