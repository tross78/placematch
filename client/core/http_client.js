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
var Rx = require('@reactivex/rxjs/dist/cjs/Rx');
var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
        this.requestNotifier = new Rx.Subject();
    }
    HttpClient.prototype.get = function (url, options) {
        var _this = this;
        this._notify({ type: 'start' });
        return this.http.get(url, options)
            .map(this._mapResponse)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpClient.prototype.post = function (url, body, options) {
        var _this = this;
        this._notify({ type: 'start' });
        return this.http.post(url, body, options)
            .map(this._mapResponse)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpClient.prototype.put = function (url, body, options) {
        var _this = this;
        this._notify({ type: 'start' });
        return this.http.put(url, body, options)
            .map(this._mapResponse)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpClient.prototype.delete = function (url, options) {
        var _this = this;
        this._notify({ type: 'start' });
        return this.http.delete(url, options)
            .map(this._mapResponse)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpClient.prototype.patch = function (url, body, options) {
        var _this = this;
        this._notify({ type: 'start' });
        return this.http.patch(url, body, options)
            .map(this._mapResponse)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpClient.prototype.head = function (url, options) {
        var _this = this;
        this._notify({ type: 'start' });
        return this.http.head(url, options)
            .map(this._mapResponse)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpClient.prototype._notify = function (data) {
        this.requestNotifier.next(data);
    };
    HttpClient.prototype._mapResponse = function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        var error = new Error(response['_body'] ? response['_body'] : response.statusText);
        error['response'] = response;
        throw error;
    };
    HttpClient = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpClient);
    return HttpClient;
})();
exports.HttpClient = HttpClient;
