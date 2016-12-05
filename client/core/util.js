var ObjectUtil = (function () {
    function ObjectUtil() {
    }
    ObjectUtil.nextId = function () {
        return "" + ++ObjectUtil._seq;
    };
    ObjectUtil.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    ObjectUtil.merge = function (dest, src) {
        if (ObjectUtil.isBlank(src)) {
            return dest;
        }
        if (ObjectUtil.isBlank(dest)) {
            return src;
        }
        for (var prop in src) {
            dest[prop] = src[prop];
        }
    };
    ObjectUtil.isPresent = function (data) {
        return !ObjectUtil.isBlank(data);
    };
    ObjectUtil.isBlank = function (data) {
        return data === undefined || data === null;
    };
    ObjectUtil._seq = 0;
    return ObjectUtil;
})();
exports.ObjectUtil = ObjectUtil;
