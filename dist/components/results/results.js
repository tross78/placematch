var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
    ResultsCmp.prototype.calcCrimeRate = function (crime_rate_str) {
        var crime_rate_float = parseFloat(crime_rate_str);
        var rate = 'Low';
        if (crime_rate_str == null || crime_rate_str == 0 || crime_rate_str == undefined || isNaN(crime_rate_str)) {
            return rate;
        }
        var percent = crime_rate_float / 100000;
        if (percent > 0.10 && percent < 0.15) {
            rate = 'Low-Medium';
        }
        if (percent > 0.15 && percent < 0.20) {
            rate = 'Medium';
        }
        if (percent > 0.25 && percent < 0.30) {
            rate = 'Medium-High';
        }
        if (percent > 0.30) {
            rate = 'High';
        }
        return rate;
    };
    ResultsCmp.prototype.getWeeklyRent = function (rent) {
        if (rent) {
            return rent.toFixed(2);
        }
        else {
            return "";
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLnRzIl0sIm5hbWVzIjpbIlJlc3VsdHNDbXAiLCJSZXN1bHRzQ21wLmNvbnN0cnVjdG9yIiwiUmVzdWx0c0NtcC5jYWxjQ3JpbWVSYXRlIiwiUmVzdWx0c0NtcC5nZXRXZWVrbHlSZW50IiwiUmVzdWx0c0NtcC5nZXRBZ2VSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QseUJBQTJCLG1CQUFtQixDQUFDLENBQUE7QUFDL0MsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFFNUM7SUFXRUEsb0JBQVlBLElBQVVBLEVBQUVBLE1BQW1CQTtRQVg3Q0MsaUJBcUZDQTtRQTVFQ0EsV0FBTUEsR0FBVUEsRUFBQ0EsU0FBU0EsRUFBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0E7UUFDL0JBLGtCQUFhQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUc1QkEsSUFBSUEsU0FBU0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxTQUFTQSxJQUFFQSxPQUFPQSxHQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN4Q0EsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLFNBQVNBLElBQUVBLE9BQU9BLEdBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsU0FBU0EsSUFBRUEsYUFBYUEsR0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hCQSxTQUFTQSxJQUFFQSxTQUFTQSxHQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUMzQ0EsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLFNBQVNBLElBQUVBLFlBQVlBLEdBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2pEQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6QkEsU0FBU0EsSUFBRUEsVUFBVUEsR0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLEdBQUNBLFNBQVNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLEdBQWFBLElBQUtBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBLFNBQVNBLENBQ2xFQSxVQUFBQSxHQUFHQTtZQUNEQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUNsQkEsS0FBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDNUJBLENBQUNBLENBQUNBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQUNERCxrQ0FBYUEsR0FBYkEsVUFBY0EsY0FBa0JBO1FBQzlCRSxJQUFJQSxnQkFBZ0JBLEdBQUdBLFVBQVVBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQ2xEQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUVqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBY0EsSUFBSUEsSUFBSUEsSUFBSUEsY0FBY0EsSUFBSUEsQ0FBQ0EsSUFBSUEsY0FBY0EsSUFBSUEsU0FBU0EsSUFBSUEsS0FBS0EsQ0FBQ0EsY0FBY0EsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0dBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLElBQUlBLE9BQU9BLEdBQVVBLGdCQUFnQkEsR0FBQ0EsTUFBTUEsQ0FBQ0E7UUFFN0NBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JDQSxJQUFJQSxHQUFHQSxZQUFZQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBO1FBQ2xCQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyQ0EsSUFBSUEsR0FBR0EsYUFBYUEsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ25CQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFDREYsa0NBQWFBLEdBQWJBLFVBQWNBLElBQVFBO1FBQ3BCRyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNUQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDWkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREgsZ0NBQVdBLEdBQVhBLFVBQVlBLE1BQWFBLEVBQUVBLE1BQWFBLEVBQUVBLE1BQWFBLEVBQUVBLE1BQWFBLEVBQUVBLE1BQWFBO1FBRW5GSSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNYQSxNQUFNQSxDQUFDQSxrQkFBa0JBLEdBQUNBLE1BQU1BLEdBQUNBLEdBQUdBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxHQUFDQSxNQUFNQSxHQUFDQSxHQUFHQSxDQUFDQTtRQUN4Q0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLE1BQU1BLENBQUNBLG1CQUFtQkEsR0FBQ0EsTUFBTUEsR0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxNQUFNQSxDQUFDQSxtQkFBbUJBLEdBQUNBLE1BQU1BLEdBQUNBLEdBQUdBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxNQUFNQSxDQUFDQSxjQUFjQSxHQUFDQSxNQUFNQSxHQUFDQSxHQUFHQSxDQUFDQTtRQUNuQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFwRlBKO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxTQUFTQTtTQUNwQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1lBQ3BCQSxXQUFXQSxFQUFHQSxtQ0FBbUNBO1NBQ2pEQSxDQUFDQTs7bUJBK0VEQTtJQUFEQSxpQkFBQ0E7QUFBREEsQ0FyRkEsQUFxRkNBLElBQUE7QUE3RVksa0JBQVUsYUE2RXRCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldyx9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IE5nRm9yLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXN1bHRzJ1xufSlcbkBWaWV3KHtcbiAgZGlyZWN0aXZlczogW05nRm9yXSxcblx0dGVtcGxhdGVVcmwgOiBcIi4vY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuaHRtbFwiXG59KVxuLy8gQ29tcG9uZW50IGNvbnRyb2xsZXJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzQ21wIHtcbiAgcmVzdWx0Ok9iamVjdCA9IHtcInJlc3VsdHNcIjpbXX07XG4gIHNwaW5uZXJIaWRkZW46Qm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwLCBwYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG5cbiAgICBsZXQgcXVlcnlfc3RyID0gXCJcIjtcbiAgICBpZiAocGFyYW1zLmdldCgnaG9tZScpKSB7XG4gICAgICBxdWVyeV9zdHIrPVwiaG9tZT1cIitwYXJhbXMuZ2V0KCdob21lJyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZ2V0KCdhZ2UnKSkge1xuICAgICAgcXVlcnlfc3RyKz1cIiZhZ2U9XCIrcGFyYW1zLmdldCgnYWdlJyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZ2V0KCduaWdodGxpZmUnKSkge1xuICAgICAgcXVlcnlfc3RyKz1cIiZuaWdodGxpZmU9XCIrcGFyYW1zLmdldCgnbmlnaHRsaWZlJyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZ2V0KCd0cmFpbicpKSB7XG4gICAgICBxdWVyeV9zdHIrPVwiJnRyYWluPVwiK3BhcmFtcy5nZXQoJ3RyYWluJyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZ2V0KCdkaXN0YW5jZScpKSB7XG4gICAgICBxdWVyeV9zdHIrPVwiJmRpc3RhbmNlPVwiK3BhcmFtcy5nZXQoJ2Rpc3RhbmNlJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5nZXQoJ2NodXJjaCcpKSB7XG4gICAgICBxdWVyeV9zdHIrPVwiJmNodXJjaD1cIitwYXJhbXMuZ2V0KCdjaHVyY2gnKTtcbiAgICB9XG5cbiAgICBodHRwLmdldCgnL2FwaS9xdWVyeT8nK3F1ZXJ5X3N0cikubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgfVxuICBjYWxjQ3JpbWVSYXRlKGNyaW1lX3JhdGVfc3RyOmFueSk6U3RyaW5nIHtcbiAgICBsZXQgY3JpbWVfcmF0ZV9mbG9hdCA9IHBhcnNlRmxvYXQoY3JpbWVfcmF0ZV9zdHIpO1xuICAgIGxldCByYXRlID0gJ0xvdyc7XG5cbiAgICBpZiAoY3JpbWVfcmF0ZV9zdHIgPT0gbnVsbCB8fCBjcmltZV9yYXRlX3N0ciA9PSAwIHx8IGNyaW1lX3JhdGVfc3RyID09IHVuZGVmaW5lZCB8fCBpc05hTihjcmltZV9yYXRlX3N0cikgKSB7XG4gICAgICByZXR1cm4gcmF0ZTtcbiAgICB9XG5cbiAgICBsZXQgcGVyY2VudDpOdW1iZXIgPSBjcmltZV9yYXRlX2Zsb2F0LzEwMDAwMDtcblxuICAgIGlmIChwZXJjZW50ID4gMC4xMCAmJiBwZXJjZW50IDwgMC4xNSkge1xuICAgICAgcmF0ZSA9ICdMb3ctTWVkaXVtJztcbiAgICB9XG4gICAgaWYgKHBlcmNlbnQgPiAwLjE1ICYmIHBlcmNlbnQgPCAwLjIwKSB7XG4gICAgICByYXRlID0gJ01lZGl1bSc7XG4gICAgfVxuICAgIGlmIChwZXJjZW50ID4gMC4yNSAmJiBwZXJjZW50IDwgMC4zMCkge1xuICAgICAgcmF0ZSA9ICdNZWRpdW0tSGlnaCc7XG4gICAgfVxuICAgIGlmIChwZXJjZW50ID4gMC4zMCkge1xuICAgICAgcmF0ZSA9ICdIaWdoJztcbiAgICB9XG4gICAgcmV0dXJuIHJhdGU7XG4gIH1cbiAgZ2V0V2Vla2x5UmVudChyZW50OmFueSk6U3RyaW5nIHtcbiAgICBpZiAocmVudCkge1xuICAgICAgcmV0dXJuIHJlbnQudG9GaXhlZCgyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG4gIGdldEFnZVJhbmdlKHJhbmdlMTpOdW1iZXIsIHJhbmdlMjpOdW1iZXIsIHJhbmdlMzpOdW1iZXIsIHJhbmdlNDpOdW1iZXIsIHJhbmdlNTpOdW1iZXIpIHtcblxuICAgIGlmIChyYW5nZTEpIHtcbiAgICAgIHJldHVybiBcIjAgdG8gMjAgeWVhcnMgLSBcIityYW5nZTErXCIlXCI7XG4gICAgfSBlbHNlIGlmIChyYW5nZTIpIHtcbiAgICAgIHJldHVybiBcIjIwIHRvIDM1IHllYXJzIC0gXCIrcmFuZ2UyK1wiJVwiO1xuICAgIH0gZWxzZSBpZiAocmFuZ2UzKSB7XG4gICAgICByZXR1cm4gXCIzNSB0byA1MCB5ZWFycyAtIFwiK3JhbmdlMytcIiVcIjtcbiAgICB9IGVsc2UgaWYgKHJhbmdlNCkge1xuICAgICAgcmV0dXJuIFwiNTAgdG8gODAgeWVhcnMgLSBcIityYW5nZTQrXCIlXCI7XG4gICAgfSBlbHNlIGlmIChyYW5nZTUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjgwKyB5ZWFycyAtIFwiK3JhbmdlNStcIiVcIjtcbiAgICAgICAgICB9XG4gICAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
