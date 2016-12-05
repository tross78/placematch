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
