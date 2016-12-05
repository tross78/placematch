import {Component, View,} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import { NgFor, NgIf} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'results'
})
@View({
  directives: [NgFor],
	templateUrl : "./components/results/results.html"
})
// Component controller
export class ResultsCmp {
  result:Object = {"results":[]};
  spinnerHidden:Boolean = false;
  constructor(http: Http, params: RouteParams) {

    let query_str = "";
    if (params.get('home')) {
      query_str+="home="+params.get('home');
    }
    if (params.get('age')) {
      query_str+="&age="+params.get('age');
    }
    if (params.get('nightlife')) {
      query_str+="&nightlife="+params.get('nightlife');
    }
    if (params.get('train')) {
      query_str+="&train="+params.get('train');
    }
    if (params.get('distance')) {
      query_str+="&distance="+params.get('distance');
    }

    if (params.get('church')) {
      query_str+="&church="+params.get('church');
    }

    http.get('/api/query?'+query_str).map((res: Response) => res.json()).subscribe(
                res => {
                  this.result = res;
                  this.spinnerHidden = true;
                });
  }
  calcCrimeRate(crime_rate_str:any):String {
    let crime_rate_float = parseFloat(crime_rate_str);
    let rate = 'Low';

    if (crime_rate_str == null || crime_rate_str == 0 || crime_rate_str == undefined || isNaN(crime_rate_str) ) {
      return rate;
    }

    let percent:Number = crime_rate_float/100000;

    if (percent > 0.10 && percent < 0.15) {
      rate = 'Low-Medium';
    }
    if (percent > 0.15 && percent < 0.20) {
      rate = 'Medium';
    }
    if (percent > 0.25 && percent < 0.30) {
      rate = 'Medium-High';
    }
    if (percent > 0.30) {
      rate = 'High';
    }
    return rate;
  }
  getWeeklyRent(rent:any):String {
    if (rent) {
      return rent.toFixed(2);
    } else {
      return "";
    }
  }
  getAgeRange(range1:Number, range2:Number, range3:Number, range4:Number, range5:Number) {

    if (range1) {
      return "0 to 20 years - "+range1+"%";
    } else if (range2) {
      return "20 to 35 years - "+range2+"%";
    } else if (range3) {
      return "35 to 50 years - "+range3+"%";
    } else if (range4) {
      return "50 to 80 years - "+range4+"%";
    } else if (range5) {
            return "80+ years - "+range5+"%";
          }
      }
}
