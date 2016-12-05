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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBaUMsbUJBQW1CLENBQUMsQ0FBQTtBQUNyRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFFN0MsNEJBQXlCLG9CQUFvQixDQUFDLENBQUE7QUFDOUMsb0JBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUMsb0JBQVMsQ0FBQyxZQUFNLEVBQUU7SUFDaEIseUJBQWdCO0lBQ2hCLHFCQUFjO0lBQ2Qsd0JBQVU7Q0FDWCxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXAsIHByb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJy4vY29yZS9odHRwX2NsaWVudCc7XG5pbXBvcnQge0FwcENtcH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xuXG5ib290c3RyYXAoQXBwQ21wLCBbXG4gIFJPVVRFUl9QUk9WSURFUlMsXG4gIEhUVFBfUFJPVklERVJTLFxuICBIdHRwQ2xpZW50XG5dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==