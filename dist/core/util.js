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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvdXRpbC50cyJdLCJuYW1lcyI6WyJPYmplY3RVdGlsIiwiT2JqZWN0VXRpbC5jb25zdHJ1Y3RvciIsIk9iamVjdFV0aWwubmV4dElkIiwiT2JqZWN0VXRpbC5jbG9uZSIsIk9iamVjdFV0aWwubWVyZ2UiLCJPYmplY3RVdGlsLmlzUHJlc2VudCIsIk9iamVjdFV0aWwuaXNCbGFuayJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7SUErQkFDLENBQUNBO0lBM0JRRCxpQkFBTUEsR0FBYkE7UUFDRUUsTUFBTUEsQ0FBQ0EsS0FBR0EsRUFBRUEsVUFBVUEsQ0FBQ0EsSUFBTUEsQ0FBQ0E7SUFDaENBLENBQUNBO0lBRUtGLGdCQUFLQSxHQUFaQSxVQUFhQSxJQUFTQTtRQUNyQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRU1ILGdCQUFLQSxHQUFaQSxVQUFhQSxJQUFZQSxFQUFFQSxHQUFXQTtRQUNyQ0ksRUFBRUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2JBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzlCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNaQSxDQUFDQTtRQUNEQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDekJBLENBQUNBO0lBQ0pBLENBQUNBO0lBRU1KLG9CQUFTQSxHQUFoQkEsVUFBaUJBLElBQVNBO1FBQ3pCSyxNQUFNQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFFTUwsa0JBQU9BLEdBQWRBLFVBQWVBLElBQVNBO1FBQ3ZCTSxNQUFNQSxDQUFDQSxJQUFJQSxLQUFLQSxTQUFTQSxJQUFJQSxJQUFJQSxLQUFLQSxJQUFJQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUE1QmVOLGVBQUlBLEdBQUdBLENBQUNBLENBQUNBO0lBNkIxQkEsaUJBQUNBO0FBQURBLENBL0JBLEFBK0JDQSxJQUFBO0FBL0JZLGtCQUFVLGFBK0J0QixDQUFBIiwiZmlsZSI6ImNvcmUvdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPYmplY3RVdGlsIHtcblxuICBwcml2YXRlIHN0YXRpYyBfc2VxID0gMDtcblxuICBzdGF0aWMgbmV4dElkKCkge1xuICAgIHJldHVybiBgJHsrK09iamVjdFV0aWwuX3NlcX1gO1xuICB9XG5cblx0c3RhdGljIGNsb25lKGRhdGE6IGFueSk6IGFueSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHR9XG5cblx0c3RhdGljIG1lcmdlKGRlc3Q6IE9iamVjdCwgc3JjOiBPYmplY3QpIHtcblx0XHRpZiAoT2JqZWN0VXRpbC5pc0JsYW5rKHNyYykpIHtcblx0XHRcdHJldHVybiBkZXN0O1xuXHRcdH1cblx0XHRpZiAoT2JqZWN0VXRpbC5pc0JsYW5rKGRlc3QpKSB7XG5cdFx0XHRyZXR1cm4gc3JjO1xuXHRcdH1cblx0XHRmb3IgKGxldCBwcm9wIGluIHNyYykge1xuICAgICAgZGVzdFtwcm9wXSA9IHNyY1twcm9wXTtcbiAgICB9XG5cdH1cblxuXHRzdGF0aWMgaXNQcmVzZW50KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhT2JqZWN0VXRpbC5pc0JsYW5rKGRhdGEpO1xuXHR9XG5cblx0c3RhdGljIGlzQmxhbmsoZGF0YTogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
