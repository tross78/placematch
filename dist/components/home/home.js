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
var angular2_2 = require('angular2/angular2');
var angular2_3 = require("angular2/angular2");
var angular2_4 = require("angular2/angular2");
var router_1 = require('angular2/router');
var HomeCmp = (function () {
    function HomeCmp(fb, location, router) {
        this.distance = {};
        this.searchForm = fb.group({
            homepostcode: ['', this.postcodeValidator],
            age: ['1'],
            church: ['None', angular2_4.Validators.required],
            distance: ['']
        });
        this.location = location;
        this.router = router;
        this.radiogroup_train = "no";
        this.radiogroup_nightlife = "no";
        this.radiogroup_distance = "10";
        this.seek_age_range_list = ["20 and under", "20 to 35", "35 to 50", "50 to 80", "80 plus"];
        this.church_list = ["None", "Anglican", "Baptist", "Catholic", "Uniting"];
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    HomeCmp.prototype.searchSubmit = function (formvalue) {
        var query_list = { "home": formvalue.homepostcode, "&age": formvalue.age, "&nightlife": this.radiogroup_nightlife, "&train": this.radiogroup_train, "&distance": this.radiogroup_distance, "&church": formvalue.church };
        var query_str = "?";
        for (var i in query_list) {
            query_str += i + "=" + query_list[i];
        }
        console.log(query_list);
        this.router.navigateByUrl('/results' + query_str);
    };
    HomeCmp.prototype.postcodeValidator = function (control) {
        var val = "" + control.value;
        if (!val.match(/\d{4}/)) {
            return { invalidpostcode: true };
        }
    };
    HomeCmp.prototype.handleKeyUp = function (event) {
        if (event.target.value.length > 4) {
            event.target.value = event.target.value.slice(0, 4);
        }
    };
    HomeCmp = __decorate([
        angular2_1.Component({
            selector: 'home',
            viewBindings: [angular2_3.FormBuilder]
        }),
        angular2_1.View({
            directives: [angular2_2.NgFor, angular2_3.NgIf, angular2_3.FORM_DIRECTIVES],
            templateUrl: "./components/home/home.html",
            styleUrls: ['./components/home/home.css']
        }), 
        __metadata('design:paramtypes', [angular2_3.FormBuilder, router_1.Location, router_1.Router])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWVDbXAiLCJIb21lQ21wLmNvbnN0cnVjdG9yIiwiSG9tZUNtcC5zZWFyY2hTdWJtaXQiLCJIb21lQ21wLnBvc3Rjb2RlVmFsaWRhdG9yIiwiSG9tZUNtcC5oYW5kbGVLZXlVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCx5QkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6Qyx5QkFBc0csbUJBQW1CLENBQUMsQ0FBQTtBQUMxSCx5QkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3Qyx1QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU5RDtJQXFCRUEsaUJBQVlBLEVBQWNBLEVBQUVBLFFBQWlCQSxFQUFFQSxNQUFhQTtRQUg1REMsYUFBUUEsR0FBUUEsRUFBRUEsQ0FBQ0E7UUFJaEJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO1lBQzFCQSxZQUFZQSxFQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBO1lBQ3pDQSxHQUFHQSxFQUFDQSxDQUFDQSxHQUFHQSxDQUFDQTtZQUNUQSxNQUFNQSxFQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDcENBLFFBQVFBLEVBQUNBLENBQUNBLEVBQUVBLENBQUNBO1NBQ2RBLENBQUNBLENBQUNBO1FBQ0hBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1FBQ3pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxJ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QUdBLDZCQUE2QkE7WUFDMUNBLFNBQVNBLEVBQUVBLENBQUNBLDRCQUE0QkEsQ0FBQ0E7U0FDMUNBLENBQUNBOztnQkFtRERBO0lBQURBLGNBQUNBO0FBQURBLENBM0RBLEFBMkRDQSxJQUFBO0FBakRZLGVBQU8sVUFpRG5CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHsgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBDb250cm9sLCBOZ0lmLCBOZ0Zvcm1Nb2RlbCwgQWJzdHJhY3RDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvYW5ndWxhcjJcIjtcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2FuZ3VsYXIyXCI7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBMb2NhdGlvbiwgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdmlld0JpbmRpbmdzOltGb3JtQnVpbGRlcl1cbn0pXG5AVmlldyh7XG4gIGRpcmVjdGl2ZXM6IFtOZ0ZvciwgTmdJZiwgRk9STV9ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGVVcmwgOiBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jc3MnXVxufSlcbi8vIENvbXBvbmVudCBjb250cm9sbGVyXG5leHBvcnQgY2xhc3MgSG9tZUNtcCB7XG4gIHNlZWtfYWdlX3JhbmdlX2xpc3Q6IEFycmF5PHN0cmluZz47XG4gIGNodXJjaF9saXN0OiBBcnJheTxzdHJpbmc+O1xuICBsb2NhdGlvbjogTG9jYXRpb247XG4gIHJhZGlvZ3JvdXBfdHJhaW46c3RyaW5nO1xuICByYWRpb2dyb3VwX25pZ2h0bGlmZTpzdHJpbmc7XG4gIHJhZGlvZ3JvdXBfZGlzdGFuY2U6c3RyaW5nO1xuICBzZWFyY2hGb3JtOkNvbnRyb2xHcm91cDtcbiAgZGlzdGFuY2U6T2JqZWN0PXt9O1xuICByb3V0ZXI6Um91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKGZiOkZvcm1CdWlsZGVyLCBsb2NhdGlvbjpMb2NhdGlvbiwgcm91dGVyOlJvdXRlcikge1xuICAgICB0aGlzLnNlYXJjaEZvcm0gPSBmYi5ncm91cCh7XG4gICAgICBob21lcG9zdGNvZGU6WycnLCB0aGlzLnBvc3Rjb2RlVmFsaWRhdG9yXSxcbiAgICAgIGFnZTpbJzEnXSxcbiAgICAgIGNodXJjaDpbJ05vbmUnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRpc3RhbmNlOlsnJ11cbiAgICB9KTtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5yYWRpb2dyb3VwX3RyYWluID0gXCJub1wiO1xuICAgIHRoaXMucmFkaW9ncm91cF9uaWdodGxpZmUgPSBcIm5vXCI7XG4gICAgdGhpcy5yYWRpb2dyb3VwX2Rpc3RhbmNlID0gXCIxMFwiO1xuICAgIHRoaXMuc2Vla19hZ2VfcmFuZ2VfbGlzdCA9IFtcIjIwIGFuZCB1bmRlclwiLCBcIjIwIHRvIDM1XCIsIFwiMzUgdG8gNTBcIiwgXCI1MCB0byA4MFwiLCBcIjgwIHBsdXNcIl07XG4gICAgdGhpcy5jaHVyY2hfbGlzdCA9IFtcIk5vbmVcIiwgXCJBbmdsaWNhblwiLCBcIkJhcHRpc3RcIiwgXCJDYXRob2xpY1wiLCBcIlVuaXRpbmdcIl07XG4gICAgKHdpbmRvdy5hZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSk7XG4gICAgKHdpbmRvdy5hZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSk7XG4gIH1cbiAgc2VhcmNoU3VibWl0KGZvcm12YWx1ZTphbnkpIHtcbiAgICBsZXQgcXVlcnlfbGlzdCA9IHtcImhvbWVcIjpmb3JtdmFsdWUuaG9tZXBvc3Rjb2RlLCBcIiZhZ2VcIjpmb3JtdmFsdWUuYWdlLCBcIiZuaWdodGxpZmVcIjp0aGlzLnJhZGlvZ3JvdXBfbmlnaHRsaWZlLCBcIiZ0cmFpblwiOnRoaXMucmFkaW9ncm91cF90cmFpbiwgXCImZGlzdGFuY2VcIjp0aGlzLnJhZGlvZ3JvdXBfZGlzdGFuY2UsIFwiJmNodXJjaFwiOmZvcm12YWx1ZS5jaHVyY2h9O1xuICAgIGxldCBxdWVyeV9zdHIgPSBcIj9cIjtcbiAgICBmb3IgKHZhciBpIGluIHF1ZXJ5X2xpc3QpIHtcbiAgICAgIHF1ZXJ5X3N0cis9aStcIj1cIitxdWVyeV9saXN0W2ldO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhxdWVyeV9saXN0KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvcmVzdWx0cycrcXVlcnlfc3RyKTtcbiAgfVxuICBwb3N0Y29kZVZhbGlkYXRvcihjb250cm9sOmFueSkge1xuICAgIGxldCB2YWwgPSBcIlwiK2NvbnRyb2wudmFsdWU7XG4gICAgaWYgKCF2YWwubWF0Y2goL1xcZHs0fS8pKXtcbiAgICAgIHJldHVybiB7aW52YWxpZHBvc3Rjb2RlOiB0cnVlfTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlS2V5VXAoZXZlbnQ6YW55KSB7XG4gICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS5zbGljZSgwLDQpO1xuICAgICAgfVxuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
