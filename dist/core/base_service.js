var web_util_1 = require('./web_util');
var BaseResourceService = (function () {
    function BaseResourceService(http, resourceName) {
        this.http = http;
        this.url = "/api/" + resourceName;
    }
    BaseResourceService.prototype.createOne = function (data) {
        var body = JSON.stringify(data);
        return this.http.post(this.url, body, web_util_1.OPTS_REQ_JSON).map(function (res) { return res.json(); });
    };
    BaseResourceService.prototype.updateOne = function (data) {
        var body = JSON.stringify(data);
        return this.http.put(this.url + "/" + data._id, body, web_util_1.OPTS_REQ_JSON).map(function (res) { return res.json(); });
    };
    BaseResourceService.prototype.removeOneById = function (id) {
        return this.http.delete(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    BaseResourceService.prototype.findOneById = function (id) {
        return this.http.get(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    BaseResourceService.prototype.find = function () {
        return this.http.get(this.url + "/_find").map(function (res) { return res.json(); });
    };
    return BaseResourceService;
})();
exports.BaseResourceService = BaseResourceService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYmFzZV9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkJhc2VSZXNvdXJjZVNlcnZpY2UiLCJCYXNlUmVzb3VyY2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQmFzZVJlc291cmNlU2VydmljZS5jcmVhdGVPbmUiLCJCYXNlUmVzb3VyY2VTZXJ2aWNlLnVwZGF0ZU9uZSIsIkJhc2VSZXNvdXJjZVNlcnZpY2UucmVtb3ZlT25lQnlJZCIsIkJhc2VSZXNvdXJjZVNlcnZpY2UuZmluZE9uZUJ5SWQiLCJCYXNlUmVzb3VyY2VTZXJ2aWNlLmZpbmQiXSwibWFwcGluZ3MiOiJBQUdBLHlCQUE0QixZQUFZLENBQUMsQ0FBQTtBQUl6QztJQUlFQSw2QkFBc0JBLElBQWdCQSxFQUFFQSxZQUFvQkE7UUFBdENDLFNBQUlBLEdBQUpBLElBQUlBLENBQVlBO1FBQ3BDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxVQUFRQSxZQUFjQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFFREQsdUNBQVNBLEdBQVRBLFVBQVVBLElBQU9BO1FBQ2ZFLElBQU1BLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2xDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSx3QkFBYUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBYUEsSUFBS0EsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDMUZBLENBQUNBO0lBRURGLHVDQUFTQSxHQUFUQSxVQUFVQSxJQUFPQTtRQUNmRyxJQUFNQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNsQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsR0FBR0EsU0FBSUEsSUFBSUEsQ0FBQ0EsR0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsd0JBQWFBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLEdBQWFBLElBQUtBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBO0lBQzFHQSxDQUFDQTtJQUVESCwyQ0FBYUEsR0FBYkEsVUFBY0EsRUFBVUE7UUFDdEJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUlBLElBQUlBLENBQUNBLEdBQUdBLFNBQUlBLEVBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLEdBQWFBLElBQUtBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBO0lBQ2xGQSxDQUFDQTtJQUVESix5Q0FBV0EsR0FBWEEsVUFBWUEsRUFBVUE7UUFDcEJLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUlBLElBQUlBLENBQUNBLEdBQUdBLFNBQUlBLEVBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLEdBQWFBLElBQUtBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBO0lBQy9FQSxDQUFDQTtJQUVETCxrQ0FBSUEsR0FBSkE7UUFDRU0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsR0FBR0EsV0FBUUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBYUEsSUFBS0EsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDL0VBLENBQUNBO0lBRUhOLDBCQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQTlCcUIsMkJBQW1CLHNCQThCeEMsQ0FBQSIsImZpbGUiOiJjb3JlL2Jhc2Vfc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7T1BUU19SRVFfSlNPTn0gZnJvbSAnLi93ZWJfdXRpbCc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJy4vaHR0cF9jbGllbnQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVzb3VyY2VTZXJ2aWNlPFQgZXh0ZW5kcyBCYXNlRHRvPiB7XG5cbiAgcHJvdGVjdGVkIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LCByZXNvdXJjZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMudXJsID0gYC9hcGkvJHtyZXNvdXJjZU5hbWV9YDtcbiAgfVxuXG4gIGNyZWF0ZU9uZShkYXRhOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCwgYm9keSwgT1BUU19SRVFfSlNPTikubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgfVxuXG4gIHVwZGF0ZU9uZShkYXRhOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMudXJsfS8ke2RhdGEuX2lkfWAsIGJvZHksIE9QVFNfUkVRX0pTT04pLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICByZW1vdmVPbmVCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnVybH0vJHtpZH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgZmluZE9uZUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS8ke2lkfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBmaW5kKCk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L19maW5kYCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=