import {Component, View} from 'angular2/angular2';
import { NgFor} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, NgIf, NgFormModel, AbstractControl} from "angular2/angular2";
import {Validators} from "angular2/angular2";
import {RouteParams, Location, Router} from 'angular2/router';

@Component({
  selector: 'home',
  viewBindings:[FormBuilder]
})
@View({
  directives: [NgFor, NgIf, FORM_DIRECTIVES],
	templateUrl : "./components/home/home.html",
  styleUrls: ['./components/home/home.css']
})
// Component controller
export class HomeCmp {
  seek_age_range_list: Array<string>;
  church_list: Array<string>;
  location: Location;
  radiogroup_train:string;
  radiogroup_nightlife:string;
  radiogroup_distance:string;
  searchForm:ControlGroup;
  distance:Object={};
  router:Router;

  constructor(fb:FormBuilder, location:Location, router:Router) {
     this.searchForm = fb.group({
      homepostcode:['', this.postcodeValidator],
      age:['1'],
      church:['None', Validators.required],
      distance:['']
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
  searchSubmit(formvalue:any) {
    let query_list = {"home":formvalue.homepostcode, "&age":formvalue.age, "&nightlife":this.radiogroup_nightlife, "&train":this.radiogroup_train, "&distance":this.radiogroup_distance, "&church":formvalue.church};
    let query_str = "?";
    for (var i in query_list) {
      query_str+=i+"="+query_list[i];
    }
    console.log(query_list);
    this.router.navigateByUrl('/results'+query_str);
  }
  postcodeValidator(control:any) {
    let val = ""+control.value;
    if (!val.match(/\d{4}/)){
      return {invalidpostcode: true};
    }
  }
  handleKeyUp(event:any) {
       if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0,4);
      }
    //console.log(event.target.value);
  }
}
