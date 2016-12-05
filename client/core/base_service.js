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
