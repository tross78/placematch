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
var http_1 = require('angular2/http');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var ResultsCmp = (function () {
    function ResultsCmp(http, params) {
        var _this = this;
        this.result = { "results": [] };
        this.spinnerHidden = false;
        var query_str = "";
        if (params.get('home')) {
            query_str += "home=" + params.get('home');
        }
        if (params.get('age')) {
            query_str += "&age=" + params.get('age');
        }
        if (params.get('nightlife')) {
            query_str += "&nightlife=" + params.get('nightlife');
        }
        if (params.get('train')) {
            query_str += "&train=" + params.get('train');
        }
        if (params.get('distance')) {
            query_str += "&distance=" + params.get('distance');
        }
        if (params.get('church')) {
            query_str += "&church=" + params.get('church');
        }
        http.get('/api/query?' + query_str).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.result = res;
            _this.spinnerHidden = true;
        });
    }
    ResultsCmp.prototype.calcCrimeRate = function (total, single) {
        total = parseFloat(total);
        single = parseFloat(single);
        if (single == null || single == 0 || single == undefined || isNaN(single)) {
            return "0";
        }
        var percent = total / single;
        return percent.toFixed(1);
    };
    ResultsCmp.prototype.getAgeRange = function (range1, range2, range3, range4, range5) {
        if (range1) {
            return "0 to 20 years - " + range1 + "%";
        }
        else if (range2) {
            return "20 to 35 years - " + range2 + "%";
        }
        else if (range3) {
            return "35 to 50 years - " + range3 + "%";
        }
        else if (range4) {
            return "50 to 80 years - " + range4 + "%";
        }
        else if (range5) {
            return "80+ years - " + range5 + "%";
        }
    };
    ResultsCmp = __decorate([
        angular2_1.Component({
            selector: 'results'
        }),
        angular2_1.View({
            directives: [angular2_2.NgFor],
            templateUrl: "./components/results/results.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.RouteParams])
    ], ResultsCmp);
    return ResultsCmp;
})();
exports.ResultsCmp = ResultsCmp;
