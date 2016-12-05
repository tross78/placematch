var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var http_client_1 = require('./core/http_client');
var app_1 = require('./components/app/app');
angular2_1.bootstrap(app_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    http_client_1.HttpClient
]);
