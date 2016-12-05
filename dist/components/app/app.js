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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFDNUMsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUV6QixxQkFBc0IsY0FBYyxDQUFDLENBQUE7QUFDckMsd0JBQXlCLG9CQUFvQixDQUFDLENBQUE7QUFJOUM7SUFBQUE7SUFXQUMsQ0FBQ0E7SUFYREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFdBQVdBLEVBQUVBLDJCQUEyQkE7WUFDeENBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUEwQkEsQ0FBQ0E7WUFDdkNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDaENBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxjQUFPQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUM3Q0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1NBQzNEQSxDQUFDQTs7ZUFFREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FYQSxBQVdDQSxJQUFBO0FBRFksY0FBTSxTQUNsQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1xuICBSb3V0ZUNvbmZpZyxcbiAgUk9VVEVSX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHtSZXN1bHRzQ21wfSBmcm9tICcuLi9yZXN1bHRzL3Jlc3VsdHMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICcuLi8uLi9jb3JlL2h0dHBfY2xpZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hcHAvYXBwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21wb25lbnRzL2FwcC9hcHAuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ21wLCBhczogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9yZXN1bHRzJywgY29tcG9uZW50OiBSZXN1bHRzQ21wLCBhczogJ1Jlc3VsdHMnIH0sXG5dKVxuZXhwb3J0IGNsYXNzIEFwcENtcCB7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
