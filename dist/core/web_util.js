var http_1 = require('angular2/http');
var EMAIL_REG = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
exports.OPTS_REQ_JSON = {
    headers: new http_1.Headers({
        'Content-Type': 'application/json'
    })
};
function validateEmail(control) {
    return EMAIL_REG.test(control.value) ? null : { validEmail: true };
}
exports.validateEmail = validateEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvd2ViX3V0aWwudHMiXSwibmFtZXMiOlsidmFsaWRhdGVFbWFpbCJdLCJtYXBwaW5ncyI6IkFBQ0EscUJBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBRXRDLElBQU0sU0FBUyxHQUFHLG9GQUFvRixDQUFDO0FBRzFGLHFCQUFhLEdBQUc7SUFDNUIsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDO1FBQ3BCLGNBQWMsRUFBRSxrQkFBa0I7S0FDbEMsQ0FBQztDQUNGLENBQUM7QUFFRix1QkFBOEIsT0FBZ0I7SUFDMUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLEVBQUNBLFVBQVVBLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBO0FBQ3JFQSxDQUFDQTtBQUZlLHFCQUFhLGdCQUU1QixDQUFBIiwiZmlsZSI6ImNvcmUvd2ViX3V0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmNvbnN0IEVNQUlMX1JFRyA9IC9eKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQvaTtcblxuXG5leHBvcnQgY29uc3QgT1BUU19SRVFfSlNPTiA9IHtcblx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGNvbnRyb2w6IENvbnRyb2wpIHtcbiAgICByZXR1cm4gRU1BSUxfUkVHLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDoge3ZhbGlkRW1haWw6IHRydWV9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
